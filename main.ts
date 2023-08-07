let valeur = 0
datalogger.setColumnTitles("distance")
basic.forever(function () {
    valeur = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    led.plotBarGraph(
    Math.map(valeur, 0, 170, 0, 25),
    0
    )
    datalogger.log(datalogger.createCV("distance", valeur))
    basic.pause(60000)
})
