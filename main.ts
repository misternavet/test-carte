function base () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
}
let strip: neopixel.Strip = null
let intensité = 0
let intensité_sonor = 0
strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
strip.setBrightness(0)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
strip.show()
basic.forever(function () {
    for (let index = 0; index < 51; index++) {
        strip.setBrightness(intensité)
        base()
        strip.show()
        basic.pause(100)
        intensité += 5
    }
    for (let index = 0; index < 51; index++) {
        strip.setBrightness(intensité)
        base()
        strip.show()
        basic.pause(100)
        intensité += -5
    }
})
basic.forever(function () {
    for (let index = 0; index < 51; index++) {
        music.setVolume(intensité_sonor)
        music.playTone(262, music.beat(BeatFraction.Half))
        intensité_sonor += 5
    }
    for (let index = 0; index < 51; index++) {
        music.setVolume(intensité_sonor)
        music.playTone(262, music.beat(BeatFraction.Half))
        intensité_sonor += -5
    }
})
