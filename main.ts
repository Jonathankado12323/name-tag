basic.forever(function () {
    music.play(music.stringPlayable("F C D B G C5 A E ", 120), music.PlaybackMode.UntilDone)
    basic.showString("HELLO! WORLD")
})
