<<<<<<< HEAD
var num, den, dec;

num = document.getElementById("tally").value;
den = document.getElementById("totalPoints").value;
dec = +(((num / den) * 100).toFixed(2)); 

function addOne() {
  document.getElementById("tally").value++;
}

function loseOne() {
  document.getElementById("tally").value--;
}

function genGrade() { 
  
  document.getElementById("grade").innerHTML = "Grade: " + dec + "%";
}

function reset() {
   document.getElementById("tally").value = 0;
}

gradebookArray = [];

function enterGrade() {
  
  
  document.getElementById("gradebook").innerHTML = gradebookArray;
}

 /*
  if (dec >= 90.00) {
=======
/*

  if (dec >= 90) {
>>>>>>> origin/master
      var letter = A;
  } else if (dec < 90 && dec >= 80) {
      var letter = B;
  }
    else if (dec < 80 && dec >= 70) {
      var letter = C;
  }
    else if (dec < 70 && dec >= 60) {
      var letter = D;
  }
    else if (dec < 60) {
      var letter = F;
  } else {
      var letter = "Please enter total points";
  }
<<<<<<< HEAD
*/
=======

*/
function addOne() {
  document.getElementById("tally").value++;
}

function loseOne() {
  document.getElementById("tally").value--;
}

function genGrade() { 
  var num = document.getElementById("tally").value;
  var den = document.getElementById("totalPoints").value;
  var dec = +(((num / den) * 100).toFixed(2)); 
  document.getElementById("grade").innerHTML = "Grade: " + dec + "%"; 

  
}

function reset() {
   document.getElementById("tally").value = 0;
}
>>>>>>> origin/master