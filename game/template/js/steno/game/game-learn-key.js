window.static_quotes_array = "hạt bụi nào hóa kiếp thân tôi, để một mai vươn hình hài lớn dậy? ôi, cát bụi tuyệt vời, mặt trời soi một kiếp rong chơi. hạt bụi nào hoá kiếp thân tôi, để một mai tôi về làm cát bụi? bao nhiêu năm làm kiếp con người chợt một chiều tóc trắng như vôi lá úa trên cao rụng đầy, cho trăm năm vào chết một ngày mặt trời nào soi sáng tim tôi, để tình yêu xay mòn thành đá cuội?"

$(document).ready(function () {
    let stenoUpperBank = $(".stenoUpperBank");
    stenoUpperBank.empty();
    let stenoLowerBank = $(".stenoLowerBank");
    stenoLowerBank.empty();
    let stenoVowelKeys = $(".stenoVowelKeys");
    stenoVowelKeys.empty();
    let stdKeyboard = "#stdKeyboard";
    for (let j = 0; j < listKey.length; j++) {
        let textStd = `<span class="upper">` + listKey[j].valueSteno.replace('-', '') + `</span><span class="lower-left"  style="color: #6b6b47">` + listKey[j].valueQwerty.toUpperCase() + `</span>`
        $(stdKeyboard).find(".code" + listKey[j].keyQwerty).empty()
        $(stdKeyboard).find(".code" + listKey[j].keyQwerty).append(textStd)
        if (listKey[j].idLayout < 10) {
            let text = `<div class="stenoKey square code` + listKey[j].keyQwerty + `" id="stenoKey-` + listKey[j].idLayout + `"
                            data-priority="` + listKey[j].priority + `" data-keyQwerty="` + listKey[j].keyQwerty + `"
                            data-valueQwerty="` + listKey[j].valueQwerty + `">` + listKey[j].valueSteno.replace('-', '') + `</div>`;
            stenoUpperBank.append(text)
        } else if (listKey[j].idLayout < 20) {
            let text = `<div class="stenoKey rounded code` + listKey[j].keyQwerty + `" id="stenoKey-` + listKey[j].idLayout + `"
                            data-priority="` + listKey[j].priority + `" data-keyQwerty="` + listKey[j].keyQwerty + `"
                            data-valueQwerty="` + listKey[j].valueQwerty + `">` + listKey[j].valueSteno.replace('-', '') + `</div>`;
            stenoLowerBank.append(text)
        } else {
            let text = `<div class="stenoKey rounded code` + listKey[j].keyQwerty + `" id="stenoKey-` + listKey[j].idLayout + `"
                            data-priority="` + listKey[j].priority + `" data-keyQwerty="` + listKey[j].keyQwerty + `"
                            data-valueQwerty="` + listKey[j].valueQwerty + `">` + listKey[j].valueSteno.replace('-', '') + `</div>`;
            stenoVowelKeys.append(text)
        }
    }

    let urlString = window.location.href;
    let url = new URL(urlString)
    let type = url.searchParams.get("type");
    setTimeout(function () {
        randomRequireKey(type)
    }, 3000)

    window.setInterval(function () {
        writeLogTyping(valueType)
        countLog = 0
        valueType = {}
    }, 1000 * 60 * 5);
    // for (let i = 0; i < 24; i++) {
    //     let keyQwerty = $("#stenoKey-" + i).attr("data-keyQwerty");
    //     for (let j = 0; j < listLayoutFinger.length; j++) {
    //         let arr = listLayoutFinger[j].list
    //         let check = false;
    //         for (let k = 0; k < arr.length; k++) {
    //             if (arr[k] === parseInt(keyQwerty)) {
    //                 check = true;
    //             }
    //         }
    //         if (check === true) {
    //             if (j > 4) {
    //                 $("#stenoKey-" + i).css({
    //                     "background-color": color[listLayoutFinger[j].idFinger],
    //                     "color": "black",
    //                 })
    //             } else {
    //                 $("#stenoKey-" + i).css({"background-color": color[listLayoutFinger[j].idFinger], "color": "black"})
    //             }
    //         }
    //     }
    // }
})

function generateNextKey() {
    let urlString = window.location.href;
    let url = new URL(urlString)
    let type = url.searchParams.get("type");
    for (let i=0; i<listKey.length; i++) {
        $(".code" + listKey[i].keyQwerty).css({
            "background-color": "rgb(0,0,0)",
            "color": "white",
        })
    }
    for (let i = 0; i < 10; i++) {
        $(".finger-" + i).css("fill", "white")
    }
    randomRequireKey(type)
}

