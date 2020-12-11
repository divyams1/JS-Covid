 
var d3 = require("d3")
import { chart} from './chart';



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
                        .style('background', '#000')
                        .text('a simple tool tip')
                        .style('color', 'white')
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
                        
                    })
                    .style('fill', function(d) { return myColor(state[2])})
            })
            d3.selectAll('title')
                .text('')
           
    }
}
   xhttp.open("GET", ' https://api.covidtracking.com/v1/states/current.json', true);
   xhttp.send();
    

}
export default map;

