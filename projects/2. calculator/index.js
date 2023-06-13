function add(n1, n2) {
    return n1 + n2
}

function substract(n1, n2) {
    return n1 - n2
}

function multiply(n1, n2) {
    return n1 * n2
}

function divide(n1, n2) {
    return n1 / n2
}

function remainder(n1, n2) {
    return n1 % n2
}

const n1 = 30
const n2 = 12
console.log(`n1 = ${n1}`)
console.log(`n2 = ${n2}`)
console.log(`add(n1,n2) = ${add(n1, n2)}`)
console.log(`substract(n1,n2) = ${substract(n1, n2)}`)
console.log(`multiply(n1,n2) = ${multiply(n1, n2)}`)
console.log(`divide(n1,n2) = ${divide(n1, n2)}`)
console.log(`remainder(n1,n2) = ${remainder(n1, n2)}`)