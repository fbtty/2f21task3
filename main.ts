let number = 0
input.onButtonPressed(Button.A, function () {
    number = 1
    for (let index = 0; index < 6; index++) {
        basic.showNumber(number)
        number += 1
    }
})
