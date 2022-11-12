// Get the samples.json endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
const file = '../../data/samples.json'


// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  ids(data.names);
});

// (fetch('../../data/samples.json')
//   .then(response => response.json())
//   .then(data => ids(data.names))
//   .catch(error => console.log(error)));

// 
function ids(data) {
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
      let added = document.createElement('option');
      let dataset = document.getElementById('selDataset');
      added.value = data[i];
      added.innerHTML = data[i];
      dataset.append(added);
    };
}
  
// Display the default data
function init() {
  d3.json(url).then(function(data) {
    // demoInfo(data.metadata);
    mainFunction(data.names[0]);
  });
}

  
 function optionChanged(id) {
  mainFunction(id)
 };

 



// function charts(id){
//   console.log(id)
// }


//--------------------------------------------------------------//
// Function to collect the new id and run functions using new id
function mainFunction(id){
  currentId = id

  // Fetch the JSON data using url and run applicable functions                 Uncomment when going live
    d3.json(url).then(function(data) {
    demoInfo(data.metadata, currentId);});
//--------------------------------------------------------------//


  // // Fetch the Json data using samples.json         DELETE WHEN GOING LIVE
  //   fetch('../../data/samples.json')
  //   .then(response => response.json())
  //   .then(data => demoInfo(data.metadata))
  //   .catch(error => console.log(error));

    // demoInfo(data, id);
      // for (let i = 0; i < data.length; i++) {
      //   if (data[i].id == id){

      //     // Set target element for data to be displayed
      //     let dataset = document.getElementById('sample-metadata');

      //     // set relevant data as new variable
      //     let list = data[i];

      //     // Create new Array variable to hold the key and value as string
      //     let keyAndValue = [];

      //     // iterate through newly created object to grab the data and push to new array
      //     for (var key in list) {
      //       let item = (`${key}: ${list[key]}`);
      //       keyAndValue.push(item);};

      //     // set the html to nothing/blank
      //     dataset.innerHTML = "";

      //     // iterate through keyandvalue array adding each item to the html
      //     for (let i = 0; i < keyAndValue.length; i++) {
      //       dataset.insertAdjacentHTML("beforeend", `<strong style="font-size:85%;">${keyAndValue[i]}</strong><br>`)};
      //   };};};
};

//--------------------------------------------------------------//
// Function to add demographic Info
function demoInfo(data, id){
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id){

      // Set target element for data to be displayed
      let dataset = document.getElementById('sample-metadata');

      // set relevant data as new variable
      let list = data[i];

      // Create new Array variable to hold the key and value as string
      let keyAndValue = [];

      // iterate through newly created object to grab the data and push to new array
      for (var key in list) {
        let item = (`${key}: ${list[key]}`);
        keyAndValue.push(item);};

      // set the html to nothing/blank
      dataset.innerHTML = "";

      // iterate through keyandvalue array adding each item to the html
      for (let i = 0; i < keyAndValue.length; i++) {
        dataset.insertAdjacentHTML("beforeend", `<strong style="font-size:85%;">${keyAndValue[i]}</strong><br>`)};
    };};};
//--------------------------------------------------------------//


  // ONE FUNCTION BELOW

  // trigger event to create a variable with the id selected from the dropdown menu
  // function to take in the trigger event variable

  //FIRST Iteration
  // Itterate through the metadata array
  // If conditional using the variable selected in the trigger event to find the relative data and return as results displayed in the Demographic Info panel
  // 

  //SECOND Iteration
  // Iterate through the samples array
  // If Conditional using the vriable selected in he trigger event to find the relative data

  //LOOK AT class 2 09 solution
  // Variable to hold top 10 results
  // using the grabbed data drop data except the top 10 results
  // create bar variables, xValueBar = sample_values, yValuesBar = otu_ids, hoverBar = otu_labels
  // Create tracebar = 


  // using all data
  // create bubble variables, xValueBubble = otu_ids, yValuesBubble = sample_values, markerSizeBubble = sample_values, markercoloursBubble = otu_ids, textValuesBubble = otu_labels
  // Create tracebar = 

  // let traceBar = {
  //   x: xValueBar,
  //   y: yValuesBar,
  //   text: hoverBar,
  //   name: "Top 10 OTUs",
  //   type: "bar",
  //   orientation: "h"
  // };

  // let traceBarData = [traceBar];

  // Plotly.newPlot("bar", traceBarData);

  init();