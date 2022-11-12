// Get the samples.json endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
const file = '../../data/samples.json'


// (fetch('../../data/samples.json')
//   .then(response => response.json())
//   .then(data => ids(data.names))
//   .catch(error => console.log(error)));

//-----------------------------Function to populate the initial page---------------------------------//

function init() {
  d3.json(url).then(function(data) {
    demoInfo(data.metadata, data.names[0]);
    ids(data.names);
    addBarChart(data.samples, data.names[0]);
  });
}
//--------------------------------------------------------------//

//------------------------------Function to add Bar Chart--------------------------------//

function addBarChart(data, id) {
  
  // Initialize empty arrays 
  let sample_value = [];
  let otu_id = [];
  let otu_label = [];
  let sampleObjects = [];

  // Looping through data to find the id that matches
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id){

      // store id's data in dedicated arrays
      sample_value  = data[i].sample_values;
      otu_id = data[i].otu_ids;
      otu_label = data[i].otu_labels;

      // Loop through the arrays and create objects for each iteration
      for (let j = 0; j < sample_value.length; j++) {
        sampleObjects[j] = {sample_values: sample_value[j], otu_ids: `OTU ${otu_id[j]}`, otu_labels: otu_label[j]};
      }
    };
  };

// Sort the data by sample_values descending
let sortedBysampleObjects = sampleObjects.sort((a, b) => 
b.sample_values - a.sample_values);

// Slice the first 10 objects for plotting
let slicedData = sortedBysampleObjects.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
let reversedData = slicedData.reverse();

// Trace1 for the Sample Data
let traceBar = {
    x: reversedData.map(object => object.sample_values),
    y: reversedData.map(object => object.otu_ids),
    text: reversedData.map(object => object.otu_labels),
    name: "Top 10 OTUs",
    type: "bar",
    orientation: "h",
  };


let traceBarData = [traceBar];

// Apply a title to the layout
let layout = {
  title: `Top 10 OTUs Found in Individuals`,
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

Plotly.newPlot("bar", traceBarData, layout);
}
//--------------------------------------------------------------//

//-----------------------------Function to populate the option list of Id's---------------------------------//

function ids(data) {
    for (let i = 0; i < data.length; i++) {
      let added = document.createElement('option');
      let dataset = document.getElementById('selDataset');
      added.value = data[i];
      added.innerHTML = data[i];
      dataset.append(added);
    };
}
//--------------------------------------------------------------//

//-----------------------------Function to be run when id has been changed---------------------------------//
  
 function optionChanged(id) {
  mainFunction(id);
 };
//--------------------------------------------------------------//
 


//-----------------------------Function to collect the new id and run functions using new id---------------------------------//

function mainFunction(id){
  let currentId = id

  // Fetch the JSON data using url and run applicable functions                 Uncomment when going live
    d3.json(url).then(function(data) {
    demoInfo(data.metadata, currentId);
    updateBarChart(data.samples, currentId);});
};
//--------------------------------------------------------------//


  // // Fetch the Json data using samples.json         DELETE WHEN GOING LIVE
  //   fetch('../../data/samples.json')
  //   .then(response => response.json())
  //   .then(data => demoInfo(data.metadata))
  //   .catch(error => console.log(error));


//-----------------------------Function to add demographic Info---------------------------------//

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



//------------------------------Function to update Bar Chart--------------------------------//

function updateBarChart(data, id) {

  // Initialize empty arrays 
  let sample_value = [];
  let otu_id = [];
  let otu_label = [];
  let sampleObjects = [];

  // Looping through data to find the id that matches
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id){

      // store id's data in dedicated arrays
      sample_value  = data[i].sample_values;
      otu_id = data[i].otu_ids;
      otu_label = data[i].otu_labels;

      // Loop through the arrays and create objects for each iteration
      for (let j = 0; j < sample_value.length; j++) {
        sampleObjects[j] = {sample_values: sample_value[j], otu_ids: `OTU ${otu_id[j]}`, otu_labels: otu_label[j]};
      }
    };
  };

// Sort the data by sample_values descending
let sortedBysampleObjects = sampleObjects.sort((a, b) => 
b.sample_values - a.sample_values);

// Slice the first 10 objects for plotting
let slicedData = sortedBysampleObjects.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
let reversedData = slicedData.reverse();

// Add values to variables to be used in restyling
let x = reversedData.map(object => object.sample_values);
let y = reversedData.map(object => object.otu_ids);
let text = reversedData.map(object => object.otu_labels);

// Update/resyle bar chart with new data
Plotly.restyle("bar", 'x', [x]);
Plotly.restyle("bar", 'y', [y]);
Plotly.restyle("bar", 'text', [text]);
}
//--------------------------------------------------------------//


//---------------------------------Function to add/update Bubble Chart-----------------------------//


  // using all data
  // create bubble variables, xValueBubble = otu_ids, yValuesBubble = sample_values, markerSizeBubble = sample_values, markercoloursBubble = otu_ids, textValuesBubble = otu_labels
  // Create tracebar = 
//--------------------------------------------------------------//




  init();