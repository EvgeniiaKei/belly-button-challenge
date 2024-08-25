// Place url in a constant variable
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json"

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Build the metadata panel
function buildMetadata(sample) {

    // Use D3 to retrieve all of the data
    d3.json(url).then((data) => {

        // get the metadata field
        let metadata = data.metadata;

        // Filter the metadata for the object with the desired sample number
        let value = metadata.filter(result => result.id == sample);

        // Log the array of metadata objects after the have been filtered
        console.log(value)

        // Get the first index from the array
        let valueData = value[0];

        // Use `.html("") to clear any existing metadata
        d3.select("#sample-metadata").html("");

        // Inside a loop, you will need to use d3 to append new
       // tags for each key-value in the filtered metadata.
        Object.entries(valueData).forEach(([key,value]) => {

            // Log the individual key/value pairs as they are being appended to the metadata panel
            console.log(key,value);

            d3.select("#sample-metadata").append("h6").text(`${key}: ${value}`);
        });
    });

};

// function to build both charts
function buildCharts(sample) {
    // Use D3 to retrieve all of the data
    d3.json(url).then((data) => {
        
        // Get the samples field
        let sampleInfo = data.samples;

        // Filter based on the value of the sample
        let value = sampleInfo.filter(result => result.id == sample);

        // Get the first index from the array
        let valueData = value[0];

        // Get the otu_ids, otu_labels, and sample_values
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        // Log the data to the console
        console.log(otu_ids, otu_labels, sample_values);
         
        // Build a Bubble Chart
        // Set up the trace for Bubble chart
        let trace1 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Picnic"
            }
        };

        // Set up the layout
        let layout1 = {
            title: "Bacteria Cultures Per Sample",
            hovermode: "closest",
            xaxis: {title: "OTU ID"},
            yaxis: {title: "Number of Bacteria"},
        };

        // Render the Bubble Chart(call Plotly to plot the Bubble chart)
        Plotly.newPlot("bubble", [trace1], layout1);
    
        // Build a Bar Chart
       
        // Set top ten items to display in descending order
        // Map the otu_ids to a list of strings for yticks
        let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
        let xticks = sample_values.slice(0,10).reverse();
        let labels = otu_labels.slice(0,10).reverse();
        
        // Set up the trace for the Bar chart
        let trace = {
            x: xticks,
            y: yticks,
            text: labels,
            type: "bar",
            orientation: "h"
        };

        // Setup the layout
        let layout = {
            title: "Top 10 Bacteria Cultures Found",
            xaxis: {title: "Number of Bacteria"}
        };

        // Render the Bar Chart(call Plotly to plot the bar chart)
        Plotly.newPlot("bar", [trace], layout)
    });
};

// Initialize the dashboard at start up 
function init() {

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdownMenu = d3.select("#selDataset");

    // Use D3 to get sample names and populate the drop-down selector
    d3.json(url).then((data) => {
        
        // Set a variable for the sample names
        let names = data.names;

        // Add  samples to dropdown menu
        names.forEach((id) => {

            // Log the value of id for each iteration of the loop
            console.log(id);

            dropdownMenu.append("option")
            .text(id)
            .property("value",id);
        });

        // Set the first sample from the list
        let sample_one = names[0];

        // Log the value of sample_one
        console.log(sample_one);

        // Build charts and metadata panel with the first sample
        buildMetadata(sample_one);
        buildCharts(sample_one);
    });
};

// Function that updates dashboard when sample is changed
function optionChanged(newSample) { 

    // Log the new value
    console.log(newSample); 

    // Build charts and metadata panel each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);
};

// Initialise the dashboard
init();