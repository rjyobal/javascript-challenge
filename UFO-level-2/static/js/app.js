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
//Get unique values
let citiesList = tableData.map(item => item.city).filter((value, index, self) => self.indexOf(value) === index).sort();
//console.log(citiesList);
//Clean Dropdown in Form and fill it out
for(city of citiesList){
    d3.select("#city").append("option").text(city);
}
let statesList = tableData.map(item => item.state).filter((value, index, self) => self.indexOf(value) === index).sort();
//console.log(statesList);
//Clean Dropdown in Form and fill it out
for(state of statesList){
    d3.select("#state").append("option").text(state);
}
let countriesList = tableData.map(item => item.country).filter((value, index, self) => self.indexOf(value) === index).sort();
//console.log(countriesList);
//Clean Dropdown in Form and fill it out
for(state of countriesList){
    d3.select("#country").append("option").text(state);
}
let shapesList = tableData.map(item => item.shape).filter((value, index, self) => self.indexOf(value) === index).sort();
//console.log(shapesList);
//Clean Dropdown in Form and fill it out
for(state of shapesList){
    d3.select("#shape").append("option").text(state);
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
    console.log(`City input: ${inputCity}`);
    //Create the fiterData Array
    let filterData = tableData
    if(inputValDate.length > 0){
        console.log('Date filter applied')
        filterData = filterData.filter(x=>x.datetime===inputValDate);
    }
    if (inputCity != 'All'){
        console.log('City filter applied')
        filterData = filterData.filter(x=>x.city===inputCity);
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