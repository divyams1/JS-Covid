import * as d3 from 'd3'



const test = () => {
              var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        // Typical action to be performed when the document is ready:
                        const stateInfo = Object.values( JSON.parse(xhttp.response) ) 
                        let data = stateInfo.map( state  => {
                            return { state: state["state"] , total: state["total"] }
                        })
                        let selectedGroup = "All"
                        const margin = ({ top: 20, right: 0, left: 40, bottom:30})
                        const height =500
                        const width = 500
                        const y= d3.scaleLinear()
                            .domain( [0, d3.max( data, d => d.total )])
                            .range( [height- margin.bottom, margin.top ])
                        
                        d3.select("#selectButton")
                            .append('option')
                            .text("All")
                            .attr("value", "All")

                        d3.select("#selectButton")
                            .selectAll('myOptions')
                            .data(data)
                            .enter()
                            .append('option')
                            .text( (d) => { return d["state"] } )
                            .attr("value", (d) => { return d["state"]})

                        d3.select("#selectButton").on("change", d => {
                            selectedGroup = d.target.value 
                            updateChart(selectedGroup)
                        })
                        const updateChart = (selectedGroup) => {
                            if (selectedGroup==="All") {
                                  const x = d3.scaleBand()
                                        .domain(data.map( d => d.state))
                                        .rangeRound( [ margin.left, width- margin.right ])
                                        .padding(0.05)
                                    var svg = d3.select('body')
                                        .append('svg')
                                        .attr("viewBox", [0,0, width, height]);
                                    svg.append('g')
                                        .attr('transform', `translate(0, ${height- margin.bottom})`)
                                        .call(d3.axisBottom(x))
                                    
                                    const yTitle = g => g.append('text')
                                        .attr('font-size', 10)
                                        .attr('y', 10)
                                        .text(" ↑ Total Cases ")

                                    const yAxis = g => g 
                                        .attr('transform', `translate(${margin.left},0)`)
                                        .call(d3.axisLeft(y).ticks(null, null))
                                        .call(g => g.select('domain').remove())
                                    const xAxis = g => g
                                        .attr("transform", `translate(0,${height - margin.bottom})`)
                                        .call(d3.axisBottom(x).tickSizeOuter(0))
                                    svg.append('g')
                                        .attr('transform', `translate( ${margin.left}, 0 )`)
                                        .call(d3.axisLeft(y))
                                    svg.append('g')
                                        .attr('fill', 'steelblue')
                                    .selectAll('rect')
                                    .data(data)
                                    .join('rect')
                                        .attr("x", d => x(d.state))
                                        .attr("y", d => y(d.total))
                                        .attr("height" , d=> y(0)- y(d.total))
                                        .attr('width', x.bandwidth() )

                                    svg.append('g')
                                        .call(xAxis)
                                    
                                    svg.append('g')
                                        .call(yAxis)

                                    svg.call(yTitle)
                            } else {
                                const stateNumbers = data.map( state => { return state['state']})
                                const stateNumber = stateNumbers.indexOf(selectedGroup)
                                const singleStateInfo = Object.values( JSON.parse(xhttp.response) ) 
                                const stateData = singleStateInfo[stateNumber]
                            
                                // const dataToDisplay = { total: stateData['total'] , death: stateData['death'], positive: stateData['positive'], hospitalizedCurrently: stateData['hospitalizedCurrently'] }
                                const dataToDisplay = [ [ 'inIcuCurrently', stateData['inIcuCurrently']  ] , [ 'death', stateData['death'] ] , ['positive', stateData['positive'] ], [ 'hospitalizedCurrently' , stateData['hospitalizedCurrently'] ]]
                                d3.select("svg").remove()
                                let svg = d3.select('body')
                                    .append('svg')
                                    .attr("viewBox", [0,0, width, height]);
                                const y2 = d3.scaleLinear()
                                    .domain([0, d3.max(dataToDisplay, d => d[1] )])
                                    .range( [height- margin.bottom, margin.top])

                                const x2 = d3.scaleBand()
                                    .domain(dataToDisplay.map( d => d[0] ) )
                                    .rangeRound([margin.left, width- margin.right])
                                    .padding(0.1)
                                svg.append('g')
                                    .attr('transform', `translate(0,${height-margin.bottom})`)
                                    .call(d3.axisBottom(x2))
                                
                                svg.append('g')
                                    .attr("transform", `translate(${margin.left}, 0)`)
                                    .call(d3.axisLeft(y2))

                                const yTitle2 = g => g.append("text")
                                    .attr("font-family", "sans-serif")
                                    .attr("font-size", 10)
                                    .attr("y", 10)
                                    .text("↑ Frequency")

                                const yAxis2 = g => g 
                                    .attr('transform', `translate(${margin.left}, 0)`)
                                    .call(d3.axisLeft(y2).ticks(null, null))
                                    .call(g => g.select(".domain").remove())

                                const xAxis2 = g => g
                                    .attr('transform', `translate( 0, ${height- margin.bottom})`)
                                    .call(d3.axisBottom(x2).tickSizeOuter(0))
                                svg.append('g')
                                    .attr('fill', 'steelblue')
                                  .selectAll('rect')
                                  .data(dataToDisplay)
                                  .join('rect')
                                    .attr('x', d => x2(d[0]))
                                    .attr('y', d => y2(d[1]))
                                    .attr('height', d => y2(0) - y2(d[1]))
                                    .attr('width', x2.bandwidth())
                                    .append('text')
                                    .text(d => d[1])

                                svg.append('g')
                                    .call(xAxis2)
                                
                                svg.append('g')
                                    .call(yAxis2)
                                
                                svg.call(yTitle2)


                                
                            }
                        }

                        const x = d3.scaleBand()
                            .domain(data.map( d => d.state))
                            .rangeRound( [ margin.left, width- margin.right ])
                            .padding(0.1)
                        var svg = d3.select('body')
                            .append('svg')
                            .attr("viewBox", [0,0, width, height]);
                        svg.append('g')
                            .attr('transform', `translate(0, ${height- margin.bottom})`)
                            .call(d3.axisBottom(x))
                        
                        const yTitle = g => g.append('text')
                            .attr('font-size', 10)
                            .attr('y', 10)
                            .text(" ↑ Total Cases ")

                        const yAxis = g => g 
                            .attr('transform', `translate(${margin.left},0)`)
                            .call(d3.axisLeft(y).ticks(null, null))
                            .call(g => g.select('domain').remove())
                        const xAxis = g => g
                            .attr("transform", `translate(0,${height - margin.bottom})`)
                            .call(d3.axisBottom(x).tickSizeOuter(0))
                        svg.append('g')
                            .attr('transform', `translate( ${margin.left}, 0 )`)
                            .call(d3.axisLeft(y))

                     

                        svg.append('g')
                            .attr('fill', 'steelblue')
                           .selectAll('rect')
                           .data(data)
                           .join('rect')
                            .attr("x", d => x(d.state))
                            .attr("y", d => y(d.total))
                            .attr("height" , d=> y(0)- y(d.total))
                            .attr('width', x.bandwidth() )
                            .text(d => d[1])

                        svg.append('g')
                            .call(xAxis)
                        
                        svg.append('g')
                            .call(yAxis)

                        svg.call(yTitle)
                        
                    }
                };
                xhttp.open("GET", 'https://api.covidtracking.com/v1/states/current.json', true);
                xhttp.send();
}

export default test;