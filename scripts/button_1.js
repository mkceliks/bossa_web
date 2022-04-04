
function buttonCall_1() {
  if (document.getElementById("table1").style.display === "none") {
    //table1.display Değişikliği
   document.getElementById("table1").style.display = "block";
   document.getElementById("table2").style.display = "none";
   document.getElementById("table2_header").style.display = "none";
   }
}
export { buttonCall_1 };