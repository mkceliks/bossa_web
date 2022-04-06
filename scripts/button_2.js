import { chart } from "./chart.js";
import { main_html } from "./html_adding.js";
import { landscape } from "./landscape.js";
import { portrait } from "./portrait.js";
function buttonCall_2(){
    if (document.getElementById("table2").style.display === "none") {//BUTONA TIKLANDIGI ANDA GÖRÜNECEK KISIM.
         
      document.getElementById("table2").style.display = "block"; //table2 görünür hale geliyor.
       
       main_html();//ilk html görünümü
      
      document.getElementById("table2_header").style.display = "block";//table2_header kısmı görünür hale geliyor.

window.addEventListener("orientationchange",event =>{//Resize Fonksiyonu Kullanımı

    if(event.target.screen.orientation.type == "landscape-primary"){//Ekranı çevirdikten sonra resize fonksiyonu çalışır.
        landscape();
    }else if(event.target.screen.orientation.type == "portrait-primary"){//Ekranı çevirdikten sonra resize fonksiyonu çalışır.
       portrait();
    }else{//Ekranı çevirdikten sonra resize fonksiyonu çalışır.
        portrait();
    }
});//Resize Bitiş
chart(1500,500,'myChart','title_1');//BİRİNCİ GRAFİK

chart(2000,1000,'myChart_2','title_2');//İKİNCİ GRAFİĞİMİZ

chart(2000,500,'myChart_3','title_3');//UCUNCU GRAFİK

chart(2000,500,'myChart_4','title_4');//DÖRDÜNCÜ GRAFİK

 document.getElementById("table1").style.display = "none";
 }
}
export { buttonCall_2 };