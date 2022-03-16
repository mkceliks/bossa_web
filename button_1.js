document.getElementById("myBtn1").onclick = function() {myFunction1()};
function myFunction1() {
  if (document.getElementById("table1").style.display === "none") {
    //table1.display becames block type from none here.
   document.getElementById("table1").style.display = "block";
   document.getElementById("table2").style.display = "none";
   document.getElementById("table2_header").style.display = "none";
   document.getElementById("counter").style.display = "none";
   }
}