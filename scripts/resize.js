import { chart } from "./chart.js";
//import { chart_plugins } from "./chart_plugins.js";
//********************HER RESİZE OLDUGUNDA ÇALIŞACAK FONKSİYON**************
function resize() {
    //Yukarıda olan işlemler aynen gerçekleşiyor
    if(document.getElementById("table2").style.display === "block"){
      document.getElementById("table2").style.display = "none";
    document.getElementById("table2").innerHTML = "";
      document.getElementById("table2").style.display = "block";
      document.getElementById("table2").innerHTML = "<div class='container'><div class='row'><div style ='margin:auto;text-align:center;font-weight:bold;' class='col-md-12'><canvas style='font-weight:bold;width:100%;height:50vh;' id='myChart'></canvas></div><div style ='margin:auto;text-align:center;font-weight:bold;' class='col-md-12'><canvas  style ='width:100%;height:50vh;' id='myChart_2'></canvas></div><div style ='margin:auto;text-align:center;font-weight:bold;' class='col-md-12'><canvas  style ='width:100%;height:50vh;' id='myChart_3'></canvas></div><div style ='margin:auto;text-align:center;font-weight:bold;' class='col-md-12'><canvas  style ='width:100%;height:50vh;' id='myChart_4'></canvas></div></div></div>";
    //******************************
//chart_plugins();
//İlk Grafiğimiz
//İlk grafiğimiz için data ve renk paketleri.
chart(1500,500,'myChart');
//*************************İLK GRAFİĞİMİZ BİTTİ. */
//İKİNCİ GRAFİĞİMİZ
chart(2000,500,'myChart_2');
//UCUNCU GRAFİĞİMİZ
chart(2000,500,'myChart_3');
//DÖRDÜNCÜ GRAFİĞİMİZ
chart(2000,500,'myChart_4');
}
}
//RESİZE FONKSİYONUNUN BİTTİĞİ YER. *****************************************
export {resize};