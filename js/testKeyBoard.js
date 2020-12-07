onload = function () {
var simulateTyping = "Hello World!";

$('.keyboard')
    .keyboard({
		layout: 'custom',
    alwaysOpen: true,
		customLayout: {
			'normal': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} q w e r t y u i o p [ ] \\',
				'a s d f g h j k l ; \' {enter}',
				'{shift} z x c v b n m , . / {shift}',
				'{accept} {space} {left} {right}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W E R T Y U I O P { } |',
				'A S D F G H J K L : " {enter}',
				'{shift} Z X C V B N M < > ? {shift}',
				'{accept} {space} {left} {right}'
			]
		}
    })
    .addTyping()
    .addCaret({
        caretClass: '',
        // *** for future use ***
        // data-attribute containing the character(s) next to the caret
        charAttr: 'data-character',
        // # character(s) next to the caret (can be negative for RTL)
        // default is 1 which shows the character to the right of the caret
        // setting this to -1 shows the character to the left
        charIndex: -1,
        // tweak caret position & height
        offsetX: 0,
        offsetY: 0,
        adjustHt: 0
    });

}