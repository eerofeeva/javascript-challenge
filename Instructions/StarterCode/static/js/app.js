// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(tableData);

data.forEach(ufoSighted => {
    var row = tbody.append("tr");
  Object.entries(ufoSighted).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    
});
});
