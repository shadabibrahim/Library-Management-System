let details = [];
function bookIssued() {
    var count = 0;
    let bookName = document.getElementById('bookName').value;
    let issuedTo = document.getElementById('issuedTo').value;
    let obj = {
        id: Math.floor(Math.random() * 1000),
        bookName: bookName,
        issuedTo: issuedTo,
        issued_time: new Date(),
        status: "Not Returned"
    }
    details.push(obj);
    display_table(details);
}
function display_table(details) {
    console.log(details);
    let table = "<table><tr><th>ID</th><th>Book Name</th><th>Issued To</th> <th>Issued Date Time</th><th>Status</th></tr></table>"
    details.forEach((element, index) => {
        table += 
        "<tr><td>"
            + index++ + 
            "</td><td>"
            + element.bookName +
            "</td><td>"
            + element.issuedTo +
            "</td><td>"
            + element.issued_time +
            "</td><td>"
            + element.status +
            "</td></tr>"
    });
    table += "</table>"
    document.getElementById('table_content').innerHTML = table;
    console.log(table);
}

// function display_table(details) {
//     let table =
//       "<table><tr><th>ID</th><th>Book Name</th><th>Issued To</th><th>Issued Date Time</th><th>Status</th></tr>";
//     details.forEach((element,index) => {
//       table +=
//         "<tr><td>" +
//         index +
//         "</td><td>" +
//         element.bookName +
//         "</td><td><button class='deleteBtn' onclick=\"delIncome('" +
//         element.issuedTo +
//         "')\">Delete</button></td><td><button class='editIncome' onclick=\"editIncome('" +
//         element.status +
//         "')\">Edit</button></td>";
//     });
//     table += "</table>";
//     document.getElementById("table_content").innerHTML = table;
//   }
