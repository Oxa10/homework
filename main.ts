let N = 0
input.onButtonPressed(Button.A, function () {
    N += 1
})
input.onButtonPressed(Button.AB, function () {
    N = 0
})
input.onButtonPressed(Button.B, function () {
    N += -1
})
basic.forever(function () {
    basic.showNumber(N)
})
