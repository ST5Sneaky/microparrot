input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
let mimic: number[] = []
let mimicsoundvar = 0
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    mimicsoundvar = 1
    mimic = [0]
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    for (let index = 0; index < 9; index++) {
        mimic.push(input.soundLevel())
    }
    basic.showLeds(`
        # . . . #
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        `)
    for (let index = 0; index < 10; index++) {
        let list: number[] = []
        if (list[mimicsoundvar] == 2) {
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
        if (list[mimicsoundvar] == 3) {
            music.playTone(294, music.beat(BeatFraction.Whole))
        }
        if (list[mimicsoundvar] == 4) {
            music.playTone(330, music.beat(BeatFraction.Whole))
        }
        if (list[mimicsoundvar] == 5) {
            music.playTone(349, music.beat(BeatFraction.Whole))
        }
        if (list[mimicsoundvar] == 6) {
            music.playTone(392, music.beat(BeatFraction.Whole))
        }
        if (list[mimicsoundvar] == 7) {
            music.playTone(440, music.beat(BeatFraction.Whole))
        }
        if (list[mimicsoundvar] == 8) {
            music.playTone(494, music.beat(BeatFraction.Whole))
        }
        if (list[mimicsoundvar] == 9) {
            music.playTone(523, music.beat(BeatFraction.Whole))
        }
        if (list[mimicsoundvar] == 10) {
            music.playTone(587, music.beat(BeatFraction.Whole))
        }
        mimicsoundvar += 1
    }
    mimicsoundvar = 0
})
