document.getElementById("myBtn2").onclick = function() {myFunction2()};

function myFunction2(){
    if (document.getElementById("table2").style.display === "none") {

          //BUTONA TIKLANDIGI ANDA GÖRÜNECEK KISIM.
          //table2 görünür hale geliyor.
      document.getElementById("table2").style.display = "block"; 
      //table 2 id'sine sahip html kodunun içerisine canvas ekliyoruz ve grafik gözüküyor.
      document.getElementById("table2").innerHTML = "<div class='container'><div class='row'><div class='col-md-6'><canvas style ='margin:auto;width:100%;height:70vh;' id='myChart'></canvas></div><div class='col-md-6'><canvas style ='margin:auto;width:100%;height:70vh;' id='myChart_2'></canvas></div></div>";
          //table2_header kısmı görünür hale geliyor.
      document.getElementById("table2_header").style.display = "block";



//********************HER RESİZE OLDUGUNDA ÇALIŞACAK FONKSİYON**************
    window.addEventListener("resize", function() {

      //Yukarıda olan işlemler aynen gerçekleşiyor
      if(document.getElementById("table2").style.display === "block"){
        document.getElementById("table2").style.display = "none";
      document.getElementById("table2").innerHTML = "";
        document.getElementById("table2").style.display = "block";
        document.getElementById("table2").innerHTML = "<div class='container'><div class='row'><div class='col-md-6'><canvas style ='margin:auto;width:100%;height:70vh;' id='myChart'></canvas></div><div class='col-md-6'><canvas style ='margin:auto;width:100%;height:70vh;' id='myChart_2'></canvas></div></div>";
      //******************************
//İlk grafiğimiz için data ve renk paketleri.
var data = [1500,500];
colour_array = ["#11d8ee", "#3cc457"];
let sum = data.reduce(function(a, b) {
  return a + b;
}, 0);

var perc = 0;
perc_array = [];
for (i = 0; i < data.length; i++) {
  perc = (data[i] / sum * 100).toFixed(2);
  perc_array.push(perc);
}

Chart.plugins.register({ 
  id: 'paddingBelowLegends',
  beforeInit: function(chart, options) {//Boyut Ayarı Yapılandırıldı
    chart.legend.afterFit = function() {
      this.height = this.height + 50; //50 değeri değiştirilebilir.
    };
  },
  beforeDraw: function(chart) {//Grafiğin ortasına text yazıldı.
    if (chart.config.options.elements.center) {
      var ctx = chart.chart.ctx;
      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var maxFontSize = centerConfig.maxFontSize || 75;
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
      ctx.font = "30px " + fontStyle;

      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = (chart.innerRadius * 2);
      var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
      var minFontSize = centerConfig.minFontSize;
      var lineHeight = centerConfig.lineHeight || 25;
      var wrapText = false;

      if (minFontSize === undefined) {
        minFontSize = 20;
      }

      if (minFontSize && fontSizeToUse < minFontSize) {
        fontSizeToUse = minFontSize;
        wrapText = true;
      }
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
      ctx.font = fontSizeToUse + "px " + fontStyle;
      ctx.fillStyle = color;

      if (!wrapText) {
        ctx.fillText(txt, centerX, centerY);
        return;
      }

      var words = txt.split(' ');
      var line = '';
      var lines = [];
      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = ctx.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > elementWidth && n > 0) {
          lines.push(line);
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      }
      centerY -= (lines.length / 2) * lineHeight;

      for (var n = 0; n < lines.length; n++) {
        ctx.fillText(lines[n], centerX, centerY);
        centerY += lineHeight;
      }
      ctx.fillText(line, centerX, centerY);
    }
  }
});
//İlk Grafiğimiz
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
        {
            label: "Overall Statistics",
      data: data,
      value: data[(colour_array.length - 1)],
      backgroundColor: colour_array,
      borderWidth: 2
    }
]
  },
  options: {
    responsive:false,
    mainAspectRatio:false,
    cutoutPercentage: 80,//Grafiğin Kalınlık Ayarı.
    layout: {
      padding: {
        bottom: 30
      }
    },
    elements: {
      center: {
        text: '%75 Success',
        color: 'black', // Grafiğin ortasındaki yazının rengi
        fontStyle: 'Arial', // Grafiğin ortasındaki yazının fontu
        sidePadding: 20,
        minFontSize: 25, 
        lineHeight: 25 
      }
    },
    valueLabel: {
      formatter: Math.round,
      display: true
    },
    plugins: {
      beforeInit: function(chart, options) {
        chart.legend.afterFit = function() {
          this.height = this.height + 50;
        };
      },
      //Grafiğin Dışarısındaki Değer Kutucukları Yapılandırılması.
      outlabels: {
        display: true,  
        text: function(label) {
          console.log(label);
          highest_index = label['labels'].length - 1;
          current_index = label['dataIndex']; 
          value = label['dataset']['data'][label['dataIndex']]; 
          const v = parseFloat(label['percent']) * 100;
          if (current_index != highest_index) 
          {
            return value+',\n'+`${v.toFixed(2)}%`;
          } else {
            return false;
          }
        },

        color: 'white',//Değerlerin yazı rengi
        stretch: 0, //Değerlerin Dışarıya doğru yada içeriye doğru olan paddingi.
        font: {
          resizable: true,
         minSize: 15,
         maxSize: 15
        },
        padding: {
          /*left:25,
          right: 0
          top:0,
          bottom:0*/
        }
      },
    },
    rotation: 1 * Math.PI,
    circumference: 2 * Math.PI,
    //Grafiğin Üstüne gelince çıkan tooltip.
    tooltips: {
      enabled: true,
      mode: 'single',
      filter: function(tooltipItem, data) { 
        var label = data.labels[tooltipItem.index];
        if (label == "Others") {
          return false;
        } else {
          return true;
        }
      },
      callbacks: { 
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          hovered_index = tooltipItem.index;
          data_length = data.datasets[0].data.length;
          var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue;
          });
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = (currentValue / total * 100).toFixed(2);
          return currentValue + ' , ' + percentage + "%";
        }
      }
    }
  }
});
//*************************İLK GRAFİĞİMİZ BİTTİ. */
//İKİNCİ GRAFİĞİMİZ

