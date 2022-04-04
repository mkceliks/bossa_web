import { buttonCall_1 } from './scripts/button_1.js';
import { buttonCall_2 } from './scripts/button_2.js';


//Button 1
document.getElementById("myBtn1").onclick = function() {
    buttonCall_1();
  };
buttonCall_1();//Button 1'e tıklandığında ekrana getiren fonksiyon

//Button 2
document.getElementById("myBtn2").onclick = function() {
    buttonCall_2();
};