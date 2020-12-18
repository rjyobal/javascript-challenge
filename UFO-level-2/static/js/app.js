//Check JS connection
console.log('Connection ok');

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

//Fill out drop downs
//Get unique values function
let citiesList = tableData.map(item => item.city).filter((value, index, self) => self.indexOf(value) === index);
//console.log(citiesList);
//Clean Dropdown in Form and fill it out
d3.select("#city").html("");
for(city of citiesList){
    d3.select("#city").append("option").text(city);
}

//Create Button Filtering Function
button.on("click", function(){
    //Clean the table
    tbody.html("");
    //Get input values
    //Get Date Time
    let inputValDate = d3.select("#datetime").property("value");
    console.log(`Date input: ${inputValDate.length}`);
    //Get City
    let inputCity = d3.select("#city").property("value");
    //Create the fiterData Array
    if(inputValDate.length > 0){
        console.log('Date filter applied')
        filterData = tableData.filter(x=>x.datetime===inputValDate && x.city===inputCity);
    }else{
        console.log('City filter applied')
        filterData = tableData.filter(x=>x.city===inputCity);
    }
    console.log(filterData);
    //Fill out HTML Table with filtered data set
    filterData.forEach(d=>{
        let row = tbody.append("tr");
        for(x in d){
            row.append("td").text(d[x]);
        }
    })
})