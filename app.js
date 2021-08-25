// import the data from data.js
const tableData = data;

// Using d3.select to command javaScript to look for "tbody" tags in HTML and declaring it into 'tbody' variable

var tbody = d3.select("tbody");

function buildTable(data) {
 tbody.html("");   //clear out existing table data
}

data.forEach((dataRow) => { //loop through each object in the data into "dataRow"
    let row = tbody.append("tr"); // declaring row variable = append the "tr"(table row/value) in tbody
    Object.values(dataRow).forEach((val) => { //loop through each object/field in dataRow into "val"
        let cell = row.append("td"); //declaring cell variable = append the "td"(table data/value) in as a table cell
        cell.text(val); //cell variable as a text, passing in the parameter val(value), that we looped for
    }
    );
});