var data_2 = [2000,500];  //ikinci grafiğimizin dataları

const ctx_2 = document.getElementById('myChart_2').getContext('2d');
const myChart_2 = new Chart(ctx_2, {
  type: "doughnut",
  data: {
    datasets: [
        {
            label: "Overall Statistics",
      data: data_2,
      value: data_2[(colour_array.length - 1)], 
      backgroundColor: colour_array,
      borderWidth: 2
    }
]
  },
  options: {
    responsive:false,
    mainAspectRatio:false,
    cutoutPercentage: 80,//Grafiğimizin Kalınlık Ayarı.
    layout: {
      padding: {
        bottom: 30
      }
    },
    elements: {
      center: {
        text: '%80 Success',
        color: 'black', // Grafiğin ortasındaki yazının rengi.
        fontStyle: 'Arial', // Grafiğin ortasındaki yazının fontu
        sidePadding: 20, 
        minFontSize: 25, 
        lineHeight: 25 
      }
    },
    valueLabel: {
      formatter: Math.round,
      display: true
    },
    plugins: {
      beforeInit: function(chart, options) {
        chart.legend.afterFit = function() {
          this.height = this.height + 50;
        };
      },
      //Grafiğin üstündeki değer kutucuklarının yapılandırılması.
      outlabels: {
        display: true, 
        text: function(label) {
          highest_index = label['labels'].length - 1; 
          current_index = label['dataIndex']; 
          value = label['dataset']['data'][label['dataIndex']]; 
          const v = parseFloat(label['percent']) * 100;
          if (current_index != highest_index) 
          {
            return value+',\n'+`${v.toFixed(2)}%`;
          } else {
            return false;
          }
        },

        color: 'white',//kutucukların yazı rengi.
        stretch: 0, //Kutucukların Dışarı Yada İçeri doğru yapılandırılması.
        font: {//Kutucukların yazı fontu
          resizable: true,
         minSize: 15,
         maxSize: 15
        },
        padding: {
          /*left:25,
          right: 0
          top:0,
          bottom:0*/
        },
   
      },
    },
    rotation: 1 * Math.PI,
    circumference: 2 * Math.PI,
    tooltips: {//Grafiğin üstüne gelince çıkan tooltip barı.
      enabled: true,
      mode: 'single',
      filter: function(tooltipItem, data_2) { 
        var label = data_2.labels[tooltipItem.index];
        if (label == "Others") {
          return false;
        } else {
          return true;
        }
      },
      callbacks: { //yüzde ayarlaması.
        label: function(tooltipItem, data_2) {
          var dataset = data_2.datasets[tooltipItem.datasetIndex];
          hovered_index = tooltipItem.index;
          data_length = data_2.datasets[0].data.length;
          var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue;
          });
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = (currentValue / total * 100).toFixed(2);
          return currentValue + ' , ' + percentage + "%";
        }
      }
    }
  }
});
}
});
//RESİZE FONKSİYONUNUN BİTTİĞİ YER. *****************************************



