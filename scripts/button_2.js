import { resize } from "./resize.js";
import { chart } from "./chart.js";
//GRAFIN MERKEZİNE YAZI YAZDIRMAK İÇİN
//import { chart_plugins } from "./chart_plugins.js";


function buttonCall_2(){
    if (document.getElementById("table2").style.display === "none") {

          //BUTONA TIKLANDIGI ANDA GÖRÜNECEK KISIM.
          //table2 görünür hale geliyor.
      document.getElementById("table2").style.display = "block"; 
      //table 2 id'sine sahip html kodunun içerisine canvas ekliyoruz ve grafik gözüküyor.
      document.getElementById("table2").innerHTML = "<div class='container'><div class='row'><div style ='margin:auto;text-align:center;font-weight:bold;' class='col-md-12'><canvas style='font-weight:bold;width:100%;height:50vh;' id='myChart'></canvas></div><div style ='margin:auto;text-align:center;font-weight:bold;' class='col-md-12'><canvas  style ='width:100%;height:50vh;' id='myChart_2'></canvas></div><div style ='margin:auto;text-align:center;font-weight:bold;' class='col-md-12'><canvas  style ='width:100%;height:50vh;' id='myChart_3'></canvas></div><div style ='margin:auto;text-align:center;font-weight:bold;' class='col-md-12'><canvas  style ='width:100%;height:50vh;' id='myChart_4'></canvas></div></div></div>";
          //table2_header kısmı görünür hale geliyor.
      document.getElementById("table2_header").style.display = "block";

//Resize Fonksiyonu Kullanımı
window.addEventListener("resize",resize);
//Resize Bitiş

//GRAFIN MERKEZİNE YAZI YAZDIRMAK İÇİN
//chart_plugins();

//BİRİNCİ GRAFİK
chart(1500,500,'myChart');

//İKİNCİ GRAFİĞİMİZ

chart(2000,1000,'myChart_2');

//UCUNCU GRAFİK

chart(2000,500,'myChart_3');

//DÖRDÜNCÜ GRAFİK

chart(2000,500,'myChart_4');

 document.getElementById("table1").style.display = "none";
 }
}
export { buttonCall_2 };