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
     
     heatKeys = [ ['positive', 'Positive'], ['negative', 'Negative'], ['hospitalizedCurrently' , 'Hospitalized Currently'] , ['hospitalizedCumulative', 'Cumulative Hospitalizations'] , ['death' , 'Deaths'] ]

    d3.select("#select-heat")
                            .selectAll('myOptions')
                            .data(heatKeys)
                            .enter()
                            .append('option')
                            .text( (d) => { return d[1] } )
                            .attr("value", (d) => { return d[0]})
    d3.select("#select-heat").on("change", d => {
                            const metric = d.target.value;
                            const newData = states.map( state => {
                                
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
                                .style('background', '#228B22')
                                .text('a simple tool tip')
                                .style('color', 'white')
                                .style('height', '50px')
                                .style('border', '1px solid black')
                                .attr('id', 'tooltip-map')
                                .style('width', '400px')
                            const newColor = d3.scaleLinear()
                                    .range(["#F08080", "#8B0000"])
                                    .domain([0, Math.max(...colorData)])
                           
                            
                            newData.map ( state => {
                                
                                const stateId = state[0]
                                d3.select(`#${stateId}`)
                                      .on('mouseover', (d) =>  { tooltip.text( `${state[0]}:  ${state[1]} ${metric}` )
                                        tooltip.style('visibility', 'visible')}).style('text-align', 'center')
                                    .on('mousemove', (e) => { 
                                        return tooltip.style('top', (e.pageY  -10)+'px').style('left', (e.pageX+10)+'px')})
                                    .on('mouseout', () => {return tooltip.style('visibility', 'hidden') })
                                    .on('click' , (e) => {
                                        const stateName= e.currentTarget.id 
                                        chart(stateName)
                                        // timeDropdown(stateName)
                    })
                                    .style('fill', function(d) { return newColor(state[1])})
                            })

            const labels = { 'positive': 'Positive', 'negative': 'Negative', 'hospitalizedCurrently' : 'Hospitalized Currently' , 'hospitalizedCumulative': 'Cumulative Hospitalizations' , 'death' : 'Deaths'} 
            const legendLabel = labels[d.target.value]; 
            d3.select('#legend-label')
                        .text(`${legendLabel}`)

            d3.select('#legend')
                    .append('div')
                    .attr('id', 'heat-legend')
            d3.select('#left-number')
                .text(`${Math.min(...colorData)}`)


              d3.select('#heat-legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#F08080')

             d3.select('#heat-legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#CD5C5C')

            d3.select('#heat-legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#DC143C')

            d3.select('#heat-legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#B22222')

             d3.select('#heat-legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#FF0000')


               d3.select('#heat-legend')
            .append('rect')
            .style('width', '20px')
            .style('height', '20px')
            .style('background-color', '#8B0000')

            
            d3.select('#right-number')
                .text(`${Math.max(...colorData)}`)


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

export const dataDropdown = (data, stateName) => {
    d3.select('#data')
        .remove()
    d3.select('#dropdown-3')
        .remove()
    d3.select('#data-dropdown-div')
             .append('h1')
             .text(stateName )
             .attr('id', 'data')
    d3.select('#data-dropdown-div')
        .append('p')
        .text('View Data by Category:')
        .attr('id', 'dropdown-3')
    // d3.select("#dropdown-3")
    //     .append('select')
    //     .text('today')
    //     .attr('value', 'today')
    //     .attr('id', 'select-date')

}
// export const timeDropdown = (state) => {
//    const abbr = {
//     "AL": "Alabama",
//     "AK": "Alaska",
//     "AS": "American Samoa",
//     "AZ": "Arizona",
//     "AR": "Arkansas",
//     "CA": "California",
//     "CO": "Colorado",
//     "CT": "Connecticut",
//     "DE": "Delaware",
//     "DC": "District Of Columbia",
//     "FM": "Federated States Of Micronesia",
//     "FL": "Florida",
//     "GA": "Georgia",
//     "GU": "Guam",
//     "HI": "Hawaii",
//     "ID": "Idaho",
//     "IL": "Illinois",
//     "IN": "Indiana",
//     "IA": "Iowa",
//     "KS": "Kansas",
//     "KY": "Kentucky",
//     "LA": "Louisiana",
//     "ME": "Maine",
//     "MH": "Marshall Islands",
//     "MD": "Maryland",
//     "MA": "Massachusetts",
//     "MI": "Michigan",
//     "MN": "Minnesota",
//     "MS": "Mississippi",
//     "MO": "Missouri",
//     "MT": "Montana",
//     "NE": "Nebraska",
//     "NV": "Nevada",
//     "NH": "New Hampshire",
//     "NJ": "New Jersey",
//     "NM": "New Mexico",
//     "NY": "New York",
//     "NC": "North Carolina",
//     "ND": "North Dakota",
//     "MP": "Northern Mariana Islands",
//     "OH": "Ohio",
//     "OK": "Oklahoma",
//     "OR": "Oregon",
//     "PW": "Palau",
//     "PA": "Pennsylvania",
//     "PR": "Puerto Rico",
//     "RI": "Rhode Island",
//     "SC": "South Carolina",
//     "SD": "South Dakota",
//     "TN": "Tennessee",
//     "TX": "Texas",
//     "UT": "Utah",
//     "VT": "Vermont",
//     "VI": "Virgin Islands",
//     "VA": "Virginia",
//     "WA": "Washington",
//     "WV": "West Virginia",
//     "WI": "Wisconsin",
//     "WY": "Wyoming"
// }
//     const today = moment().subtract(0, 'days').format('MM-DD-YYYY')
//     const lastYear = "2020"
//     const todayMonth = today.slice(0,2)
//     const todayDay = today.slice(3,5)
//     const todayStringDate = `${todayMonth}/${todayDay}/${lastYear}`
//     const todayString = lastYear + todayMonth + todayDay
    
//     const lastWeek = moment().subtract(7, 'days').format('MM-DD-YYYY')
    
//     const lastWeekMonth = lastWeek.slice(0,2)
//     const lastWeekDay = lastWeek.slice(3,5)
//     const lastWeekStringDate = `${lastWeekMonth}/${lastWeekDay}/${lastYear}`
//     const lastWeekString = lastYear + lastWeekMonth + lastWeekDay 
   
//     const twoWeek = moment().subtract(14, 'days').format('MM-DD-YYYY')
//     const twoWeekMonth = twoWeek.slice(0,2)
//     const twoWeekDay = twoWeek.slice(3,5)
//     const twoWeekStringDate = `${twoWeekMonth}/${twoWeekDay}/${lastYear}`
//     const twoWeekString = lastYear + twoWeekMonth + twoWeekDay 

//     const threeWeek = moment().subtract(21, 'days').format('MM-DD-YYYY')
//     const threeWeekMonth = threeWeek.slice(0,2)
//     const threeWeekDay = threeWeek.slice(3,5)
//     const threeWeekStringDate = `${threeWeekMonth}/${threeWeekDay}/${lastYear}`
//     const threeWeekString = lastYear + threeWeekMonth + threeWeekDay 

//     const previousDatesStrings = [ lastWeekString, twoWeekString, threeWeekString]
//     const previousDates = [ lastWeekStringDate, twoWeekStringDate, threeWeekStringDate]
//     const previousDatesWhole = [ [todayStringDate, todayString] , [ lastWeekStringDate, lastWeekString], [twoWeekStringDate, twoWeekString], [threeWeekStringDate, threeWeekString]]
//     const stateName = abbr[state]
//      d3.select('#full-state-name')
//         .remove()
//     d3.select('#time-dropdown-div')
//              .append('h1')
//              .text(stateName )
//              .attr('id', 'full-state-name')
//     d3.select('#dropdown-3')
//         .remove();
//     d3.select('#time-dropdown-div')
//         .append('p')
//         .text('View Information by Date:')
//         .attr('id', 'dropdown-3')
    // d3.select("#dropdown-3")
    //     .append('select')
    //     .text('today')
    //     .attr('value', 'today')
    //     .attr('id', 'select-date')

    // d3.select("#select-date")
    //     .selectAll('myOptions')
    //     .data(previousDatesWhole)
    //     .enter()
    //     .append('option')
    //     .text( d => { 
    //         return d[0]
    //     })
    //     .attr('value', d => { return [ d[1], state]})
      
    // d3.select('#select-date').on('change' , d => {
    //     const split = d.target.value.split(',')
    //     const date = split[0]
    //     const state = split[1]

    //      var xhttp = new XMLHttpRequest();
    //      xhttp.onreadystatechange = function () {
    //                 if (this.readyState == 4 && this.status == 200) {
    //                     const stateData = JSON.parse(this.response)
    //                     const margin = ({ top: 10, right: 0, left: 50, bottom:15})
    //                     const height =350
    //                     const width = 350
    //                     const dataToDisplay = [ [ 'inIcuCurrently', stateData['inIcuCurrently']  ] , [ 'death', stateData['death'] ] , [ 'hospitalizedCurrently' , stateData['hospitalizedCurrently'] ]]
    //                     d3.select('#supplement-chart')
    //                         .remove();
    //                     let svg = d3.select('#state-holder')
    //                                 .append('svg')
    //                                 .attr("viewBox", [0,0, width, height])
    //                                 .attr('height', height)
    //                                 .attr('width', width)
    //                                 .attr('font-family' , 'sans-serif')
    //                                 .attr('font-size', 10)
    //                                 .attr('text-anchor', 'end')
    //                                 .attr('id', 'supplement-chart');
    //                     const y2 = d3.scaleLinear()
    //                                 .domain([0, d3.max(dataToDisplay, d => d[1] )])
    //                                 .range( [height- margin.bottom, margin.top])
    //                     const x2 = d3.scaleBand()
    //                                 .domain(dataToDisplay.map( d => d[0] ) )
    //                                 .rangeRound([margin.left, width- margin.right])
    //                                 .padding(0.2)
    //                             svg.append('g')
    //                                 .attr('transform', `translate(0,${height-margin.bottom})`)
    //                                 .call(d3.axisBottom(x2))
    //                             svg.append('g')
    //                                 .attr('transform', `translate(${margin.left},0)`)
    //                                 .attr(d3.axisLeft(y2))
    //                             const xAxis2 = g => g
    //                                 .attr('transform', `translate( 0, ${height- margin.bottom})`)
    //                                 .call(d3.axisBottom(x2).tickSizeOuter(0))
    //                             svg.append('g')
    //                                 .attr('fill', 'red')
    //                               .selectAll('rect')
    //                               .data(dataToDisplay)
    //                               .join('rect')
    //                                 .attr('x', d => x2(d[0]))
    //                                 .attr('y', d => y2(d[1]))
    //                                 .attr('height', d => y2(0) - y2(d[1]))
    //                                 .attr('width', x2.bandwidth())
    //                             const yAxis2 = g => g 
    //                                 .attr('transform', `translate(${margin.left}, 0)`)
    //                                 .call(d3.axisLeft(y2).ticks(null, ""))
    //                                 .call(g => g.select(".domain").remove()) 
                                    
    //                             svg.append('g')
    //                                 .call(xAxis2)
                                
    //                             svg.append('g')
    //                                 .call(yAxis2)
    //                 }
    //             }
            
    //       xhttp.open("GET", `https://api.covidtracking.com/v1/states/${state}/${date}.json`, true);
//     //       xhttp.send();
//     })

// }