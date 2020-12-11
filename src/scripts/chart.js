export const chart = (stateName) => {
              var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        // Typical action to be performed when the document is ready:
                        const margin = ({ top: 10, right: 0, left: 20, bottom:15})
                        const height =300  
                        const width = 300
                        const stateInfo = Object.values( JSON.parse(xhttp.response) ) 
                        let data = stateInfo.map( state  => {
                            return { state: state["state"] , total: state["total"] }
                        })
                        const updateChart = (selectedGroup) => {
                           {
                                const stateNumbers = data.map( state => { return state['state']})
                                const stateNumber = stateNumbers.indexOf(selectedGroup)
                                const singleStateInfo = Object.values( JSON.parse(xhttp.response) ) 
                                const stateData = singleStateInfo[stateNumber]
                                const dataToDisplay = [ [ 'inIcuCurrently', stateData['inIcuCurrently']  ] , [ 'death', stateData['death'] ] , [ 'hospitalizedCurrently' , stateData['hospitalizedCurrently'] ]]
                                d3.select('#supplement-chart')
                                    .remove();
                                let svg = d3.select('body')
                                    .append('svg')
                                    .attr("viewBox", [0,0, width, height])
                                    .attr('height', height)
                                    .attr('width', width)
                                    .attr('id', 'supplement-chart');
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

                         updateChart(stateName)
                    }
                };
                xhttp.open("GET", 'https://api.covidtracking.com/v1/states/current.json', true);
                xhttp.send();
}
