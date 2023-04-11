const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector('.equal-sign')
const clearBtn = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')
const calculatorScreen = document.querySelector('.calculator-screen')

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
}

const inputDecimal = (dot) => {
    if (!currentNumber.includes('.')) {
        currentNumber += dot
    }
}

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result.toString()
    calculationOperator = ''
}

const updateScreen = () => {
    calculatorScreen.value = currentNumber
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen()
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen()
})

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen()
})

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen()
})
