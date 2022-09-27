// question Number One 
var Question1 = function () {
    var userInputNum1 = prompt("Enter Your Natural Number", "10");
    if (userInputNum1) {
        var num = parseInt(userInputNum1);
        var n = 1;
        while (n <= num) {
            console.log(n);
            var myContainer = document.getElementById('ans');
            myContainer.innerHTML += n + " ";
            n++;
        }
        return 0;
    }
};
// question Number Two 
var Question2 = function () {
    var userInputNum1 = prompt("Enter Your Natural Number", "10");
    if (userInputNum1) {
        var num = parseInt(userInputNum1);
        var n = 1;
        while (num >= n) {
            console.log(num);
            var myContainer = document.getElementById('ans2');
            myContainer.innerHTML += num + " ";
            num--;
        }
        return 0;
    }
};
// question Number 3
var Question3 = function () {
    var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (var j = 0; j < upper.length; j++) {
        var result = upper[j];
        var myContainer = document.getElementById('ans3');
        myContainer.innerHTML += result + " ";
    }
};
// question Number 4
var Question4 = function () {
    var n = 1;
    for (n; n <= 100; n++) {
        if (n % 2 == 0) {
            var result = n;
            var myContainer = document.getElementById('ans4');
            myContainer.innerHTML += result + " ";
        }
    }
};
// question Number 5
var Question5 = function () {
    var n = 1;
    for (n; n <= 100; n++) {
        if (n % 2 == 1) {
            var result = n;
            var myContainer = document.getElementById('ans5');
            myContainer.innerHTML += result + " ";
        }
    }
};
// question Number 6
var Question66 = function () {
    var userInputNum1 = prompt("Enter Your Natural Number", "10");
    console.log("Logggggg");
    if (userInputNum1) {
        var Num = parseInt(userInputNum1);
        var count = 1;
        var sum = 0;
        for (count; count <= Num; count++) {
            sum = sum + count;
            console.log("Sum", sum);
        }
        var myContainer = document.getElementById('ans66');
        myContainer.innerHTML += sum + " ";
    }
};
