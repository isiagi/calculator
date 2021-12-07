const dataNumber = document.querySelectorAll('[data-number]')
const previousOperand = document.querySelector('[data-previous-operand]')
const currentOperand = document.querySelector('[data-current-operand]')
const dataOperand = document.querySelectorAll('[data-operation]')
const dataEquals = document.querySelector('[data-equals]')

let num = ''
let opera = 0
let m = 0

dataNumber.forEach(data => (
    data.addEventListener('click', handleClick)
))

function handleClick(e) {
    let target = e.target;
    num += target.innerText
    currentOperand.innerText = num
}

dataOperand.forEach(data => {
    data.addEventListener('click', handleOperation)
})

function handleOperation(e) {
    let target = e.target;
    opera = target.innerText
    m = Number(num)
    previousOperand.innerText = `${Number(num)} ${opera}`;
    num = ''
    currentOperand.innerText = ''
}

dataEquals.addEventListener('click', () => {
    alert(+m + Number(currentOperand.innerText))
    //console.log(`${m}` `${opera}` `${Number(currentOperand.innerText)}`)
})