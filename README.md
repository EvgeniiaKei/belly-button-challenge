# belly-button-challenge
  Module 14

   Explore the amazing diversity of cultured bacteria from some of participants’ belly buttons!
<img width="493" alt="image" src="https://github.com/user-attachments/assets/f3046b14-6b6e-411f-8592-0c4dde1aa3ec">




# Background
In this assignment, you will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](https://robdunnlab.com/projects/belly-button-biodiversity/), which catalogues the microbes that colonise human navels.
The belly button is one of the habitats closest to us, and yet it remains relatively unexplored. In January 2011, we launched Belly Button Biodiversity to investigate the microbes inhabiting our navels and the factors that might influence the microscopic life calling this protected, moist patch of skin home. In addition to inspiring scientific curiosity, Belly Button Biodiversity inspired conversations about the beneficial roles microbes play in our daily lives.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.
This homework is to practice what we learned about using tools like d3.js, HTML, plot.ly, and using a .json file to build and create a dashboard interactively.

# Tools Used
  - d3.js
  - plot.ly
  - HTML
# Assignment Steps
 1. Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dla-1-2/m14/lms/starter/samples.json.
 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
     - Use #sample_values as the values for the bar chart.
     - Use #otu_ids as the labels for the bar chart.
     - Use #otu_labels as the hovertext for the chart.
   
                // Build a Bar Chart
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
   
    ![newplot](https://github.com/user-attachments/assets/9a6b2258-e3ea-445a-98bb-52dab883d395)

3. Create a bubble chart that displays each sample.
    - Use otu_ids for the x values.
    - Use sample_values for the y values.
    - Use sample_values for the marker size.
    - Use otu_ids for the marker colors.
    - Use otu_labels for the text values.
      
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
   
  
   ![newplot (1)](https://github.com/user-attachments/assets/f8684cac-2872-4101-b6bf-23e4c9b8e2f1)

4. Metadata and Deployment
    - Metadata initialises without error.
    - Metadata updates when a new sample is selected.
    - App Successfully Deployed to Github Pages.
  
   <img width="435" alt="image" src="https://github.com/user-attachments/assets/46da82e8-7ec4-4fe1-b983-a31c46573541">


  
   
