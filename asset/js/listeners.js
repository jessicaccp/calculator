// screen
const result = document.getElementById('result');
const current = document.getElementById('current');

// numbers
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const numberElements = [zero, one, two, three, four, five, six, seven, eight, nine];

numberElements.forEach((element) => {
    element.addEventListener("click", (event) => {
        current.innerText += element.innerText;
    });
});

// operations
// const addition = document.getElementById('addition');
// const subtraction = document.getElementById('subtraction');
// const multiplication = document.getElementById('multiplication');
// const division = document.getElementById('division');
// const remainder = document.getElementById('remainder');
// const exponentiation = document.getElementById('exponentiation');