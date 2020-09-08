var scroll = document.getElementById("scrollButton");
var block = document.getElementById("exercizeFilter");
var content = document.getElementById("filterContent");
var grid = document.getElementsByClassName("grid-container")[0];
var scrolled = 1;
var memory = [];
var calls = 1;
scroll.onclick = function() {changer(event);};

function changer(event) {
        if (scrolled) {
            block.style.width = 'calc(10% - 80px)';
            block.style.minWidth = '80px';
            content.style.display = 'none';
            grid.style.width = '90%';
            scroll.innerHTML = '<i class="fas fa-chevron-right"></i>';
            block.style.transition = '.5s';
            grid.style.transition = '.5s';
            scrolled = 0;
            if (document.body.clientWidth <= 1020) {
                block.style.minWidth = '50px';
                grid.style.width = 'calc(90% - 10px)';
            }
        } else if (!scrolled) {
            block.style.width = 'calc(25% - 80px)';
            content.style.display = 'block';
            grid.style.width = 'calc(75% + 40px)';
            scroll.innerHTML = '<i class="fas fa-chevron-left"></i>';
            scrolled = 1;
        }

}

var secretBack = document.getElementsByClassName('grid-container')[0];

var button1 = document.getElementById("firstButton");
var buttonAct1 = document.getElementById("firstButtonHover");
var buttonText1 = buttonAct1.children[0];
var buttonCheck1 = 1;

var button2 = document.getElementById("secondButton");
var buttonAct2 = document.getElementById("secondButtonHover");
var buttonText2 = buttonAct2.children[0];
var buttonCheck2 = 1;

var button3 = document.getElementById("thirdButton");
var buttonAct3 = document.getElementById("thirdButtonHover");
var buttonText3 = buttonAct3.children[0];
var buttonCheck3 = 1;

var button4 = document.getElementById("fourthButton");
var buttonAct4 = document.getElementById("fourthButtonHover");
var buttonText4 = buttonAct4.children[0];
var buttonCheck4 = 1;

var button5 = document.getElementById("fifthButton");
var buttonAct5 = document.getElementById("fifthButtonHover");
var buttonText5 = buttonAct5.children[0];
var buttonCheck5 = 1;

var button6 = document.getElementById("sixthButton");
var buttonAct6 = document.getElementById("sixthButtonHover");
var buttonText6 = buttonAct6.children[0];
var buttonCheck6 = 1;

var button7 = document.getElementById("seventhButton");
var buttonAct7 = document.getElementById("seventhButtonHover");
var buttonText7 = buttonAct7.children[0];
var buttonCheck7 = 1;

var button8 = document.getElementById("eighthButton");

var press = document.getElementsByClassName('press');
var hands = document.getElementsByClassName('hands');
var ass = document.getElementsByClassName('ass');
var back = document.getElementsByClassName('back');
var breast = document.getElementsByClassName('breast');
var legs = document.getElementsByClassName('legs');


button2.addEventListener('click', actionButton2);
button2.addEventListener('mouseover', overButton2);
button2.addEventListener('mouseleave', disoverButton2);

function actionButton2() {
    if (!buttonCheck2) {
        buttonAct2.style.width = '100%';
        buttonText2.style.opacity = '1';
        buttonText2.style.transform = 'rotate(45deg)';
        button2.children[1].style.color = 'white';
        button2.children[1].style.transition = '.5s';
        press[0].classList.remove('noDisplay');
        press[1].classList.remove('noDisplay');
        buttonCheck2 = 1;
        if (buttonCheck2 == 1 && buttonCheck3 == 1 && buttonCheck4 == 1 && buttonCheck5 == 1 && buttonCheck6 == 1 && buttonCheck7 == 1) {
            buttonCheck1 = 0;
            actionButton1();
            overButton1();
        }
    } else if (buttonCheck2) {
        buttonAct2.style.width = '20%';
        buttonText2.style.transform = 'rotate(0deg)';
        button2.children[1].style.color = 'white';
        button2.children[1].style.transition = '.5s';
        press[0].classList.add('noDisplay');
        press[1].classList.add('noDisplay');
        buttonCheck1 = 1;
        actionButton1();
        disoverButton1();
        buttonCheck2 = 0;
        // if (buttonCheck2 == 0 && buttonCheck3 == 0 && buttonCheck4 == 0 && buttonCheck5 == 0 && buttonCheck6 == 0 && buttonCheck7 == 0) {
        //     secretBack.style.backgroundImage = 'data:image/jpeg;base64,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';
        // }
    }
}
function overButton2() {
    buttonAct2.style.width = '20%';
    buttonText2.style.opacity = '1';
    if (buttonCheck2) buttonAct2.style.width = '100%';
}

