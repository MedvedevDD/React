function squareSum(numbers){
    var sum = 0
    for (var i = 0; i < numbers.length; i++)
         var square = numbers[i] **2

    sum += square;
}

function multiply(a, b){
    c =  a * b
    return c
}

function numberToString(num) {
    string = String(num);
    return string;
    // Return a string of the number here!
}
function even_or_odd(number) {
    let num = number;
    if (num % 2 === 0){
        return "Even";
    }
    else {
        return "Odd";
    }
}

function noSpace(x){
    var str = x.replace(/\s+/g, '');
    return str;
}
function positiveSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i];}
    }
    return sum;
}