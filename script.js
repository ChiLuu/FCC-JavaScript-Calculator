function mathOps () {
    var array = ['35', '*', '10', '/', '3'];
    console.log(eval(array.join('')));

}
function operators () {
    var operators = ['/', '*', '+', '-']

    equation = [];
        
    console.log(equation.length);
}

function types () {
    input = "0";
    input = input.split('');
    input.shift();
    input = input.join('');

    //console.log(typeof parseInt("+") == "number");
    console.log(input);
}


function time() {
    var time = "2319";
    var mins = Math.floor(time / 60);
    var seconds = time % 60;
    var minsTens = Math.floor((Math.floor(time / 60)) /10);
    var minsOnes = Math.floor((Math.floor(time / 60)) %10);
    //console.log(typeof parseInt("+") == "number");
    console.log(mins + " : " + seconds);
    console.log("minsTens: " + minsTens);
    console.log("minsOnes: " + minsOnes);
}
time();

function decimalToBinary() {
    var time = "119";
    var mins = Math.floor(time / 60);
    var seconds = time % 60;
    var array = parseInt(time, 10).toString(2).split('');

    console.log(array);
    //console.log(typeof parseInt("+") == "number");
    //console.log(mins + " : " + seconds);
    console.log("Mins binary: " + parseInt(mins, 10).toString(2));
    console.log("Seconds binary: " + parseInt(seconds, 10).toString(2));
    console.log("Total time(s) binary: " + parseInt(time, 10).toString(2));
}

//decimalToBinary();