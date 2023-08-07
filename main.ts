basic.forever(function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P1)))
    led.plotBarGraph(
    0,
    0
    )
    basic.pause(500)
})