function disoverButton2() {
    buttonAct2.style.width = '0%';
    buttonText2.style.opacity = '0';
    if (buttonCheck2) {
        buttonAct2.style.width = '100%';
        buttonText2.style.opacity = '1';
    }
}


button3.addEventListener('click', actionButton3);
button3.addEventListener('mouseover', overButton3);
button3.addEventListener('mouseleave', disoverButton3);

function actionButton3() {
    if (!buttonCheck3) {
        buttonAct3.style.width = '100%';
        buttonText3.style.opacity = '1';
        buttonText3.style.transform = 'rotate(45deg)';
        button3.children[1].style.color = 'white';
        button3.children[1].style.transition = '.5s';
        hands[0].classList.remove('noDisplay');
        hands[1].classList.remove('noDisplay');
        hands[2].classList.remove('noDisplay');
        hands[3].classList.remove('noDisplay');
        buttonCheck3 = 1;
        if (buttonCheck2 == 1 && buttonCheck3 == 1 && buttonCheck4 == 1 && buttonCheck5 == 1 && buttonCheck6 == 1 && buttonCheck7 == 1) {
            buttonCheck1 = 0;
            actionButton1();
            overButton1();
        }
    } else if (buttonCheck3) {
        buttonAct3.style.width = '20%';
        buttonText3.style.transform = 'rotate(0deg)';
        button3.children[1].style.color = 'white';
        button3.children[1].style.transition = '.5s';
        hands[0].classList.add('noDisplay');
        hands[1].classList.add('noDisplay');
        hands[2].classList.add('noDisplay');
        hands[3].classList.add('noDisplay');
        buttonCheck1 = 1;
        actionButton1();
        disoverButton1();
        buttonCheck3 = 0;
    }
}

function overButton3() {
    buttonAct3.style.width = '20%';
    buttonText3.style.opacity = '1';
    if (buttonCheck3) buttonAct3.style.width = '100%';
}

function disoverButton3() {
    buttonAct3.style.width = '0%';
    buttonText3.style.opacity = '0';
    if (buttonCheck3) {
        buttonAct3.style.width = '100%';
        buttonText3.style.opacity = '1';
    }
}


button4.addEventListener('click', actionButton4);
button4.addEventListener('mouseover', overButton4);
button4.addEventListener('mouseleave', disoverButton4);

function actionButton4() {
    if (!buttonCheck4) {
        buttonAct4.style.width = '100%';
        buttonText4.style.opacity = '1';
        buttonText4.style.transform = 'rotate(45deg)';
        button4.children[1].style.color = 'white';
        button4.children[1].style.transition = '.5s';
        legs[0].classList.remove('noDisplay');
        legs[1].classList.remove('noDisplay');
        legs[2].classList.remove('noDisplay');
        legs[3].classList.remove('noDisplay');
        legs[4].classList.remove('noDisplay');
        buttonCheck4 = 1;
        if (buttonCheck2 == 1 && buttonCheck3 == 1 && buttonCheck4 == 1 && buttonCheck5 == 1 && buttonCheck6 == 1 && buttonCheck7 == 1) {
            buttonCheck1 = 0;
            actionButton1();
            overButton1();
        }
    } else if (buttonCheck4) {
        buttonAct4.style.width = '20%';
        buttonText4.style.transform = 'rotate(0deg)';
        button4.children[1].style.color = 'white';
        button4.children[1].style.transition = '.5s';
        legs[0].classList.add('noDisplay');
        legs[1].classList.add('noDisplay');
        legs[2].classList.add('noDisplay');
        legs[3].classList.add('noDisplay');
        legs[4].classList.add('noDisplay');
        buttonCheck1 = 1;
        actionButton1();
        disoverButton1();
        buttonCheck4 = 0;
    }
}

