#!/usr/bin/env node

const process = require('node:process');

const arguments = process.argv.slice(2);

// Deals with the length flag 8 is default if length is not specified.
const lengthArg = process.argv[3];
const length = parseInt(lengthArg, 8) || 8;

// Customize argument
const customizeArg = process.argv[4];

// handle errors if no argument is eneterd
function blankArg(){
    console.error("An Argument must be entered... '--help' for more info");
}

// password generator 
function genPassword(value){
    let password = "";
    let passwordLength = value;
    const characters = "abcdefghijklmnopqrstuvwxyz";

    for(let i = 0; i < passwordLength; i++){
        const passwordChars = Math.floor(Math.random() * characters.length);
        password += characters[passwordChars];
    }

    return password;
}

// Generate password with uppercase characters
function genPasswordWithUppercase(value){
    let password = "";
    let passwordLength = value;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i = 0; i < passwordLength; i++){
       const passwordChars = Math.floor(Math.random() * characters.length);
        password += characters[passwordChars];
    }

    return password;
}

// Generatre password with symbols 
function genPasswordWithSymbols(value){
    let password = "";
    let passwordLength = value;
    const characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()<>?[]=-+_/,?:'|";

    for(let i = 0; i < passwordLength; i++){
        const passwordChars = Math.floor(Math.random() * characters.length);
        password += characters[passwordChars];
    }

    return password;
}

// Generate password with numbers
function genPasswordWithNums(value){
    let password = "";
    let passwordLength = value;
    const characters = "abcdefghijklmnopqrstuvwxyz1234567890";

    for(let i = 0; i < passwordLength; i++){
        const passwordChars = Math.floor(Math.random() * characters.length);
        password += characters[passwordChars];
    }

    return password;
}

// Generate password that includes everything
function genPasswordWithEveything(value){
    let password = "";
    let passwordLength = value;
    const characters = "ABCDEFGHIJKLMONPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()<>?[]=-+_/,?:'|";

    for(let i = 0; i < passwordLength; i++){
        const passwordChars = Math.floor(Math.random() * characters.length);
        password += characters[passwordChars];
    }

    return password;
}

