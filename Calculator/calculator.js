const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce((total, cur) => total + cur ,0)
};

const multiply = function(a, b) {
    return a * b
};

const divide = function(a, b){
    return a / b 
}

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(n) {
    let product = 1
	if(n == 0){
        return 1
    }
    else{
        for(let i = n; i > 0; i--){
            product *= i
        }
        return product
    }
};

const oparate = (operator, firstNumber, secondNumber) => {
    switch (operator) {
        case "+":
            add(firstNumber, secondNumber)
            break;
        case "-":
            subtract(firstNumber, secondNumber)
            break;
        case "/":
            divide(firstNumber, secondNumber)  
            break;    
        case "*":
            multiply(firstNumber, secondNumber)  
            break;
        default:
            break;
    }
}
