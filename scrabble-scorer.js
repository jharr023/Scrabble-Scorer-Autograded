// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  let totalScore = 0;
  let score = 0;

	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			let score = parseInt(pointValue);
      letterPoints += '${score} ';
      totalScore += score;
         console.log(`Points for '${word[i]}': ${pointValue}\n`);
		 }
	  }
	}
  console.log(`Total score for '${word}': ${totalScore}`);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  let word = input.question("Let's play some scrabble! Enter a word to score: ");
  oldScrabbleScorer(word);
  //simpleScorer(word);
  //vowelBonusScorer(word);
};

function simpleScorer(word) {
  word = word.toUpperCase();
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    score++
    console.log(`Points for '${word[i]}': ${score}\n`);
  }
  return score
}

function vowelBonusScorer(word) {
  word = word.toUpperCase();
  let score = 0
  for (let i = 0; i < word.length; i++) {
    //if ('AEIOU'.includes(word[i])) {
      if (word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U") {
      score += 3;
      console.log(`Points for '${word[i]}': 3`);
    } else {
      score += 1;
      console.log(`Points for '${word[i]}': 1`);
    }
    //console.log(`Points for '${word[i]}': ${score}\n`);
  }
  console.log(`Total score for '${word}': ${score}`);
  return score;
}

let scrabbleScorer;

const scoringAlgorithms = [
  {name: 'Simple Score',
  description: 'Each letter is worth 1 point',
  scoringFunction: simpleScorer
},
{
  name: 'Bonus Values',
  description: 'Vowels are 3 points, consonants are 1 point',
  scoringFunction: vowelBonusScorer
},
{
  name: 'Scrabble',
  description: 'The traditional scoring algorithm',
  scoringFunction: oldScrabbleScorer
}
];

function scorerPrompt(word) {
 console.log('Which scoring algorithm would you like to use?\n');
  let selectedOption = input.question(`0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}\n1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}\n2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}\nEnter 0, 1, or 2: `);
  console.log('Scorer Method selected: ' + selectedOption);
  

  while (selectedOption !== '0' && selectedOption !== '1' && selectedOption !== '2') {
    selectedOption = input.question(`Invalid input. Please enter 0, 1, or 2: `);
  }
  return scoringAlgorithms[selectedOption];
}


function transform() {};

let newPointStructure;

function runProgram() {
  // initialPrompt();
  // scorerPrompt();
  console.log("Let's play some Scrabble!\n");
  let word = input.question("Enter a word to score: ");
   let selectedScorer = scorerPrompt();
   let score = selectedScorer.scoringFunction(word);
   console.log(`Score for '${word}' using ${selectedScorer.name}:`, score);
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
