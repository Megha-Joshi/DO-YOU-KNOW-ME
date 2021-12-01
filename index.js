var readlineSync = require("readline-sync");

var userName = readlineSync.question("Hiiiiiii!! Can you please tell me your name? \n");

console.log("WELCOME " +userName + " to DO YOU KNOW MEGHA?\n");
var score=0;

function play(question,answer){

  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Yessss!!! You're absolutely right!");
    score = score+1;
  }
  else{
    console.log("OOPS!!!! You're wrong!");
    console.log("Correct answer is : ",answer);
  }

  console.log("Your score : " , score);
  console.log("------");
}

console.log("Let's start \nGoodluck!");
var questions = [
  {
    question : "What does my name mean? ",
    answer : "Cloud"
  },
  {
    question : "Where do I live?" ,
    answer : "Indore"
  },
  {
    question : "Do I like waking up early or staying up late?" ,
    answer : "Staying up late"
  },
  {
    question : "Who is my favourite sportsperson?",
    answer : "Virat Kohli"
  },
  {
    question : "What am I studying currently?",
    answer : "MCA"
  },
  {
    question : "What's my favourite hobby?",
    answer : "Watching Cricket"
  },
  {
    question : "When was I born?",
    answer : "23 July"
  },
  {
    question : "Can you tell my zodiac sign?",
    answer : "Leo"
  },
];

for(var i=0;i<questions.length;i++)
{
  var current = questions[i];
  play(current.question,current.answer);
}

console.log("YAY!!!!! You scored: " ,score);
if(score>5){
  console.log("YOU KNOW ME SOOO WELL!!");
}
else{
  console.log("OHH, YOU DON'T KNOW ME AT WELL!!");
}
console.log("Thank you for playing.");
