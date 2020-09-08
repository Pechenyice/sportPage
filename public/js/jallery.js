
var picNum = 1;
var interval = 5000;
var first = document.getElementById('firstCheckButton');
var second = document.getElementById('secondCheckButton');
var third = document.getElementById('thirdCheckButton');
var fourth = document.getElementById('fourthCheckButton');
var fifth = document.getElementById('fifthCheckButton');
var mainBlock = document.getElementById('galleryBox');
var text = document.getElementById('galleryText');

text.innerHTML = "Pososite ";
var a = document.createElement('a');
a.setAttribute('href', "javascript:0");
a.innerHTML = "desiredText";
text.appendChild(a);
text.innerHTML += " Pososite ch";

function sendPrevForm() {
    clearTimeout(timerId);
    if (picNum > 1) {
        picNum--;
    } else {
        picNum = 5;
    }

    if (picNum == 5) {
        mainBlock.style.backgroundImage = "url('img/5.jpg')";
        
        first.style.background = '#6A5ACD';

        second.style.background = '#6A5ACD';

        third.style.background = '#6A5ACD';

        fourth.style.background = '#6A5ACD';

        fifth.style.background = 'none';

        text.innerHTML = "Pososite ";
        var a = document.createElement('a');
        a.setAttribute('href', "javascript:0");
        a.innerHTML = "desiredText";
        text.appendChild(a);
        text.innerHTML += " Pososite chle  dspflsdogp[df hahahahaha";

    } else if (picNum == 4) {
        mainBlock.style.backgroundImage = "url('img/4.jpg')";

        first.style.background = '#6A5ACD';

        second.style.background = '#6A5ACD';

        third.style.background = '#6A5ACD';

        fourth.style.background = 'none';

        fifth.style.background = '#6A5ACD';

        text.innerHTML = "Pososite ";
        var a = document.createElement('a');
        a.setAttribute('href', "javascript:0");
        a.innerHTML = "desiredText";
        text.appendChild(a);
        text.innerHTML += " Pososite chle  dspflsdogp[df";

    } else if (picNum == 3) {
        mainBlock.style.backgroundImage = "url('img/3.jpg')";
        
        first.style.background = '#6A5ACD';

        second.style.background = '#6A5ACD';

        third.style.background = 'none';

        fourth.style.background = '#6A5ACD';

        fifth.style.background = '#6A5ACD';

        text.innerHTML = "Pososite ";
        var a = document.createElement('a');
        a.setAttribute('href', "javascript:0");
        a.innerHTML = "desiredText";
        text.appendChild(a);
        text.innerHTML += " Pososite chle";

    } else if (picNum == 2) {
        mainBlock.style.backgroundImage = "url('img/2.jpg')";
        
        first.style.background = '#6A5ACD';

        second.style.background = 'none';

        third.style.background = '#6A5ACD';

        fourth.style.background = '#6A5ACD';

        fifth.style.background = '#6A5ACD';

        text.innerHTML = "Pososite ";
        var a = document.createElement('a');
        a.setAttribute('href', "javascript:0");
        a.innerHTML = "desiredText";
        text.appendChild(a);
        text.innerHTML += " Pososite chl";

    } else if (picNum == 1) {
        mainBlock.style.backgroundImage = "url('img/1.jpg')";
        
        first.style.background = 'none';

        second.style.background = '#6A5ACD';

        third.style.background = '#6A5ACD';

        fourth.style.background = '#6A5ACD';

        fifth.style.background = '#6A5ACD';

        text.innerHTML = "Pososite ";
        var a = document.createElement('a');
        a.setAttribute('href', "javascript:0");
        a.innerHTML = "desiredText";
        text.appendChild(a);
        text.innerHTML += " Pososite ch";

    }
    timerId = setInterval(sendNextForm, interval);
}
checkPicPrev.onclick = sendPrevForm;

