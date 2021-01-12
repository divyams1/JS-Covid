// import { dropdown } from './dropdown.js';

import { dataDropdown, timeDropdown } from "./dropdown";
const stateData = 
  [
    [
        "NAME",
        "K200201_001E",
        "K200201_003E",
        "K200201_004E",
        "K200301_003E",
        "K200104_008E",
        "K202703_003E",
        "K201701_001E",
        "state"
    ],
    [
        "Minnesota",
        "5611179",
        "367653",
        "60983",
        "308013",
        "888634",
        "3710094",
        "5488344",
        "27"
    ],
    [
        "Mississippi",
        "2986530",
        "1135599",
        "13234",
        "87126",
        "474423",
        "1785204",
        "2886448",
        "28"
    ],
    [
        "Missouri",
        "6126452",
        "704327",
        "27705",
        "253474",
        "1035074",
        "4050759",
        "5943658",
        "29"
    ],
    [
        "Montana",
        "1062305",
        "5056",
        "68013",
        "41605",
        "200239",
        "625885",
        "1037462",
        "30"
    ],
    [
        "Nebraska",
        "1929268",
        "91221",
        "18555",
        "214483",
        "303998",
        "1352234",
        "1875342",
        "31"
    ],
    [
        "Nevada",
        "3034392",
        "280385",
        "44666",
        "881145",
        "475120",
        "1953233",
        "2991978",
        "32"
    ],
    [
        "New Hampshire",
        "1356458",
        "23432",
        "3562",
        "52648",
        "245156",
        "907524",
        "1312006",
        "33"
    ],
    [
        "New Jersey",
        "8908520",
        "1207995",
        "21131",
        "1839359",
        "1438289",
        "6054386",
        "8739304",
        "34"
    ],
    [
        "New Mexico",
        "2095428",
        "46064",
        "200659",
        "1029229",
        "368480",
        "1042428",
        "2051759",
        "35"
    ],
    [
        "New York",
        "19542209",
        "3069259",
        "84312",
        "3752523",
        "3212065",
        "11609468",
        "19037564",
        "36"
    ],
    [
        "North Carolina",
        "10383620",
        "2222533",
        "120845",
        "995529",
        "1688574",
        "6647003",
        "10100431",
        "37"
    ],
    [
        "North Dakota",
        "760077",
        "25896",
        "41270",
        "27444",
        "116433",
        "546876",
        "736671",
        "38"
    ],
    [
        "Ohio",
        "11689442",
        "1446306",
        "25672",
        "455918",
        "1996163",
        "7194597",
        "11362304",
        "39"
    ],
    [
        "Oklahoma",
        "3943079",
        "287680",
        "307183",
        "429079",
        "619601",
        "2526690",
        "3825027",
        "40"
    ],
    [
        "Oregon",
        "4190713",
        "82046",
        "49051",
        "556397",
        "739611",
        "2524202",
        "4113142",
        "41"
    ],
    [
        "Pennsylvania",
        "12807060",
        "1428406",
        "21418",
        "974763",
        "2332369",
        "7895324",
        "12394000",
        "42"
    ],
    [
        "Rhode Island",
        "1057315",
        "70749",
        "4341",
        "168341",
        "182645",
        "637973",
        "1016469",
        "44"
    ],
    [
        "South Carolina",
        "5084127",
        "1353599",
        "23672",
        "294502",
        "899754",
        "3101815",
        "4944754",
        "45"
    ],
    [
        "South Dakota",
        "882235",
        "19057",
        "78068",
        "33983",
        "146358",
        "601818",
        "852419",
        "46"
    ],
    [
        "Tennessee",
        "6770010",
        "1137801",
        "19136",
        "372901",
        "1104797",
        "4192355",
        "6603013",
        "47"
    ],
    [
        "Texas",
        "28701845",
        "3527027",
        "149997",
        "11368844",
        "3599599",
        "20042736",
        "28074573",
        "48"
    ],
    [
        "Utah",
        "3161105",
        "40365",
        "34678",
        "450220",
        "351297",
        "2469059",
        "3110944",
        "49"
    ],
    [
        "Vermont",
        "626299",
        "7621",
        "1743",
        "12450",
        "123875",
        "368027",
        "601261",
        "50"
    ],
    [
        "Virginia",
        "8517685",
        "1631512",
        "22265",
        "812810",
        "1318225",
        "5926733",
        "8264095",
        "51"
    ],
    [
        "West Virginia",
        "1805832",
        "68679",
        "2629",
        "25569",
        "361216",
        "939718",
        "1753476",
        "54"
    ],
    [
        "Washington",
        "7535591",
        "291808",
        "97329",
        "970353",
        "1163987",
        "4758403",
        "7400557",
        "53"
    ],
    [
        "Wisconsin",
        "5813568",
        "370632",
        "50364",
        "403833",
        "986483",
        "3843513",
        "5665153",
        "55"
    ],
    [
        "Wyoming",
        "577737",
        "3667",
        "16185",
        "57895",
        "96557",
        "412106",
        "563374",
        "56"
    ],
    [
        "Puerto Rico",
        "3195153",
        "400936",
        "4013",
        "3154017",
        "661216",
        "1207722",
        "3165711",
        "72"
    ],
    [
        "Alabama",
        "4887871",
        "1307040",
        "22063",
        "211485",
        "829663",
        "3019909",
        "4763828",
        "01"
    ],
    [
        "Alaska",
        "737438",
        "25197",
        "111371",
        "53069",
        "88000",
        "466448",
        "720869",
        "02"
    ],
    [
        "Arizona",
        "7171646",
        "336340",
        "330599",
        "2266342",
        "1259103",
        "4288824",
        "7013444",
        "04"
    ],
    [
        "Arkansas",
        "3013825",
        "456714",
        "20951",
        "230300",
        "507676",
        "1653152",
        "2925448",
        "05"
    ],
    [
        "California",
        "39557045",
        "2283850",
        "302792",
        "15540142",
        "5667337",
        "24067507",
        "38818454",
        "06"
    ],
    [
        "Colorado",
        "5695564",
        "237578",
        "55146",
        "1235127",
        "807855",
        "3772411",
        "5577020",
        "08"
    ],
    [
        "Connecticut",
        "3572665",
        "391552",
        "9507",
        "589810",
        "613147",
        "2262440",
        "3468263",
        "09"
    ],
    [
        "Delaware",
        "967171",
        "217594",
        "4397",
        "91975",
        "180756",
        "573528",
        "940786",
        "10"
    ],
    [
        "District of Columbia",
        "702455",
        "319777",
        "1932",
        "79249",
        "85626",
        "444471",
        "669031",
        "11"
    ],
    [
        "Florida",
        "21299325",
        "3410741",
        "59870",
        "5562452",
        "4358784",
        "13205543",
        "20882651",
        "12"
    ],
    [
        "Georgia",
        "10519475",
        "3319691",
        "34485",
        "1021754",
        "1456428",
        "7115149",
        "10238658",
        "13"
    ],
    [
        "Idaho",
        "1754208",
        "12075",
        "23026",
        "222464",
        "279441",
        "1170475",
        "1723154",
        "16"
    ],
    [
        "Hawaii",
        "1420491",
        "28325",
        "3237",
        "151356",
        "261467",
        "886169",
        "1382448",
        "15"
    ],
    [
        "Illinois",
        "12741080",
        "1793079",
        "35846",
        "2208868",
        "1990548",
        "8308957",
        "12447271",
        "17"
    ],
    [
        "Indiana",
        "6691878",
        "637277",
        "14040",
        "472419",
        "1051146",
        "4365368",
        "6489261",
        "18"
    ],
    [
        "Iowa",
        "3156145",
        "115137",
        "11494",
        "191473",
        "537818",
        "2011113",
        "3055939",
        "19"
    ],
    [
        "Kansas",
        "2911510",
        "171141",
        "26829",
        "348443",
        "462191",
        "2004991",
        "2825680",
        "20"
    ],
    [
        "Kentucky",
        "4468402",
        "354761",
        "8470",
        "161506",
        "731392",
        "2479180",
        "4326305",
        "21"
    ],
    [
        "Louisiana",
        "4659978",
        "1509407",
        "25657",
        "239954",
        "720610",
        "2532649",
        "4529028",
        "22"
    ],
    [
        "Maine",
        "1338404",
        "18954",
        "8566",
        "22411",
        "276069",
        "829285",
        "1301941",
        "23"
    ],
    [
        "Maryland",
        "6042718",
        "1810885",
        "13433",
        "628435",
        "931041",
        "3965487",
        "5899819",
        "24"
    ],
    [
        "Massachusetts",
        "6902149",
        "537523",
        "16198",
        "846780",
        "1137541",
        "4331991",
        "6665083",
        "25"
    ],
    [
        "Michigan",
        "9995915",
        "1376751",
        "53012",
        "517381",
        "1720453",
        "6023836",
        "9774124",
        "26"
    ]
]


