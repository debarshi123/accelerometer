def on_gesture_shake():
    basic.show_icon(IconNames.YES)
    music.play_melody("G A B C5 C5 B A G ", 120)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