function sendNextForm() {
    clearTimeout(timerId);
    if (picNum < 5) {
        picNum++;
    } else {
        picNum = 1;
    }

    if (picNum == 5) {
        mainBlock.style.backgroundImage = "url('img/5.jpg')";
        
        first.style.background = '#6A5ACD';

        second.style.background = '#6A5ACD';

        third.style.background = '#6A5ACD';

        fourth.style.background = '#6A5ACD';

        fifth.style.background = 'none';

        text.innerHTML = "Pososite ";
        var a = document.createElement('a');
        a.setAttribute('href', "javascript:0");
        a.innerHTML = "desiredText";
        text.appendChild(a);
        text.innerHTML += " Pososite chle  dspflsdogp[df hahahahaha";

    } else if (picNum == 4) {
        mainBlock.style.backgroundImage = "url('img/4.jpg')";

        first.style.background = '#6A5ACD';

        second.style.background = '#6A5ACD';

        third.style.background = '#6A5ACD';

        fourth.style.background = 'none';

        fifth.style.background = '#6A5ACD';

        text.innerHTML = "Pososite ";
        var a = document.createElement('a');
        a.setAttribute('href', "javascript:0");
        a.innerHTML = "desiredText";
        text.appendChild(a);
        text.innerHTML += " Pososite chle  dspflsdogp[df";

    } else if (picNum == 3) {
        mainBlock.style.backgroundImage = "url('img/3.jpg')";
        
        first.style.background = '#6A5ACD';

        second.style.background = '#6A5ACD';

        third.style.background = 'none';

        fourth.style.background = '#6A5ACD';

        fifth.style.background = '#6A5ACD';

        text.innerHTML = "Pososite ";
        var a = document.createElement('a');
        a.setAttribute('href', "javascript:0");
        a.innerHTML = "desiredText";
        text.appendChild(a);
        text.innerHTML += " Pososite chle";

    } else if (picNum == 2) {
        mainBlock.style.backgroundImage = "url('img/2.jpg')";
        
        first.style.background = '#6A5ACD';

        second.style.background = 'none';

        third.style.background = '#6A5ACD';

        fourth.style.background = '#6A5ACD';

        fifth.style.background = '#6A5ACD';

        text.innerHTML = "Pososite ";
        var a = document.createElement('a');
        a.setAttribute('href', "javascript:0");
        a.innerHTML = "desiredText";
        text.appendChild(a);
        text.innerHTML += " Pososite chl";

    } else if (picNum == 1) {
        mainBlock.style.backgroundImage = "url('img/1.jpg')";
        
        first.style.background = 'none';

        second.style.background = '#6A5ACD';

        third.style.background = '#6A5ACD';

        fourth.style.background = '#6A5ACD';

        fifth.style.background = '#6A5ACD';

        text.innerHTML = "Pososite ";
        var a = document.createElement('a');
        a.setAttribute('href', "javascript:0");
        a.innerHTML = "desiredText";
        text.appendChild(a);
        text.innerHTML += " Pososite ch";

    }
    timerId = setInterval(sendNextForm, interval);
}
checkPicNext.onclick = sendNextForm;
var timerId = setInterval(sendNextForm, interval);

first.addEventListener('click', function(){choosePic(1);});
second.addEventListener('click', function(){choosePic(2);});
third.addEventListener('click', function(){choosePic(3);});
fourth.addEventListener('click', function(){choosePic(4);});
fifth.addEventListener('click', function(){choosePic(5);});

function choosePic(num) {
    clearTimeout(timerId);
    picNum = num;
    if (picNum == 5) {
        mainBlock.style.backgroundImage = "url('img/5.jpg')";
        
        first.style.background = '#6A5ACD';

        second.style.background = '#6A5ACD';

        third.style.background = '#6A5ACD';

        fourth.style.background = '#6A5ACD';

        fifth.style.background = 'none';

        text.innerHTML = "Pososite ";
        var a = document.createElement('a');
        a.setAttribute('href', "javascript:0");
        a.innerHTML = "desiredText";
        text.appendChild(a);
        text.innerHTML += " Pososite chle  dspflsdogp[df hahahahaha";

    } else if (picNum == 4) {
        mainBlock.style.backgroundImage = "url('img/4.jpg')";

        first.style.background = '#6A5ACD';

        second.style.background = '#6A5ACD';

        third.style.background = '#6A5ACD';

        fourth.style.background = 'none';

        fifth.style.background = '#6A5ACD';

        text.innerHTML = "Pososite ";
        var a = document.createElement('a');
        a.setAttribute('href', "javascript:0");
        a.innerHTML = "desiredText";
        text.appendChild(a);
        text.innerHTML += " Pososite chle  dspflsdogp[df";

    } else if (picNum == 3) {
        mainBlock.style.backgroundImage = "url('img/3.jpg')";
        
        first.style.background = '#6A5ACD';

        second.style.background = '#6A5ACD';

        third.style.background = 'none';

        fourth.style.background = '#6A5ACD';

        fifth.style.background = '#6A5ACD';
        text.innerHTML = "Pososite ";
        var a = document.createElement('a');
        a.setAttribute('href', "javascript:0");
        a.innerHTML = "desiredText";
        text.appendChild(a);
        text.innerHTML += " Pososite chle";

    } else if (picNum == 2) {
        mainBlock.style.backgroundImage = "url('img/2.jpg')";
        
        first.style.background = '#6A5ACD';

        second.style.background = 'none';

        third.style.background = '#6A5ACD';

        fourth.style.background = '#6A5ACD';

        fifth.style.background = '#6A5ACD';

        text.innerHTML = "Pososite ";
        var a = document.createElement('a');
        a.setAttribute('href', "javascript:0");
        a.innerHTML = "desiredText";
        text.appendChild(a);
        text.innerHTML += " Pososite chl";

    } else if (picNum == 1) {
        mainBlock.style.backgroundImage = "url('img/1.jpg')";
        
        first.style.background = 'none';

        second.style.background = '#6A5ACD';

        third.style.background = '#6A5ACD';

        fourth.style.background = '#6A5ACD';

        fifth.style.background = '#6A5ACD';

        text.innerHTML = "Pososite ";
        var a = document.createElement('a');
        a.setAttribute('href', "javascript:0");
        a.innerHTML = "desiredText";
        text.appendChild(a);
        text.innerHTML += " Pososite ch";
    }

    timerId = setInterval(sendNextForm, interval);
}