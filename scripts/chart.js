function chart(data_1,data_2,myChart){ 

    var data = [data_1,data_2];
//Renk Paketi
var colour_array = ["#008000", "#ADD8E6"];

//İlk Grafiğimiz
const ctx = document.getElementById(''+myChart+'').getContext('2d');
 myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
        {
      data: data,
      value: data[(colour_array.length - 1)],
      backgroundColor: colour_array,
      borderWidth: 2
    }
]
  },
  options: {
    //BAŞLIK KISMI
      title: {
        display: true,
        text: 'Custom Chart Subtitle',

    },
    responsive:false,
    mainAspectRatio:false,
    cutoutPercentage: 65,//Grafiğin Kalınlık Ayarı.

    /*//Grafiğin ortasına text yazdırmak için gerekli.
    /*elements: {
      center: {
      text: text,
        color: 'black', // Grafiğin ortasındaki yazının rengi
        fontStyle: 'Arial', // Grafiğin ortasındaki yazının fontu
        sidePadding: 20,
        minFontSize: 25, 
        lineHeight: 25 
      }
    },*/

    valueLabel: {
      formatter: Math.round,
      display: true
    },
    plugins: {
       //Grafiğin üstündeki değer kutucuklarının yapılandırılması.
      outlabels: {
        display: true, 
        text: ' %p\n%v',
        color: 'white',//kutucukların yazı rengi.
        stretch: 0, //Kutucukların Dışarı Yada İçeri doğru yapılandırılması.
        borderRadius: 13,
        font: {//Kutucukların yazı fontu
          resizable: true,
         minSize: 17,
         maxSize: 17
        },
        padding: {
          left:10,
          right:10,
          top:10,
          bottom:10
        },
      },
    },
    layout: {
      padding: 20,//KUTUCUKLARIN TAMAMININ GORUNMESI ICIN KATILDI.
   },
    rotation: 1 * Math.PI,
    circumference: 2 * Math.PI,
    //Grafiğin Üstüne gelince çıkan tooltip.
    tooltips: {
      enabled: false,
    }
  }
});
}
export {chart};