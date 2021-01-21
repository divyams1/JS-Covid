# Covid-19 Data Visualizer 
### COVID-19 is a disease that has impacted the way we have lived this past year, and has imapcted billions of people. This project is a way to visualize and sort through the abundance of data that there is about COVID-19 in the United States.


### Architecture and Technologies 
    ## This project was built using 
        * D3.js 
        * Webpack 
        * COVID-19 Project API 
        * US Census Bureau API 

## Key Features: 
    * View National COVID-19 Data on an interactive map
    * View a states specific data around poverty risk factors such as race, or insurance coverage, or age.

## Link to Live Site: 

## Development Insights: 
   # One of the most challenging pieces of the project was creating a tooltip that would display a specific state's information when a user would hover over the specific state on the map. One considered method was giving each state item on the map a container that would be hidden by default and would appear on hover; however, this would require creating an extra 51 containers that would need to be refreshed when a new metric was displayed on the map. To get around this, I created a single container that was hidden by default and would have its top and left property change depending on the location of the mouse so that the tooltip would appear on near location where the mouse hovered. Using the ID's of the the states on the map allowed me to fetch the state's data and render it appropriately using only one container. 
```JavaScript
  const tooltip = d3.select('body')
                        .append('div')
                        .style('position' ,'absolute')
                        .style('z-index', 10)
                        .style('visibility', 'hidden')
                        .style('background', '#1B998B')
                        .text('a simple tool tip')
                        .style('color', '#D6D6D6')
                        .style('height', '30px')
                        .style('width', '200px')
                        .style('text-align', 'center')
                        .style('border', '1px solid black')
                        .attr('id', 'tooltip-map')
                        .style('border-radius', '10px')
```
```JavaScript
 d3.select(`#${stateId}`)
                    .on('mouseover', (d) =>  { tooltip.text( `${state[0]}:  ${state[1]} Positives` )
                         tooltip.style('visibility', 'visible')})
                    .on('mousemove', (e) => { 
                        return tooltip.style('top', (e.pageY  -10)+'px').style('left', (e.pageX+10)+'px')})
```
   #
    