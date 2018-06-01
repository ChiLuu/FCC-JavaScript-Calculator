let input = "";
    let equation = [];           // Culmulative equation in array to hold user's entry.
    const MAX_INPUT = 10;        // Max display amount.
    const MAX_EQUATION = 25; // Max culmulative display of entries.
    let finalEvaluation = 0; // Final evaluation of cumulative calculation.

    /* ----- Numeric Buttons Section ----- */


    function callButtonValue (buttonVal) {
        input += buttonVal;

        // Display input and eqaution based on limit that was set above. Reset all if reached.
        if(input.length > MAX_INPUT || equation.join('').length > MAX_EQUATION) {
            input = '';
            equation = [];
            $(".user-entry").html("0");
            $(".review").html("Display Limit Reached");
        }

        // If input has a leading 0 and does not contain a decimal, then remove the leading 0.
        else if(input[0] == '0' && input.indexOf('.') < 0 && input.length > 1) {
            input = input.slice(1);
            $('.user-entry').html(input);
            $('.review').html(equation.join('') + input);
        }
        else {
            $('.user-entry').html(input);
            $('.review').html(equation.join('') + input);
        }
    }

$(document).ready(function() {

    
    $(".9, .8, .7, .6, .5, .4, .3, .2, .1, .zero").click(function() {
        callButtonValue(this.value);
    });

    /* ----- Math Operator Section ----- */
    
    // Add the input (val) to culmulative equation based on the operator (opt) that was passed by each button below.
    function callOperator (val, opt) {
        if(val) {
            equation.push(val, opt);
            $('.user-entry').html(opt);
            $('.review').html(equation.join(''));
            input = '';
        }
    }
    $(".division, .multiplication, .subtraction, .addition").click(function() {
        // If there is an input (it's defined), then add to array. Reset input to "undefined" to prevent multiple entries of operator.
        if(input) {
            callOperator(input, this.value);
        }
    });

    /* ----- Special Buttons Section -----*/
    
    // Clear all
    $(".AC").click(function() {
        input = '';
        equation = [];
        $(".user-entry").html("0");
        $(".review").html("0");
    });

    // Clear current input and remove each previous input from culmulative equation each subsequent click until equation is empty.
    $(".CE").click(function() {

        // Clear the current input if it has been entered.
        if(input) {
            input = '';
            if(equation.length > 0) {
                $(".user-entry").html(equation[equation.length - 1]);
                $('.review').html(equation.join(''));   
            }
            else {
                $(".user-entry").html("0");
                $('.review').html(equation.length);
            }
        }

        // If input is already cleared, removed last entry in culmulative equation.
        else if(equation.length > 0) {
            equation.pop();
            $(".user-entry").html(equation[equation.length - 1]);

            // If an operator was removed from culmulative equation, remove the number before the operator as well and set it as the current input.
            if(equation[equation.length - 1] > -1) {
                input = equation[equation.length - 1];
                equation.pop();
            }

            // Length of culmulative equation can reach 0 if there were only 2 elements left due to above logic. Compensation to display correct number.
            if(equation.length > 0) {
                $('.review').html(equation.join(''));
            }
            else {
                $('.review').html(equation.length);
            }   
        }

        // Clear all display if input and equation is 0 but both display area still have values (ie. after equal '=' operation is calculated).
        else {
            $(".user-entry").html("0");
            $('.review').html(equation.length);
        }
        
    });

    $(".equal").click(function() {

        if(input) {
            equation.push(input);
            finalEvaluation = parseFloat(eval(equation.join('')).toFixed(4));
            if(finalEvaluation.toString().length <= MAX_INPUT) {
                $(".user-entry").html(finalEvaluation);
                $('.review').html(equation.join('') + "=" + finalEvaluation);
                input = '';
                if(equation.join('') == "12/25/1983+1/16/1989") {
                    $(".user-entry").html("<span style='font-size:0.7em'>Chi+Mel=&#10084;</span>");
                    $('.review').html("LOVE YOU BABY! 😘😘😘");
                }
                equation = [];
            } else {
                input = '';
                equation = [];
                $(".user-entry").html("0");
                $(".review").html("Display Limit Reached");
            }
        }
    });
    $(".decimal").click(function() {

        // Only add decimal if there are no existing decimal and there is an input.
        if(input.indexOf('.') < 0 && input) {
            callButtonValue(this.value);
        }

    });
});