function overButton4() {
    buttonAct4.style.width = '20%';
    buttonText4.style.opacity = '1';
    if (buttonCheck4) buttonAct4.style.width = '100%';
}

function disoverButton4() {
    buttonAct4.style.width = '0%';
    buttonText4.style.opacity = '0';
    if (buttonCheck4) {
        buttonAct4.style.width = '100%';
        buttonText4.style.opacity = '1';
    }
}


button5.addEventListener('click', actionButton5);
button5.addEventListener('mouseover', overButton5);
button5.addEventListener('mouseleave', disoverButton5);

function actionButton5() {
    if (!buttonCheck5) {
        buttonAct5.style.width = '100%';
        buttonText5.style.opacity = '1';
        buttonText5.style.transform = 'rotate(45deg)';
        button5.children[1].style.color = 'white';
        button5.children[1].style.transition = '.5s';
        back[0].classList.remove('noDisplay');
        back[1].classList.remove('noDisplay');
        buttonCheck5 = 1;
        if (buttonCheck2 == 1 && buttonCheck3 == 1 && buttonCheck4 == 1 && buttonCheck5 == 1 && buttonCheck6 == 1 && buttonCheck7 == 1) {
            buttonCheck1 = 0;
            actionButton1();
            overButton1();
        }
    } else if (buttonCheck5) {
        buttonAct5.style.width = '20%';
        buttonText5.style.transform = 'rotate(0deg)';
        button5.children[1].style.color = 'white';
        button5.children[1].style.transition = '.5s';
        back[0].classList.add('noDisplay');
        back[1].classList.add('noDisplay');
        buttonCheck1 = 1;
        actionButton1();
        disoverButton1();
        buttonCheck5 = 0;
    }
}

function overButton5() {
    buttonAct5.style.width = '20%';
    buttonText5.style.opacity = '1';
    if (buttonCheck5) buttonAct5.style.width = '100%';
}

function disoverButton5() {
    buttonAct5.style.width = '0%';
    buttonText5.style.opacity = '0';
    if (buttonCheck5) {
        buttonAct5.style.width = '100%';
        buttonText5.style.opacity = '1';
    }
}


button6.addEventListener('click', actionButton6);
button6.addEventListener('mouseover', overButton6);
button6.addEventListener('mouseleave', disoverButton6);

function actionButton6() {
    if (!buttonCheck6) {
        buttonAct6.style.width = '100%';
        buttonText6.style.opacity = '1';
        buttonText6.style.transform = 'rotate(45deg)';
        button6.children[1].style.color = 'white';
        button6.children[1].style.transition = '.5s';
        breast[0].classList.remove('noDisplay');
        buttonCheck6 = 1;
        if (buttonCheck2 == 1 && buttonCheck3 == 1 && buttonCheck4 == 1 && buttonCheck5 == 1 && buttonCheck6 == 1 && buttonCheck7 == 1) {
            buttonCheck1 = 0;
            actionButton1();
            overButton1();
        }
    } else if (buttonCheck6) {
        buttonAct6.style.width = '20%';
        buttonText6.style.transform = 'rotate(0deg)';
        button6.children[1].style.color = 'white';
        button6.children[1].style.transition = '.5s';
        breast[0].classList.add('noDisplay');
        buttonCheck1 = 1;
        actionButton1();
        disoverButton1();
        buttonCheck6 = 0;
    }
}

function overButton6() {
    buttonAct6.style.width = '20%';
    buttonText6.style.opacity = '1';
    if (buttonCheck6) buttonAct6.style.width = '100%';
}

