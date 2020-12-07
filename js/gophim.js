showKeyBoard = function() {
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
            caretClass: 'a',
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

    $('.keyboard').val(" ");
    // $('.keyboard').css("width", "0%");
}

var url = new URL(window.location.href);
var index = url.searchParams.get("index");
var tab = url.searchParams.get("tab");

showKeyBoard();

function getData() {
    if (tab==1) {
        return arrayDataObject;
    }
    if (tab==2) {
        $('.button-group').html(
            `<a href="index.html">
            <button type="button" class="btn btn-primary button-nav" style="width: 120px;">Học</button>
        </a>
        <button type="button" class="btn btn-secondary button-nav-active" style="width: 160px;">Luyện tập</button>
        <a href="thongke.html">
            <button type="button" class="btn btn-primary button-nav">Thống kê</button>
        </a>
        <a href="kiemtra.html">
            <button type="button" class="btn btn-primary button-nav">Kiểm tra</button>
        </a>`
        );
        return arrayTrainningDataObject;
    }
}

var rsArray = [];
var arrayDataObject = getData();
for (var i = 0; i < arrayDataObject.length; i++) {
    for (var j = 0; j < arrayDataObject[i].items.length; j++) {
        rsArray.push(arrayDataObject[i].items[j]);
    }
}
console.log(rsArray);


$('#show-header').html(`<p style="white-space: pre-line;">${rsArray[index].header}</p>`);