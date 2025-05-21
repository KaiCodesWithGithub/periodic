// Define an array of objects containing the element name and symbol
const elements = [
    { name: "Hydrogen", symbol: "H" },
    { name: "Helium", symbol: "He" },
    { name: "Lithium", symbol: "Li" },
    { name: "Beryllium", symbol: "Be" },
    { name: "Boron", symbol: "B" },
    { name: "Carbon", symbol: "C" },
    { name: "Nitrogen", symbol: "N" },
    { name: "Oxygen", symbol: "O" },
    { name: "Fluorine", symbol: "F" },
    { name: "Neon", symbol: "Ne" },
    { name: "Sodium", symbol: "Na" },
    { name: "Magnesium", symbol: "Mg" },
    { name: "Aluminum", symbol: "Al" },
    { name: "Silicon", symbol: "Si" },
    { name: "Phosphorus", symbol: "P" },
    { name: "Sulfur", symbol: "S" },
    { name: "Chlorine", symbol: "Cl" },
    { name: "Argon", symbol: "Ar" },
    { name: "Potassium", symbol: "K" },
    { name: "Calcium", symbol: "Ca" }
];

// Search Parameters
const searchParams = new URLSearchParams(window.location.search);

// Get the HTML elements
const elementName = document.querySelector("#middleText");
const input = document.querySelector("#input");
const inputBox = document.querySelector(".textBox");
const wrapper = document.querySelector("#wrapper");
const credits = document.querySelector(".credits");
const startButton = document.querySelector("#start");
const modeSelection = document.querySelector("#modeSelection");
const modeLabel = document.querySelector("#modeLabel");
const heading = document.querySelector(".heading > p.text");

// Finish screens
const finishScreen = (mode, errors, accuracies) => `
<h1>Well done!</h1>
<p>You have completed the ${mode.toLowerCase()} mode with ${errors} errors!</p>
<p>You completed it with ${errors} errors and ${accuracies} correct!</p>
    <p>Thank you for playing! If you would like to show the teacher, screenshot this.</p>
    <a href="./hard.html">Hard mode?</a>
`;

const cheaterScreen = (mode, errors, accuracies) => `
    <h1>Well done!</h1>
    <p>You have completed the ${mode.toLowerCase()} mode with ${errors} errors.</p>
    <p>You completed it with ${errors} errors and ${accuracies} correct!</p>
    <p>But you cheated, so this is just going to be it.</p>
    <a href="./hard.html">Hard mode?</a>
`;

// Other variables
let started = false;
let mode;
let inaccuracies = 0;
let accuracies = 0;

// Define a function to generate a random element from the array
function getRandomElement() {
    return elements[Math.floor(Math.random() * elements.length)];
}

// Dev mode functions and initialisation
const devIsEnabled = searchParams.get('dm') === 'true'
function devMode(param, ...additionalParams) {
    if (devIsEnabled) {
        return eval(param);
    }
}
devMode('credits.textContent = "DEVELOPER MODE"')
devMode('console.log("dev mode enabled")')

// Define a function to display a new element and prompt the user for input
function displayNewElement() {
    const element = getRandomElement();
    elementName.textContent = mode === "Symbol" ? element.name : element.symbol;
    input.value = "";
    input.focus();
    return element;
}

// Initialise element variable
let correctAnswer;

// Start event
startButton.onclick = function() {
    if (!started) {
        mode = modeSelection.value;
        input.style.display = "block";
        startButton.style.display = "none";
        modeSelection.style.display = "none";
        modeLabel.style.display = "none";
        heading.textContent = `Welcome to Guess The ${mode}`
        correctAnswer = displayNewElement();
        started = true;
        devMode('console.log(`mode: ${mode.toLowerCase()}`)')
    }
}

// Add an event listener to the input element to check the user's answer
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const userAnswer = input.value.trim();
        let inputElement;

        if (userAnswer === 'clear' && devIsEnabled) {
            elements.forEach(element => {
                elements.splice(elements.indexOf(element), 1);
            })
            wrapper.innerHTML = cheaterScreen(mode, inaccuracies, accuracies);
        } else if (
            mode === "Symbol"
            ? userAnswer === correctAnswer.symbol
            : userAnswer.toLowerCase() === correctAnswer.name.toLowerCase()
        ) {
            devMode('console.log("answer correct")')
            elements.splice(elements.indexOf(correctAnswer), 1)
            accuracies++;
        } else {
            devMode('console.log("answer incorrect")')

            inaccuracies++;

            elements.forEach(element => {
                if (
                    mode === "Symbol"
                    ? element.symbol === userAnswer
                    : element.name.toLowerCase() === userAnswer.toLowerCase()
                ) inputElement = element;
            });

            if (inputElement === undefined)
                alert(`Incorrect. The correct answer is ${mode === "Symbol" ? correctAnswer.symbol : correctAnswer.name}.`);
    
            else
                alert(`That is ${mode === "Symbol" ? inputElement.name : correctAnswer.symbol}. The correct answer is ${mode === "Symbol" ? correctAnswer.symbol : correctAnswer.name}.`);
        }
        devMode('console.log(elements.length)')

        if (elements.length === 0 && !devIsEnabled)
            wrapper.innerHTML = finishScreen(mode, inaccuracies, accuracies);

        correctAnswer = displayNewElement();
    }
});