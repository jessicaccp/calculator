const n1 = document.getElementById('first');
const n2 = document.getElementById('second');
const ok = document.getElementById('ok');
const result = document.getElementById('result');

ok.addEventListener("click", (event) => {
    let a = n1.valueAsNumber;
    let b = n2.valueAsNumber;
    console.log(n1, n2, ok, result);
    result.innerText = addition(a, b);
});


function addition(augend, addend) {
    return augend + addend;
}

function subtraction(minuend, subtrahend) {
    return minuend - subtrahend;
}

function multiplication(multiplier, multiplicand) {
    return multiplier * multiplicand;
}

function division(dividend, divisor) {
    return divisor === 0 ? null : dividend / divisor;
}

function exponentiation(base, exponent) {
    return base ** exponent;
}

function logarithm(antilogarithm, base) {
    return Math.log(antilogarithm) / Math.log(base);
}

function nthRoot(radicand, degree) {
    return degree === 0 ? null : radicand ** (1 / degree);
}