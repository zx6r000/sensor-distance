let valeur = 0
datalogger.setColumnTitles("distance")
let comp = 0
basic.forever(function () {
    valeur = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (comp == 60) {
        datalogger.log(datalogger.createCV("distance", valeur))
        comp = 0
    } else {
        led.plotBarGraph(
        Math.map(valeur, 0, 170, 0, 25),
        0
        )
        comp += 1
    }
    basic.pause(1000)
})
