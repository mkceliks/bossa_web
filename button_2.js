//(BUTTON 2 FUNCTION) THAT SHOWS THE CHART JS,COUNTER,HEADER TEXT.

document.getElementById("myBtn2").onclick = function() {myFunction2()};
  
function myFunction2(){
if (document.getElementById("table2").style.display === "none") {

      //table2.display becames block type from none here.
  document.getElementById("table2").style.display = "block"; 
  //We are embedding the chart.js html code inside of table2 here.
  document.getElementById("table2").innerHTML = "<div class='container'><canvas style ='margin:auto;width:100%;height:50vh;' id='myChart'></canvas></div>";
      //table2_header becames block type from none here.
  document.getElementById("table2_header").style.display = "block";
// Listen for orientation changes
window.addEventListener("resize", function() {
  if(document.getElementById("table2").style.display === "block"){
    document.getElementById("table2").style.display = "none";
  document.getElementById("table2").innerHTML = "";
    document.getElementById("table2").style.display = "block";
    document.getElementById("table2").innerHTML = "<div class='container'><canvas style='margin:auto;width:100%;height:50vh;' id='myChart'></canvas></div>";
    Chart.register(ChartDataLabels);
const ctx = document.getElementById('myChart').getContext('2d');
let delayed;
const myChart = new Chart(ctx, {
    type: 'bar',
    //DATA
    data: {
        labels: ['Normal', 'Product'],
        datasets: [{
            label: 'Normal Değer',
            labelDisplay:false,
            data: [1000, 1129],
            backgroundColor: [
                'rgba(255, 0, 72, 0.4)',
                'rgba(79,184,255, 0.4)'

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },  
    options: {
      //WIDTH HEIGHT RATIO ( Most of the width ratio setting of the chart is in the Embedding the Chart.js HTML CODE. )
      responsive:false,
      mainAspectRatio:false,
      aspectRatio:0.5,
      barThickness:50,    
      showTooltips: false,

      //DELAY OF BARS
      animation:{
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delayed) {
            delay = context.dataIndex * 750 + context.datasetIndex * 100;
          }
          return delay;
        }, 
      },

      //X AND Y SCALE
        scales: {
          x:{
            
            stacked:true,
            
          },
          y:{
            beginAtZero:true,
            }
        },
        layout: {
          padding: {
            top: 45,
            bottom: 20
          }
        },
        //Plugins.
        plugins: {
          datalabels:{
             display: true,
             color: "black",
             align: "end",
             anchor: "end",
             font:{
              weight:'bold',
               size: 20,
               family: 'Josefin Sans',
             }, 
          },
          title: {
              display: false,
              text: 'The Success Ratio Graph of The Product'
          },
          legend: {
            display: false
          },
          
        }
    }
});
  }
});
 //The function that makes the chart.js work.
 Chart.register(ChartDataLabels);
const ctx = document.getElementById('myChart').getContext('2d');
let delayed;
const myChart = new Chart(ctx, {
    type: 'bar',
    //DATA
    data: {
        labels: ['Normal', 'Product'],
        datasets: [{
            label: 'Normal Değer',
            labelDisplay:false,
            data: [1000, 1129],
            backgroundColor: [
                'rgba(255, 0, 72, 0.4)',
                'rgba(79,184,255, 0.4)'

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },  
    options: {
      //WIDTH HEIGHT RATIO ( Most of the width ratio setting of the chart is in the Embedding the Chart.js HTML CODE. )
      responsive:false,
      mainAspectRatio:false,
      aspectRatio:0.5,
      barThickness:50,    
      showTooltips: false,

      //DELAY OF BARS
      animation:{
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delayed) {
            delay = context.dataIndex * 750 + context.datasetIndex * 100;
          }
          return delay;
        }, 
      },

      //X AND Y SCALE
        scales: {
          x:{
            
            stacked:true,
            
          },
          y:{
            beginAtZero:true,
            }
        },
        layout: {
          padding: {
            top: 45,
            bottom: 20
          }
        },
        //Plugins.
        plugins: {
          datalabels:{
             display: true,
             color: "black",
             align: "end",
             anchor: "end",
             font:{
              weight:'bold',
               size: 20,
               family: 'Josefin Sans',
             }, 
          },
          title: {
              display: false,
              text: 'The Success Ratio Graph of The Product'
          },
          legend: {
            display: false
          },
          
        }
    }
});
//Counter Becames Visible.
document.getElementById("counter").style.display = "block";

//The calculation of counter.
var counter = (1 - (1129/1000)) * 100;
var counter_last = Math.abs(counter);

//Counter Effect and pasting the result to the screen.
let upto=0;

    if (counter <= -1){
      function updated(){
          var count= document.getElementById("counter");
          count.innerHTML="<div class='alert alert-danger text-center mb-5 py-1 mt-5' style='margin:auto;width:80vw;'><p1 style='font-size:3vh;'>%"+ ++upto +" more unsuccessful</p1></div>";
          if(Math.floor(upto)===Math.floor(counter_last))
          {
             count.innerHTML ="<div class='alert alert-danger text-center mb-5 py-1 mt-5' style='margin:auto;width:80vw;'><p1 style='font-size:3vh;'>%"+ counter_last.toFixed(2) +" more unsuccessful</p1></div>";
              clearInterval(counts);
          }
      }
    }else if (counter >= 1){
      function updated(){
          var count= document.getElementById("counter");
          count.innerHTML="<div class='alert alert-success text-center mb-5 py-1 mt-5' style='margin:auto;width:80vw;'><p1 style='font-size:3vh;'>%"+ ++upto +" more successful</p1></div>";
          if(Math.floor(upto)===Math.floor(counter))
          {
            count.innerHTML="<div class='alert alert-success text-center mb-5 py-1 mt-5' style='margin:auto;width:80vw;'><p1 style='font-size:3vh;'>%"+ counter.toFixed(1) +" more successful</p1></div>";
              clearInterval(counts);
          }
      }
    }else if(counter > 0 && counter < 1){
      function updated(){
          var count= document.getElementById("counter");
          count.innerHTML="<div class='alert alert-success text-center mb-5 py-1 mt-5' style='margin:auto;width:80vw;'><p1 style='font-size:3vh;'>%"+ counter.toFixed(1) +" more successful</p1></div>";
          if(Math.floor(upto+1)===Math.round(counter))
          {
              clearInterval(counts);
          }
      }
    }else if(counter < 0 && counter > -1){
      function updated(){
          var count= document.getElementById("counter");
          count.innerHTML="<div class='alert alert-danger text-center mb-5 py-1 mt-5' style='margin:auto;width:80vw;'><p1 style='font-size:3vh;'>%"+ counter_last.toFixed(1) +" more unsuccessful</p1></div>";
          if(Math.floor(upto-1)===Math.floor(counter_last))
          {
              clearInterval(counts);
          }
      }
    }
    else{
      function updated(){
          var count= document.getElementById("counter");
          count.innerHTML="<div class='alert alert-info text-center mb-5 py-1 mt-5' style='margin:auto;width:80vw;'><p1 style='font-size:3vh;'>The products have the same quality.</p1></div>";
          if(Math.floor(upto)===Math.floor(counter))
          {
              clearInterval(counts);
          }
      }
    }
    //Counter Delay Part.
let counts=setInterval(updated,80);
 document.getElementById("table1").style.display = "none";
 }
}

