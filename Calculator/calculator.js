const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce((total, cur) => total + cur ,0)
};

const multiply = function(array) {
    return array.reduce((total, cur) => total * cur, 1)
};

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
const array = [5,6,4,3]
console.log(multiply(array))
