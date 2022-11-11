// Get the samples.json endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// create a variable to hold the ids array

// Fetch the JSON data and console log it
// d3.json(url).then(function(data) {
//   ids = data;
//   // console.log(data.names);
// });


(fetch('../../data/samples.json')
  .then(response => response.json())
  .then(data => ids(data.names))
  .catch(error => console.log(error)));



function ids(data) {
  console.log(data);
}


// console.log(`The ids are ${ids}`);

  // Display the ids in the dropdown menu as selectable options


  // ONE FUNCTION BELOW
  
 function optionChanged(id) {
  alert(`The selected ID is ${id}`);
 }
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