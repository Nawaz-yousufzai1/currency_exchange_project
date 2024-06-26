#! /usr/bin/env node
import inquirer from "inquirer";
/*
// Define the list of currencies and their exchange rates
let exchange_rate: any={
    "USD":1,  // Base Currency
    "EUR":0.9, // European Currency (Euro)
    "JYP":113,  // Japanes Currency (Yen)
    "CAD" :1.3, // Canadian Dollar
    "AUD" : 1.65, //Austrqalian Dollar
    "PKR" : 280  // Pakistan Rupees
    // Add more currencies and their exchange rates here
}
// prompt the user to select currencies to convert from and to
let user_answer= await inquirer.prompt([
    {
        name:"from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into",
        choices : ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"amount",
        type:"type",
        message:"Enter the amount to convert:"
    }
]);
// perform currency conversion by using formula
let from_amount=exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount =user_answer.amount

// formula of conversion
let base_amount =amount/from_amount
let converted_amount =base_amount*to_amount
// Display the converted amount
console.log(`Converted Amount= ${converted_amount.toFixed}`);
*/
const currency = {
    "USD": 1, // Base Currency
    "EUR": 0.9, // European Currency (Euro)
    "JYP": 113, // Japanes Currency (Yen)
    "CAD": 1.3, // Canadian Dollar
    "AUD": 1.65, //Austrqalian Dollar
    "PKR": 280 // Pakistan Rupees
    // Add more currencies and their exchange rates here
};
// prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number"
    }
]);
// perform currency conversion by using formula let userFromCurrency =user_answer.from
let userFromCurrency = user_answer.from;
let userToCurrency = user_answer.to;
let fromAmount = currency[userFromCurrency]; // exchange rate
let toAmount = currency[userToCurrency]; // exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // USD base Currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
