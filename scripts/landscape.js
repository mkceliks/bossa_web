import { chart } from "./chart.js";
import { landscape_html } from "./html_adding.js";

function landscape() {
    window.addEventListener("resize", () =>{//ARTIK HER TÜRLÜ RESİZE İŞLEMİNİ ALGILAMAYA BAŞLAYACAK.
      if(document.getElementById("table2").style.display === "block"){
        document.getElementById("table2").style.display = "none";
      document.getElementById("table2").innerHTML = "";
        document.getElementById("table2").style.display = "block";
        landscape_html();//Yatay HTML injeksiyonu.

  chart(1500,500,'myChart','title_1');//İLK GRAFİĞİMİZ

  chart(2000,500,'myChart_2','title_2');//İKİNCİ GRAFİĞİMİZ
  
  chart(2000,500,'myChart_3','title_3');//UCUNCU GRAFİĞİMİZ
  
  chart(2000,500,'myChart_4','title_4');//DÖRDÜNCÜ GRAFİĞİMİZ
  }
    });
}
export {landscape};