export const chart = (stateName) => {
       const abbr = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}
  const fullStateName = abbr[stateName];
  const makeChart = ( metric, data ) => {
      
      const stateData = metric === 'Risk Factors' ? ( [data[4], data[5], data[6] ] ) : ( [  data[1], data[2], data[3]])
      const margin = { top: 20, right: 0, bottom: 30, left: 40};
      const height = 500;
      const width = 500;
      const xRange = [ margin.left, width - margin.right];
      const yRange = [height- margin.bottom, margin.top];
      
      const y = d3.scaleLinear()
        .domain( [0, d3.max(stateData , d => d[1])])
        .range( [height-margin.bottom, margin.top])
     const x = d3.scaleBand()
        .domain(stateData.map( d=> d[0]))
        .rangeRound([margin.left, width-margin.right])
        .padding(0.2)
     d3.select('#supplement-chart')
         .remove();

     let cont = d3.select('#state-holder')
        .append('div')
        .attr('display' , "flex")
        .attr('justify-content', 'center')
        .attr('id', 'chart-container')
    
    let svg = d3.select('#chart-container')
       .append('svg')
       .attr("viewBox", [0,0, width, height])
       .attr('height', height)
       .attr('width', width)
    .attr('font-family' , 'sans-serif')
       .attr('font-size', 10)
       .attr('text-anchor', 'end')
       .attr('id', 'supplement-chart');
    
     svg.append("g")
       .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

     svg.append("g")
       .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    const yAxis = g => g  
       .attr("transform", `translate(${margin.left},0)`)
       .call(d3.axisLeft(y).ticks(10, '3f'))
       .call(g => g.select(".domain").remove())
       

     const xAxis = g => g
      .attr("transform", `translate(0,${height - margin.bottom})`)
     .call(d3.axisBottom(x).tickSizeOuter(0))
       svg.append("g")
      .attr("fill", "#8B0000")
      .selectAll("rect")
      .data(stateData)
      .join("rect")
      .attr("x", d =>  x(d[0]))
      .attr("y", d => y(d[1]))
      .attr("height", d =>    y(0) - y( d[1]))
      .attr("width", x.bandwidth())
      

   svg.append("g")
      .call(xAxis);

   svg.append("g")
      .call(yAxis);
  }
   d3.select('#supplement-chart')
         .remove();

  
  
  const singleStateData = stateData.filter( state => state[0] === fullStateName)[0];
  // ['Name' , singleStateData[0] ]
  
  const stateObj = [
    ['Total Population', parseInt(singleStateData[1])],
    ['African American', parseInt(singleStateData[2]) ],
    ['Native American' , parseInt(singleStateData[3]) ],
    ['Hispanic', parseInt(singleStateData[4]) ],
    ['65 Years and Older', parseInt(singleStateData[5]) ],
    ['No Health Coverage' , parseInt(singleStateData[6]) ],
    ['Live Below Poverty Line', parseInt(singleStateData[7]) ]
  ]
 
  d3.select('#data-table')
    .remove();
