#!/usr/bin/env node

const process = require('node:process');

const arguments = process.argv.slice(2);

// Deals with the length flag; 8 is default if length is not specified.
const lengthArg = arguments[0];
const length = parseInt(lengthArg, 10) || 8;

// Customize argument
const customizeArg = arguments[1] || "";

// Handle errors if no argument is entered
function blankArg() {
    console.log("An Argument must be entered... '--help' for more info");
}

// Password generator 
function genPassword(value) {
    let password = "";
    const characters = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < value; i++) {
        const passwordChars = Math.floor(Math.random() * characters.length);
        password += characters[passwordChars];
    }

    return password;
}

// Generate password with uppercase characters
function genPasswordWithUppercase(value) {
    let password = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < value; i++) {
        const passwordChars = Math.floor(Math.random() * characters.length);
        password += characters[passwordChars];
    }

    return password;
}

// Generate password with symbols 
function genPasswordWithSymbols(value) {
    let password = "";
    const characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()<>?[]=-+_/,?:'|";

    for (let i = 0; i < value; i++) {
        const passwordChars = Math.floor(Math.random() * characters.length);
        password += characters[passwordChars];
    }

    return password;
}

// Generate password with numbers
function genPasswordWithNums(value) {
    let password = "";
    const characters = "abcdefghijklmnopqrstuvwxyz1234567890";

    for (let i = 0; i < value; i++) {
        const passwordChars = Math.floor(Math.random() * characters.length);
        password += characters[passwordChars];
    }

    return password;
}

// Generate password that includes everything
function genPasswordWithEverything(value) {
    let password = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()<>?[]=-+_/,?:'|";

    for (let i = 0; i < value; i++) {
        const passwordChars = Math.floor(Math.random() * characters.length);
        password += characters[passwordChars];
    }

    return password;
}

// Usage menu
if (arguments.includes("--help")) {
    console.log(`
        Usage:
        Begin all the following with npx password-generator
        --help  Displays the usage menu
        --password (length - should be an integer ex. 6) (choose what characters (a - all, c - capital, n - numbers, s - symbols))
    `);
}

// Possible arguments
if (arguments.length === 0) {
    blankArg();
} else if (customizeArg.includes("a")) {
    console.log("Password: " + genPasswordWithEverything(length));
} else if (customizeArg.includes("n")) {
    console.log("Password: " + genPasswordWithNums(length));
} else if (customizeArg.includes("c")) {
    console.log("Password: " + genPasswordWithUppercase(length));
} else if (customizeArg.includes("s")) {
    console.log("Password: " + genPasswordWithSymbols(length));
} else {
    console.log("Password: " + genPassword(length));
}
