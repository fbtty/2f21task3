input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
    number1 = number
})
input.onButtonPressed(Button.AB, function () {
    number1 = number
    while (number >= 0) {
        basic.showNumber(number)
        number += -1
    }
    number = number1
})
input.onButtonPressed(Button.B, function () {
    number += 10
    basic.showNumber(number)
    number1 = number
})
let number1 = 0
let number = 0
number = 0
number1 = 0
