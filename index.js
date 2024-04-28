#! /usr/bin/env node 
// first we install inquirer
import inquirer from "inquirer";
console.log("\n welcome to sadaf-wordcounter application \n");
// declare const variable "answes"
const answers = await inquirer.prompt([
    { name: "sentence", //property hoti hnye line
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.sentence.trim().split(" ");
//print the arry of words
console.log(words);
//print the word count of the sentence
console.log(`your sentence words count is ${words.length}`);
