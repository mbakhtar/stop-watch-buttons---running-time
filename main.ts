input.onButtonPressed(Button.A, function () {
    start_time = input.runningTime()
})
input.onButtonPressed(Button.AB, function () {
    elapsed_time = stop_time + start_time
    basic.showNumber(elapsed_time / 1000)
})
input.onButtonPressed(Button.B, function () {
    stop_time = input.runningTime()
})
let elapsed_time = 0
let stop_time = 0
let start_time = 0
start_time = 0
stop_time = 0
elapsed_time = 0
