//Check JS connection
console.log('Connection ok');

// from data.js
let tableData = data;
//console.log(tableData)

// YOUR CODE HERE!
//Select DOM objects
let tbody = d3.select("tbody");
let button = d3.select("#filter-btn");
let clearBtn = d3.select("#clear-btn");
let recordCnt = d3.select("#record-count");

/**
 * Show All Dataset Results - Fill outs the html table iwht full dataset
 */
function showAllResults(){
    tableData.forEach(d=>{
        let row = tbody.append("tr");
        for(x in d){
            row.append("td").text(d[x]);
        }
    })
    recordCnt.text(`Records found: ${tableData.length}`);
}

//Call function to show all results
showAllResults();

//Fill out drop downs
//Get unique values
let citiesList = tableData.map(item => item.city).filter((value, index, self) => self.indexOf(value) === index).sort();
//console.log(citiesList);
//Fill out dropdown
for(city of citiesList){
    d3.select("#city").append("option").text(city);
}
let statesList = tableData.map(item => item.state).filter((value, index, self) => self.indexOf(value) === index).sort();
//console.log(statesList);
//Fill out dropdown
for(state of statesList){
    d3.select("#state").append("option").text(state);
}
let countriesList = tableData.map(item => item.country).filter((value, index, self) => self.indexOf(value) === index).sort();
//console.log(countriesList);
//Fill out dropdown
for(state of countriesList){
    d3.select("#country").append("option").text(state);
}
let shapesList = tableData.map(item => item.shape).filter((value, index, self) => self.indexOf(value) === index).sort();
//console.log(shapesList);
//Fill out dropdown
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
    //Get State
    let inputState = d3.select("#state").property("value");
    console.log(`State input: ${inputState}`);
    //Get Country
    let inputCountry = d3.select("#country").property("value");
    console.log(`Country input: ${inputCountry}`);
    //Get Shape
    let inputShape = d3.select("#shape").property("value");
    console.log(`Shape input: ${inputShape}`);
    //Create filterData default array
    let filterData = tableData
    //Look for filters selected and apply to array
    if(inputValDate.length > 0){
        console.log('Date filter applied')
        filterData = filterData.filter(x=>x.datetime===inputValDate);
    }
    if (inputCity != 'All'){
        console.log('City filter applied')
        filterData = filterData.filter(x=>x.city===inputCity);
    }
    if (inputState != 'All'){
        console.log('State filter applied')
        filterData = filterData.filter(x=>x.state===inputState);
    }
    if (inputCountry != 'All'){
        console.log('Country filter applied')
        filterData = filterData.filter(x=>x.country===inputCountry);
    }
    if (inputShape != 'All'){
        console.log('Shape filter applied')
        filterData = filterData.filter(x=>x.shape===inputShape);
    }
    console.log(filterData);
    //Fill out HTML Table with filtered data set
    filterData.forEach(d=>{
        let row = tbody.append("tr");
        for(x in d){
            row.append("td").text(d[x]);
        }
    })
    //Count Records found
    recordCnt.text(`Records found: ${filterData.length}`);
})

//Clear button
clearBtn.on("click", function(){
    //Clean the table
    tbody.html("");
    //Call function to show all results
    showAllResults();
})