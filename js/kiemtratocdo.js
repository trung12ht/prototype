


var show = false;
my_function = null;
let sotu = document.querySelector(".sotu");
let chinhxac = document.querySelector(".dochinhxac");
let dieukien = document.querySelector(".dieukien");

// define the time limit
let TIME_LIMIT = 60;

// define quotes to be used
let quotes_array = [
  "ttptptptptptptptptptptptptptptptptptptptpyjyjyjyjyjyjyjyjyjyjyjyjyjyjyjy*w*w*w*w*w*w*w*cuccc",
  "ttptptptptptptptptptptptptptptptptptptptpyjyjyjyjyjyjyjyjyjyjyjyjyjyjyjy*w*w*w*w*w*w*w*cuccc",
  "ttptptptptptptptptptptptptptptptptptptptpyjyjyjyjyjyjyjyjyjyjyjyjyjyjyjy*w*w*w*w*w*w*w*cuccc",
  "ttptptptptptptptptptptptptptptptptptptptpyjyjyjyjyjyjyjyjyjyjyjyjyjyjyjy*w*w*w*w*w*w*w*cuccc",
  "ttptptptptptptptptptptptptptptptptptptptpyjyjyjyjyjyjyjyjyjyjyjyjyjyjyjy*w*w*w*w*w*w*w*cuccc",
  "ttptptptptptptptptptptptptptptptptptptptpyjyjyjyjyjyjyjyjyjyjyjyjyjyjyjy*w*w*w*w*w*w*w*cuccc"
];
// selecting required elements
// $sotu = $("#sotu"),
// $dochinhxac = $('#dochinhxac'),

let timer_text = document.querySelector(".curr_time");
let accuracy_text = document.querySelector(".curr_accuracy");
let error_text = document.querySelector(".curr_errors");
let cpm_text = document.querySelector(".curr_cpm");
let wpm_text = document.querySelector(".curr_wpm");
let quote_text = document.querySelector(".quote");
let input_area = document.querySelector(".input_area");
// let restart_btn = document.querySelector(".restart_btn");
let cpm_group = document.querySelector(".cpm");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");
let finish_Result = document.querySelector(".finishResult");

let timeLeft = TIME_LIMIT;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy1 = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = 0;
let timer = null;

let processNow = $("#now");
let processTarget = $("#target");
let wpmNow = $("#wpmNow");

let finished = false;

let s = 0;
for (var i=0;i<quotes_array.length;i++) {
  s = s+ quotes_array[i].length;
}
let nNow = 0;
processNow.html(nNow);
// wpmNow.html(0);
processTarget.html(s);

function updateQuote() {
  quote_text.textContent = null;
  current_quote = quotes_array[quoteNo];

  // separate each character and make an element 
  // out of each of them to individually style them
  current_quote.split('').forEach(char => {
    const charSpan = document.createElement('span')
    charSpan.innerText = char
    quote_text.appendChild(charSpan)
  })
  

  // roll over to the first quote
  if (quoteNo < quotes_array.length - 1)
    quoteNo++;
  else
    quoteNo = 0;
}

function processCurrentText() {

  // get current input text and split it
  curr_input = input_area.value;
  curr_input_array = curr_input.split('');

  // increment total characters typed
  characterTyped++;
  processNow.html(nNow++);
  errors = 0;

  quoteSpanArray = quote_text.querySelectorAll('span');
  quoteSpanArray.forEach((char, index) => {
    let typedChar = curr_input_array[index]

    // characters not currently typed
    if (typedChar == null) {
      char.classList.remove('correct_char');
      char.classList.remove('incorrect_char');

      // correct characters
    } else if (typedChar === char.innerText) {
      char.classList.add('correct_char');
      char.classList.remove('incorrect_char');

      // incorrect characters
    } else {
      char.classList.add('incorrect_char');
      char.classList.remove('correct_char');

      // increment number of errors
      errors++;
    }
  });

  // display the number of errors
  error_text.textContent = total_errors + errors;

  // update 1 text
  let correctCharacters = (characterTyped - (total_errors + errors));
  let accuracyVal = ((correctCharacters / characterTyped) * 100);
  accuracy_text.textContent = Math.round(accuracyVal);
  chinhxac.textContent =  Math.round(accuracyVal);
  // if current text is completely typed
  // irrespective of errors
  if (curr_input.length == current_quote.length) {
    updateQuote();

    // update total errors
    total_errors += errors;

    // clear the input area
    input_area.value = "";
  }
}

