// from data.js
var tableData = data;

// YOUR CODE HERE!


// get ref to table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with
// outer for each makes rows
//  inner for each makes cells
tableData.forEach((data) => {
  //console.log(data);
  var row = tbody.append("tr");
  Object.entries(data).forEach(([key, value])=> {
    //console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// set button and output
var searchButton = d3.select("#filter-btn");
var form = d3.select(".form-control");

// create event handlers
searchButton.on("click",runEnter);
form.on("submit",runEnter);

function runEnter(){
    d3.event.preventDefault();

    //get input element , raw html
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    if(inputValue.length == 0){
      //clear out table before loading in data
      tbody.html("");
      // Use d3 to update each cell's text with
      // outer for each makes rows
      //  inner for each makes cells
      tableData.forEach((data) => {
      //console.log(data);
      var row = tbody.append("tr");
     Object.entries(data).forEach(([key, value])=> {
      //console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
      });
      });

    }
    else{
      //clear out table before loading in data
      tbody.html("");
      //filter data
      var filteredData = tableData.filter(date => date.datetime == inputValue);
      console.log(filteredData);

      // Use d3 to update each cell's text with
      // outer for each makes rows
      //  inner for each makes cells
      filteredData.forEach((data) => {
        //console.log(data);
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key, value])=> {
          //console.log(key, value);
          // Append a cell to the row for each value
          // in the weather report object
          var cell = row.append("td");
          cell.text(value);
        });
      });
    }
}





