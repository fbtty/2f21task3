input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    if (number >= 0) {
        while (number >= 0) {
            basic.showNumber(number)
            number += -1
        }
    } else {
        basic.showNumber(number1)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(number)
    number += 10
})
let number1 = 0
let number = 0
number = 0
basic.showNumber(number)
number1 = number
