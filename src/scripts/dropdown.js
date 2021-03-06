import {chart} from './chart';
import moment from 'moment'
import { timeFormatLocale } from 'd3';

export const dropdownHeatMap = (data) => {
    d3.select("#dropdown-1")
        .append('select')
        .text('Positive')
        .attr('value', 'positive')
        .attr('id', 'select-heat')

    
    const states = Object.values(data)
     states.splice(3,1)
     states.splice(11,1)
     states.splice(25,1)
     states.splice(47,1)
     states.splice(39,1)

     let heatKeys = [];
     const allKeys = Object.keys(states[0])
      const numberWithCommas = (x) =>  {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
     }
     heatKeys = [ ['positive', 'Positive'], ['negative', 'Negative'], ['hospitalizedCurrently' , 'Hospitalized Currently'] , ['hospitalizedCumulative', 'Cumulative Hospitalizations'] , ['death' , 'Deaths'] ]
     const labelsFirst = { 'positive': 'Positive', 'negative': 'Negative', 'hospitalizedCurrently' : 'Hospitalized Currently' , 'hospitalizedCumulative': 'Total Hospitalizations' , 'death' : 'Deaths'} 
    d3.select("#select-heat")
                            .selectAll('myOptions')
                            .data(heatKeys)
                            .enter()
                            .append('option')
                            .text( (d) => { return d[1] } )
                            .attr("value", (d) => { return d[0]})
    d3.select("#select-heat").on("change", d => {
                            const metric = labelsFirst[d.target.value];
                            let newData = states.map( state => {
                                
                                return ( [state["state"], state[d.target.value] ])
                            })
                           const colorData = newData.map( state => {
                               return state[1]
                           })
                            d3.select('#tooltip-map').remove();
                             const tooltip = d3.select('body')
                                .append('div')
                                .style('position' ,'absolute')
                                .style('z-index', 10)
                                .style('visibility', 'hidden')
                                .style('background', '#4FC2B4')
                                .text('a simple tool tip')
                                .style('color', ' #F7EDE2')
                                .style('height', '30px')
                                .style('border', '1px solid black')
                                .attr('id', 'tooltip-map')
                                .style('width', '250px')
                                .style('text-align', 'center')
                                .style('border-radius', '10px')
                            const newColor = d3.scaleLinear()
                                    .range(["#F08080", "#8B0000"])
                                    .domain([0, Math.max(...colorData)])
                           
                            newData = newData.map( data => {
                                const commaNum = ( typeof(data[1]) === 'number'? numberWithCommas(data[1]) : data[1] ) 
                                return [data[0], data[1], commaNum]
                            })
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

            const labels = { 'positive': 'Positive', 'negative': 'Negative', 'hospitalizedCurrently' : 'Hospitalized Currently' , 'hospitalizedCumulative': 'Cumulative Hospitalizations' , 'death' : 'Deaths'} 
            const legendLabel = labels[d.target.value]; 
            d3.select('#legend-label')
                        .text(`${legendLabel}`)
            const leftNum = numberWithCommas(Math.min(...colorData))
            d3.select('#legend')
                    .append('div')
                    .attr('id', 'heat-legend')
            d3.select('#left-number')
                .text(`${leftNum}`)


              d3.select('#heat-legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#F08080')

             d3.select('#heat-legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#db6868')

            d3.select('#heat-legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#c95151')

            d3.select('#heat-legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#b43636')

             d3.select('#heat-legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#a52222')


               d3.select('#heat-legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#8B0000')

            const rightNum = numberWithCommas( Math.max(...colorData))
            d3.select('#right-number')
                .text(`${rightNum}`)


                        })
                    
}

export const stateDropdown = (data) => {
            
             d3.select("#dropdown-2")
                            .append('select')
                            .text("All")
                            .attr("value", "All")
                            .attr('id', 'select-state')
                        d3.select('#select-state')
                            .append('option')
                            .text( 'None')
                            .attr('value', 'none')

                        d3.select("#select-state")
                            .selectAll('myOptions')
                            .data(data)
                            .enter()
                            .append('option')
                            .text( (d) => { return d[0] } )
                            .attr("value", (d) => { return d[0]})

                        d3.select("#select-state").on("change", d => {
                            
                            const selectedGroup = d.target.value 
                            chart(selectedGroup)
                        })
}

// export const dataDropdown = (data, stateName) => {
//     d3.select('#data')
//         .remove()
//     d3.select('#dropdown-3')
//         .remove()
//     d3.select('#data-dropdown-div')
//              .append('h1')
//              .text(stateName )
//              .attr('id', 'data')
//     d3.select('#data-dropdown-div')
//         .append('p')
//         .text('View Data by Category:')
//         .attr('id', 'dropdown-3')
// }