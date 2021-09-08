

// axios.get("https://corona-virus-world-and-india-data.p.rapidapi.com/api")
// .then(response=>{
//   console.log(response.data);
// })

fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
		"x-rapidapi-key": "5849f2e9c5msha2c0d9a7beb48fdp1a4187jsn9ac52e504279"
	}
})

.then(response=> response.json())
.then(data=>{
    console.log(data)


    var t = document.getElementById("abc");


  var x = t.insertRow();

  var cell0 = x.insertCell();
  cell0.innerHTML = data.world_total.total_cases;
  var cell1 = x.insertCell();
  cell1.innerHTML = data.world_total.active_cases;
  var cell2 = x.insertCell();
  cell2.innerHTML = data.world_total.total_deaths;

var t = document.getElementById("myData");

for(var i=0; i<data.countries_stat.length; i++){
  var r = t.insertRow();

  var cell0 = r.insertCell();
  cell0.innerHTML = i+1;
  var cell1 = r.insertCell();
  cell1.innerHTML = data.countries_stat[i].country_name;
  var cell2 = r.insertCell();
  cell2.innerHTML = data.countries_stat[i].cases;
  var cell3 = r.insertCell();
  cell3.innerHTML = data.countries_stat[i].active_cases;
  var cell4 = r.insertCell();
  cell4.innerHTML = data.countries_stat[i].deaths;
  var cell5 = r.insertCell();
  cell5.innerHTML = data.countries_stat[i].deaths_per_1m_population;
  var cell6 = r.insertCell();
  cell6.innerHTML = data.countries_stat[i].new_cases;
  var cell7 = r.insertCell();
  cell7.innerHTML = data.countries_stat[i].new_deaths;
  var cell8 = r.insertCell();
  cell8.innerHTML = data.countries_stat[i].serious_critical;
  var cell9 = r.insertCell();
  cell9.innerHTML = data.countries_stat[i].tests_per_1m_population;
  var cell10 = r.insertCell();
  cell10.innerHTML = data.countries_stat[i].total_cases_per_1m_population;
  var cell11 = r.insertCell();
  cell11.innerHTML = data.countries_stat[i].total_recovered;
  var cell12 = r.insertCell();
  cell12.innerHTML = data.countries_stat[i].total_tests;
}

// var a=t.insertRow();
// a.innerHTML=data.world_total[i].total_cases ;

  $(".tablemanager").tablemanager({
    firstSort:[
      [12,0],
      [11,0],
      [10,0],
      [9,0],
      [8,0],
      [7,0],
      [6,0],
      [5,0],
      [4,0],
      [3,0],
      [3,0],
      [2,0],
      [1,"asc"],
      [1,"des"]
    ],
    appendFilterby: true,
    debug: true,
    

    vocabulary:{
      voc_filter_by: "Filter By",
      voc_type_here_filter: "Filter...",
      voc_show_rows: "Rows per page",
    },
    pagination: true,
    showrows: [5,10,20,30,50,100,223],
    numOfPages: 30,
  })
})


