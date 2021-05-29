input.onButtonPressed(Button.A, function () {
    basic.showString("The temperature is" + input.temperature() + "degrees centigrade")
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("A F E F D G E F ", 251)
})
basic.forever(function () {
    basic.showArrow(ArrowNames.South)
    basic.pause(5000)
    basic.clearScreen()
})
basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.clearScreen()
    }
})
