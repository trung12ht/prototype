onload = function() {

    // create the tree
    var theTree = new wijmo.nav.TreeView('#theTree', {
        itemsSource: getData(),
        displayMemberPath: 'header',
        // itemsItemsPath: 'items',
    });

    // scan visible nodes now and when the user clicks the button
    scanNodes(true);
    // document.getElementById('scan').addEventListener('click', function (e) {
    //     scanNodes(true);
    // });

    // scan nodes and show their information
    function scanNodes(visible) {
        var result = '',
            cnt = 0;
        for (var node = theTree.nodes[0]; node; node = node.next(visible)) {
            cnt++;
            result +=
                wijmo.format('{header}', node.dataItem) +
                wijmo.format(' <span class="node-info">(level: {level}, index: {index}, isCollapsed: {isCollapsed})</span><br/>', node);
        }
        // document.getElementById('result').innerHTML = result;
    }

    // get the tree data
    function getData() {
        return arrayDataObject;
    }

    var rsArray = [];
    for (var i = 0; i < arrayDataObject.length; i++) {
        for (var j = 0; j < arrayDataObject[i].items.length; j++) {
            rsArray.push(arrayDataObject[i].items[j]);
        }
    }
    console.log(rsArray);

    $(document).ready(function() {
        setTimeout(function() { $('div:last').css('display', 'none'); }, 10);
    });

    // $('#theTree span').click(function(index){
    //     console.log($(this).index());
    // })

    // $("#theTree").on("click", "span", function() {
    //     console.log( $(this).index() );
    // });
    $(".main-content").html(setMainContent(rsArray[0]));
    var initSelect = true;
    var rootSelect;
    var StringVal = 'Bàn phím gõ tốc ký (Steno)';
    var index = 0;

    $('.btn-primary .fa-long-arrow-alt-left').click(function() {
        if (index == 0) return;
        initSelect = true;
        StringVal = rsArray[index].header;
        $('span').each(function(indexx) {
            if ($(this).text() == StringVal) {
                $(this).parent().removeClass('wj-state-selected')
                if (index == 4) {
                    $(this).parent().parent().prev().addClass('wj-state-collapsed');
                    $(this).parent().parent().prev().prev().prev().removeClass('wj-state-collapsed');
                }
                if (index == 12) {
                    $(this).parent().parent().prev().addClass('wj-state-collapsed');
                    $(this).parent().parent().prev().prev().prev().removeClass('wj-state-collapsed');
                }
                if (index == 46) {
                    $(this).parent().parent().prev().addClass('wj-state-collapsed');
                    $(this).parent().parent().prev().prev().prev().removeClass('wj-state-collapsed');
                }
                if (index == 48) {
                    $(this).parent().parent().prev().addClass('wj-state-collapsed');
                    $(this).parent().parent().prev().prev().prev().removeClass('wj-state-collapsed');
                }
                console.log(index);
            }
        });
        index = index - 1;
        StringVal = rsArray[index].header;
        $(".main-content").html(setMainContent(rsArray[index]));
        $('span').each(function(index) {
            //do stuff
            if ($(this).text() == StringVal) {
                $(this).parent().addClass('wj-state-selected');
            }
        });
    })

    $('.btn-primary .fa-long-arrow-alt-right').click(function() {
        if (index == 49) return;
        initSelect = true;
        StringVal = rsArray[index].header;
        $('span').each(function(indexx) {
            if ($(this).text() == StringVal) {
                $(this).parent().removeClass('wj-state-selected');
                if (index == 3) {
                    $(this).parent().parent().prev().addClass('wj-state-collapsed');
                    $(this).parent().parent().next().removeClass('wj-state-collapsed');
                }
                if (index == 11) {
                    $(this).parent().parent().prev().addClass('wj-state-collapsed');
                    $(this).parent().parent().next().removeClass('wj-state-collapsed');
                }
                if (index == 45) {
                    $(this).parent().parent().prev().addClass('wj-state-collapsed');
                    $(this).parent().parent().next().removeClass('wj-state-collapsed');
                }
                if (index == 47) {
                    $(this).parent().parent().prev().addClass('wj-state-collapsed');
                    $(this).parent().parent().next().removeClass('wj-state-collapsed');
                }
            }
        });
        index = index + 1;
        StringVal = rsArray[index].header;
        $(".main-content").html(setMainContent(rsArray[index]));
        $('span').each(function(index) {
            //do stuff
            if ($(this).text() == StringVal) {
                $(this).parent().addClass('wj-state-selected');
            }
        });
    })

    $('span').each(function(index) {
        //do stuff
        if ($(this).text() == StringVal) {
            $(this).parent().addClass('wj-state-selected');
            rootSelect = $(this).parent();
        }
    });
    $("#theTree .wj-nodelist .wj-nodelist span").click(function() {
        if (initSelect) {
            initSelect = false;
            rootSelect.removeClass('wj-state-selected');
        }
        index = $("#theTree .wj-nodelist .wj-nodelist span").index(this);
        // alert("index is: " + index);
        $(".main-content").html(setMainContent(rsArray[index]));

        // Hiển thị bàn phím
        // showKeyBoard();
    });



    // {"type":"view","header":"Bàn phím gõ tốc ký (Steno)","content":
    // ["Bàn phím gõ tốc ký tiếng Việt gồm 22 phím + 1 p
    // hím dài\n• 4 phím đặc biệt (S, T, H, N), nhãn t
    // rùng nhau nhưng vai trò khác nhau\n• 1 phím dài đ
    // ể chuyển chế độ gõ số"],"image":["slide6.png"]}
    function setMainContent(obj) {
        console.log(obj);
        var rsHTML = ``;
        if (obj.type == 'view') {
            for (var i = 0; i < obj.content.length; i++) {
                rsHTML += `
                <p style="white-space: pre-line">${obj.content[i]}</p>
                <img src="img/${obj.image[i]}">
                `
            }
        } else {
            // Hiển thị bàn phím
            //     rsHTML = `<div id="wrap">
            //     <input class="keyboard" type="text" />
            // </div>`;

            rsHTML = `
        <p style="white-space: pre-line">${obj.header}</p>
        `
            if (obj.image != 'no') {
                rsHTML += `<img src="img/${obj.image}"></img>`
            }
            rsHTML += `
        <div style='margin-left: 269px;'>
        <a href="gophim.html?tab=1&index=${index}">
        <button type="button" class="btn btn-primary back" style="
    height: 60px !important;
    margin-left: 18px !important;
">

        <img src="https://cdn0.iconfinder.com/data/icons/design-and-usability/64/typing_keyboard_icon_hands_type_developer_interface_work-512.png" style="
        width: 50px;
    ">
        </button>
        <div class="label-back">Thực hành ngay</div>
        </div>           
                            </a>
        
        `
        }
        return rsHTML;
    };
    // $("#theTree").delegate('span', 'click', function () {
    //     console.log( $(this).index() );
    // });
}


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