#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList = [];
let conditions = true;

console.log(chalk.magenta.bold ("\n\t TODO-LIST APPLICATION \n"));

while(conditions){
    let addTask = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message: chalk.greenBright("Enter Your New Task:")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-list successfully`);

    let addMoreTask = await inquirer.prompt([
        {
            name:"addmore",
            type:"confirm",
            message:chalk.greenBright("Do youu want to add  more task ?"),
            default:"False"
        }
    ]);
    conditions = addMoreTask.addmore

}
console.log (chalk.yellowBright("Your Updated Todo-List:" , todoList));

