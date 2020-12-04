function stasny () {
    led.plot(1, 1)
    led.plot(1, 3)
    led.plot(0, 3)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    led.plot(4, 3)
}
function smutny () {
    console.log("stasny started")
led.plot(1, 1)
    led.plot(1, 3)
    led.plot(0, 4)
    led.plot(1, 3)
    led.plot(2, 3)
    led.plot(3, 3)
    led.plot(4, 4)
}
input.onButtonPressed(Button.A, smutny)
input.onButtonPressed(Button.B, stasny)
music.playMelody("C5 - F - F - C5 - ", 120)
