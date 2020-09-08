var vh = document.body.clientHeight;
var minRules = vh < 900 ? vh : 900;

window.onscroll = function() {rulesGrid();reAdress();motivation();gallery();statistic();headlines();};
window.onload = function() {rulesGrid();reAdress();motivation();gallery();statistic();headlines();};

function rulesGrid() {
    if (pageYOffset > minRules*4/8) {
        document.getElementsByClassName('rulesGridContent')[0].style.opacity = 1;
    }
}

function reAdress() {
    if (pageYOffset > minRules) {
        document.getElementById('firstReAdressGridDiv').style.opacity = 1;
        document.getElementById('secondReAdressGridDiv').style.opacity = 1;
    }

    if (pageYOffset > minRules + 400) {
        document.getElementById('thirdReAdressGridDiv').style.opacity = 1;
        document.getElementById('fourthReAdressGridDiv').style.opacity = 1;
    }
}


function motivation() {
    if (pageYOffset > minRules + 1000) {
        document.getElementById('outsideBorderSlider').style.opacity = 1;
        document.getElementById('insideBorderSlider').style.opacity = 1;
        document.getElementById('resizeArea').style.opacity = 1;
    }

    if (pageYOffset > minRules + 1200) {
        document.getElementsByClassName('sliderHeadlines')[0].style.opacity = 1;
        var timer = setTimeout(()=>{document.getElementsByClassName('sliderHeadlines')[1].style.opacity = 1;}, 1000);
    }
}

function gallery() {
    if (pageYOffset > minRules + 1750) {
        document.getElementById('galleryBoxOutsideBorder').style.opacity = 1;
        document.getElementById('galleryBoxInsideBorder').style.opacity = 1;
        document.getElementById('galleryBox').style.opacity = 1;
        document.getElementById('galleryText').style.opacity = 1;
        document.getElementById('galleryTextReAdress').style.opacity = 1;
        document.getElementById('galleryButtons').style.opacity = 1;
    }
}

function statistic() {
    if (pageYOffset > minRules + 2150) {
        document.getElementById('greyStat').getElementsByClassName('container')[0].style.opacity = 1;
    }
}

function headlines() {
    if (pageYOffset > minRules*1/8) {
        document.getElementsByClassName('headline')[0].style.opacity = 1;
    }

    if (pageYOffset > minRules - 200) {
        document.getElementsByClassName('headline')[1].style.opacity = 1;
    }

    if (pageYOffset > minRules + 900) {
        document.getElementsByClassName('headline')[2].style.opacity = 1;
    }

    if (pageYOffset > minRules + 1550) {
        document.getElementsByClassName('headline')[3].style.opacity = 1;
    }
}