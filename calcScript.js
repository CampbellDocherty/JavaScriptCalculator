var oneBtn = document.getElementById('oneBtn');
var twoBtn = document.getElementById('twoBtn');
var threeBtn = document.getElementById('threeBtn');
var fourBtn = document.getElementById('fourBtn');
var fiveBtn = document.getElementById('fiveBtn');
var sixBtn = document.getElementById('sixBtn');
var sevenBtn = document.getElementById('sevenBtn');
var eightBtn = document.getElementById('eightBtn');
var nineBtn = document.getElementById('nineBtn');

var plusBtn = document.getElementById('plusBtn');
var subtractBtn = document.getElementById('subtractBtn');
var multiplyBtn = document.getElementById('multiplyBtn');
var divideBtn = document.getElementById('divideBtn');
var decimalBtn = document.getElementById('decimalBtn')
var clearBtn = document.getElementById('clear_all');
var displayValue = document.getElementById('displayVal');

var defaultDisplayValue = '0';
var pending;
var evalArray = [];

var numbers = document.getElementsByClassName('number');
var operators = document.getElementsByClassName('operator');

var displayValueFunct = function(clickObj) {
    let btnValue = clickObj.target.innerText

    if (defaultDisplayValue === '0') {
        defaultDisplayValue = '';
    }

    defaultDisplayValue += btnValue;
    displayValue.innerText = defaultDisplayValue
}

var performOperation = function(clickObj) {
    var operator = clickObj.target.innerText

    switch(operator){
        case '+':
            pending = defaultDisplayValue;
            defaultDisplayValue = '0';
            displayValue.innerText = defaultDisplayValue;
            evalArray.push(pending);
            evalArray.push('+');
            break;

        case '-':
            pending = defaultDisplayValue;
            defaultDisplayValue = '0';
            displayValue.innerText = defaultDisplayValue;
            evalArray.push(pending);
            evalArray.push('-');
            break;
        
        case 'x':
            pending = defaultDisplayValue;
            defaultDisplayValue = '0';
            displayValue.innerText = defaultDisplayValue;
            evalArray.push(pending);
            evalArray.push('*');
            break;

        case '÷':
            pending = defaultDisplayValue;
            defaultDisplayValue = '0';
            displayValue.innerText = defaultDisplayValue;
            evalArray.push(pending);
            evalArray.push('/');
            break;
        
        case '=':
            evalArray.push(defaultDisplayValue);
            var evaluation = eval(evalArray.join(' '));
            defaultDisplayValue = evaluation;
            displayValue.innerText = defaultDisplayValue;
            evalArray = [];
            break;
    }
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', displayValueFunct, false)
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', performOperation, false)
}

clearBtn.onclick = () => {
    defaultDisplayValue = '0';
    evalArray = [];
    pending = undefined;
    displayValue.innerText = defaultDisplayValue;
}

decimalBtn.onclick = () => {
    if(!defaultDisplayValue.includes('.')){
        defaultDisplayValue += '.'
    }
    displayValue.innerText = defaultDisplayValue;
}