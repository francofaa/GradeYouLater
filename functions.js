var num, den, dec;

function addOne() {
  document.getElementById("tally").value++;
}

function loseOne() {
  document.getElementById("tally").value--;
}

function genGrade() { 
  num = document.getElementById("tally").value;
  den = document.getElementById("totalPoints").value;
  dec = +(((num / den) * 100).toFixed(2));
  if (isNaN(dec)) {
    dec = "<i style='color: red;'>!!</i>"
    document.getElementById("grade").innerHTML = "Please enter a number";
  } else {
    document.getElementById("grade").innerHTML = "Grade: " + dec + "%";
  }
  
}


function reset() {
   document.getElementById("tally").value = 0;
}

gradebookArray = [];

function enterGrade() {
  if (dec >= 90) {
      var letter = "A";
  } else if (dec < 90 && dec >= 80) {
      var letter = "B";
  }
    else if (dec < 80 && dec >= 70) {
      var letter = "C";
  }
    else if (dec < 70 && dec >= 60) {
      var letter = "D";
  }
    else if (dec < 60) {
      var letter = "F";
  } else {
      var letter = "Please enter total points";
  }
  gradebookArray.push({
    "student": document.getElementById('studentName').value,
    "assignment": document.getElementById('assignment').value,
    "score": dec,
    "letter": letter
  });
    var table = document.getElementById('gradebook');
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = gradebookArray[gradebookArray.length - 1].student;
    cell2.innerHTML = gradebookArray[gradebookArray.length - 1].assignment;
    cell3.innerHTML = gradebookArray[gradebookArray.length - 1].score;
    cell4.innerHTML = gradebookArray[gradebookArray.length - 1].letter;
}

function emailBook() {

}