
function chart(data_1,data_2,myChart,title){ //GRAFİK İÇİN GEREKLİ PARAMETRELER (data_1,data_2 = datalar ,,, myChart = chart id'si ,,, title = chart başlığı)
var data = [data_1,data_2];//GRAFİK DATALARI
var colour_array = ["#008000", "#ADD8E6"];//GRAFİK RENKLERİ

const ctx = document.getElementById(''+myChart+'').getContext('2d');
 myChart = new Chart(ctx, {
  type: "doughnut",//Chart Tipi
  data: {//Chart data detayları.
    datasets: [
        {
      data: data,
      value: data[(colour_array.length - 1)],
      backgroundColor: colour_array,
      borderWidth: 2
    }
]
  },//Chart data detay bitiş
  options: {  //Chart ayarları
    responsive: false,
      plugins: {
        datalabels: {//Chart üstünde yazı kısmı ayarlaması.
          anchor: 'end',
          align: 'end',
          labels: {
            value: {
              color: 'blue'
            }
          }
        }//Chart üstünde yazı kısmı ayarlaması bitiş.
      },
  tooltips:false,//Chart üstüne gelince cıkan yazı false.
    title: {//Her chart için başlık kısmı.
      display: true,
      text: title,//Parametreden gelen title yazısı.
      fontSize:40,
      fontStyle:'bold'
  },
    responsive:false,
    mainAspectRatio:false,
    cutoutPercentage: 65,//Grafiğin Kalınlık Ayarı.
}
 });
}
export {chart};