var data = [1500,500];
colour_array = ["#11d8ee", "#3cc457"];
let sum = data.reduce(function(a, b) {
  return a + b;
}, 0);

var perc = 0;
perc_array = [];
for (i = 0; i < data.length; i++) {
  perc = (data[i] / sum * 100).toFixed(2);
  perc_array.push(perc);
}

Chart.plugins.register({ 
  id: 'paddingBelowLegends',
  beforeInit: function(chart, options) {//Boyut Ayarı Yapılandırıldı
    chart.legend.afterFit = function() {
      this.height = this.height + 50; //50 değeri değiştirilebilir.
    };
  },
  beforeDraw: function(chart) {//Grafiğin ortasına text yazıldı.
    if (chart.config.options.elements.center) {
      var ctx = chart.chart.ctx;
      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var maxFontSize = centerConfig.maxFontSize || 75;
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
      ctx.font = "30px " + fontStyle;

      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = (chart.innerRadius * 2);
      var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
      var minFontSize = centerConfig.minFontSize;
      var lineHeight = centerConfig.lineHeight || 25;
      var wrapText = false;

      if (minFontSize === undefined) {
        minFontSize = 20;
      }

      if (minFontSize && fontSizeToUse < minFontSize) {
        fontSizeToUse = minFontSize;
        wrapText = true;
      }
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
      ctx.font = fontSizeToUse + "px " + fontStyle;
      ctx.fillStyle = color;

      if (!wrapText) {
        ctx.fillText(txt, centerX, centerY);
        return;
      }

      var words = txt.split(' ');
      var line = '';
      var lines = [];
      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = ctx.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > elementWidth && n > 0) {
          lines.push(line);
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      }
      centerY -= (lines.length / 2) * lineHeight;

      for (var n = 0; n < lines.length; n++) {
        ctx.fillText(lines[n], centerX, centerY);
        centerY += lineHeight;
      }
      ctx.fillText(line, centerX, centerY);
    }
  }
});
//İlk Grafiğimiz
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
        {
            label: "Overall Statistics",
      data: data,
      value: data[(colour_array.length - 1)],
      backgroundColor: colour_array,
      borderWidth: 2
    }
]
  },
  options: {
    responsive:false,
    mainAspectRatio:false,
    cutoutPercentage: 80,//Grafiğin Kalınlık Ayarı.
    layout: {
      padding: {
        bottom: 30
      }
    },
    elements: {
      center: {
        text: '%75 Success',
        color: 'black', // Grafiğin ortasındaki yazının rengi
        fontStyle: 'Arial', // Grafiğin ortasındaki yazının fontu
        sidePadding: 20,
        minFontSize: 25, 
        lineHeight: 25 
      }
    },
    valueLabel: {
      formatter: Math.round,
      display: true
    },
    plugins: {
      beforeInit: function(chart, options) {
        chart.legend.afterFit = function() {
          this.height = this.height + 50;
        };
      },
      //Grafiğin Dışarısındaki Değer Kutucukları Yapılandırılması.
      outlabels: {
        display: true,  
        text: function(label) {
          console.log(label);
          highest_index = label['labels'].length - 1;
          current_index = label['dataIndex']; 
          value = label['dataset']['data'][label['dataIndex']]; 
          const v = parseFloat(label['percent']) * 100;
          if (current_index != highest_index) 
          {
            return value+',\n'+`${v.toFixed(2)}%`;
          } else {
            return false;
          }
        },

        color: 'white',//Değerlerin yazı rengi
        stretch: 0, //Değerlerin Dışarıya doğru yada içeriye doğru olan paddingi.
        font: {
          resizable: true,
         minSize: 15,
         maxSize: 15
        },
        padding: {
          /*left:25,
          right: 0
          top:0,
          bottom:0*/
        }
      },
    },
    rotation: 1 * Math.PI,
    circumference: 2 * Math.PI,
    //Grafiğin Üstüne gelince çıkan tooltip.
    tooltips: {
      enabled: true,
      mode: 'single',
      filter: function(tooltipItem, data) { 
        var label = data.labels[tooltipItem.index];
        if (label == "Others") {
          return false;
        } else {
          return true;
        }
      },
      callbacks: { 
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          hovered_index = tooltipItem.index;
          data_length = data.datasets[0].data.length;
          var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue;
          });
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = (currentValue / total * 100).toFixed(2);
          return currentValue + ' , ' + percentage + "%";
        }
      }
    }
  }
});
//*************************İLK GRAFİĞİMİZ BİTTİ. */
//İKİNCİ GRAFİĞİMİZ

