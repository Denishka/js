const resultElement = document.getElementById('result')
console.log(resultElement.textContent)

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

const submitBtn = document.getElementById('submit')

const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')


// console.log(input1.value)

console.log(typeof sum)

let action;  


plusBtn.onclick = function () {
    action = '+'

}

minusBtn.onclick = function () {
    action = '-'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    }
    else{
        resultElement.style.color = 'green'
    } 
    resultElement.textContent = result
}

function computeNumbersActions(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    return actionSymbol == '+' ? num1 + num2 : num1 - num2
}

submitBtn.onclick = function () {

        sum = computeNumbersActions(input1,input2, action)
        printResult(sum)
    }
    
