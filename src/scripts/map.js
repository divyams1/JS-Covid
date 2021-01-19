 
var d3 = require("d3")
import { chart} from './chart.js';
import { stateDropdown, dropdownHeatMap, timeDropdown } from './dropdown'



const map = () => {
    
    
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(abbr, pop) {
     
        if (this.readyState == 4 && this.status == 200) {
           
             
             const stateInfo = Object.values( JSON.parse(this.response) ) 
             
              let data = stateInfo.map( state  => {
                            return [  state["state"] ,  state["positive"] ]      
                        })
             let colorData = stateInfo.map( state  => {
                  return  (state["positive"])          
            })
            
              data.splice(3,1)
              data.splice(11,1)
              data.splice(25,1)
              data.splice(47,1)
              data.splice(39,1)
        
            colorData.splice(3,1)
            colorData.splice(11,1)
            colorData.splice(25,1)
            colorData.splice(47,1)
            colorData.splice(39,1)
            dropdownHeatMap(stateInfo)
            stateDropdown(data);
            
             const myColor = d3.scaleLinear()
                         .range(["#F08080", "#8B0000"])
                        .domain([Math.min(...colorData), Math.max(...colorData)])
             d3.select('#legend-cont')
                .append('h2')
                .text(`Positives`)
                .style('margin', '0')
                .attr('id', 'legend-label')

            d3.select('#legend')
                .append('p')
                .text(`${Math.min(...colorData)}`)
                .attr('id', 'left-number')

   

              d3.select('#legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#F08080')

             d3.select('#legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#db6868')

            d3.select('#legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#c95151')

            d3.select('#legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#b43636')

             d3.select('#legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#a52222')


               d3.select('#legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#8B0000')

            
            d3.select('#legend')
                .append('p')
                .text(`${Math.max(...colorData)}`)
                .attr('id', 'right-number')
             
              const map = d3.select("#map")
              

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
            d3.select('body')
                    .selectAll('.state-path')
                    .append('div')

            

            data.map( state => {
                const stateId = state[0]
                d3.select(`#${stateId}`)
                    .on('mouseover', (d) =>  { tooltip.text( `${state[0]}:  ${state[1]} Positives` )
                         tooltip.style('visibility', 'visible')})
                    .on('mousemove', (e) => { 
                        return tooltip.style('top', (e.pageY  -10)+'px').style('left', (e.pageX+10)+'px')})
                    .on('mouseout', () => {return tooltip.style('visibility', 'hidden') })
                    .on('click' , (e) => {
                        const stateName= e.currentTarget.id 
                        chart(stateName)
                        timeDropdown(stateName)
                    })
                    .style('fill', function(d) { return myColor(state[1])})
            })
            d3.selectAll('title')
                .text('')
           
         

            

            
           
          

    }
}
   xhttp.open("GET", ' https://api.covidtracking.com/v1/states/current.json', true);
   xhttp.send();
    

}
export default map;







//  colorData = colorData.sort()
//             const range = colorData[50] - colorData[0]
//             const colorTicks = [ range*0, range*(1/6), range*(2/6), range*(3/6), range*(4/6), range*(5/6), range*(6/6)]
//             const colors = ['#F08080', '#CD5C5C','#DC143C', '#B22222', '#FF0000', '#8B0000'];
            
//             const legend = d3.select('svg')
//                 .append('div')
//                 .attr('id', 'legend')
            
//             colors.map( color => {
//                 d3.select('#legend')
//                     .append('rect')
//                     .style('width', 50)
//                     .style('height', 25)
//                     .style('fill', color)
//             })