function disoverButton6() {
    buttonAct6.style.width = '0%';
    buttonText6.style.opacity = '0';
    if (buttonCheck6) {
        buttonAct6.style.width = '100%';
        buttonText6.style.opacity = '1';
    }
}


button7.addEventListener('click', actionButton7);
button7.addEventListener('mouseover', overButton7);
button7.addEventListener('mouseleave', disoverButton7);

function actionButton7() {
    if (!buttonCheck7) {
        buttonAct7.style.width = '100%';
        buttonText7.style.opacity = '1';
        buttonText7.style.transform = 'rotate(45deg)';
        button7.children[1].style.color = 'white';
        button7.children[1].style.transition = '.5s';
        ass[0].classList.remove('noDisplay');
        buttonCheck7 = 1;
        if (buttonCheck2 == 1 && buttonCheck3 == 1 && buttonCheck4 == 1 && buttonCheck5 == 1 && buttonCheck6 == 1 && buttonCheck7 == 1) {
            buttonCheck1 = 0;
            actionButton1();
            overButton1();
        }
    } else if (buttonCheck7) {
        buttonAct7.style.width = '20%';
        buttonText7.style.transform = 'rotate(0deg)';
        button7.children[1].style.color = 'white';
        button7.children[1].style.transition = '.5s';
        ass[0].classList.add('noDisplay');
        buttonCheck1 = 1;
        actionButton1();
        disoverButton1();
        buttonCheck7 = 0;
    }
}

function overButton7() {
    buttonAct7.style.width = '20%';
    buttonText7.style.opacity = '1';
    if (buttonCheck7) buttonAct7.style.width = '100%';
}

function disoverButton7() {
    buttonAct7.style.width = '0%';
    buttonText7.style.opacity = '0';
    if (buttonCheck7) {
        buttonAct7.style.width = '100%';
        buttonText7.style.opacity = '1';
    }
}


button1.addEventListener('click', function() {if(!buttonCheck1){actionButton1();buttonCheck2 = 0;actionButton2();buttonCheck3 = 0;actionButton3();buttonCheck4 = 0;actionButton4();buttonCheck5 = 0;actionButton5();buttonCheck6 = 0;actionButton6();buttonCheck7 = 0;actionButton7();}else{actionButton1();}});
button1.addEventListener('mouseover', overButton1);
button1.addEventListener('mouseleave', disoverButton1);

function actionButton1() {
    if (!buttonCheck1) {
        buttonAct1.style.width = '100%';
        buttonText1.style.opacity = '1';
        buttonText1.style.transform = 'rotate(45deg)';
        button1.children[1].style.color = 'white';
        button1.children[1].style.transition = '.5s';
        buttonCheck1 = 1;
    } else if (buttonCheck1) {
        buttonAct1.style.width = '20%';
        buttonText1.style.transform = 'rotate(0deg)';
        button1.children[1].style.color = '#6898CD';
        button1.children[1].style.transition = '.5s';
        buttonCheck1 = 0;
    }
}

function overButton1() {
    buttonAct1.style.width = '20%';
    buttonText1.style.opacity = '1';
    if (buttonCheck1) buttonAct1.style.width = '100%';
}

function disoverButton1() {
    buttonAct1.style.width = '0%';
    buttonText1.style.opacity = '0';
    if (buttonCheck1) {
        buttonAct1.style.width = '100%';
        buttonText1.style.opacity = '1';
    }
}

button8.addEventListener('click', function(){buttonCheck1 = 1;actionButton1();disoverButton1();buttonCheck2 = 1;actionButton2();disoverButton2();buttonCheck3 = 1;actionButton3();disoverButton3();buttonCheck4 = 1;actionButton4();disoverButton4();buttonCheck5 = 1;actionButton5();disoverButton5();buttonCheck6 = 1;actionButton6();disoverButton6();buttonCheck7 = 1;actionButton7();disoverButton7();});

