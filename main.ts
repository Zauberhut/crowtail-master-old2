function solveC () {
    Csolved = true
    AnzeigeSpielstand()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    solveD()
})
function checksolutionE () {
	
}
function checksolutionB () {
	
}
function solveE () {
    Esolved = true
    AnzeigeSpielstand()
}
function checksolutionF () {
	
}
function checksolutionA () {
	
}
input.onButtonPressed(Button.A, function () {
    if (Index == 0) {
        Index += 1
        basic.showString("A")
        control.waitForEvent(pins.digitalReadPin(DigitalPin.P11), 1)
        solveA()
    } else if (Index == 1) {
        basic.showString("B")
        solveB()
        Index += 1
    } else if (Index == 2) {
        basic.showString("C")
        solveC()
        Index += 1
    } else if (Index == 3) {
        basic.showString("D")
        solveD()
        Index += 1
    } else {
        basic.showString("E")
        solveE()
        Index = 0
    }
})
function checksolutionC () {
	
}
function checksolutionD () {
	
}
function solveD () {
    Dsolved = true
    AnzeigeSpielstand()
}
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    solveB()
})
function solveA () {
    HaenschenKlein()
    Asolved = true
    AnzeigeSpielstand()
}
function AnzeigeSpielstand () {
    music.setBuiltInSpeakerEnabled(true)
    music.setVolume(255)
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
    basic.clearScreen()
    if (Asolved) {
        for (let index = 0; index < 4; index++) {
            led.unplot(0, 4)
            basic.pause(100)
            led.plot(0, 4)
            basic.pause(100)
        }
    }
    if (Bsolved) {
        for (let index = 0; index < 4; index++) {
            led.unplot(1, 4)
            basic.pause(100)
            led.plot(1, 4)
            basic.pause(100)
        }
    }
    if (Csolved) {
        for (let index = 0; index < 4; index++) {
            led.unplot(2, 4)
            basic.pause(100)
            led.plot(2, 4)
            basic.pause(100)
        }
    }
    if (Dsolved) {
        for (let index = 0; index < 4; index++) {
            led.unplot(3, 4)
            basic.pause(100)
            led.plot(3, 4)
            basic.pause(100)
        }
    }
    if (Esolved) {
        for (let index = 0; index < 4; index++) {
            led.unplot(4, 4)
            basic.pause(100)
            led.plot(4, 4)
            basic.pause(100)
        }
    }
    soundExpression.spring.playUntilDone()
    music.setBuiltInSpeakerEnabled(false)
}
function solveB () {
    SOS()
    Bsolved = true
    AnzeigeSpielstand()
}
function SOS () {
    basic.clearScreen()
    music.setBuiltInSpeakerEnabled(true)
    for (let index = 0; index < 3; index++) {
        led.plot(2, 2)
        music.playTone(262, music.beat(BeatFraction.Half))
        led.unplot(2, 2)
        music.rest(music.beat(BeatFraction.Half))
    }
    music.rest(music.beat(BeatFraction.Double))
    for (let index = 0; index < 3; index++) {
        led.plot(2, 2)
        music.playTone(262, music.beat(BeatFraction.Double))
        led.unplot(2, 2)
        music.rest(music.beat(BeatFraction.Half))
    }
    music.rest(music.beat(BeatFraction.Double))
    for (let index = 0; index < 3; index++) {
        led.plot(2, 2)
        music.playTone(262, music.beat(BeatFraction.Half))
        led.unplot(2, 2)
        music.rest(music.beat(BeatFraction.Half))
    }
    music.setBuiltInSpeakerEnabled(false)
}
function HaenschenKlein () {
    music.setBuiltInSpeakerEnabled(true)
    music.setVolume(255)
    music.playMelody("G E E - F D D - ", 120)
    music.playMelody("C D E F G G G - ", 120)
    music.playMelody("G E E - F D D - ", 120)
    music.playMelody("C E G G C C C - ", 120)
    music.setBuiltInSpeakerEnabled(false)
}
let Index = 0
let Esolved = false
let Dsolved = false
let Csolved = false
let Bsolved = false
let Asolved = false
basic.showIcon(IconNames.Skull)
Asolved = false
Bsolved = false
Csolved = false
Dsolved = false
Esolved = false
let Fsolved = false
Index = 0
basic.forever(function () {
	
})
basic.forever(function () {
	
})
