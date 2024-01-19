let displayValue='';

function appendToDisplay(value){
    displayValue+=value;
    document.getElementById('display').value=displayValue;
}

function clearDisplay(){
    displayValue='';
    document.getElementById('display').value='';
}

function calculateResult() {
    try {
        const sanitizedExpression = displayValue.replace(/\^/g, '**');
        const allowedCharacters = /[\d+\-*/.^()]/g;
        const result = eval(sanitizedExpression.match(allowedCharacters).join(''));
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function appendBackspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}