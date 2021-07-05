const calculator = {
    "plus": function(a, b) {
        console.log(a + b);
    },
    "minus": function(a, b) {
        console.log(a - b);
    },
    "divide": function(a, b) {
        console.log(a / b);
    },
    "multiply": function(a, b) {
        console.log(a * b);
    },
    "square": function(a) {
        console.log(a * a);
    } 
}

calculator.plus(1, 2); // 3
calculator.minus(5, 3); // 2
calculator.divide(5, 10); // 0.5
calculator.multiply(3, 4); // 12
calculator.square(5); // 25
