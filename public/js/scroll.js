var buttonToper = document.getElementById('mainScroll');
var buttonFooter = document.getElementById('footerBackToTop');
var taskBeginer = document.getElementById('taskBegin');
var scrollSpeed = 5;
var vh = document.body.clientHeight;
var min = vh < 900 ? vh : 900;
var footerSpeeder = 5;

window.addEventListener('resize', function() {vh = document.body.clientHeight; min = vh < 900 ? vh : 900;});

buttonToper.addEventListener('click', strToperScroll);
buttonFooter.addEventListener('click', strFooterScroll);
taskBeginer.addEventListener('click', strBeginerScroll);

function strToperScroll() {
    scrollSpeed -= 0.001;
    if (pageYOffset < min) {
        window.scrollTo(0, pageYOffset + 10);
        timer = setTimeout(strToperScroll, scrollSpeed);
    } else {
        clearTimeout(timer);
        scrollSpeed = 5;
    }
}

function strFooterScroll() {
    scrollSpeed -= 0.001;
    if (pageYOffset > 0) {
        window.scrollTo(0, pageYOffset - footerSpeeder);
        if (footerSpeeder < 35) footerSpeeder += 1;
        timer = setTimeout(strFooterScroll, scrollSpeed);
    } else {
        clearTimeout(timer);
        scrollSpeed = 5;
        footerSpeeder = 5;
    }
}

function strBeginerScroll() {
    scrollSpeed -= 0.001;
    if (pageYOffset < min + 490) {
        window.scrollTo(0, pageYOffset + 10);
        timer = setTimeout(strBeginerScroll, scrollSpeed);
    } else {
        clearTimeout(timer);
        scrollSpeed = 5;
    }
}
