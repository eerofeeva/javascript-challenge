var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var input = d3.select("#datetime");
renderTable();

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);

// This function is triggered when the button is clicked
function handleClick() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var dateElement = d3.select("#datetime");
    // Get the value property of the input element
    var dateInputValue = dateElement.property("value");
    tbody.selectAll('tr').remove();
    tbody.selectAll('td').remove();
    
    if(dateInputValue)
    {
        filteredData = tableData.filter(ufoSighted => ufoSighted.datetime === dateInputValue);
        filteredData.forEach(ufoSighted => {
            var row = tbody.append("tr");
        Object.entries(ufoSighted).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });
    }
    else
    {
        renderTable();
    }
}

function renderTable() {
    tableData.forEach(ufoSighted => {
    var row = tbody.append("tr");
    Object.entries(ufoSighted).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
}
