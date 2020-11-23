var readLineSync = require("readline-sync");
var chalk  = require("chalk");
var userName = readLineSync.question("May I know your name ?\n");

console.log("Hello, "+chalk.blue.bold(userName)+"\nLet's begin the quiz on "+ chalk.cyan.underline("OFFICE") +" tv show");
var score = 0
var questions = [
  {
    question:"The casting team originally wanted who to audition for the role of Dwight?\na. John\nb. Steve\nc. Angela\n",
    answer:"a"
  },
  {
    question:"Which character became Jim’s love interest after he moved to the Stamford branch in season three and joined the Scranton office during the merger?\na. Karen\nb. Pam\nc. Angela\n",
    answer:"a"
  },
  {
    question:"Dwight owns and runs a farm in his spare time. What does this farm primarily produce?\na. Peas\nb. Potatoes\nc. Beets\n",
    answer:"c"
  },
  {
    question:"Who calls Jim by the nicknames “Tuna” or “Big Tuna”?\na. Andy\nb. Dwight\nc. Michael\n",
    answer:"a"
  },
  {
    question:"What of the following colors does Angela think is “whore-ish”?\na. Green\nb. Orange\nc. Purple\n",
    answer:"a"
  },
  {
    question:"Which actor shares his entire name with his character?\na. Creed\nb. John\nc. Steve\n",
    answer:"a"
  },
  {
    question:"Through out the show it was revealed that one of the members of the office graduated High School with Michael. Who was it?\na. Phyllis\nb. Creed\nc. Dwight\n",
    answer:"a"
  },
  {
    question:"Which cast member was having an affair with Angela’s fiancé, the senator?\na. Kevin\nb. Jim\nc. Oscar\n",
    answer:"c"
  },
  {
    question:"Whose mother does Michael date?\na. Phyllis\nb. Pam\nc. Angela\n",
    answer:"b"
  }

]

var highScores = [
  {
    name :"Devi",
    score:7
  },
  {
    name:"Hima",
    score:5
  }
]

function play(question,answer){
  var userAnswer = readLineSync.question(chalk.red(question))
  if (userAnswer === answer){
    score ++;
    console.log("------------------")
    console.log("You are "+chalk.keyword('blue')("correct !!"))
    console.log("------------------")
  }else{
    console.log("------------------")
    console.log("You are "+chalk.keyword('orange')("wrong !!"))
    console.log("------------------")
  }
  console.log("Your current score is :", score);
  console.log("------------------")

}

for(var i =0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer)
}
console.log("You have completed the quiz !!")
console.log("Your score is :",score)
console.log("------------------")

for (var i =0 ;i<highScores.length;i++){
  if (highScores[i].score < score){
    console.log(`Congratulations !!! You have beaten the high score of ${highScores[i].name}`)
    console.log("Please send a screenshot of this image, so that I can add you to the list.")
    console.log("------------------")
    break
  }
}

console.log(chalk.redBright("High Scores"))
highScores.forEach( (person) => {
  console.log(`${person.name} ====> Score : ${person.score}`)
})