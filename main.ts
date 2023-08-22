radio.onReceivedNumber(function (receivedNumber) {
    serial.writeLine("" + (receivedNumber))
})
radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
})
radio.onReceivedValue(function (name, value) {
	
})
radio.setGroup(1)
serial.writeLine("Start")
basic.forever(function () {
	
})