d3.select('#state-dropdown').remove();
    d3.select('#data')
        .remove();
    d3.select('#dropdown-3')
        .remove();
    d3.select('#dropdown-cont2')
        .remove();
    d3.select('#data-dropdown-div')
             .append('h1')
             .text(stateName )
             .attr('id', 'data')
             .style('text-align', 'center')
    d3.select('#data-dropdown-div')
        .append('div')
        .style('display' , 'flex')
        .attr('id', 'dropdown-cont2')
    d3.select('#dropdown-cont2')
        .append('p')
        .text('View Data by Category:')
        .attr('id', 'dropdown-3')
d3.select('#dropdown-cont2')
    .append('select')
    .text('')
    .attr('value', '')
    .attr('id', 'state-dropdown')
const options = ["View DataSets", "Race Data", "Risk Factors"]

d3.select('#state-dropdown')
  .selectAll('myOptions')
  .data(options)
  .enter()
  .append('option')
  .text( d => {return d })
  .attr('value' , d => {return d})
  .style('margin-left')
d3.select('#state-dropdown')
  .on('change', d=> {
    const metric = d.target.value; 
    makeChart( metric, stateObj )
  })


  const table = d3.select('#state-holder').append('table').attr('id', 'data-table')
  const header = table.append('thead').append('tr');
  header    
    .selectAll('th')
    .data(stateObj)
    .enter()
    .append('th')
    .text( d => { return d[0]})
    .style('background-color', '#8B0000')
    .style('margin', '0')
    .style('padding', '0')
    .style('color', 'white')
    .style('padding-left', '5px')
    .style('padding-right', '5px')
 const row = table.append('tbody');
 row 
    .selectAll('tr')
    .data(stateObj)
    .enter()
    .append('tr')
