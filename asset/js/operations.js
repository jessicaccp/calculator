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