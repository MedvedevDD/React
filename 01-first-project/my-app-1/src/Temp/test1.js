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
    var bodymassindex = weight / (height * height);
    if (bodymassindex <= 18.5) {
        return "Underweight";
    } else if (bodymassindex <= 25.0) {
        return "Normal";
    } else if (bodymassindex <= 30.0) {
        return "Overweight";
    }
    if (bodymassindex > 30) {
        return "Obese";
    }
}

var stringToNumber = function (str) {
    let num = Number(str);// put your code here
    return num;
}

function rentalCarCost(d) {
    var rent = 40;
    var totalrent = 0;
    if (d < 3) {
        totalrent = d * rent;
    } else if (d >= 3 && d < 7) {
        totalrent = d * rent - 20;
    } else if (d >= 7) {
        totalrent = d * rent - 50;
    }
    return totalrent;
}

function switchItUp(number) {
    switch (number) {
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
        case 0:
            return "Zero";
    }
}

function getAge(inputString) {
    var age = Number(inputString[0]);// return correct age (int). Happy coding :)
    return age;
}

function isDivideBy(number, a, b) {
    return (number % a == 0 && number % b == 0) ? true : false;
}

function cockroachSpeed(s) {
    if (s >= 0) {
        var cmpersec = Math.floor(s * 100000 / 3600);
    }
    return cmpersec;
}

function otherAngle(a, b) {
    return 180 - a - b;
}

function twiceAsOld(dadYearsOld, sonYearsOld) {

    if (sonYearsOld > dadYearsOld * 0.5) {
        return (sonYearsOld * 2 - dadYearsOld);
    } else return (dadYearsOld - sonYearsOld * 2);
}

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}

function nthEven(n) {
    return n * 2 - 2;
}

function century(year) {
    return Math.floor((year - 1) / 100) + 1;
}

function getRealFloor(n) {
    var realFloor = 0;
    if (n > 0 && n < 13) {
        realFloor = n - 1;
    } else if (n > 13) {
        realFloor = n - 2;
    } else {
        realFloor = n;
    }
    return realFloor;
}

function past(h, m, s) {
    return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000)//#Happy Coding! ^_^
}

function simpleMultiplication(number) {
    var result = 0;
    if (number % 2 == 0) {
        result = number * 8;
    } else {
        result = number * 9;
    }
    return result;
}

let count = 0;

function cc(card) {
    switch (card) {
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count = count - 1;
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count = count + 1;
    }
    return (count <= 0 ? count + ' Hold' : count + ' Bet');
   }

cc(2);cc(3);cc(7);cc('K');cc('A');