const cells = row.selectAll('td')
        .data(stateObj)
        .enter()
        .append('td')
        .text( d => { return d[1]})
        .style('border', '1px solid black')


 dataDropdown(stateObj, stateName)

  
  

}


//                         const margin = { top: 20, right: 0, bottom: 30, left: 40};
//   const height = 500;
//   const width = 500;
//   const xRange = [ margin.left, width - margin.right];
//   const yRange = [height- margin.bottom, margin.top];
//   const y = d3.scaleLinear()
//     .domain( [0, d3.max(stateObj , d => d[1])])
//     .range( [height-margin.bottom, margin.top])
//   const x = d3.scaleBand()
//     .domain(stateObj.map( d=> d[0]))
//     .rangeRound([margin.left, width-margin.right])
//     .padding(.3)

//     d3.select('#supplement-chart')
//         .remove();
//     let svg = d3.select('#state-holder')
//       .append('svg')
//       .attr("viewBox", [0,0, width, height])
//       .attr('height', height)
//       .attr('width', width)
//       .attr('font-family' , 'sans-serif')
//       .attr('font-size', 10)
//       .attr('text-anchor', 'end')
//       .attr('id', 'supplement-chart');
    
//      svg.append("g")
//       .attr("transform", `translate(0,${height - margin.bottom})`)
//       .call(d3.axisBottom(x));

//     svg.append("g")
//       .attr("transform", `translate(${margin.left},0)`)
//       .call(d3.axisLeft(y));

//     const yAxis = g => g  
//       .attr("transform", `translate(${margin.left},0)`)
//       .call(d3.axisLeft(y).ticks(null, "%"))
//       .call(g => g.select(".domain").remove())

//     const xAxis = g => g
//       .attr("transform", `translate(0,${height - margin.bottom})`)
//       .call(d3.axisBottom(x).tickSizeOuter(0))
//       svg.append("g")
//       .attr("fill", "steelblue")
//     .selectAll("rect")
//     .data(stateObj)
//     .join("rect")
//       .attr("x", d =>  x(d[0]))
//       .attr("y", d => y(d[1]))
//       .attr("height", d =>    y(0) - y( d[1]))
//       .attr("width", x.bandwidth());

//   svg.append("g")
//       .call(xAxis);

//   svg.append("g")
//       .call(yAxis);

  