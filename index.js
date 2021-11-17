class aError extends Error {
    constructor(message) {
        super(message);
        this.name = 'aError';
    }
}

window.onerror = (error) => {
    console.log('Tracking error');
    TrackJS.track('Testing TrackJS!');              
}

let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output;
    let firstNum;
    let secondNum;
    let operator;
    try {
        output = document.querySelector('output');
        firstNum = document.querySelector('#first-num').value;
        secondNum = document.querySelector('#second-num').value;
        operator = document.querySelector('#operator').value;
        if (firstNum == 'a') {
            throw new aError('user inputted the letter a');
        }
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    } catch (error) {
        console.log('sadly an error happened my friend');
        console.error(error);
    } finally {
        console.log('reached end of calculations block');
    }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code herea


let consoleLog = document.getElementById('consoleLog');
let consoleError = document.getElementById('consoleError');
let consoleCount = document.getElementById('consoleCount');
let consoleWarn = document.getElementById('consoleWarn');
let consoleAssert = document.getElementById('consoleAssert');
let consoleClear = document.getElementById('consoleClear');
let consoleDir = document.getElementById('consoleDir');
let consoleDirxml = document.getElementById('consoleDirxml');
let consoleGroupStart = document.getElementById('consoleGroupStart');
let consoleGroupEnd = document.getElementById('consoleGroupEnd');
let consoleTable = document.getElementById('consoleTable');
let startTimer = document.getElementById('startTimer');
let endTimer = document.getElementById('endTimer');
let consoleTrace = document.getElementById('consoleTrace');
let triggerAGlobalError = document.getElementById('triggerAGlobalError');

const textData = 'test';
const tableData = [
{
    color: 'red',
    shape: 'square',
},
{
    color: 'green',
    shape: 'circle',
},
{
    color: 'yellow',
    shape: 'triangle',
}
]

consoleLog.addEventListener('click', function() {
    console.log(textData);
});

consoleError.addEventListener('click', function() {
    console.error(textData);
});

consoleCount.addEventListener('click', function() {
    console.count();
});

consoleWarn.addEventListener('click', function() {
    console.warn(textData);
});

consoleAssert.addEventListener('click', function() {
    console.assert(false);
});

consoleClear.addEventListener('click', function() {
    console.clear();
});

consoleDir.addEventListener('click', function() {
    console.dir(consoleDir);
});

consoleDirxml.addEventListener('click', function() {
    console.dirxml(consoleDirxml);
});

consoleDirxml.addEventListener('click', function() {
    console.dirxml(consoleDirxml);
});

consoleGroupStart.addEventListener('click', function() {
    console.group();
});

consoleGroupEnd.addEventListener('click', function() {
    console.groupEnd();
});

consoleTable.addEventListener('click', function() {
    console.table(tableData);
});

startTimer.addEventListener('click', function() {
    console.time();
});

endTimer.addEventListener('click', function() {
    console.timeEnd();
});

consoleTrace.addEventListener('click', function() {
    console.trace();
});

triggerAGlobalError.addEventListener('click', function() {
    throw 'Global error';
});