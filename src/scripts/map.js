 
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
                         .range(["#F4A4AB", "#B61624"])
                        .domain([Math.min(...colorData), Math.max(...colorData)])
             d3.select('#legend-cont')
                .append('h4')
                .text(`Positives`)
                .style('margin', '0')
                .attr('id', 'legend-label')
            
            const leftNum = numberWithCommas(Math.min(...colorData))

            d3.select('#legend')
                .append('p')
                .text(`${leftNum}`)
                .attr('id', 'left-number')

   

              d3.select('#legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#F4A4AB')

             d3.select('#legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#EF8089')

            d3.select('#legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#EB5C68')

            d3.select('#legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#E63746')

             d3.select('#legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#DA1B2B')


               d3.select('#legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#B61624')

            const rightNum = numberWithCommas( Math.max(...colorData))
            d3.select('#legend')
                .append('p')
                .text(`${rightNum}`)
                .attr('id', 'right-number')
             
              const map = d3.select("#map")
              

              const tooltip = d3.select('body')
                        .append('div')
                        .style('position' ,'absolute')
                        .style('z-index', 10)
                        .style('visibility', 'hidden')
                        .style('background', ' #0d2f4f')
                        .text('a simple tool tip')
                        .style('color', '#e3e7eb')
                        .style('height', '30px')
                        .style('width', '200px')
                        .style('text-align', 'center')
                        .style('border', '1px solid black')
                        .attr('id', 'tooltip-map')
                        .style('border-radius', '10px')
            d3.select('body')
                    .selectAll('.state-path')
                    .append('div')

            function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
            data = data.map( data => {
                return [data[0], data[1] , numberWithCommas(data[1])]
            })
            data.map( state => {
                const stateId = state[0]
                d3.select(`#${stateId}`)
                    .on('mouseover', (d) =>  { tooltip.text( `${state[0]}:  ${(state[2])} Positives` )
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
            // d3.selectAll('title')
            //     .text('')
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