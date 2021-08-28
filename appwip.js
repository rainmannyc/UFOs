// import the data from data.js
const tableData = data;

// Using d3.select to command javaScript to look for "tbody" tags in HTML and declaring it into 'tbody' variable

var tbody = d3.select("tbody");

function buildTable(data) {
 tbody.html("");   //clear out existing table data
};

data.forEach((dataRow) => { //loop through each object in the data into "dataRow"
    let row = tbody.append("tr"); // declaring row variable = append the "tr"(table row/value) in tbody
    Object.values(dataRow).forEach((val) => { //loop through each object/field in dataRow into "val"
        let cell = row.append("td"); //declaring cell variable = append the "td"(table data/value) in as a table cell
        cell.text(val); //cell variable as a text, passing in the parameter val(value), that we looped for
    }
    );
});

function handleClick(){
    let date = d3.select("#datetime").property("value"); // Grab the datetime value from the filter / date = using d3 to look and select datetime that we'll put in our html and property("value") command for storing into "date" variable
    let filteredData = tableData; // setting filteredData var as the clean tableData we used originally
    
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) { // if date is passed through, use filter() on filteredData (passing in 'row'/"with 'row' ", row.datetime strictly equals date     
        filteredData = filteredData.filter(row => row.datetime === date); 
    };       // "*Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value"
    buildTable(filteredData); // Rebuild the table using the filtered data / buildtable function with filteredData passing in the parameters
 };

 // d3 select all function: listen to all from "filter-btn" , and '.on', "click", run function handleClick, passed through the parameters
 d3.selectALL("#filter-btn").on("click", "handleClick")

 // build the table a
 buildTable(tableData);