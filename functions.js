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
    document.getElementById("grade").value = "!!";
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

// Export Table as CSV ; CREDIT: https://bl.ocks.org/kalebdf/ee7a5e7f44416b2116c0

 $(document).ready(function () {
    function exportTableToCSV($table, filename) {
        var $headers = $table.find('tr:has(th)')
            ,$rows = $table.find('tr:has(td)')

            // Temporary delimiter characters unlikely to be typed by keyboard
            // This is to avoid accidentally splitting the actual contents
            ,tmpColDelim = String.fromCharCode(11) // vertical tab character
            ,tmpRowDelim = String.fromCharCode(0) // null character

            // actual delimiter characters for CSV format
            ,colDelim = '","'
            ,rowDelim = '"\r\n"';

            // Grab text from table into CSV formatted string
            var csv = '"';
            csv += formatRows($headers.map(grabRow));
            csv += rowDelim;
            csv += formatRows($rows.map(grabRow)) + '"';

            // Data URI
            var csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);

        // For IE (tested 10+)
        if (window.navigator.msSaveOrOpenBlob) {
            var blob = new Blob([decodeURIComponent(encodeURI(csv))], {
                type: "text/csv;charset=utf-8;"
            });
            navigator.msSaveBlob(blob, filename);
        } else {
            $(this)
                .attr({
                    'download': filename
                    ,'href': csvData
                    //,'target' : '_blank' //if you want it to open in a new window
            });
        }

        //------------------------------------------------------------
        // Helper Functions 
        //------------------------------------------------------------
        // Format the output so it has the appropriate delimiters
        function formatRows(rows){
            return rows.get().join(tmpRowDelim)
                .split(tmpRowDelim).join(rowDelim)
                .split(tmpColDelim).join(colDelim);
        }
        // Grab and format a row from the table
        function grabRow(i,row){
             
            var $row = $(row);
            //for some reason $cols = $row.find('td') || $row.find('th') won't work...
            var $cols = $row.find('td'); 
            if(!$cols.length) $cols = $row.find('th');  

            return $cols.map(grabCol)
                        .get().join(tmpColDelim);
        }
        // Grab and format a column from the table 
        function grabCol(j,col){
            var $col = $(col),
                $text = $col.text();

            return $text.replace('"', '""'); // escape double quotes

        }
    }


    // This must be a hyperlink
    $("#export").click(function (event) {
        // var outputFile = 'export'
        var outputFile = window.prompt("Name your file (Note: This won't have any effect on Safari)") || 'export';
        outputFile = outputFile.replace('.csv','') + '.csv'
         
        // CSV
        exportTableToCSV.apply(this, [$('#dvData > table'), outputFile]);
        
        // IF CSV, don't do event.preventDefault() or return false
        // We actually need this to be a typical hyperlink
    });
});