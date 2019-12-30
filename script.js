function clearLED () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.B, function () {
    run = 0
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    clearLED()
})
input.onButtonPressed(Button.A, function () {
    run = 1
    basic.showIcon(IconNames.Yes)
    while (run == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(100)
    }
})
let run = 0
run = 0
let say = "Ready"
basic.showString(say)
