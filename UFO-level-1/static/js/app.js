//Check JS connection
console.log('Connection ok')

// from data.js
let tableData = data;
//console.log(tableData)

// YOUR CODE HERE!
//Select DOM objects
let tbody = d3.select("tbody");
let button = d3.select("#filter-btn");

//Fill out HTML Table with full data set
tableData.forEach(d=>{
    let row = tbody.append("tr");
    for(x in d){
        row.append("td").text(d[x]);
    }
})

//Create Button Filtering Function
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
    //Fill out HTML Table with filtered data set
    filterData.forEach(d=>{
        let row = tbody.append("tr");
        for(x in d){
            row.append("td").text(d[x]);
        }
    })
})