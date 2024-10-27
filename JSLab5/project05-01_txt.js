"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Adrienne 
      Date: 10/29/2023  

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];
let timeID = " "; 
let questionList = document.querySelectorAll("div#quiz input");
// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

startQuiz.onclick = function(){ //to start countdown

// Get the element with id "overlay"
var overlay = document.getElementById("overlay");
 
// Set the class attribute to "showquiz"
overlay.className = "showquiz";
timeID = setInterval(countDown, 1000);

}; 
//function to start countdown 
function countDown() {
   
   // Update the countdown every 1 second (1000 milliseconds)
      let  totalCorrect = 0;
       
       // Display the countdown
       quizClock.value = timeLeft;
       
       timeLeft--;

       // If the countdown is over, display a message and clear the interval
       if (timeLeft === 0) {
           clearInterval(timeID);
           totalCorrect = checkAnswers();
            
       }
       if(totalCorrect == correctAnswers.length){//statement to display to user they got all answers correct
          alert("Congrtulations you got a 100% !!!!!");
       }
       else{
       displayAnswers();
       timeLeft;
       quizClock.value = timeLeft;
       overlay = document.getElementsByClassName("hidequiz");
       }
     
   }


// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}
function displayAnswers(){//function to display to user how many question they got wrong out of 5 

   const answer1 = document.getElementById("question1").value;
   const answer2 = document.getElementById("question2").value;
   const answer3 = document.getElementById("question3").value;
   const answer4 = document.getElementById("question4").value;
   const answer5 = document.getElementById("question5").value;
  var  wronganswer = 0; 

if( answer1.trim() !== correctAnswers[0]){
   wronganswer++;

}
if( answer2.trim() !== correctAnswers[1]){
   wronganswer++;

}
if( answer3.trim() !== correctAnswers[2]){
   wronganswer++;

}
if( answer4.trim() !== correctAnswers[3]){
   wronganswer++;

}
if( answer5.trim() !== correctAnswers[4]){
   wronganswer++;

}
else{

 return alert("You have: " + wronganswer + " wrong answers out of " + correctAnswers.length);

}
}
