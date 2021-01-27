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
JS-COVID: ![alt-text](https://divyams1.github.io/JS-Covid/)

## Key Features
![alt-text](https://im3.ezgif.com/tmp/ezgif-3-39a05fc451d0.gif)
   In order to make an interactive tooltip for the map. An initial div was created that was not visible and as a user hovered over a specific state on the map, the div would appear near the mouse position, and would have the visbility applied. The map element also contained the state ID and was used in order to find the specific data for the state so that the correct data is displayed and only one div is used rather than having each state contain its own div for the tooltip.
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

![alt-text](https://im3.ezgif.com/tmp/ezgif-3-2a0cce6c5692.mp4) 
   In addition to the hover effects on the map, the metrics are able to be changed via dropdown. The dropdown has an on change listener which will capture the new value, and parse the COVID data. A new legend and color scale will be made based on the new data and the D3 function. The map is rendered and each state is given the appropriate color based off the value the metric has.
   
   ```JavaScript 
     d3.select("#select-heat").on("change", d => {
                            const metric = labelsFirst[d.target.value];
                            let newData = states.map( state => {
                                
                                return ( [state["state"], state[d.target.value] ])
                            })
                           const colorData = newData.map( state => {
                               return state[1]
                           })
     const newColor = d3.scaleLinear()
                                    .range(["#F08080", "#8B0000"])
                                    .domain([0, Math.max(...colorData)])
       newData.map ( state => {
                                
                                const stateId = state[0]
                                d3.select(`#${stateId}`)
                                      .on('mouseover', (d) =>  { tooltip.text( `${state[0]}:  ${state[2]} ${metric}` )
                                        tooltip.style('visibility', 'visible')}).style('text-align', 'center')
                                    .on('mousemove', (e) => { 
                                        return tooltip.style('top', (e.pageY  -10)+'px').style('left', (e.pageX+10)+'px')})
                                    .on('mouseout', () => {return tooltip.style('visibility', 'hidden') })
                                    .on('click' , (e) => {
                                        const stateName= e.currentTarget.id 
                                        chart(stateName)
                            })
                                    .style('fill', function(d) { return newColor(state[1])})
                            })
   
   ```
    