function updateTimer() {
  if (timeLeft > 0) {
    // decrease the current time left
    timeLeft--;

    // increase the time elapsed
    timeElapsed++;

    wpmNow.html(Math.round(nNow/timeElapsed*60));
    // update the timer text
    if(timer_text)timer_text.textContent = timeLeft + "s";
  }
  else {
    // finish the game
    finishGame();
  }
}



function finishGame() {
  // stop the timer

  clearInterval(timer);
  finished = true;

  // disable the input area
  input_area.disabled = true;

  // show finishing text
  quote_text.textContent = "Ấn kiểm tra để bắt đầu lại";

  // display restart button
  // restart_btn.style.display = "block";


  // calculate cpm and wpm
  cpm = Math.round(((characterTyped / timeElapsed) * 60));
  wpm = Math.round((((characterTyped / 5) / timeElapsed) * 60));

  // update cpm and wpm text
  if(cpm_text) cpm_text.textContent = cpm;
  if(wpm_text) wpm_text.textContent = wpm;
  if(sotu) sotu.textContent = wpm;
  // display the cpm and wpm
  if(cpm_group) cpm_group.style.display = "block";
  if(wpm_group) wpm_group.style.display = "block";
  console.log("haha",chinhxac)
  console.log("haha",wpm)
  if(wpm>60&&parseInt(chinhxac.textContent)>8&&dieukien) dieukien.textContent = "Bạn đã vượt qua";
  console.log("entered");
  my_function();
}
let checkFirst = true

function startGame() {
  if (checkFirst) checkFirst = false;
  else return;

  // resetValues();
  updateQuote();

  // clear old and start a new timer
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}

var resetValuesa = true;
function resetValues() {
  if (!resetValuesa) {
    $("#show-header1").html("Đã hết lần thực hiện bài thi");
    // window.location.href = "./kiemtra.html";
    return;
  }
  resetValuesa = false;
  $("#show-header1").html("Thực hiện lần 3/3");
  checkFirst = true;
  timeLeft = TIME_LIMIT;
  timeElapsed = 0;
  errors = 0;
  total_errors = 0;
  accuracy1 = 0;
  characterTyped = 0;
  quoteNo = 0;
  input_area.disabled = false;

  input_area.value = "";
  quote_text.textContent = 'Ấn vào khoảng trắng để bắt đầu game';
  accuracy_text.textContent = 100;
  timer_text.textContent = timeLeft + 's';
  error_text.textContent = 0;
  // restart_btn.style.display = "true";
  if(cpm_group) cpm_group.style.display = "none";
  if(wpm_group) wpm_group.style.display = "none";
  
}


$(function() {
  

  var $accountDelete       = $('#delete-account'),
    $accountDeleteDialog = $('#confirm-delete'),
   

    transition;
    function my_func(){
      $accountDeleteDialog[0].showModal();
    transition = window.setTimeout(function() {
        $accountDeleteDialog.addClass('dialog-scale');

    }, 0.5);

    }
    my_function = my_func;

  $('#cancel').on('click', function() {
    $accountDeleteDialog[0].close();
    $accountDeleteDialog.removeClass('dialog-scale');
    clearTimeout(transition);
    if (!resetValuesa){
      window.location.href = "./kiemtra.html";
    }
       
  });
  $('#ok').on('click', function() {
    $accountDeleteDialog[0].close();
    $accountDeleteDialog.removeClass('dialog-scale');
    clearTimeout(transition);
    // window.location.;
  });
  $('#nextex').on('click', function() {
    $accountDeleteDialog[0].close();
    $accountDeleteDialog.removeClass('dialog-scale');
    clearTimeout(transition);
    window.location.reload();
  });

})
function handleOpen(){
  
  my_function();
 
}