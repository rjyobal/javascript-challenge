console.log('Starting...')

// from data.js
let tableData = data;
//console.log(tableData)

// YOUR CODE HERE!
let tbody = d3.select("tbody");
let button = d3.select("#filter-btn");

button.on("click", function(){

    //Clean the table
    tbody.html("");
    //Get input values
    //Get Date Time
    let inputValDate = d3.select("#datetime").property("value");
    console.log(inputValDate)
    //Create the fiterData Array
    let filterData = tableData.filter(x=>x.datetime===inputValDate);
    console.log(filterData)
    //Fill out the HTML Table
    filterData.forEach(d=>{
        let row = tbody.append("tr");
        for(x in d){
            row.append("td").text(d[x]);
        }
    })

})