const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
// for (i = 0, i < )
    if (strokes === 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
    // Only change code above this line
}

golfScore(5, 4);

var summation = function (num) {
    var k = 0;
    var sum = 0;
    while (k <= num) {
        sum = sum + k;
        k++;
    }

    return sum;
    // Code here
}
summation(10);

function makeNegative(num) {

    var negative = (num > 0 ? num * -1 : num)

    return negative;
}

makeNegative(-10)

function findNeedle(haystack) {
    var ind = haystack.indexOf("needle")

    return "found the needle at position " + ind;

}

function basicOp(operation, value1, value2) {
    switch (operation) {
        case "+" :
            return value1 + value2;

        case "-" :
            return value1 - value2;

        case "*" :
            return value1 * value2;

        case "/" :
            return value1 / value2;
    }
}
basicOp("*", 5, 6)

function bmi(weight, height) {
    var bodymassindex = weight / (height*height);
    if (bodymassindex <= 18.5) {
        return "Underweight";
    }
    else if (bodymassindex <= 25.0) {
        return "Normal";
    }
    else if (bodymassindex <= 30.0) {
        return "Overweight";
    }
    if (bodymassindex > 30) {
        return "Obese";
    }
}

var stringToNumber = function(str){
    let num = Number(str);// put your code here
    return num;
}