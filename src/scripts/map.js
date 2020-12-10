
var d3 = require("d3")
import { select } from 'd3-selection'
import { geomap } from 'd3-geomap'
var d3_composite = require("d3-composite-projections");
var d3_geo = require("d3-geo");
var d3_request = require("d3-request");
var d3_selection = require("d3-selection");
var d3_transition = require("d3-transition");
var topojson = require("topojson");
import axios from 'axios'



const map = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
             const stateInfo = Object.values( JSON.parse(this.response) ) 
              let data = stateInfo.map( state  => {
                            return [  state["state"] ,  state["total"] ]
                            // return { state: state["state"] , total: state["total"] }
                        })
              data.splice(3,1)
              data.splice(11,1)
              data.splice(25,1)
              data.splice(47,1)
              data.splice(39,1)
              data.splice(7,1)
             
              const map = d3.select("#map")

              d3.selectAll('.state-path')
                        .on('mouseover', function(){
                            d3.select(this)
                                .style('fill', 'red')
                            d3.select("#" +this.id + "div")
                                .attr('class', 'hover-div')
                           
                        })
                        .on('mouseout', function(){
                            d3.select(this)
                                .style('fill', 'black')
                        })
            data.map( state => {
                const stateId = state[0]
                d3.select(`#${stateId}title`)
                    .text( `Total Cases: ${state[1]}` )
                    .attr('id', `${stateId}div`)
            })
    }
}
   xhttp.open("GET", 'https://api.covidtracking.com/v1/states/current.json', true);
   xhttp.send();
    

}
export default map;





 // let csvState = data.map( function(state) {
            //     return state.join();
            // }).join('\n');

        //  var state = d3.selectAll('path').attr('fill', function(d){  
                // Get the ID of the path we are currently working with 	
                // Our SVG uses the state abbreviation for the ID 	var abbr = this.id;  
                    // Loop through the state data looking for 	// a match for that abbreviation 
                        // Then returning the corresponding president 
                            // who won that state, from the array we made earlier
                             	// $.each(state_data, function(key, data){ 		if(data.state_abbr == abbr){ 			state_president = data.president; 		} 	})  	// Return colors 	// based on data					 	if(state_president == "Obama"){ 		return "blue" 	} 	else if(state_presid
                