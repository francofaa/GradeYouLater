# GradeYouLater
I wanted to create a simple grading system, hopefully to inevitably turn it into an app.

## Purpose
The user can

- Name an assignment
- Ascribe a point value to that assignment
- Enter in a student's name
- Increment the student's score by 1 as the user goes through grading the assignment
- Decrement in case of error
- Render a percentage grade based on the score
- Push the score, assignment, percentage grade, letter grade, and associated student to a table
- Export that table to CSV for entering into a gradebook

## Origin

I was helping grade some French worksheets for my girlfriend, when I thought there must be an easier way<sup>TM</sup>. We were tallying scores per section, writing the tallied score at the end of the worksheet, taking the percentage using a calculator, and writing that percentage and grade at the end, which she would later have to enter into a grade book. So! This app should be able to tally, spit out a percentage, assign it to a student and class assignment, and put all that info into a table, which can then be exported to CSV.

The table to CSV JQuery comes from here: https://bl.ocks.org/kalebdf/ee7a5e7f44416b2116c0