function randomRequireKey(type) {
    let requireKey = $(".require-key")
    let numberRandom;
    let idFinger;
    let text
    // switch (type) {
    //     case "key":
    //         window.static_quotes_array = charAt(0);
    //         var n = window.static_quotes_array.charCodeAt(0) - 97 + 1;
    //         numberRandom = getRandomInt(24);
    //         window.static_quotes_array = window.static_quotes_array.substring(1, window.static_quotes_array.length);
            
    //         let key = listKey[numberRandom]
    //         text = `<div class="stenoKey square code` + key.keyQwerty + `" id="stenoKey-` + key.idLayout + `"
    //                         data-priority="` + key.priority + `" data-keyQwerty="` + key.keyQwerty + `"
    //                         data-valueQwerty="` + key.valueQwerty + `" data-valueSteno="` + key.valueSteno + `">` + key.valueSteno.replace('-', '') + `</div>`
    //         requireKey.empty()
    //         requireKey.append(text)
    //         for (let j = 0; j < listKey.length; j++) {
    //             if (key.priority === listKey[j].priority) {
    //                 for (let i = 0; i < listLayoutFinger.length; i++) {
    //                     if (listLayoutFinger[i].list.includes(listKey[j].keyQwerty)) {
    //                         idFinger = listLayoutFinger[i].idFinger
    //                         break
    //                     }
    //                 }
    //                 $(".finger-" + idFinger).css("fill", color[idFinger])
    //                 $(".code" + listKey[j].keyQwerty).css({
    //                     "background-color": color[idFinger],
    //                     "color": "black",
    //                 })
    //             }
    //         }
    //         // for (let i = 0; i < listLayoutFinger.length; i++) {
    //         //     if (listLayoutFinger[i].list.includes(key.keyQwerty)) {
    //         //         idFinger = listLayoutFinger[i].idFinger
    //         //         break
    //         //     }
    //         // }

    //         // $(".finger-" + idFinger).css("fill", color[idFinger])
    //         // $(".code" + key.keyQwerty).css({
    //         //     "background-color": color[idFinger],
    //         //     "color": "black",
    //         // })
    //         break
    //     case "phonetics":
    //     case "word":
    //         let keyArray = Object.getOwnPropertyNames(dictionary)
    //         numberRandom = getRandomInt(keyArray.length)
    //         text = `<div class="col-7" style="display: flex; justify-content: center;">
    //                     <h4 style="color: red" data-key="` + keyArray[numberRandom] + `" data-value="` + dictionary[keyArray[numberRandom]] + `">` + dictionary[keyArray[numberRandom]].toUpperCase() + `</h4>
    //                 </div>`
    //         requireKey.empty()
    //         requireKey.append(text)

    //         let listKeySplit = convertWordToArrayKey(keyArray[numberRandom])
    //         for (let i = 0; i < listKeySplit.length; i++) {
    //             for (let j = 0; j < listKey.length; j++) {
    //                 if (listKeySplit[i] === listKey[j].valueSteno) {
    //                     let key = listKey[j]
    //                     for (let i = 0; i < listLayoutFinger.length; i++) {
    //                         if (listLayoutFinger[i].list.includes(key.keyQwerty)) {
    //                             idFinger = listLayoutFinger[i].idFinger
    //                             break
    //                         }
    //                     }
    //                     $(".finger-" + idFinger).css("fill", color[idFinger])
    //                     $(".code" + key.keyQwerty).css({
    //                         "background-color": color[idFinger],
    //                         "color": "black",
    //                     })
    //                 }
    //             }
    //         }
    //         $("#typing-value").val("")
    //         break
    // }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function convertWordToArrayKey(word) {
    let listTempt = [];
    for (let i = 0; i < word.length; i++) {
        listTempt.push(word.substring(i, i + 1))
    }
    let listKeySplit = []
    if (listTempt.indexOf("-") !== -1) {
        let part1 = [];
        for (let i = 0; i < listTempt.indexOf("-"); i++) {
            if (listTempt[i] !== '*') {
                part1.push(listTempt[i] + '-');
            } else {
                part1.push(listTempt[i])
            }
        }
        let part2 = [];
        for (let i = listTempt.indexOf("-") + 1; i < listTempt.length; i++) {
            if (listTempt[i] !== '*') {
                part2.push('-' + listTempt[i]);
            } else {
                part2.push(listTempt[i])
            }
        }
        listKeySplit = part1.concat(part2)
    } else {
        for (let i = 0; i < listTempt.length; i++) {
            if (listTempt[i] !== '*') {
                listKeySplit.push(listTempt[i] + '-');
            } else {
                listKeySplit.push(listTempt[i])
            }
        }
    }
    return listKeySplit
}