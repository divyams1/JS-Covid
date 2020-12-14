 
var d3 = require("d3")
import { chart} from './chart';
import { stateDropdown, dropdownHeatMap, timeDropdown } from './dropdown'



const map = () => {
    
    
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(abbr, pop) {
     
        if (this.readyState == 4 && this.status == 200) {
           
             
             const stateInfo = Object.values( JSON.parse(this.response) ) 
              let data = stateInfo.map( state  => {
                            return [  state["state"] ,  state["total"], (state["deathConfirmed"]/state["positive"]) ]      
                        })
             let colorData = stateInfo.map( state  => {
                  return  (state["death"]/state["positive"])          
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

             const legend = d3.select('body')
                            .append('div')
                            .attr('id', "legend")
            
             
              const map = d3.select("#map")
              

              const tooltip = d3.select('body')
                        .append('div')
                        .style('position' ,'absolute')
                        .style('z-index', 10)
                        .style('visibility', 'hidden')
                        .style('background', '#228B22')
                        .text('a simple tool tip')
                        .style('color', 'white')
                        .style('height', '30px')
                        .style('border', '1px solid black')
            d3.select('body')
                    .selectAll('.state-path')
                    .append('div')



            data.map( state => {
                const stateId = state[0]
                d3.select(`#${stateId}`)
                    .on('mouseover', (d) =>  { tooltip.text( `${state[0]}:  ${state[1]} cases` )
                         tooltip.style('visibility', 'visible')})
                    .on('mousemove', (e) => { 
                        return tooltip.style('top', (e.pageY  -10)+'px').style('left', (e.pageX+10)+'px')})
                    .on('mouseout', () => {return tooltip.style('visibility', 'hidden') })
                    .on('click' , (e) => {
                        const stateName= e.currentTarget.id 
                        chart(stateName)
                        timeDropdown(stateName)
                    })
                    .style('fill', function(d) { return myColor(state[2])})
            })
            d3.selectAll('title')
                .text('')
     
            // const xScale = d3.scaleBand()
            //     .domain([0,1])
            //     .range([0,width]);

            // const yScale = d3.scaleLinear()
            //     .domain(domain)
            //     .range(height, 0)
           
          

    }
}
   xhttp.open("GET", ' https://api.covidtracking.com/v1/states/current.json', true);
   xhttp.send();
    

}
export default map;









    //    const legendHeight = 500
    //         const legendWidth = 500
    //         const x1 = 200 
    //         const barWidth = 300
    //         const y1 = 150
    //         const barHeight = 100
    //         const numberHues = 35 

    //         const idGradient = "legendGradient"
    //        const svgForLegend = d3.select('#theBar').append("svg")
    //         .attr('width', legendWidth)
    //         .attr('height', legendHeight)

    //         svgForLegend.append('g')
    //             .append('defs')
    //             .append('linearGradient')
    //                 .attr('id', idGradient)
    //                 .attr('x1', '0%')
    //                 .attr('x2', '100%')
    //                 .attr('y1', '0%')
    //                 .attr('y2', '0%')

    //     svgForLegend.append('rect')
    //         .attr('fill', `url(#${idGradient})`)
    //         .attr('x', x1)
    //         .attr('y', y1)
    //         .attr('width', legendWidth)
    //         .attr('height', legendHeight)
    //         .attr('rx', 20)
    //         .attr('ry', 20)
    //     const textY = y1 + barHeight/2 + 15;
    //     svgForLegend.append('text')
    //         .attr('class', 'legendText')
    //         .attr('text-anchor', 'middle')
    //         .attr('x', x1-25)
    //         .attr('y', textY)
    //         .attr('dy', 0)
    //         .text(0)

    // svgForLegend.append('text')
    //         .attr("class","legendText")
    //         .attr("text-anchor", "left")
    //         .attr("x",x1 + barWidth + 15)
    //         .attr("y",textY)
    //         .attr("dy",0)
    //         .text(numberHues + "+");
        
    // const hueStart = 160
    // const hueEnd = 0

    // const opacityStart = 0.3 
    // const opacityEnd = 1.0

    // const theHue, rgbString, opacity, p; 

    // const deltaPercent = 1/(numberHues-1)

    // const deltaHue = ( hueEnd - hueStart)/(numberHues-1)
    // const deltaOpacity = (opacityEnd - opacityStart)/(numberHues-1)