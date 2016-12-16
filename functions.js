// Our scores
var num, den;
var dec = "!!";


function addOne() {
  document.getElementById("tally").value++;
}

function loseOne() {
  document.getElementById("tally").value--;
}

// Create the grade
function genGrade() { 
  num = document.getElementById("tally").value;
  den = document.getElementById("totalPoints").value;
  dec = +(((num / den) * 100).toFixed(2));
  if (isNaN(dec)) {
    dec = "!!"
    document.getElementById("grade").value = "Please enter a number";
  } else {
    document.getElementById("grade").value = dec;
  }
  
}

// Reset the score for the next student
function reset() {
   document.getElementById("tally").value = 0;
   document.getElementById("studentName").value = "";
   document.getElementById('grade').innerHTML = "Grade:";
   letter = "!!";
   dec = "";
}

// Make the gradebook array
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
      var letter = "!!";
  }
  gradebookArray.push({
    "student": document.getElementById('studentName').value,
    "assignment": document.getElementById('assignment').value,
    "score": dec,
    "letter": letter,
    "tally": document.getElementById('tally').value
  });
    var table = document.getElementById('gradebook');
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = gradebookArray[gradebookArray.length - 1].student;
    cell2.innerHTML = gradebookArray[gradebookArray.length - 1].assignment;
    if (isNaN(dec)) {
      cell3.innerHTML = gradebookArray[gradebookArray.length - 1].score;
    } else {
      cell3.innerHTML = gradebookArray[gradebookArray.length - 1].score + "%";  
    }
    cell4.innerHTML = gradebookArray[gradebookArray.length - 1].letter;
    if (isNaN(num)) {
      cell5.innerHTML = "!!";
    } else {
      cell5.innerHTML = gradebookArray[gradebookArray.length - 1].tally;
    }
}

function emailBook(table, filename) {

}