var data_2 = [2000,500];  //ikinci grafiğimizin dataları

const ctx_2 = document.getElementById('myChart_2').getContext('2d');
const myChart_2 = new Chart(ctx_2, {
  type: "doughnut",
  data: {
    datasets: [
        {
            label: "Overall Statistics",
      data: data_2,
      value: data_2[(colour_array.length - 1)], 
      backgroundColor: colour_array,
      borderWidth: 2
    }
]
  },
  options: {
    responsive:false,
    mainAspectRatio:false,
    cutoutPercentage: 80,//Grafiğimizin Kalınlık Ayarı.
    layout: {
      padding: {
        bottom: 30
      }
    },
    elements: {
      center: {
        text: '%80 Success',
        color: 'black', // Grafiğin ortasındaki yazının rengi.
        fontStyle: 'Arial', // Grafiğin ortasındaki yazının fontu
        sidePadding: 20, 
        minFontSize: 25, 
        lineHeight: 25 
      }
    },
    valueLabel: {
      formatter: Math.round,
      display: true
    },
    plugins: {
      beforeInit: function(chart, options) {
        chart.legend.afterFit = function() {
          this.height = this.height + 50;
        };
      },
      //Grafiğin üstündeki değer kutucuklarının yapılandırılması.
      outlabels: {
        display: true, 
        text: function(label) {
          highest_index = label['labels'].length - 1; 
          current_index = label['dataIndex']; 
          value = label['dataset']['data'][label['dataIndex']]; 
          const v = parseFloat(label['percent']) * 100;
          if (current_index != highest_index) 
          {
            return value+',\n'+`${v.toFixed(2)}%`;
          } else {
            return false;
          }
        },

        color: 'white',//kutucukların yazı rengi.
        stretch: 0, //Kutucukların Dışarı Yada İçeri doğru yapılandırılması.
        font: {//Kutucukların yazı fontu
          resizable: true,
         minSize: 15,
         maxSize: 15
        },
        padding: {
          /*left:25,
          right: 0
          top:0,
          bottom:0*/
        },
   
      },
    },
    rotation: 1 * Math.PI,
    circumference: 2 * Math.PI,
    tooltips: {//Grafiğin üstüne gelince çıkan tooltip barı.
      enabled: true,
      mode: 'single',
      filter: function(tooltipItem, data_2) { 
        var label = data_2.labels[tooltipItem.index];
        if (label == "Others") {
          return false;
        } else {
          return true;
        }
      },
      callbacks: { //yüzde ayarlaması.
        label: function(tooltipItem, data_2) {
          var dataset = data_2.datasets[tooltipItem.datasetIndex];
          hovered_index = tooltipItem.index;
          data_length = data_2.datasets[0].data.length;
          var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue;
          });
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = (currentValue / total * 100).toFixed(2);
          return currentValue + ' , ' + percentage + "%";
        }
      }
    }
  }
});
//*********************************************** */
document.getElementById("counter").style.display = "block";

//Counter hesaplanması.
var counter = (1 - (1129/1000)) * 100;
var counter_last = Math.abs(counter);

//Counter detaylı hesaap fonksiyonu ve ekrana yazdırılması.
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
    //Counter'a delay veren kısım.
let counts=setInterval(updated,80);
 document.getElementById("table1").style.display = "none";
 }
}