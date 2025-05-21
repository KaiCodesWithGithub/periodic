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
    { name: "Calcium", symbol: "Ca" },
    { name: "Scandium", symbol: "Sc" },
    { name: "Titanium", symbol: "Ti" },
    { name: "Vanadium", symbol: "V" },
    { name: "Chromium", symbol: "Cr" },
    { name: "Manganese", symbol: "Mn" },
    { name: "Iron", symbol: "Fe" },
    { name: "Cobalt", symbol: "Co" },
    { name: "Nickel", symbol: "Ni" },
    { name: "Copper", symbol: "Cu" },
    { name: "Zinc", symbol: "Zn" },
    { name: "Gallium", symbol: "Ga" },
    { name: "Germanium", symbol: "Ge" },
    { name: "Arsenic", symbol: "As" },
    { name: "Selenium", symbol: "Se" },
    { name: "Bromine", symbol: "Br" },
    { name: "Krypton", symbol: "Kr" },
    { name: "Rubidium", symbol: "Rb" },
    { name: "Strontium", symbol: "Sr" },
    { name: "Yttrium", symbol: "Y" },
    { name: "Zirconium", symbol: "Zr" },
    { name: "Niobium", symbol: "Nb" },
    { name: "Molybdenum", symbol: "Mo" },
    { name: "Technetium", symbol: "Tc" },
    { name: "Ruthenium", symbol: "Ru" },
    { name: "Rhodium", symbol: "Rh" },
    { name: "Palladium", symbol: "Pd" },
    { name: "Silver", symbol: "Ag" },
    { name: "Cadmium", symbol: "Cd" },
    { name: "Indium", symbol: "In" },
    { name: "Tin", symbol: "Sn" },
    { name: "Antimony", symbol: "Sb" },
    { name: "Tellurium", symbol: "Te" },
    { name: "Iodine", symbol: "I" },
    { name: "Xenon", symbol: "Xe" },
    { name: "Cesium", symbol: "Cs" },
    { name: "Barium", symbol: "Ba" },
    { name: "Lanthanum", symbol: "La" },
    { name: "Cerium", symbol: "Ce" },
    { name: "Praseodymium", symbol: "Pr" },
    { name: "Neodymium", symbol: "Nd" },
    { name: "Promethium", symbol: "Pm" },
    { name: "Samarium", symbol: "Sm" },
    { name: "Europium", symbol: "Eu" },
    { name: "Gadolinium", symbol: "Gd" },
    { name: "Terbium", symbol: "Tb" },
    { name: "Dysprosium", symbol: "Dy" },
    { name: "Holmium", symbol: "Ho" },
    { name: "Erbium", symbol: "Er" },
    { name: "Thulium", symbol: "Tm" },
    { name: "Ytterbium", symbol: "Yb" },
    { name: "Lutetium", symbol: "Lu" },
    { name: "Hafnium", symbol: "Hf" },
    { name: "Tantalum", symbol: "Ta" },
    { name: "Tungsten", symbol: "W" },
    { name: "Rhenium", symbol: "Re" },
    { name: "Osmium", symbol: "Os" },
    { name: "Iridium", symbol: "Ir" },
    { name: "Platinum", symbol: "Pt" },
    { name: "Gold", symbol: "Au" },
    { name: "Mercury", symbol: "Hg" },
    { name: "Thallium", symbol: "Tl" },
    { name: "Lead", symbol: "Pb" },
    { name: "Bismuth", symbol: "Bi" },
    { name: "Polonium", symbol: "Po" },
    { name: "Astatine", symbol: "At" },
    { name: "Radon", symbol: "Rn" },
    { name: "Francium", symbol: "Fr" },
    { name: "Radium", symbol: "Ra" },
    { name: "Actinium", symbol: "Ac" },
    { name: "Thorium", symbol: "Th" },
    { name: "Protactinium", symbol: "Pa" },
    { name: "Uranium", symbol: "U" },
    { name: "Neptunium", symbol: "Np" },
    { name: "Plutonium", symbol: "Pu" },
    { name: "Americium", symbol: "Am" },
    { name: "Curium", symbol: "Cm" },
    { name: "Berkelium", symbol: "Bk" },
    { name: "Californium", symbol: "Cf" },
    { name: "Einsteinium", symbol: "Es" },
    { name: "Fermium", symbol: "Fm" },
    { name: "Mendelevium", symbol: "Md" },
    { name: "Nobelium", symbol: "No" },
    { name: "Lawrencium", symbol: "Lr" },
    { name: "Rutherfordium", symbol: "Rf" },
    { name: "Dubnium", symbol: "Db" },
    { name: "Seaborgium", symbol: "Sg" },
    { name: "Bohrium", symbol: "Bh" },
    { name: "Hassium", symbol: "Hs" },
    { name: "Meitnerium", symbol: "Mt" },
    { name: "Darmstadtium", symbol: "Ds" },
    { name: "Roentgenium", symbol: "Rg" },
    { name: "Copernicium", symbol: "Cn" },
    { name: "Nihonium", symbol: "Nh" },
    { name: "Flerovium", symbol: "Fl" },
    { name: "Moscovium", symbol: "Mc" },
    { name: "Livermorium", symbol: "Lv" },
    { name: "Tennessine", symbol: "Ts" },
    { name: "Oganesson", symbol: "Og" }
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

// Finish screen
const finishScreen = `
    <h1>Well done!</h1>
    <p>You deserve a badge of honour!</p>
    <p>In case you want credit or something, screenshot this and show the teacher! I doubt anyone will do that.</p>
    <a href="./index.html">Do you want to go back to easy?</a>
`;

const cheaterScreen = `
    <h1>Well done!</h1>
    <p>You deserve a badge of honour.</p>
    <p>But you cheated, so you don't get one.</p>
    <a href="./index.html">Do you want to go back to easy?</a>
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