var vh = document.body.clientHeight;
var min = vh < 900 ? vh : 900;

var yourConstructor = document.getElementById('yourConstructor');
window.addEventListener('scroll', function() {constructorSticker();});
window.addEventListener('DOMContentLoaded', function() {constructorSticker();});

function constructorSticker() {
    if (pageYOffset > min + 2550) {
        yourConstructor.style.position = 'absolute';
        yourConstructor.style.opacity = '1';
        yourConstructor.style.zIndex = '2';
        return;
    } else if (pageYOffset < min + 2550) {
        yourConstructor.style.position = 'fixed';
        yourConstructor.style.opacity = '1';
        yourConstructor.style.zIndex = '2';
    }

    if (pageYOffset > min + 1055) {
        yourConstructor.style.opacity = '1';
        yourConstructor.style.zIndex = '2';
        return;
    } else if (pageYOffset < min + 1055) {
        yourConstructor.style.opacity = '0';
        yourConstructor.style.zIndex = '-1';
    }
}

var firstConstructorBlock = document.getElementById('firstConstructorGridBlock');
var secondConstructorBlock = document.getElementById('secondConstructorGridBlock');
var thirdConstructorBlock = document.getElementById('thirdConstructorGridBlock');
var fourthConstructorBlock = document.getElementById('fourthConstructorGridBlock');
var fifthConstructorBlock = document.getElementById('fifthConstructorGridBlock');
var sixthConstructorBlock = document.getElementById('sixthConstructorGridBlock');
var seventhConstructorBlock = document.getElementById('seventhConstructorGridBlock');
var eighthConstructorBlock = document.getElementById('eighthConstructorGridBlock');
var ninthConstructorBlock = document.getElementById('ninthConstructorGridBlock');
var tenthConstructorBlock = document.getElementById('tenthConstructorGridBlock');
var firstBlockCheck = 0;
var secondBlockCheck = 0;
var thirdBlockCheck = 0;
var fourthBlockCheck = 0;
var fifthBlockCheck = 0;
var sixthBlockCheck = 0;
var seventhBlockCheck = 0;
var eighthBlockCheck = 0;
var ninthBlockCheck = 0;
var tenthBlockCheck = 0;
var constructorButtons = document.getElementsByClassName('constructorComplexityButtons');

firstConstructorBlock.addEventListener('mouseover', () => {firstConstructorBlockHoverFunction(0)});
firstConstructorBlock.addEventListener('mouseleave', () => {firstConstructorBlockHoverFunction(1)});
firstConstructorBlock.addEventListener('click', firstConstructorBlockClickFunction);

function firstConstructorBlockHoverFunction(state) {
    if (!state) {
        document.getElementById('leftConstructorLabel').innerHTML = 'Руки';
        document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,1)';
        if (!firstBlockCheck) {
            document.getElementById('firstBlockFake').style.opacity = '1';
            document.getElementById('firstZigzagConstructor').style.opacity = '1';
            document.getElementById('firstConstructorComplexityButtonsBlock').style.opacity = '1';
            document.getElementById('firstConstructorStateBlock').style.opacity = '1';
            document.getElementById('firstBlockText').style.top = '5%';
            document.getElementById('firstBlockTypeCheck').style.color = 'rgba(255,255,255,1)';

            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
        }
    } else {
        if (!firstBlockCheck) {
            document.getElementById('leftConstructorLabel').innerHTML = 'Выберите тип';
            document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('firstBlockFake').style.opacity = '0';
            document.getElementById('firstZigzagConstructor').style.opacity = '0';
            document.getElementById('firstConstructorComplexityButtonsBlock').style.opacity = '0';
            document.getElementById('firstConstructorStateBlock').style.opacity = '0';
            document.getElementById('firstBlockText').style.top = '40%';
            document.getElementById('firstBlockTypeCheck').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('firstBlockTypeCheck').style.textShadow = 'none';

            if (secondBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Плечи';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Грудь';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Спина';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Пресс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ягодицы';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ноги';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Выносливость';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Фитнес';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Весь комплекс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    }
}

function firstConstructorBlockClickFunction() {
    if (secondBlockCheck) {
        secondConstructorBlockClickFunction();
        secondConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (secondBlockFirstButtonCheck) {
            fourthConstructorButtonFunction(2);
        }
        if (secondBlockSecondButtonCheck) {
            fifthConstructorButtonFunction(2);
        }
        if (secondBlockThirdButtonCheck) {
            sixthConstructorButtonFunction(2);
        }
    }
    if (thirdBlockCheck) {
        thirdConstructorBlockClickFunction();
        thirdConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (thirdBlockFirstButtonCheck) {
            seventhConstructorButtonFunction(2);
        }
        if (thirdBlockSecondButtonCheck) {
            eighthConstructorButtonFunction(2);
        }
        if (thirdBlockThirdButtonCheck) {
            ninthConstructorButtonFunction(2);
        }
    }
    if (fourthBlockCheck) {
        fourthConstructorBlockClickFunction();
        fourthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fourthBlockFirstButtonCheck) {
            tenthConstructorButtonFunction(2);
        }
        if (fourthBlockSecondButtonCheck) {
            eleventhConstructorButtonFunction(2);
        }
        if (fourthBlockThirdButtonCheck) {
            twelvthConstructorButtonFunction(2);
        }
    }
    if (fifthBlockCheck) {
        fifthConstructorBlockClickFunction();
        fifthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fifthBlockFirstButtonCheck) {
            thirteenthConstructorButtonFunction(2);
        }
        if (fifthBlockSecondButtonCheck) {
            fourteenthConstructorButtonFunction(2);
        }
        if (fifthBlockThirdButtonCheck) {
            fifteenthConstructorButtonFunction(2);
        }
    }
    if (sixthBlockCheck) {
        sixthConstructorBlockClickFunction();
        sixthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (sixthBlockFirstButtonCheck) {
            sixteenthConstructorButtonFunction(2);
        }
        if (sixthBlockSecondButtonCheck) {
            seventeenthConstructorButtonFunction(2);
        }
        if (sixthBlockThirdButtonCheck) {
            eighteenthConstructorButtonFunction(2);
        }
    }
    if (seventhBlockCheck) {
        seventhConstructorBlockClickFunction();
        seventhConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (seventhBlockFirstButtonCheck) {
            ninteenthConstructorButtonFunction(2);
        }
        if (seventhBlockSecondButtonCheck) {
            twentiethConstructorButtonFunction(2);
        }
        if (seventhBlockThirdButtonCheck) {
            twentyfirstConstructorButtonFunction(2);
        }
    }
    if (eighthBlockCheck) {
        eighthConstructorBlockClickFunction();
        eighthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (eighthBlockFirstButtonCheck) {
            twentysecondConstructorButtonFunction(2);
        }
        if (eighthBlockSecondButtonCheck) {
            twentythirdConstructorButtonFunction(2);
        }
        if (eighthBlockThirdButtonCheck) {
            twentyfourthConstructorButtonFunction(2);
        }
    }
    if (ninthBlockCheck) {
        ninthConstructorBlockClickFunction();
        ninthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (ninthBlockFirstButtonCheck) {
            twentyfifthConstructorButtonFunction(2);
        }
        if (ninthBlockSecondButtonCheck) {
            twentysixthConstructorButtonFunction(2);
        }
        if (ninthBlockThirdButtonCheck) {
            twentyseventhConstructorButtonFunction(2);
        }
    }
    if (tenthBlockCheck) {
        tenthConstructorBlockClickFunction();
        tenthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (tenthBlockFirstButtonCheck) {
            twentyeighthConstructorButtonFunction(2);
        }
        if (tenthBlockSecondButtonCheck) {
            twentyninthConstructorButtonFunction(2);
        }
        if (tenthBlockThirdButtonCheck) {
            thirtiethConstructorButtonFunction(2);
        }
    }
        firstConstructorBlock.style.transition = '.5s';
        firstConstructorBlock.style.border = '2px solid #7CACE1';
        document.getElementById('firstBlockFake').style.opacity = '1';
        document.getElementById('firstZigzagConstructor').style.opacity = '1';
        document.getElementById('firstConstructorComplexityButtonsBlock').style.opacity = '1';
        document.getElementById('firstConstructorStateBlock').style.opacity = '1';
        document.getElementById('firstBlockText').style.top = '5%';
        document.getElementById('firstBlockTypeCheck').style.color = 'rgba(255,255,255,1)';
        document.getElementById('firstBlockTypeCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('leftConstructorLabel').innerHTML = 'Руки';
        document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        !firstBlockCheck ? firstBlockCheck = 1 : firstBlockCheck = 0;
        if (!firstBlockCheck) {
            if (firstBlockFirstButtonCheck) {
                firstConstructorButtonFunction(2);
                constructorButtons[0].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[0].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (firstBlockSecondButtonCheck) {
                secondConstructorButtonFunction(2);
                constructorButtons[1].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[1].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (firstBlockThirdButtonCheck) {
                thirdConstructorButtonFunction(2);
                constructorButtons[2].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[2].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            }
            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
            firstConstructorBlock.style.border = 'none';
            document.getElementById('firstBlockTypeCheck').style.textShadow = 'none';
        }

}

constructorButtons[0].addEventListener('mouseover', () => {firstConstructorButtonFunction(0)});
constructorButtons[0].addEventListener('mouseleave', () => {firstConstructorButtonFunction(1)});
constructorButtons[0].addEventListener('click', () => {firstConstructorButtonFunction(2)});
var firstBlockFirstButtonCheck = 0;
constructorButtons[1].addEventListener('mouseover', () => {secondConstructorButtonFunction(0)});
constructorButtons[1].addEventListener('mouseleave', () => {secondConstructorButtonFunction(1)});
constructorButtons[1].addEventListener('click', () => {secondConstructorButtonFunction(2)});
var firstBlockSecondButtonCheck = 0;
constructorButtons[2].addEventListener('mouseover', () => {thirdConstructorButtonFunction(0)});
constructorButtons[2].addEventListener('mouseleave', () => {thirdConstructorButtonFunction(1)});
constructorButtons[2].addEventListener('click', () => {thirdConstructorButtonFunction(2)});
var firstBlockThirdButtonCheck = 0;

function firstConstructorButtonFunction(state) {
    if (!state) {
        if (!firstBlockFirstButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[0].style.background = 'white';
        constructorButtons[0].style.color = '#464646';
        document.getElementById('firstBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        firstConstructorBlock.addEventListener('click', firstConstructorBlockClickFunction);
        if (!firstBlockFirstButtonCheck) {
            if (firstBlockFirstButtonCheck || firstBlockSecondButtonCheck || firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (firstBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (firstBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (firstBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[0].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[0].style.color = 'white';
            if (!firstBlockFirstButtonCheck && !firstBlockSecondButtonCheck && !firstBlockThirdButtonCheck) document.getElementById('firstBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (firstBlockSecondButtonCheck) {
            secondConstructorButtonFunction(2);
            secondConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }
        if (firstBlockThirdButtonCheck) {
            thirdConstructorButtonFunction(2);
            thirdConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }

        if (!firstBlockCheck) {
            if (!firstBlockFirstButtonCheck) {
                firstConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (firstBlockCheck) firstConstructorBlock.removeEventListener('click', firstConstructorBlockClickFunction);
        document.getElementById('firstBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('firstBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[0].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[0].addEventListener('mouseleave', buttonsHoverDisable);
        !firstBlockFirstButtonCheck ? firstBlockFirstButtonCheck = 1 : firstBlockFirstButtonCheck = 0;
        if (!firstBlockFirstButtonCheck) {
            constructorButtons[0].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[0].style.color = 'white';
            document.getElementById('firstBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('firstBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[0].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[0].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function secondConstructorButtonFunction(state) {
    if (!state) {
        if (!firstBlockSecondButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[1].style.background = 'white';
        constructorButtons[1].style.color = '#464646';
        document.getElementById('firstBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        firstConstructorBlock.addEventListener('click', firstConstructorBlockClickFunction);
        if (!firstBlockSecondButtonCheck) {
            if (firstBlockFirstButtonCheck || firstBlockSecondButtonCheck || firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (firstBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (firstBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (firstBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[1].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[1].style.color = 'white';
            if (!firstBlockFirstButtonCheck && !firstBlockSecondButtonCheck && !firstBlockThirdButtonCheck) document.getElementById('firstBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (firstBlockFirstButtonCheck) {
            firstConstructorButtonFunction(2);
            firstConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }
        if (firstBlockThirdButtonCheck) {
            thirdConstructorButtonFunction(2);
            thirdConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }

        if (!firstBlockCheck) {
            if (!firstBlockSecondButtonCheck) {
                firstConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (firstBlockCheck) firstConstructorBlock.removeEventListener('click', firstConstructorBlockClickFunction);
        document.getElementById('firstBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('firstBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[0].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[0].addEventListener('mouseleave', buttonsHoverDisable);
        !firstBlockSecondButtonCheck ? firstBlockSecondButtonCheck = 1 : firstBlockSecondButtonCheck = 0;
        if (!firstBlockSecondButtonCheck) {
            constructorButtons[1].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[1].style.color = 'white';
            document.getElementById('firstBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('firstBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[0].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[0].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function thirdConstructorButtonFunction(state) {
    if (!state) {
        if (!firstBlockThirdButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[2].style.background = 'white';
        constructorButtons[2].style.color = '#464646';
        document.getElementById('firstBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        firstConstructorBlock.addEventListener('click', firstConstructorBlockClickFunction);
        if (!firstBlockThirdButtonCheck) {
            if (firstBlockFirstButtonCheck || firstBlockSecondButtonCheck || firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (firstBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (firstBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (firstBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[2].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[2].style.color = 'white';
            if (!firstBlockFirstButtonCheck && !firstBlockSecondButtonCheck && !firstBlockThirdButtonCheck) document.getElementById('firstBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (firstBlockFirstButtonCheck) {
            firstConstructorButtonFunction(2);
            firstConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }
        if (firstBlockSecondButtonCheck) {
            secondConstructorButtonFunction(2);
            secondConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }

        if (!firstBlockCheck) {
            if (!firstBlockThirdButtonCheck) {
                firstConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (firstBlockCheck) firstConstructorBlock.removeEventListener('click', firstConstructorBlockClickFunction);
        document.getElementById('firstBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('firstBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[0].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[0].addEventListener('mouseleave', buttonsHoverDisable);
        !firstBlockThirdButtonCheck ? firstBlockThirdButtonCheck = 1 : firstBlockThirdButtonCheck = 0;
        if (!firstBlockThirdButtonCheck) {
            constructorButtons[2].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[2].style.color = 'white';
            document.getElementById('firstBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('firstBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[0].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[0].removeEventListener('mouseleave', buttonsHoverDisable);
        
    
        }

    }
}

secondConstructorBlock.addEventListener('mouseover', () => {secondConstructorBlockHoverFunction(0)});
secondConstructorBlock.addEventListener('mouseleave', () => {secondConstructorBlockHoverFunction(1)});
secondConstructorBlock.addEventListener('click', secondConstructorBlockClickFunction);

function secondConstructorBlockHoverFunction(state) {
    if (!state) {
        document.getElementById('leftConstructorLabel').innerHTML = 'Плечи';
        document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,1)';
        if (!secondBlockCheck) {
            document.getElementById('secondBlockFake').style.opacity = '1';
            document.getElementById('secondZigzagConstructor').style.opacity = '1';
            document.getElementById('secondConstructorComplexityButtonsBlock').style.opacity = '1';
            document.getElementById('secondConstructorStateBlock').style.opacity = '1';
            document.getElementById('secondBlockText').style.top = '5%';
            document.getElementById('secondBlockTypeCheck').style.color = 'rgba(255,255,255,1)';

            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
        }
    } else {
        if (!secondBlockCheck) {
            document.getElementById('leftConstructorLabel').innerHTML = 'Выберите тип';
            document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('secondBlockFake').style.opacity = '0';
            document.getElementById('secondZigzagConstructor').style.opacity = '0';
            document.getElementById('secondConstructorComplexityButtonsBlock').style.opacity = '0';
            document.getElementById('secondConstructorStateBlock').style.opacity = '0';
            document.getElementById('secondBlockText').style.top = '40%';
            document.getElementById('secondBlockTypeCheck').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('secondBlockTypeCheck').style.textShadow = 'none';

            if (firstBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Руки';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Грудь';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Спина';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Пресс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ягодицы';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ноги';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Выносливость';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Фитнес';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Весь комплекс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    }
}

function secondConstructorBlockClickFunction() {
    if (firstBlockCheck) {
        firstConstructorBlockClickFunction();
        firstConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (firstBlockFirstButtonCheck) {
            firstConstructorButtonFunction(2);
        }
        if (firstBlockSecondButtonCheck) {
            secondConstructorButtonFunction(2);
        }
        if (firstBlockThirdButtonCheck) {
            thirdConstructorButtonFunction(2);
        }
    }
    if (thirdBlockCheck) {
        thirdConstructorBlockClickFunction();
        thirdConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (thirdBlockFirstButtonCheck) {
            seventhConstructorButtonFunction(2);
        }
        if (thirdBlockSecondButtonCheck) {
            eighthConstructorButtonFunction(2);
        }
        if (thirdBlockThirdButtonCheck) {
            ninthConstructorButtonFunction(2);
        }
    }
    if (fourthBlockCheck) {
        fourthConstructorBlockClickFunction();
        fourthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fourthBlockFirstButtonCheck) {
            tenthConstructorButtonFunction(2);
        }
        if (fourthBlockSecondButtonCheck) {
            eleventhConstructorButtonFunction(2);
        }
        if (fourthBlockThirdButtonCheck) {
            twelvthConstructorButtonFunction(2);
        }
    }
    if (fifthBlockCheck) {
        fifthConstructorBlockClickFunction();
        fifthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fifthBlockFirstButtonCheck) {
            thirteenthConstructorButtonFunction(2);
        }
        if (fifthBlockSecondButtonCheck) {
            fourteenthConstructorButtonFunction(2);
        }
        if (fifthBlockThirdButtonCheck) {
            fifteenthConstructorButtonFunction(2);
        }
    }
    if (sixthBlockCheck) {
        sixthConstructorBlockClickFunction();
        sixthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (sixthBlockFirstButtonCheck) {
            sixteenthConstructorButtonFunction(2);
        }
        if (sixthBlockSecondButtonCheck) {
            seventeenthConstructorButtonFunction(2);
        }
        if (sixthBlockThirdButtonCheck) {
            eighteenthConstructorButtonFunction(2);
        }
    }
    if (seventhBlockCheck) {
        seventhConstructorBlockClickFunction();
        seventhConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (seventhBlockFirstButtonCheck) {
            ninteenthConstructorButtonFunction(2);
        }
        if (seventhBlockSecondButtonCheck) {
            twentiethConstructorButtonFunction(2);
        }
        if (seventhBlockThirdButtonCheck) {
            twentyfirstConstructorButtonFunction(2);
        }
    }
    if (eighthBlockCheck) {
        eighthConstructorBlockClickFunction();
        eighthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (eighthBlockFirstButtonCheck) {
            twentysecondConstructorButtonFunction(2);
        }
        if (eighthBlockSecondButtonCheck) {
            twentythirdConstructorButtonFunction(2);
        }
        if (eighthBlockThirdButtonCheck) {
            twentyfourthConstructorButtonFunction(2);
        }
    }
    if (ninthBlockCheck) {
        ninthConstructorBlockClickFunction();
        ninthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (ninthBlockFirstButtonCheck) {
            twentyfifthConstructorButtonFunction(2);
        }
        if (ninthBlockSecondButtonCheck) {
            twentysixthConstructorButtonFunction(2);
        }
        if (ninthBlockThirdButtonCheck) {
            twentyseventhConstructorButtonFunction(2);
        }
    }
    if (tenthBlockCheck) {
        tenthConstructorBlockClickFunction();
        tenthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (tenthBlockFirstButtonCheck) {
            twentyeighthConstructorButtonFunction(2);
        }
        if (tenthBlockSecondButtonCheck) {
            twentyninthConstructorButtonFunction(2);
        }
        if (tenthBlockThirdButtonCheck) {
            thirtiethConstructorButtonFunction(2);
        }
    }
        secondConstructorBlock.style.transition = '.5s';
        secondConstructorBlock.style.border = '2px solid #7CACE1';
        document.getElementById('secondBlockFake').style.opacity = '1';
        document.getElementById('secondZigzagConstructor').style.opacity = '1';
        document.getElementById('secondConstructorComplexityButtonsBlock').style.opacity = '1';
        document.getElementById('secondConstructorStateBlock').style.opacity = '1';
        document.getElementById('secondBlockText').style.top = '5%';
        document.getElementById('secondBlockTypeCheck').style.color = 'rgba(255,255,255,1)';
        document.getElementById('secondBlockTypeCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('leftConstructorLabel').innerHTML = 'Плечи';
        document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        !secondBlockCheck ? secondBlockCheck = 1 : secondBlockCheck = 0;
        if (!secondBlockCheck) {
            if (secondBlockFirstButtonCheck) {
                fourthConstructorButtonFunction(2);
                constructorButtons[0].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[0].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (secondBlockSecondButtonCheck) {
                fifthConstructorButtonFunction(2);
                constructorButtons[1].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[1].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (secondBlockThirdButtonCheck) {
                sixthConstructorButtonFunction(2);
                constructorButtons[2].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[2].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            }
            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
            secondConstructorBlock.style.border = 'none';
            document.getElementById('secondBlockTypeCheck').style.textShadow = 'none';
        }


}

constructorButtons[3].addEventListener('mouseover', () => {fourthConstructorButtonFunction(0)});
constructorButtons[3].addEventListener('mouseleave', () => {fourthConstructorButtonFunction(1)});
constructorButtons[3].addEventListener('click', () => {fourthConstructorButtonFunction(2)});
var secondBlockFirstButtonCheck = 0;
constructorButtons[4].addEventListener('mouseover', () => {fifthConstructorButtonFunction(0)});
constructorButtons[4].addEventListener('mouseleave', () => {fifthConstructorButtonFunction(1)});
constructorButtons[4].addEventListener('click', () => {fifthConstructorButtonFunction(2)});
var secondBlockSecondButtonCheck = 0;
constructorButtons[5].addEventListener('mouseover', () => {sixthConstructorButtonFunction(0)});
constructorButtons[5].addEventListener('mouseleave', () => {sixthConstructorButtonFunction(1)});
constructorButtons[5].addEventListener('click', () => {sixthConstructorButtonFunction(2)});
var secondBlockThirdButtonCheck = 0;

function fourthConstructorButtonFunction(state) {
    if (!state) {
        if (!secondBlockFirstButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[3].style.background = 'white';
        constructorButtons[3].style.color = '#464646';
        document.getElementById('secondBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';

    } else if (state == 1) {
        secondConstructorBlock.addEventListener('click', secondConstructorBlockClickFunction);
        if (!secondBlockFirstButtonCheck) {
            if (secondBlockFirstButtonCheck || secondBlockSecondButtonCheck || secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (secondBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (secondBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (secondBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[3].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[3].style.color = 'white';
            if (!secondBlockFirstButtonCheck && !secondBlockSecondButtonCheck && !secondBlockThirdButtonCheck) document.getElementById('secondBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (secondBlockSecondButtonCheck) {
            fifthConstructorButtonFunction(2);
            fifthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }
        if (secondBlockThirdButtonCheck) {
            sixthConstructorButtonFunction(2);
            sixthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }

        if (!secondBlockCheck) {
            if (!secondBlockFirstButtonCheck) {
                secondConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (secondBlockCheck) secondConstructorBlock.removeEventListener('click', secondConstructorBlockClickFunction);
        document.getElementById('secondBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('secondBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[1].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[1].addEventListener('mouseleave', buttonsHoverDisable);
        !secondBlockFirstButtonCheck ? secondBlockFirstButtonCheck = 1 : secondBlockFirstButtonCheck = 0;
        if (!secondBlockFirstButtonCheck) {
            constructorButtons[3].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[3].style.color = 'white';
            document.getElementById('secondBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('secondBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[1].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[1].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function fifthConstructorButtonFunction(state) {
    if (!state) {
        if (!secondBlockSecondButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[4].style.background = 'white';
        constructorButtons[4].style.color = '#464646';
        document.getElementById('secondBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        secondConstructorBlock.addEventListener('click', secondConstructorBlockClickFunction);
        if (!secondBlockSecondButtonCheck) {
            if (secondBlockFirstButtonCheck || secondBlockSecondButtonCheck || secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (secondBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (secondBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (secondBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[4].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[4].style.color = 'white';
            if (!secondBlockFirstButtonCheck && !secondBlockSecondButtonCheck && !secondBlockThirdButtonCheck) document.getElementById('secondBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (secondBlockFirstButtonCheck) {
            fourthConstructorButtonFunction(2);
            fourthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }
        if (secondBlockThirdButtonCheck) {
            sixthConstructorButtonFunction(2);
            sixthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }

        if (!secondBlockCheck) {
            if (!secondBlockSecondButtonCheck) {
                secondConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (secondBlockCheck) secondConstructorBlock.removeEventListener('click', secondConstructorBlockClickFunction);
        document.getElementById('secondBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('secondBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[1].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[1].addEventListener('mouseleave', buttonsHoverDisable);
        !secondBlockSecondButtonCheck ? secondBlockSecondButtonCheck = 1 : secondBlockSecondButtonCheck = 0;
        if (!secondBlockSecondButtonCheck) {
            constructorButtons[4].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[4].style.color = 'white';
            document.getElementById('secondBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('secondBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[1].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[1].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function sixthConstructorButtonFunction(state) {
    if (!state) {
        if (!secondBlockThirdButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[5].style.background = 'white';
        constructorButtons[5].style.color = '#464646';
        document.getElementById('secondBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        secondConstructorBlock.addEventListener('click', secondConstructorBlockClickFunction);
        if (!secondBlockThirdButtonCheck) {
            if (secondBlockFirstButtonCheck || secondBlockSecondButtonCheck || secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (secondBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (secondBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (secondBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[5].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[5].style.color = 'white';
            if (!secondBlockFirstButtonCheck && !secondBlockSecondButtonCheck && !secondBlockThirdButtonCheck) document.getElementById('secondBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (secondBlockFirstButtonCheck) {
            fourthConstructorButtonFunction(2);
            fourthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }
        if (secondBlockSecondButtonCheck) {
            fifthConstructorButtonFunction(2);
            fifthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }

        if (!secondBlockCheck) {
            if (!secondBlockThirdButtonCheck) {
                secondConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (secondBlockCheck) secondConstructorBlock.removeEventListener('click', secondConstructorBlockClickFunction);
        document.getElementById('secondBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('secondBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[1].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[1].addEventListener('mouseleave', buttonsHoverDisable);
        !secondBlockThirdButtonCheck ? secondBlockThirdButtonCheck = 1 : secondBlockThirdButtonCheck = 0;
        if (!secondBlockThirdButtonCheck) {
            constructorButtons[5].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[5].style.color = 'white';
            document.getElementById('secondBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('secondBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[1].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[1].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

thirdConstructorBlock.addEventListener('mouseover', () => {thirdConstructorBlockHoverFunction(0)});
thirdConstructorBlock.addEventListener('mouseleave', () => {thirdConstructorBlockHoverFunction(1)});
thirdConstructorBlock.addEventListener('click', thirdConstructorBlockClickFunction);

function thirdConstructorBlockHoverFunction(state) {
    if (!state) {
        document.getElementById('leftConstructorLabel').innerHTML = 'Грудь';
        document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,1)';
        if (!thirdBlockCheck) {
            document.getElementById('thirdBlockFake').style.opacity = '1';
            document.getElementById('thirdZigzagConstructor').style.opacity = '1';
            document.getElementById('thirdConstructorComplexityButtonsBlock').style.opacity = '1';
            document.getElementById('thirdConstructorStateBlock').style.opacity = '1';
            document.getElementById('thirdBlockText').style.top = '5%';
            document.getElementById('thirdBlockTypeCheck').style.color = 'rgba(255,255,255,1)';

            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
        }
    } else {
        if (!thirdBlockCheck) {
            document.getElementById('leftConstructorLabel').innerHTML = 'Выберите тип';
            document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('thirdBlockFake').style.opacity = '0';
            document.getElementById('thirdZigzagConstructor').style.opacity = '0';
            document.getElementById('thirdConstructorComplexityButtonsBlock').style.opacity = '0';
            document.getElementById('thirdConstructorStateBlock').style.opacity = '0';
            document.getElementById('thirdBlockText').style.top = '40%';
            document.getElementById('thirdBlockTypeCheck').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('thirdBlockTypeCheck').style.textShadow = 'none';

            if (firstBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Руки';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Плечи';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Спина';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Пресс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ягодицы';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ноги';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Выносливость';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Фитнес';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Весь комплекс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    }
}

function thirdConstructorBlockClickFunction() {
    if (firstBlockCheck) {
        firstConstructorBlockClickFunction();
        firstConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (firstBlockFirstButtonCheck) {
            firstConstructorButtonFunction(2);
        }
        if (firstBlockSecondButtonCheck) {
            secondConstructorButtonFunction(2);
        }
        if (firstBlockThirdButtonCheck) {
            thirdConstructorButtonFunction(2);
        }
    }
    if (secondBlockCheck) {
        secondConstructorBlockClickFunction();
        secondConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (secondBlockFirstButtonCheck) {
            fourthConstructorButtonFunction(2);
        }
        if (secondBlockSecondButtonCheck) {
            fifthConstructorButtonFunction(2);
        }
        if (secondBlockThirdButtonCheck) {
            sixthConstructorButtonFunction(2);
        }
    }
    if (fourthBlockCheck) {
        fourthConstructorBlockClickFunction();
        fourthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fourthBlockFirstButtonCheck) {
            tenthConstructorButtonFunction(2);
        }
        if (fourthBlockSecondButtonCheck) {
            eleventhConstructorButtonFunction(2);
        }
        if (fourthBlockThirdButtonCheck) {
            twelvthConstructorButtonFunction(2);
        }
    }
    if (fifthBlockCheck) {
        fifthConstructorBlockClickFunction();
        fifthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fifthBlockFirstButtonCheck) {
            thirteenthConstructorButtonFunction(2);
        }
        if (fifthBlockSecondButtonCheck) {
            fourteenthConstructorButtonFunction(2);
        }
        if (fifthBlockThirdButtonCheck) {
            fifteenthConstructorButtonFunction(2);
        }
    }
    if (sixthBlockCheck) {
        sixthConstructorBlockClickFunction();
        sixthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (sixthBlockFirstButtonCheck) {
            sixteenthConstructorButtonFunction(2);
        }
        if (sixthBlockSecondButtonCheck) {
            seventeenthConstructorButtonFunction(2);
        }
        if (sixthBlockThirdButtonCheck) {
            eighteenthConstructorButtonFunction(2);
        }
    }
    if (seventhBlockCheck) {
        seventhConstructorBlockClickFunction();
        seventhConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (seventhBlockFirstButtonCheck) {
            ninteenthConstructorButtonFunction(2);
        }
        if (seventhBlockSecondButtonCheck) {
            twentiethConstructorButtonFunction(2);
        }
        if (seventhBlockThirdButtonCheck) {
            twentyfirstConstructorButtonFunction(2);
        }
    }
    if (eighthBlockCheck) {
        eighthConstructorBlockClickFunction();
        eighthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (eighthBlockFirstButtonCheck) {
            twentysecondConstructorButtonFunction(2);
        }
        if (eighthBlockSecondButtonCheck) {
            twentythirdConstructorButtonFunction(2);
        }
        if (eighthBlockThirdButtonCheck) {
            twentyfourthConstructorButtonFunction(2);
        }
    }
    if (ninthBlockCheck) {
        ninthConstructorBlockClickFunction();
        ninthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (ninthBlockFirstButtonCheck) {
            twentyfifthConstructorButtonFunction(2);
        }
        if (ninthBlockSecondButtonCheck) {
            twentysixthConstructorButtonFunction(2);
        }
        if (ninthBlockThirdButtonCheck) {
            twentyseventhConstructorButtonFunction(2);
        }
    }
    if (tenthBlockCheck) {
        tenthConstructorBlockClickFunction();
        tenthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (tenthBlockFirstButtonCheck) {
            twentyeighthConstructorButtonFunction(2);
        }
        if (tenthBlockSecondButtonCheck) {
            twentyninthConstructorButtonFunction(2);
        }
        if (tenthBlockThirdButtonCheck) {
            thirtiethConstructorButtonFunction(2);
        }
    }
        thirdConstructorBlock.style.transition = '.5s';
        thirdConstructorBlock.style.border = '2px solid #7CACE1';
        document.getElementById('thirdBlockFake').style.opacity = '1';
        document.getElementById('thirdZigzagConstructor').style.opacity = '1';
        document.getElementById('thirdConstructorComplexityButtonsBlock').style.opacity = '1';
        document.getElementById('thirdConstructorStateBlock').style.opacity = '1';
        document.getElementById('thirdBlockText').style.top = '5%';
        document.getElementById('thirdBlockTypeCheck').style.color = 'rgba(255,255,255,1)';
        document.getElementById('thirdBlockTypeCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('leftConstructorLabel').innerHTML = 'Грудь';
        document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        !thirdBlockCheck ? thirdBlockCheck = 1 : thirdBlockCheck = 0;
        if (!thirdBlockCheck) {
            if (thirdBlockFirstButtonCheck) {
                seventhConstructorButtonFunction(2);
                constructorButtons[0].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[0].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (secondBlockSecondButtonCheck) {
                eighthConstructorButtonFunction(2);
                constructorButtons[1].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[1].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (secondBlockThirdButtonCheck) {
                ninthConstructorButtonFunction(2);
                constructorButtons[2].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[2].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            }
            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
            thirdConstructorBlock.style.border = 'none';
            document.getElementById('thirdBlockTypeCheck').style.textShadow = 'none';
        }


}

constructorButtons[6].addEventListener('mouseover', () => {seventhConstructorButtonFunction(0)});
constructorButtons[6].addEventListener('mouseleave', () => {seventhConstructorButtonFunction(1)});
constructorButtons[6].addEventListener('click', () => {seventhConstructorButtonFunction(2)});
var thirdBlockFirstButtonCheck = 0;
constructorButtons[7].addEventListener('mouseover', () => {eighthConstructorButtonFunction(0)});
constructorButtons[7].addEventListener('mouseleave', () => {eighthConstructorButtonFunction(1)});
constructorButtons[7].addEventListener('click', () => {eighthConstructorButtonFunction(2)});
var thirdBlockSecondButtonCheck = 0;
constructorButtons[8].addEventListener('mouseover', () => {ninthConstructorButtonFunction(0)});
constructorButtons[8].addEventListener('mouseleave', () => {ninthConstructorButtonFunction(1)});
constructorButtons[8].addEventListener('click', () => {ninthConstructorButtonFunction(2)});
var thirdBlockThirdButtonCheck = 0;

function seventhConstructorButtonFunction(state) {
    if (!state) {
        if (!thirdBlockFirstButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[6].style.background = 'white';
        constructorButtons[6].style.color = '#464646';
        document.getElementById('thirdBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';

    } else if (state == 1) {
        thirdConstructorBlock.addEventListener('click', thirdConstructorBlockClickFunction);
        if (!thirdBlockFirstButtonCheck) {
            if (thirdBlockFirstButtonCheck || thirdBlockSecondButtonCheck || thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (thirdBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (thirdBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (thirdBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[6].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[6].style.color = 'white';
            if (!thirdBlockFirstButtonCheck && !thirdBlockSecondButtonCheck && !thirdBlockThirdButtonCheck) document.getElementById('thirdBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (thirdBlockSecondButtonCheck) {
            eighthConstructorButtonFunction(2);
            eighthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }
        if (thirdBlockThirdButtonCheck) {
            ninthConstructorButtonFunction(2);
            ninthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }

        if (!thirdBlockCheck) {
            if (!thirdBlockFirstButtonCheck) {
                thirdConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (thirdBlockCheck) thirdConstructorBlock.removeEventListener('click', thirdConstructorBlockClickFunction);
        document.getElementById('thirdBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('thirdBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[2].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[2].addEventListener('mouseleave', buttonsHoverDisable);
        !thirdBlockFirstButtonCheck ? thirdBlockFirstButtonCheck = 1 : thirdBlockFirstButtonCheck = 0;
        if (!thirdBlockFirstButtonCheck) {
            constructorButtons[6].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[6].style.color = 'white';
            document.getElementById('thirdBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('thirdBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[2].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[2].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function eighthConstructorButtonFunction(state) {
    if (!state) {
        if (!thirdBlockSecondButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[7].style.background = 'white';
        constructorButtons[7].style.color = '#464646';
        document.getElementById('thirdBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        thirdConstructorBlock.addEventListener('click', thirdConstructorBlockClickFunction);
        if (!thirdBlockSecondButtonCheck) {
            if (thirdBlockFirstButtonCheck || thirdBlockSecondButtonCheck || thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (thirdBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (thirdBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (thirdBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[7].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[7].style.color = 'white';
            if (!thirdBlockFirstButtonCheck && !thirdBlockSecondButtonCheck && !thirdBlockThirdButtonCheck) document.getElementById('thirdBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (thirdBlockFirstButtonCheck) {
            seventhConstructorButtonFunction(2);
            seventhConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }
        if (thirdBlockThirdButtonCheck) {
            ninthConstructorButtonFunction(2);
            ninthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }

        if (!thirdBlockCheck) {
            if (!thirdBlockSecondButtonCheck) {
                thirdConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (thirdBlockCheck) thirdConstructorBlock.removeEventListener('click', thirdConstructorBlockClickFunction);
        document.getElementById('thirdBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('thirdBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[2].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[2].addEventListener('mouseleave', buttonsHoverDisable);
        !thirdBlockSecondButtonCheck ? thirdBlockSecondButtonCheck = 1 : thirdBlockSecondButtonCheck = 0;
        if (!thirdBlockSecondButtonCheck) {
            constructorButtons[7].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[7].style.color = 'white';
            document.getElementById('thirdBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('thirdBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[2].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[2].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function ninthConstructorButtonFunction(state) {
    if (!state) {
        if (!thirdBlockThirdButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[8].style.background = 'white';
        constructorButtons[8].style.color = '#464646';
        document.getElementById('thirdBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        thirdConstructorBlock.addEventListener('click', thirdConstructorBlockClickFunction);
        if (!thirdBlockThirdButtonCheck) {
            if (thirdBlockFirstButtonCheck || thirdBlockSecondButtonCheck || thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (thirdBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (thirdBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (thirdBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[8].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[8].style.color = 'white';
            if (!thirdBlockFirstButtonCheck && !thirdBlockSecondButtonCheck && !thirdBlockThirdButtonCheck) document.getElementById('thirdBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (thirdBlockFirstButtonCheck) {
            seventhConstructorButtonFunction(2);
            seventhConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }
        if (thirdBlockSecondButtonCheck) {
            eighthConstructorButtonFunction(2);
            eighthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }

        if (!thirdBlockCheck) {
            if (!thirdBlockThirdButtonCheck) {
                thirdConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (thirdBlockCheck) thirdConstructorBlock.removeEventListener('click', thirdConstructorBlockClickFunction);
        document.getElementById('thirdBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('thirdBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[2].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[2].addEventListener('mouseleave', buttonsHoverDisable);
        !thirdBlockThirdButtonCheck ? thirdBlockThirdButtonCheck = 1 : thirdBlockThirdButtonCheck = 0;
        if (!thirdBlockThirdButtonCheck) {
            constructorButtons[8].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[8].style.color = 'white';
            document.getElementById('thirdBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('thirdBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[2].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[2].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

fourthConstructorBlock.addEventListener('mouseover', () => {fourthConstructorBlockHoverFunction(0)});
fourthConstructorBlock.addEventListener('mouseleave', () => {fourthConstructorBlockHoverFunction(1)});
fourthConstructorBlock.addEventListener('click', fourthConstructorBlockClickFunction);

function fourthConstructorBlockHoverFunction(state) {
    if (!state) {
        document.getElementById('leftConstructorLabel').innerHTML = 'Спина';
        document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,1)';
        if (!fourthBlockCheck) {
            document.getElementById('fourthBlockFake').style.opacity = '1';
            document.getElementById('fourthZigzagConstructor').style.opacity = '1';
            document.getElementById('fourthConstructorComplexityButtonsBlock').style.opacity = '1';
            document.getElementById('fourthConstructorStateBlock').style.opacity = '1';
            document.getElementById('fourthBlockText').style.top = '5%';
            document.getElementById('fourthBlockTypeCheck').style.color = 'rgba(255,255,255,1)';

            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
        }
    } else {
        if (!fourthBlockCheck) {
            document.getElementById('leftConstructorLabel').innerHTML = 'Выберите тип';
            document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('fourthBlockFake').style.opacity = '0';
            document.getElementById('fourthZigzagConstructor').style.opacity = '0';
            document.getElementById('fourthConstructorComplexityButtonsBlock').style.opacity = '0';
            document.getElementById('fourthConstructorStateBlock').style.opacity = '0';
            document.getElementById('fourthBlockText').style.top = '40%';
            document.getElementById('fourthBlockTypeCheck').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('fourthBlockTypeCheck').style.textShadow = 'none';

            if (firstBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Руки';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Плечи';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Грудь';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Пресс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ягодицы';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ноги';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Выносливость';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Фитнес';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Весь комплекс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    }
}

function fourthConstructorBlockClickFunction() {
    if (firstBlockCheck) {
        firstConstructorBlockClickFunction();
        firstConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (firstBlockFirstButtonCheck) {
            firstConstructorButtonFunction(2);
        }
        if (firstBlockSecondButtonCheck) {
            secondConstructorButtonFunction(2);
        }
        if (firstBlockThirdButtonCheck) {
            thirdConstructorButtonFunction(2);
        }
    }
    if (secondBlockCheck) {
        secondConstructorBlockClickFunction();
        secondConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (secondBlockFirstButtonCheck) {
            fourthConstructorButtonFunction(2);
        }
        if (secondBlockSecondButtonCheck) {
            fifthConstructorButtonFunction(2);
        }
        if (secondBlockThirdButtonCheck) {
            sixthConstructorButtonFunction(2);
        }
    }
    if (thirdBlockCheck) {
        thirdConstructorBlockClickFunction();
        thirdConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (thirdBlockFirstButtonCheck) {
            seventhConstructorButtonFunction(2);
        }
        if (thirdBlockSecondButtonCheck) {
            eighthConstructorButtonFunction(2);
        }
        if (thirdBlockThirdButtonCheck) {
            ninthConstructorButtonFunction(2);
        }
    }
    if (fifthBlockCheck) {
        fifthConstructorBlockClickFunction();
        fifthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fifthBlockFirstButtonCheck) {
            thirteenthConstructorButtonFunction(2);
        }
        if (fifthBlockSecondButtonCheck) {
            fourteenthConstructorButtonFunction(2);
        }
        if (fifthBlockThirdButtonCheck) {
            fifteenthConstructorButtonFunction(2);
        }
    }
    if (sixthBlockCheck) {
        sixthConstructorBlockClickFunction();
        sixthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (sixthBlockFirstButtonCheck) {
            sixteenthConstructorButtonFunction(2);
        }
        if (sixthBlockSecondButtonCheck) {
            seventeenthConstructorButtonFunction(2);
        }
        if (sixthBlockThirdButtonCheck) {
            eighteenthConstructorButtonFunction(2);
        }
    }
    if (seventhBlockCheck) {
        seventhConstructorBlockClickFunction();
        seventhConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (seventhBlockFirstButtonCheck) {
            ninteenthConstructorButtonFunction(2);
        }
        if (seventhBlockSecondButtonCheck) {
            twentiethConstructorButtonFunction(2);
        }
        if (seventhBlockThirdButtonCheck) {
            twentyfirstConstructorButtonFunction(2);
        }
    }
    if (eighthBlockCheck) {
        eighthConstructorBlockClickFunction();
        eighthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (eighthBlockFirstButtonCheck) {
            twentysecondConstructorButtonFunction(2);
        }
        if (eighthBlockSecondButtonCheck) {
            twentythirdConstructorButtonFunction(2);
        }
        if (eighthBlockThirdButtonCheck) {
            twentyfourthConstructorButtonFunction(2);
        }
    }
    if (ninthBlockCheck) {
        ninthConstructorBlockClickFunction();
        ninthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (ninthBlockFirstButtonCheck) {
            twentyfifthConstructorButtonFunction(2);
        }
        if (ninthBlockSecondButtonCheck) {
            twentysixthConstructorButtonFunction(2);
        }
        if (ninthBlockThirdButtonCheck) {
            twentyseventhConstructorButtonFunction(2);
        }
    }
    if (tenthBlockCheck) {
        tenthConstructorBlockClickFunction();
        tenthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (tenthBlockFirstButtonCheck) {
            twentyeighthConstructorButtonFunction(2);
        }
        if (tenthBlockSecondButtonCheck) {
            twentyninthConstructorButtonFunction(2);
        }
        if (tenthBlockThirdButtonCheck) {
            thirtiethConstructorButtonFunction(2);
        }
    }
        fourthConstructorBlock.style.transition = '.5s';
        fourthConstructorBlock.style.border = '2px solid #7CACE1';
        document.getElementById('fourthBlockFake').style.opacity = '1';
        document.getElementById('fourthZigzagConstructor').style.opacity = '1';
        document.getElementById('fourthConstructorComplexityButtonsBlock').style.opacity = '1';
        document.getElementById('fourthConstructorStateBlock').style.opacity = '1';
        document.getElementById('fourthBlockText').style.top = '5%';
        document.getElementById('fourthBlockTypeCheck').style.color = 'rgba(255,255,255,1)';
        document.getElementById('fourthBlockTypeCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('leftConstructorLabel').innerHTML = 'Спина';
        document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        !fourthBlockCheck ? fourthBlockCheck = 1 : fourthBlockCheck = 0;
        if (!fourthBlockCheck) {
            if (fourthBlockFirstButtonCheck) {
                tenthConstructorButtonFunction(2);
                constructorButtons[0].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[0].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (fourthBlockSecondButtonCheck) {
                eleventhConstructorButtonFunction(2);
                constructorButtons[1].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[1].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (fourthBlockThirdButtonCheck) {
                twelvthConstructorButtonFunction(2);
                constructorButtons[2].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[2].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            }
            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
            fourthConstructorBlock.style.border = 'none';
            document.getElementById('fourthBlockTypeCheck').style.textShadow = 'none';
        }


}

constructorButtons[9].addEventListener('mouseover', () => {tenthConstructorButtonFunction(0)});
constructorButtons[9].addEventListener('mouseleave', () => {tenthConstructorButtonFunction(1)});
constructorButtons[9].addEventListener('click', () => {tenthConstructorButtonFunction(2)});
var fourthBlockFirstButtonCheck = 0;
constructorButtons[10].addEventListener('mouseover', () => {eleventhConstructorButtonFunction(0)});
constructorButtons[10].addEventListener('mouseleave', () => {eleventhConstructorButtonFunction(1)});
constructorButtons[10].addEventListener('click', () => {eleventhConstructorButtonFunction(2)});
var fourthBlockSecondButtonCheck = 0;
constructorButtons[11].addEventListener('mouseover', () => {twelvthConstructorButtonFunction(0)});
constructorButtons[11].addEventListener('mouseleave', () => {twelvthConstructorButtonFunction(1)});
constructorButtons[11].addEventListener('click', () => {twelvthConstructorButtonFunction(2)});
var fourthBlockThirdButtonCheck = 0;

function tenthConstructorButtonFunction(state) {
    if (!state) {
        if (!fourthBlockFirstButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[9].style.background = 'white';
        constructorButtons[9].style.color = '#464646';
        document.getElementById('fourthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';

    } else if (state == 1) {
        fourthConstructorBlock.addEventListener('click', fourthConstructorBlockClickFunction);
        if (!fourthBlockFirstButtonCheck) {
            if (fourthBlockFirstButtonCheck || fourthBlockSecondButtonCheck || fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (fourthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (fourthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (fourthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[9].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[9].style.color = 'white';
            if (!fourthBlockFirstButtonCheck && !fourthBlockSecondButtonCheck && !fourthBlockThirdButtonCheck) document.getElementById('fourthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (fourthBlockSecondButtonCheck) {
            eleventhConstructorButtonFunction(2);
            eleventhConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }
        if (fourthBlockThirdButtonCheck) {
            twelvthConstructorButtonFunction(2);
            twelvthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }

        if (!fourthBlockCheck) {
            if (!fourthBlockFirstButtonCheck) {
                fourthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (fourthBlockCheck) fourthConstructorBlock.removeEventListener('click',fourthConstructorBlockClickFunction);
        document.getElementById('fourthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('fourthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[3].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[3].addEventListener('mouseleave', buttonsHoverDisable);
        !fourthBlockFirstButtonCheck ? fourthBlockFirstButtonCheck = 1 : fourthBlockFirstButtonCheck = 0;
        if (!fourthBlockFirstButtonCheck) {
            constructorButtons[9].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[9].style.color = 'white';
            document.getElementById('fourthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('fourthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[3].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[3].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function eleventhConstructorButtonFunction(state) {
    if (!state) {
        if (!fourthBlockSecondButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[10].style.background = 'white';
        constructorButtons[10].style.color = '#464646';
        document.getElementById('fourthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        fourthConstructorBlock.addEventListener('click', fourthConstructorBlockClickFunction);
        if (!fourthBlockSecondButtonCheck) {
            if (fourthBlockFirstButtonCheck || fourthBlockSecondButtonCheck || fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (fourthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (fourthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (fourthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[10].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[10].style.color = 'white';
            if (!fourthBlockFirstButtonCheck && !fourthBlockSecondButtonCheck && !fourthBlockThirdButtonCheck) document.getElementById('fourthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (fourthBlockFirstButtonCheck) {
            tenthConstructorButtonFunction(2);
            tenthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }
        if (fourthBlockThirdButtonCheck) {
            twelvthConstructorButtonFunction(2);
            twelvthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }

        if (!fourthBlockCheck) {
            if (!fourthBlockSecondButtonCheck) {
                fourthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (fourthBlockCheck) fourthConstructorBlock.removeEventListener('click', fourthConstructorBlockClickFunction);
        document.getElementById('fourthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('fourthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[3].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[3].addEventListener('mouseleave', buttonsHoverDisable);
        !fourthBlockSecondButtonCheck ? fourthBlockSecondButtonCheck = 1 : fourthBlockSecondButtonCheck = 0;
        if (!fourthBlockSecondButtonCheck) {
            constructorButtons[10].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[10].style.color = 'white';
            document.getElementById('fourthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('fourthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[3].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[3].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function twelvthConstructorButtonFunction(state) {
    if (!state) {
        if (!fourthBlockThirdButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[11].style.background = 'white';
        constructorButtons[11].style.color = '#464646';
        document.getElementById('fourthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        fourthConstructorBlock.addEventListener('click', fourthConstructorBlockClickFunction);
        if (!fourthBlockThirdButtonCheck) {
            if (fourthBlockFirstButtonCheck || fourthBlockSecondButtonCheck || fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (fourthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (fourthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (fourthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[11].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[11].style.color = 'white';
            if (!fourthBlockFirstButtonCheck && !fourthBlockSecondButtonCheck && !fourthBlockThirdButtonCheck) document.getElementById('fourthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (fourthBlockFirstButtonCheck) {
            tenthConstructorButtonFunction(2);
            tenthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }
        if (fourthBlockSecondButtonCheck) {
            eleventhConstructorButtonFunction(2);
            eleventhConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }

        if (!fourthBlockCheck) {
            if (!fourthBlockThirdButtonCheck) {
                fourthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (fourthBlockCheck) fourthConstructorBlock.removeEventListener('click', fourthConstructorBlockClickFunction);
        document.getElementById('fourthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('fourthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[3].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[3].addEventListener('mouseleave', buttonsHoverDisable);
        !fourthBlockThirdButtonCheck ? fourthBlockThirdButtonCheck = 1 : fourthBlockThirdButtonCheck = 0;
        if (!fourthBlockThirdButtonCheck) {
            constructorButtons[11].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[11].style.color = 'white';
            document.getElementById('fourthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('fourthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[3].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[3].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

fifthConstructorBlock.addEventListener('mouseover', () => {fifthConstructorBlockHoverFunction(0)});
fifthConstructorBlock.addEventListener('mouseleave', () => {fifthConstructorBlockHoverFunction(1)});
fifthConstructorBlock.addEventListener('click', fifthConstructorBlockClickFunction);

function fifthConstructorBlockHoverFunction(state) {
    if (!state) {
        document.getElementById('leftConstructorLabel').innerHTML = 'Пресс';
        document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,1)';
        if (!fifthBlockCheck) {
            document.getElementById('fifthBlockFake').style.opacity = '1';
            document.getElementById('fifthZigzagConstructor').style.opacity = '1';
            document.getElementById('fifthConstructorComplexityButtonsBlock').style.opacity = '1';
            document.getElementById('fifthConstructorStateBlock').style.opacity = '1';
            document.getElementById('fifthBlockText').style.top = '5%';
            document.getElementById('fifthBlockTypeCheck').style.color = 'rgba(255,255,255,1)';

            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
        }
    } else {
        if (!fifthBlockCheck) {
            document.getElementById('leftConstructorLabel').innerHTML = 'Выберите тип';
            document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('fifthBlockFake').style.opacity = '0';
            document.getElementById('fifthZigzagConstructor').style.opacity = '0';
            document.getElementById('fifthConstructorComplexityButtonsBlock').style.opacity = '0';
            document.getElementById('fifthConstructorStateBlock').style.opacity = '0';
            document.getElementById('fifthBlockText').style.top = '40%';
            document.getElementById('fifthBlockTypeCheck').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('fifthBlockTypeCheck').style.textShadow = 'none';

            if (firstBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Руки';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Плечи';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Грудь';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Спина';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ягодицы';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ноги';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Выносливость';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Фитнес';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Весь комплекс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    }
}

function fifthConstructorBlockClickFunction() {
    if (firstBlockCheck) {
        firstConstructorBlockClickFunction();
        firstConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (firstBlockFirstButtonCheck) {
            firstConstructorButtonFunction(2);
        }
        if (firstBlockSecondButtonCheck) {
            secondConstructorButtonFunction(2);
        }
        if (firstBlockThirdButtonCheck) {
            thirdConstructorButtonFunction(2);
        }
    }
    if (secondBlockCheck) {
        secondConstructorBlockClickFunction();
        secondConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (secondBlockFirstButtonCheck) {
            fourthConstructorButtonFunction(2);
        }
        if (secondBlockSecondButtonCheck) {
            fifthConstructorButtonFunction(2);
        }
        if (secondBlockThirdButtonCheck) {
            sixthConstructorButtonFunction(2);
        }
    }
    if (thirdBlockCheck) {
        thirdConstructorBlockClickFunction();
        thirdConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (thirdBlockFirstButtonCheck) {
            seventhConstructorButtonFunction(2);
        }
        if (thirdBlockSecondButtonCheck) {
            eighthConstructorButtonFunction(2);
        }
        if (thirdBlockThirdButtonCheck) {
            ninthConstructorButtonFunction(2);
        }
    }
    if (fourthBlockCheck) {
        fourthConstructorBlockClickFunction();
        fourthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fourthBlockFirstButtonCheck) {
            tenthConstructorButtonFunction(2);
        }
        if (fourthBlockSecondButtonCheck) {
            eleventhConstructorButtonFunction(2);
        }
        if (fourthBlockThirdButtonCheck) {
            twelvthConstructorButtonFunction(2);
        }
    }
    if (sixthBlockCheck) {
        sixthConstructorBlockClickFunction();
        sixthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (sixthBlockFirstButtonCheck) {
            sixteenthConstructorButtonFunction(2);
        }
        if (sixthBlockSecondButtonCheck) {
            seventeenthConstructorButtonFunction(2);
        }
        if (sixthBlockThirdButtonCheck) {
            eighteenthConstructorButtonFunction(2);
        }
    }
    if (seventhBlockCheck) {
        seventhConstructorBlockClickFunction();
        seventhConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (seventhBlockFirstButtonCheck) {
            ninteenthConstructorButtonFunction(2);
        }
        if (seventhBlockSecondButtonCheck) {
            twentiethConstructorButtonFunction(2);
        }
        if (seventhBlockThirdButtonCheck) {
            twentyfirstConstructorButtonFunction(2);
        }
    }
    if (eighthBlockCheck) {
        eighthConstructorBlockClickFunction();
        eighthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (eighthBlockFirstButtonCheck) {
            twentysecondConstructorButtonFunction(2);
        }
        if (eighthBlockSecondButtonCheck) {
            twentythirdConstructorButtonFunction(2);
        }
        if (eighthBlockThirdButtonCheck) {
            twentyfourthConstructorButtonFunction(2);
        }
    }
    if (ninthBlockCheck) {
        ninthConstructorBlockClickFunction();
        ninthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (ninthBlockFirstButtonCheck) {
            twentyfifthConstructorButtonFunction(2);
        }
        if (ninthBlockSecondButtonCheck) {
            twentysixthConstructorButtonFunction(2);
        }
        if (ninthBlockThirdButtonCheck) {
            twentyseventhConstructorButtonFunction(2);
        }
    }
    if (tenthBlockCheck) {
        tenthConstructorBlockClickFunction();
        tenthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (tenthBlockFirstButtonCheck) {
            twentyeighthConstructorButtonFunction(2);
        }
        if (tenthBlockSecondButtonCheck) {
            twentyninthConstructorButtonFunction(2);
        }
        if (tenthBlockThirdButtonCheck) {
            thirtiethConstructorButtonFunction(2);
        }
    }
        fifthConstructorBlock.style.transition = '.5s';
        fifthConstructorBlock.style.border = '2px solid #7CACE1';
        document.getElementById('fifthBlockFake').style.opacity = '1';
        document.getElementById('fifthZigzagConstructor').style.opacity = '1';
        document.getElementById('fifthConstructorComplexityButtonsBlock').style.opacity = '1';
        document.getElementById('fifthConstructorStateBlock').style.opacity = '1';
        document.getElementById('fifthBlockText').style.top = '5%';
        document.getElementById('fifthBlockTypeCheck').style.color = 'rgba(255,255,255,1)';
        document.getElementById('fifthBlockTypeCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('leftConstructorLabel').innerHTML = 'Пресс';
        document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        !fifthBlockCheck ? fifthBlockCheck = 1 : fifthBlockCheck = 0;
        if (!fifthBlockCheck) {
            if (fifthBlockFirstButtonCheck) {
                thirteenthConstructorButtonFunction(2);
                constructorButtons[0].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[0].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (fifthBlockSecondButtonCheck) {
                fourteenthConstructorButtonFunction(2);
                constructorButtons[1].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[1].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (fifthBlockThirdButtonCheck) {
                fifteenthConstructorButtonFunction(2);
                constructorButtons[2].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[2].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            }
            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
            fifthConstructorBlock.style.border = 'none';
            document.getElementById('fifthBlockTypeCheck').style.textShadow = 'none';
        }


}

constructorButtons[12].addEventListener('mouseover', () => {thirteenthConstructorButtonFunction(0)});
constructorButtons[12].addEventListener('mouseleave', () => {thirteenthConstructorButtonFunction(1)});
constructorButtons[12].addEventListener('click', () => {thirteenthConstructorButtonFunction(2)});
var fifthBlockFirstButtonCheck = 0;
constructorButtons[13].addEventListener('mouseover', () => {fourteenthConstructorButtonFunction(0)});
constructorButtons[13].addEventListener('mouseleave', () => {fourteenthConstructorButtonFunction(1)});
constructorButtons[13].addEventListener('click', () => {fourteenthConstructorButtonFunction(2)});
var fifthBlockSecondButtonCheck = 0;
constructorButtons[14].addEventListener('mouseover', () => {fifteenthConstructorButtonFunction(0)});
constructorButtons[14].addEventListener('mouseleave', () => {fifteenthConstructorButtonFunction(1)});
constructorButtons[14].addEventListener('click', () => {fifteenthConstructorButtonFunction(2)});
var fifthBlockThirdButtonCheck = 0;

function thirteenthConstructorButtonFunction(state) {
    if (!state) {
        if (!fifthBlockFirstButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[12].style.background = 'white';
        constructorButtons[12].style.color = '#464646';
        document.getElementById('fifthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';

    } else if (state == 1) {
        fifthConstructorBlock.addEventListener('click', fifthConstructorBlockClickFunction);
        if (!fifthBlockFirstButtonCheck) {
            if (fifthBlockFirstButtonCheck || fifthBlockSecondButtonCheck || fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (fifthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (fifthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (fifthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[12].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[12].style.color = 'white';
            if (!fifthBlockFirstButtonCheck && !fifthBlockSecondButtonCheck && !fifthBlockThirdButtonCheck) document.getElementById('fifthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (fifthBlockSecondButtonCheck) {
            fourteenthConstructorButtonFunction(2);
            fourteenthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }
        if (fifthBlockThirdButtonCheck) {
            fifteenthConstructorButtonFunction(2);
            fifteenthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }

        if (!fifthBlockCheck) {
            if (!fifthBlockFirstButtonCheck) {
                fifthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (fifthBlockCheck) fifthConstructorBlock.removeEventListener('click',fifthConstructorBlockClickFunction);
        document.getElementById('fifthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('fifthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[4].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[4].addEventListener('mouseleave', buttonsHoverDisable);
        !fifthBlockFirstButtonCheck ? fifthBlockFirstButtonCheck = 1 : fifthBlockFirstButtonCheck = 0;
        if (!fifthBlockFirstButtonCheck) {
            constructorButtons[12].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[12].style.color = 'white';
            document.getElementById('fifthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('fifthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[4].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[4].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function fourteenthConstructorButtonFunction(state) {
    if (!state) {
        if (!fifthBlockSecondButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[13].style.background = 'white';
        constructorButtons[13].style.color = '#464646';
        document.getElementById('fifthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        fifthConstructorBlock.addEventListener('click', fifthConstructorBlockClickFunction);
        if (!fifthBlockSecondButtonCheck) {
            if (fifthBlockFirstButtonCheck || fifthBlockSecondButtonCheck || fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (fifthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (fifthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (fifthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[13].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[13].style.color = 'white';
            if (!fifthBlockFirstButtonCheck && !fifthBlockSecondButtonCheck && !fifthBlockThirdButtonCheck) document.getElementById('fifthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (fifthBlockFirstButtonCheck) {
            thirteenthConstructorButtonFunction(2);
            thirteenthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }
        if (fifthBlockThirdButtonCheck) {
            fifteenthConstructorButtonFunction(2);
            fifteenthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }

        if (!fifthBlockCheck) {
            if (!fifthBlockSecondButtonCheck) {
                fifthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (fifthBlockCheck) fifthConstructorBlock.removeEventListener('click', fifthConstructorBlockClickFunction);
        document.getElementById('fifthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('fifthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[4].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[4].addEventListener('mouseleave', buttonsHoverDisable);
        !fifthBlockSecondButtonCheck ? fifthBlockSecondButtonCheck = 1 : fifthBlockSecondButtonCheck = 0;
        if (!fifthBlockSecondButtonCheck) {
            constructorButtons[13].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[13].style.color = 'white';
            document.getElementById('fifthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('fifthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[4].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[4].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function fifteenthConstructorButtonFunction(state) {
    if (!state) {
        if (!fifthBlockThirdButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[14].style.background = 'white';
        constructorButtons[14].style.color = '#464646';
        document.getElementById('fifthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        fifthConstructorBlock.addEventListener('click', fifthConstructorBlockClickFunction);
        if (!fifthBlockThirdButtonCheck) {
            if (fifthBlockFirstButtonCheck || fifthBlockSecondButtonCheck || fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (fifthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (fifthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (fifthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[14].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[14].style.color = 'white';
            if (!fifthBlockFirstButtonCheck && !fifthBlockSecondButtonCheck && !fifthBlockThirdButtonCheck) document.getElementById('fifthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (fifthBlockFirstButtonCheck) {
            thirteenthConstructorButtonFunction(2);
            thirteenthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }
        if (fifthBlockSecondButtonCheck) {
            fourteenthConstructorButtonFunction(2);
            fourteenthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }

        if (!fifthBlockCheck) {
            if (!fifthBlockThirdButtonCheck) {
                fifthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (fifthBlockCheck) fifthConstructorBlock.removeEventListener('click', fifthConstructorBlockClickFunction);
        document.getElementById('fifthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('fifthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[4].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[4].addEventListener('mouseleave', buttonsHoverDisable);
        !fifthBlockThirdButtonCheck ? fifthBlockThirdButtonCheck = 1 : fifthBlockThirdButtonCheck = 0;
        if (!fifthBlockThirdButtonCheck) {
            constructorButtons[14].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[14].style.color = 'white';
            document.getElementById('fifthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('fifthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[4].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[4].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

sixthConstructorBlock.addEventListener('mouseover', () => {sixthConstructorBlockHoverFunction(0)});
sixthConstructorBlock.addEventListener('mouseleave', () => {sixthConstructorBlockHoverFunction(1)});
sixthConstructorBlock.addEventListener('click', sixthConstructorBlockClickFunction);

function sixthConstructorBlockHoverFunction(state) {
    if (!state) {
        document.getElementById('leftConstructorLabel').innerHTML = 'Ягодицы';
        document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,1)';
        if (!sixthBlockCheck) {
            document.getElementById('sixthBlockFake').style.opacity = '1';
            document.getElementById('sixthZigzagConstructor').style.opacity = '1';
            document.getElementById('sixthConstructorComplexityButtonsBlock').style.opacity = '1';
            document.getElementById('sixthConstructorStateBlock').style.opacity = '1';
            document.getElementById('sixthBlockText').style.top = '5%';
            document.getElementById('sixthBlockTypeCheck').style.color = 'rgba(255,255,255,1)';

            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
        }
    } else {
        if (!sixthBlockCheck) {
            document.getElementById('leftConstructorLabel').innerHTML = 'Выберите тип';
            document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('sixthBlockFake').style.opacity = '0';
            document.getElementById('sixthZigzagConstructor').style.opacity = '0';
            document.getElementById('sixthConstructorComplexityButtonsBlock').style.opacity = '0';
            document.getElementById('sixthConstructorStateBlock').style.opacity = '0';
            document.getElementById('sixthBlockText').style.top = '40%';
            document.getElementById('sixthBlockTypeCheck').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('sixthBlockTypeCheck').style.textShadow = 'none';

            if (firstBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Руки';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Плечи';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Грудь';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Спина';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Пресс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ноги';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Выносливость';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Фитнес';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Весь комплекс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    }
}

function sixthConstructorBlockClickFunction() {
    if (firstBlockCheck) {
        firstConstructorBlockClickFunction();
        firstConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (firstBlockFirstButtonCheck) {
            firstConstructorButtonFunction(2);
        }
        if (firstBlockSecondButtonCheck) {
            secondConstructorButtonFunction(2);
        }
        if (firstBlockThirdButtonCheck) {
            thirdConstructorButtonFunction(2);
        }
    }
    if (secondBlockCheck) {
        secondConstructorBlockClickFunction();
        secondConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (secondBlockFirstButtonCheck) {
            fourthConstructorButtonFunction(2);
        }
        if (secondBlockSecondButtonCheck) {
            fifthConstructorButtonFunction(2);
        }
        if (secondBlockThirdButtonCheck) {
            sixthConstructorButtonFunction(2);
        }
    }
    if (thirdBlockCheck) {
        thirdConstructorBlockClickFunction();
        thirdConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (thirdBlockFirstButtonCheck) {
            seventhConstructorButtonFunction(2);
        }
        if (thirdBlockSecondButtonCheck) {
            eighthConstructorButtonFunction(2);
        }
        if (thirdBlockThirdButtonCheck) {
            ninthConstructorButtonFunction(2);
        }
    }
    if (fourthBlockCheck) {
        fourthConstructorBlockClickFunction();
        fourthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fourthBlockFirstButtonCheck) {
            tenthConstructorButtonFunction(2);
        }
        if (fourthBlockSecondButtonCheck) {
            eleventhConstructorButtonFunction(2);
        }
        if (fourthBlockThirdButtonCheck) {
            twelvthConstructorButtonFunction(2);
        }
    }
    if (fifthBlockCheck) {
        fifthConstructorBlockClickFunction();
        fifthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fifthBlockFirstButtonCheck) {
            thirteenthConstructorButtonFunction(2);
        }
        if (fifthBlockSecondButtonCheck) {
            fourteenthConstructorButtonFunction(2);
        }
        if (fifthBlockThirdButtonCheck) {
            fifteenthConstructorButtonFunction(2);
        }
    }
    if (seventhBlockCheck) {
        seventhConstructorBlockClickFunction();
        seventhConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (seventhBlockFirstButtonCheck) {
            ninteenthConstructorButtonFunction(2);
        }
        if (seventhBlockSecondButtonCheck) {
            twentiethConstructorButtonFunction(2);
        }
        if (seventhBlockThirdButtonCheck) {
            twentyfirstConstructorButtonFunction(2);
        }
    }
    if (eighthBlockCheck) {
        eighthConstructorBlockClickFunction();
        eighthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (eighthBlockFirstButtonCheck) {
            twentysecondConstructorButtonFunction(2);
        }
        if (eighthBlockSecondButtonCheck) {
            twentythirdConstructorButtonFunction(2);
        }
        if (eighthBlockThirdButtonCheck) {
            twentyfourthConstructorButtonFunction(2);
        }
    }
    if (ninthBlockCheck) {
        ninthConstructorBlockClickFunction();
        ninthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (ninthBlockFirstButtonCheck) {
            twentyfifthConstructorButtonFunction(2);
        }
        if (ninthBlockSecondButtonCheck) {
            twentysixthConstructorButtonFunction(2);
        }
        if (ninthBlockThirdButtonCheck) {
            twentyseventhConstructorButtonFunction(2);
        }
    }
    if (tenthBlockCheck) {
        tenthConstructorBlockClickFunction();
        tenthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (tenthBlockFirstButtonCheck) {
            twentyeighthConstructorButtonFunction(2);
        }
        if (tenthBlockSecondButtonCheck) {
            twentyninthConstructorButtonFunction(2);
        }
        if (tenthBlockThirdButtonCheck) {
            thirtiethConstructorButtonFunction(2);
        }
    }
        sixthConstructorBlock.style.transition = '.5s';
        sixthConstructorBlock.style.border = '2px solid #7CACE1';
        document.getElementById('sixthBlockFake').style.opacity = '1';
        document.getElementById('sixthZigzagConstructor').style.opacity = '1';
        document.getElementById('sixthConstructorComplexityButtonsBlock').style.opacity = '1';
        document.getElementById('sixthConstructorStateBlock').style.opacity = '1';
        document.getElementById('sixthBlockText').style.top = '5%';
        document.getElementById('sixthBlockTypeCheck').style.color = 'rgba(255,255,255,1)';
        document.getElementById('sixthBlockTypeCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('leftConstructorLabel').innerHTML = 'Ягодицы';
        document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        !sixthBlockCheck ? sixthBlockCheck = 1 : sixthBlockCheck = 0;
        if (!sixthBlockCheck) {
            if (sixthBlockFirstButtonCheck) {
                sixteenthConstructorButtonFunction(2);
                constructorButtons[0].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[0].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (sixthBlockSecondButtonCheck) {
                seventeenthConstructorButtonFunction(2);
                constructorButtons[1].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[1].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (sixthBlockThirdButtonCheck) {
                eighteenthConstructorButtonFunction(2);
                constructorButtons[2].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[2].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            }
            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
            sixthConstructorBlock.style.border = 'none';
            document.getElementById('sixthBlockTypeCheck').style.textShadow = 'none';
        }


}

constructorButtons[15].addEventListener('mouseover', () => {sixteenthConstructorButtonFunction(0)});
constructorButtons[15].addEventListener('mouseleave', () => {sixteenthConstructorButtonFunction(1)});
constructorButtons[15].addEventListener('click', () => {sixteenthConstructorButtonFunction(2)});
var sixthBlockFirstButtonCheck = 0;
constructorButtons[16].addEventListener('mouseover', () => {seventeenthConstructorButtonFunction(0)});
constructorButtons[16].addEventListener('mouseleave', () => {seventeenthConstructorButtonFunction(1)});
constructorButtons[16].addEventListener('click', () => {seventeenthConstructorButtonFunction(2)});
var sixthBlockSecondButtonCheck = 0;
constructorButtons[17].addEventListener('mouseover', () => {eighteenthConstructorButtonFunction(0)});
constructorButtons[17].addEventListener('mouseleave', () => {eighteenthConstructorButtonFunction(1)});
constructorButtons[17].addEventListener('click', () => {eighteenthConstructorButtonFunction(2)});
var sixthBlockThirdButtonCheck = 0;

function sixteenthConstructorButtonFunction(state) {
    if (!state) {
        if (!sixthBlockFirstButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[15].style.background = 'white';
        constructorButtons[15].style.color = '#464646';
        document.getElementById('sixthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';

    } else if (state == 1) {
        sixthConstructorBlock.addEventListener('click', sixthConstructorBlockClickFunction);
        if (!sixthBlockFirstButtonCheck) {
            if (sixthBlockFirstButtonCheck || sixthBlockSecondButtonCheck || sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (sixthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (sixthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (sixthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[15].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[15].style.color = 'white';
            if (!sixthBlockFirstButtonCheck && !sixthBlockSecondButtonCheck && !sixthBlockThirdButtonCheck) document.getElementById('sixthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (sixthBlockSecondButtonCheck) {
            seventeenthConstructorButtonFunction(2);
            seventeenthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }
        if (sixthBlockThirdButtonCheck) {
            eighteenthConstructorButtonFunction(2);
            eighteenthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }

        if (!sixthBlockCheck) {
            if (!sixthBlockFirstButtonCheck) {
                sixthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (sixthBlockCheck) sixthConstructorBlock.removeEventListener('click',sixthConstructorBlockClickFunction);
        document.getElementById('sixthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('sixthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[5].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[5].addEventListener('mouseleave', buttonsHoverDisable);
        !sixthBlockFirstButtonCheck ? sixthBlockFirstButtonCheck = 1 : sixthBlockFirstButtonCheck = 0;
        if (!sixthBlockFirstButtonCheck) {
            constructorButtons[15].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[15].style.color = 'white';
            document.getElementById('sixthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('sixthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[5].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[5].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function seventeenthConstructorButtonFunction(state) {
    if (!state) {
        if (!sixthBlockSecondButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[16].style.background = 'white';
        constructorButtons[16].style.color = '#464646';
        document.getElementById('sixthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        sixthConstructorBlock.addEventListener('click', sixthConstructorBlockClickFunction);
        if (!sixthBlockSecondButtonCheck) {
            if (sixthBlockFirstButtonCheck || sixthBlockSecondButtonCheck || sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (sixthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (sixthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (sixthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[16].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[16].style.color = 'white';
            if (!sixthBlockFirstButtonCheck && !sixthBlockSecondButtonCheck && !sixthBlockThirdButtonCheck) document.getElementById('sixthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (sixthBlockFirstButtonCheck) {
            sixteenthConstructorButtonFunction(2);
            sixteenthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }
        if (sixthBlockThirdButtonCheck) {
            eighteenthConstructorButtonFunction(2);
            eighteenthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }

        if (!sixthBlockCheck) {
            if (!sixthBlockSecondButtonCheck) {
                sixthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (sixthBlockCheck) sixthConstructorBlock.removeEventListener('click', sixthConstructorBlockClickFunction);
        document.getElementById('sixthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('sixthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[5].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[5].addEventListener('mouseleave', buttonsHoverDisable);
        !sixthBlockSecondButtonCheck ? sixthBlockSecondButtonCheck = 1 : sixthBlockSecondButtonCheck = 0;
        if (!sixthBlockSecondButtonCheck) {
            constructorButtons[16].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[16].style.color = 'white';
            document.getElementById('sixthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('sixthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[5].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[5].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function eighteenthConstructorButtonFunction(state) {
    if (!state) {
        if (!sixthBlockThirdButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[17].style.background = 'white';
        constructorButtons[17].style.color = '#464646';
        document.getElementById('sixthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        sixthConstructorBlock.addEventListener('click', sixthConstructorBlockClickFunction);
        if (!sixthBlockThirdButtonCheck) {
            if (sixthBlockFirstButtonCheck || sixthBlockSecondButtonCheck || sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (sixthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (sixthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (sixthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[17].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[17].style.color = 'white';
            if (!sixthBlockFirstButtonCheck && !sixthBlockSecondButtonCheck && !sixthBlockThirdButtonCheck) document.getElementById('sixthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (sixthBlockFirstButtonCheck) {
            sixteenthConstructorButtonFunction(2);
            sixteenthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }
        if (sixthBlockSecondButtonCheck) {
            seventeenthConstructorButtonFunction(2);
            seventeenthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }

        if (!sixthBlockCheck) {
            if (!sixthBlockThirdButtonCheck) {
                sixthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (sixthBlockCheck) sixthConstructorBlock.removeEventListener('click', sixthConstructorBlockClickFunction);
        document.getElementById('sixthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('sixthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[5].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[5].addEventListener('mouseleave', buttonsHoverDisable);
        !sixthBlockThirdButtonCheck ? sixthBlockThirdButtonCheck = 1 : sixthBlockThirdButtonCheck = 0;
        if (!sixthBlockThirdButtonCheck) {
            constructorButtons[17].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[17].style.color = 'white';
            document.getElementById('sixthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('sixthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[5].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[5].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

seventhConstructorBlock.addEventListener('mouseover', () => {seventhConstructorBlockHoverFunction(0)});
seventhConstructorBlock.addEventListener('mouseleave', () => {seventhConstructorBlockHoverFunction(1)});
seventhConstructorBlock.addEventListener('click', seventhConstructorBlockClickFunction);

function seventhConstructorBlockHoverFunction(state) {
    if (!state) {
        document.getElementById('leftConstructorLabel').innerHTML = 'Ноги';
        document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,1)';
        if (!seventhBlockCheck) {
            document.getElementById('seventhBlockFake').style.opacity = '1';
            document.getElementById('seventhZigzagConstructor').style.opacity = '1';
            document.getElementById('seventhConstructorComplexityButtonsBlock').style.opacity = '1';
            document.getElementById('seventhConstructorStateBlock').style.opacity = '1';
            document.getElementById('seventhBlockText').style.top = '5%';
            document.getElementById('seventhBlockTypeCheck').style.color = 'rgba(255,255,255,1)';

            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
        }
    } else {
        if (!seventhBlockCheck) {
            document.getElementById('leftConstructorLabel').innerHTML = 'Выберите тип';
            document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('seventhBlockFake').style.opacity = '0';
            document.getElementById('seventhZigzagConstructor').style.opacity = '0';
            document.getElementById('seventhConstructorComplexityButtonsBlock').style.opacity = '0';
            document.getElementById('seventhConstructorStateBlock').style.opacity = '0';
            document.getElementById('seventhBlockText').style.top = '40%';
            document.getElementById('seventhBlockTypeCheck').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('seventhBlockTypeCheck').style.textShadow = 'none';

            if (firstBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Руки';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Плечи';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Грудь';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Спина';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Пресс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ягодицы';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Выносливость';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Фитнес';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Весь комплекс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    }
}

function seventhConstructorBlockClickFunction() {
    if (firstBlockCheck) {
        firstConstructorBlockClickFunction();
        firstConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (firstBlockFirstButtonCheck) {
            firstConstructorButtonFunction(2);
        }
        if (firstBlockSecondButtonCheck) {
            secondConstructorButtonFunction(2);
        }
        if (firstBlockThirdButtonCheck) {
            thirdConstructorButtonFunction(2);
        }
    }
    if (secondBlockCheck) {
        secondConstructorBlockClickFunction();
        secondConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (secondBlockFirstButtonCheck) {
            fourthConstructorButtonFunction(2);
        }
        if (secondBlockSecondButtonCheck) {
            fifthConstructorButtonFunction(2);
        }
        if (secondBlockThirdButtonCheck) {
            sixthConstructorButtonFunction(2);
        }
    }
    if (thirdBlockCheck) {
        thirdConstructorBlockClickFunction();
        thirdConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (thirdBlockFirstButtonCheck) {
            seventhConstructorButtonFunction(2);
        }
        if (thirdBlockSecondButtonCheck) {
            eighthConstructorButtonFunction(2);
        }
        if (thirdBlockThirdButtonCheck) {
            ninthConstructorButtonFunction(2);
        }
    }
    if (fourthBlockCheck) {
        fourthConstructorBlockClickFunction();
        fourthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fourthBlockFirstButtonCheck) {
            tenthConstructorButtonFunction(2);
        }
        if (fourthBlockSecondButtonCheck) {
            eleventhConstructorButtonFunction(2);
        }
        if (fourthBlockThirdButtonCheck) {
            twelvthConstructorButtonFunction(2);
        }
    }
    if (fifthBlockCheck) {
        fifthConstructorBlockClickFunction();
        fifthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fifthBlockFirstButtonCheck) {
            thirteenthConstructorButtonFunction(2);
        }
        if (fifthBlockSecondButtonCheck) {
            fourteenthConstructorButtonFunction(2);
        }
        if (fifthBlockThirdButtonCheck) {
            fifteenthConstructorButtonFunction(2);
        }
    }
    if (sixthBlockCheck) {
        sixthConstructorBlockClickFunction();
        sixthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (sixthBlockFirstButtonCheck) {
            sixteenthConstructorButtonFunction(2);
        }
        if (sixthBlockSecondButtonCheck) {
            seventeenthConstructorButtonFunction(2);
        }
        if (sixthBlockThirdButtonCheck) {
            eighteenthConstructorButtonFunction(2);
        }
    }
    if (eighthBlockCheck) {
        eighthConstructorBlockClickFunction();
        eighthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (eighthBlockFirstButtonCheck) {
            twentysecondConstructorButtonFunction(2);
        }
        if (eighthBlockSecondButtonCheck) {
            twentythirdConstructorButtonFunction(2);
        }
        if (eighthBlockThirdButtonCheck) {
            twentyfourthConstructorButtonFunction(2);
        }
    }
    if (ninthBlockCheck) {
        ninthConstructorBlockClickFunction();
        ninthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (ninthBlockFirstButtonCheck) {
            twentyfifthConstructorButtonFunction(2);
        }
        if (ninthBlockSecondButtonCheck) {
            twentysixthConstructorButtonFunction(2);
        }
        if (ninthBlockThirdButtonCheck) {
            twentyseventhConstructorButtonFunction(2);
        }
    }
    if (tenthBlockCheck) {
        tenthConstructorBlockClickFunction();
        tenthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (tenthBlockFirstButtonCheck) {
            twentyeighthConstructorButtonFunction(2);
        }
        if (tenthBlockSecondButtonCheck) {
            twentyninthConstructorButtonFunction(2);
        }
        if (tenthBlockThirdButtonCheck) {
            thirtiethConstructorButtonFunction(2);
        }
    }
        seventhConstructorBlock.style.transition = '.5s';
        seventhConstructorBlock.style.border = '2px solid #7CACE1';
        document.getElementById('seventhBlockFake').style.opacity = '1';
        document.getElementById('seventhZigzagConstructor').style.opacity = '1';
        document.getElementById('seventhConstructorComplexityButtonsBlock').style.opacity = '1';
        document.getElementById('seventhConstructorStateBlock').style.opacity = '1';
        document.getElementById('seventhBlockText').style.top = '5%';
        document.getElementById('seventhBlockTypeCheck').style.color = 'rgba(255,255,255,1)';
        document.getElementById('seventhBlockTypeCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('leftConstructorLabel').innerHTML = 'Ноги';
        document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        !seventhBlockCheck ? seventhBlockCheck = 1 : seventhBlockCheck = 0;
        if (!seventhBlockCheck) {
            if (seventhBlockFirstButtonCheck) {
                ninteenthConstructorButtonFunction(2);
                constructorButtons[0].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[0].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (seventhBlockSecondButtonCheck) {
                twentiethConstructorButtonFunction(2);
                constructorButtons[1].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[1].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (seventhBlockThirdButtonCheck) {
                twentyfirstConstructorButtonFunction(2);
                constructorButtons[2].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[2].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            }
            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
            seventhConstructorBlock.style.border = 'none';
            document.getElementById('seventhBlockTypeCheck').style.textShadow = 'none';
        }


}

constructorButtons[18].addEventListener('mouseover', () => {ninteenthConstructorButtonFunction(0)});
constructorButtons[18].addEventListener('mouseleave', () => {ninteenthConstructorButtonFunction(1)});
constructorButtons[18].addEventListener('click', () => {ninteenthConstructorButtonFunction(2)});
var seventhBlockFirstButtonCheck = 0;
constructorButtons[19].addEventListener('mouseover', () => {twentiethConstructorButtonFunction(0)});
constructorButtons[19].addEventListener('mouseleave', () => {twentiethConstructorButtonFunction(1)});
constructorButtons[19].addEventListener('click', () => {twentiethConstructorButtonFunction(2)});
var seventhBlockSecondButtonCheck = 0;
constructorButtons[20].addEventListener('mouseover', () => {twentyfirstConstructorButtonFunction(0)});
constructorButtons[20].addEventListener('mouseleave', () => {twentyfirstConstructorButtonFunction(1)});
constructorButtons[20].addEventListener('click', () => {twentyfirstConstructorButtonFunction(2)});
var seventhBlockThirdButtonCheck = 0;

function ninteenthConstructorButtonFunction(state) {
    if (!state) {
        if (!seventhBlockFirstButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[18].style.background = 'white';
        constructorButtons[18].style.color = '#464646';
        document.getElementById('seventhBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';

    } else if (state == 1) {
        seventhConstructorBlock.addEventListener('click', seventhConstructorBlockClickFunction);
        if (!seventhBlockFirstButtonCheck) {
            if (seventhBlockFirstButtonCheck || seventhBlockSecondButtonCheck || seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (seventhBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (seventhBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (seventhBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[18].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[18].style.color = 'white';
            if (!seventhBlockFirstButtonCheck && !seventhBlockSecondButtonCheck && !seventhBlockThirdButtonCheck) document.getElementById('seventhBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (seventhBlockSecondButtonCheck) {
            twentiethConstructorButtonFunction(2);
            twentiethConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }
        if (seventhBlockThirdButtonCheck) {
            twentyfirstConstructorButtonFunction(2);
            twentyfirstConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }

        if (!seventhBlockCheck) {
            if (!seventhBlockFirstButtonCheck) {
                seventhConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (seventhBlockCheck) seventhConstructorBlock.removeEventListener('click',seventhConstructorBlockClickFunction);
        document.getElementById('seventhBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('seventhBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[6].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[6].addEventListener('mouseleave', buttonsHoverDisable);
        !seventhBlockFirstButtonCheck ? seventhBlockFirstButtonCheck = 1 : seventhBlockFirstButtonCheck = 0;
        if (!seventhBlockFirstButtonCheck) {
            constructorButtons[18].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[18].style.color = 'white';
            document.getElementById('seventhBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('seventhBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[6].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[6].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function twentiethConstructorButtonFunction(state) {
    if (!state) {
        if (!seventhBlockSecondButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[19].style.background = 'white';
        constructorButtons[19].style.color = '#464646';
        document.getElementById('seventhBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        seventhConstructorBlock.addEventListener('click', seventhConstructorBlockClickFunction);
        if (!seventhBlockSecondButtonCheck) {
            if (seventhBlockFirstButtonCheck || seventhBlockSecondButtonCheck || seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (seventhBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (seventhBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (seventhBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[19].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[19].style.color = 'white';
            if (!seventhBlockFirstButtonCheck && !seventhBlockSecondButtonCheck && !seventhBlockThirdButtonCheck) document.getElementById('seventhBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (seventhBlockFirstButtonCheck) {
            ninteenthConstructorButtonFunction(2);
            ninteenthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }
        if (seventhBlockThirdButtonCheck) {
            twentyfirstConstructorButtonFunction(2);
            twentyfirstConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }

        if (!seventhBlockCheck) {
            if (!seventhBlockSecondButtonCheck) {
                seventhConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (seventhBlockCheck) seventhConstructorBlock.removeEventListener('click', seventhConstructorBlockClickFunction);
        document.getElementById('seventhBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('seventhBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[6].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[6].addEventListener('mouseleave', buttonsHoverDisable);
        !seventhBlockSecondButtonCheck ? seventhBlockSecondButtonCheck = 1 : seventhBlockSecondButtonCheck = 0;
        if (!seventhBlockSecondButtonCheck) {
            constructorButtons[19].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[19].style.color = 'white';
            document.getElementById('seventhBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('seventhBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[6].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[6].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function twentyfirstConstructorButtonFunction(state) {
    if (!state) {
        if (!seventhBlockThirdButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[20].style.background = 'white';
        constructorButtons[20].style.color = '#464646';
        document.getElementById('seventhBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        seventhConstructorBlock.addEventListener('click', seventhConstructorBlockClickFunction);
        if (!seventhBlockThirdButtonCheck) {
            if (seventhBlockFirstButtonCheck || seventhBlockSecondButtonCheck || seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (seventhBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (seventhBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (seventhBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[20].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[20].style.color = 'white';
            if (!seventhBlockFirstButtonCheck && !seventhBlockSecondButtonCheck && !seventhBlockThirdButtonCheck) document.getElementById('seventhBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (seventhBlockFirstButtonCheck) {
            ninteenthConstructorButtonFunction(2);
            ninteenthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }
        if (seventhBlockSecondButtonCheck) {
            twentiethConstructorButtonFunction(2);
            twentiethConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }

        if (!seventhBlockCheck) {
            if (!seventhBlockThirdButtonCheck) {
                seventhConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (seventhBlockCheck) seventhConstructorBlock.removeEventListener('click', seventhConstructorBlockClickFunction);
        document.getElementById('seventhBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('seventhBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[6].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[6].addEventListener('mouseleave', buttonsHoverDisable);
        !seventhBlockThirdButtonCheck ? seventhBlockThirdButtonCheck = 1 : seventhBlockThirdButtonCheck = 0;
        if (!seventhBlockThirdButtonCheck) {
            constructorButtons[20].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[20].style.color = 'white';
            document.getElementById('seventhBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('seventhBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[6].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[6].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

eighthConstructorBlock.addEventListener('mouseover', () => {eighthConstructorBlockHoverFunction(0)});
eighthConstructorBlock.addEventListener('mouseleave', () => {eighthConstructorBlockHoverFunction(1)});
eighthConstructorBlock.addEventListener('click', eighthConstructorBlockClickFunction);

function eighthConstructorBlockHoverFunction(state) {
    if (!state) {
        document.getElementById('leftConstructorLabel').innerHTML = 'Выносливость';
        document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,1)';
        if (!eighthBlockCheck) {
            document.getElementById('eighthBlockFake').style.opacity = '1';
            document.getElementById('eighthZigzagConstructor').style.opacity = '1';
            document.getElementById('eighthConstructorComplexityButtonsBlock').style.opacity = '1';
            document.getElementById('eighthConstructorStateBlock').style.opacity = '1';
            document.getElementById('eighthBlockText').style.top = '5%';
            document.getElementById('eighthBlockTypeCheck').style.color = 'rgba(255,255,255,1)';

            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
        }
    } else {
        if (!eighthBlockCheck) {
            document.getElementById('leftConstructorLabel').innerHTML = 'Выберите тип';
            document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('eighthBlockFake').style.opacity = '0';
            document.getElementById('eighthZigzagConstructor').style.opacity = '0';
            document.getElementById('eighthConstructorComplexityButtonsBlock').style.opacity = '0';
            document.getElementById('eighthConstructorStateBlock').style.opacity = '0';
            document.getElementById('eighthBlockText').style.top = '40%';
            document.getElementById('eighthBlockTypeCheck').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('eighthBlockTypeCheck').style.textShadow = 'none';

            if (firstBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Руки';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Плечи';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Грудь';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Спина';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Пресс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ягодицы';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ноги';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Фитнес';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Весь комплекс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    }
}

function eighthConstructorBlockClickFunction() {
    if (firstBlockCheck) {
        firstConstructorBlockClickFunction();
        firstConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (firstBlockFirstButtonCheck) {
            firstConstructorButtonFunction(2);
        }
        if (firstBlockSecondButtonCheck) {
            secondConstructorButtonFunction(2);
        }
        if (firstBlockThirdButtonCheck) {
            thirdConstructorButtonFunction(2);
        }
    }
    if (secondBlockCheck) {
        secondConstructorBlockClickFunction();
        secondConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (secondBlockFirstButtonCheck) {
            fourthConstructorButtonFunction(2);
        }
        if (secondBlockSecondButtonCheck) {
            fifthConstructorButtonFunction(2);
        }
        if (secondBlockThirdButtonCheck) {
            sixthConstructorButtonFunction(2);
        }
    }
    if (thirdBlockCheck) {
        thirdConstructorBlockClickFunction();
        thirdConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (thirdBlockFirstButtonCheck) {
            seventhConstructorButtonFunction(2);
        }
        if (thirdBlockSecondButtonCheck) {
            eighthConstructorButtonFunction(2);
        }
        if (thirdBlockThirdButtonCheck) {
            ninthConstructorButtonFunction(2);
        }
    }
    if (fourthBlockCheck) {
        fourthConstructorBlockClickFunction();
        fourthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fourthBlockFirstButtonCheck) {
            tenthConstructorButtonFunction(2);
        }
        if (fourthBlockSecondButtonCheck) {
            eleventhConstructorButtonFunction(2);
        }
        if (fourthBlockThirdButtonCheck) {
            twelvthConstructorButtonFunction(2);
        }
    }
    if (fifthBlockCheck) {
        fifthConstructorBlockClickFunction();
        fifthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fifthBlockFirstButtonCheck) {
            thirteenthConstructorButtonFunction(2);
        }
        if (fifthBlockSecondButtonCheck) {
            fourteenthConstructorButtonFunction(2);
        }
        if (fifthBlockThirdButtonCheck) {
            fifteenthConstructorButtonFunction(2);
        }
    }
    if (sixthBlockCheck) {
        sixthConstructorBlockClickFunction();
        sixthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (sixthBlockFirstButtonCheck) {
            sixteenthConstructorButtonFunction(2);
        }
        if (sixthBlockSecondButtonCheck) {
            seventeenthConstructorButtonFunction(2);
        }
        if (sixthBlockThirdButtonCheck) {
            eighteenthConstructorButtonFunction(2);
        }
    }
    if (seventhBlockCheck) {
        seventhConstructorBlockClickFunction();
        seventhConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (seventhBlockFirstButtonCheck) {
            ninteenthConstructorButtonFunction(2);
        }
        if (seventhBlockSecondButtonCheck) {
            twentiethConstructorButtonFunction(2);
        }
        if (seventhBlockThirdButtonCheck) {
            twentyfirstConstructorButtonFunction(2);
        }
    }
    if (ninthBlockCheck) {
        ninthConstructorBlockClickFunction();
        ninthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (ninthBlockFirstButtonCheck) {
            twentyfifthConstructorButtonFunction(2);
        }
        if (ninthBlockSecondButtonCheck) {
            twentysixthConstructorButtonFunction(2);
        }
        if (ninthBlockThirdButtonCheck) {
            twentyseventhConstructorButtonFunction(2);
        }
    }
    if (tenthBlockCheck) {
        tenthConstructorBlockClickFunction();
        tenthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (tenthBlockFirstButtonCheck) {
            twentyeighthConstructorButtonFunction(2);
        }
        if (tenthBlockSecondButtonCheck) {
            twentyninthConstructorButtonFunction(2);
        }
        if (tenthBlockThirdButtonCheck) {
            thirtiethConstructorButtonFunction(2);
        }
    }
        eighthConstructorBlock.style.transition = '.5s';
        eighthConstructorBlock.style.border = '2px solid #7CACE1';
        document.getElementById('eighthBlockFake').style.opacity = '1';
        document.getElementById('eighthZigzagConstructor').style.opacity = '1';
        document.getElementById('eighthConstructorComplexityButtonsBlock').style.opacity = '1';
        document.getElementById('eighthConstructorStateBlock').style.opacity = '1';
        document.getElementById('eighthBlockText').style.top = '5%';
        document.getElementById('eighthBlockTypeCheck').style.color = 'rgba(255,255,255,1)';
        document.getElementById('eighthBlockTypeCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('leftConstructorLabel').innerHTML = 'Выносливость';
        document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        !eighthBlockCheck ? eighthBlockCheck = 1 : eighthBlockCheck = 0;
        if (!eighthBlockCheck) {
            if (eighthBlockFirstButtonCheck) {
                twentysecondConstructorButtonFunction(2);
                constructorButtons[0].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[0].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (eighthBlockSecondButtonCheck) {
                twentythirdConstructorButtonFunction(2);
                constructorButtons[1].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[1].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (eighthBlockThirdButtonCheck) {
                twentyfourthConstructorButtonFunction(2);
                constructorButtons[2].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[2].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            }
            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
            eighthConstructorBlock.style.border = 'none';
            document.getElementById('eighthBlockTypeCheck').style.textShadow = 'none';
        }


}

constructorButtons[21].addEventListener('mouseover', () => {twentysecondConstructorButtonFunction(0)});
constructorButtons[21].addEventListener('mouseleave', () => {twentysecondConstructorButtonFunction(1)});
constructorButtons[21].addEventListener('click', () => {twentysecondConstructorButtonFunction(2)});
var eighthBlockFirstButtonCheck = 0;
constructorButtons[22].addEventListener('mouseover', () => {twentythirdConstructorButtonFunction(0)});
constructorButtons[22].addEventListener('mouseleave', () => {twentythirdConstructorButtonFunction(1)});
constructorButtons[22].addEventListener('click', () => {twentythirdConstructorButtonFunction(2)});
var eighthBlockSecondButtonCheck = 0;
constructorButtons[23].addEventListener('mouseover', () => {twentyfourthConstructorButtonFunction(0)});
constructorButtons[23].addEventListener('mouseleave', () => {twentyfourthConstructorButtonFunction(1)});
constructorButtons[23].addEventListener('click', () => {twentyfourthConstructorButtonFunction(2)});
var eighthBlockThirdButtonCheck = 0;

function twentysecondConstructorButtonFunction(state) {
    if (!state) {
        if (!eighthBlockFirstButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[21].style.background = 'white';
        constructorButtons[21].style.color = '#464646';
        document.getElementById('eighthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';

    } else if (state == 1) {
        eighthConstructorBlock.addEventListener('click', eighthConstructorBlockClickFunction);
        if (!eighthBlockFirstButtonCheck) {
            if (eighthBlockFirstButtonCheck || eighthBlockSecondButtonCheck || eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (eighthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (eighthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (eighthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[21].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[21].style.color = 'white';
            if (!eighthBlockFirstButtonCheck && !eighthBlockSecondButtonCheck && !eighthBlockThirdButtonCheck) document.getElementById('eighthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (eighthBlockSecondButtonCheck) {
            twentythirdConstructorButtonFunction(2);
            twentythirdConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }
        if (eighthBlockThirdButtonCheck) {
            twentyfourthConstructorButtonFunction(2);
            twentyfourthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }

        if (!eighthBlockCheck) {
            if (!eighthBlockFirstButtonCheck) {
                eighthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (eighthBlockCheck) eighthConstructorBlock.removeEventListener('click',eighthConstructorBlockClickFunction);
        document.getElementById('eighthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('eighthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[7].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[7].addEventListener('mouseleave', buttonsHoverDisable);
        !eighthBlockFirstButtonCheck ? eighthBlockFirstButtonCheck = 1 : eighthBlockFirstButtonCheck = 0;
        if (!eighthBlockFirstButtonCheck) {
            constructorButtons[21].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[21].style.color = 'white';
            document.getElementById('eighthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('eighthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[7].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[7].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function twentythirdConstructorButtonFunction(state) {
    if (!state) {
        if (!eighthBlockSecondButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[22].style.background = 'white';
        constructorButtons[22].style.color = '#464646';
        document.getElementById('eighthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        eighthConstructorBlock.addEventListener('click', eighthConstructorBlockClickFunction);
        if (!eighthBlockSecondButtonCheck) {
            if (eighthBlockFirstButtonCheck || eighthBlockSecondButtonCheck || eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (eighthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (eighthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (eighthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[22].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[22].style.color = 'white';
            if (!eighthBlockFirstButtonCheck && !eighthBlockSecondButtonCheck && !eighthBlockThirdButtonCheck) document.getElementById('eighthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (eighthBlockFirstButtonCheck) {
            twentysecondConstructorButtonFunction(2);
            twentysecondConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }
        if (eighthBlockThirdButtonCheck) {
            twentyfourthConstructorButtonFunction(2);
            twentyfourthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }

        if (!eighthBlockCheck) {
            if (!eighthBlockSecondButtonCheck) {
                eighthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (eighthBlockCheck) eighthConstructorBlock.removeEventListener('click', eighthConstructorBlockClickFunction);
        document.getElementById('eighthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('eighthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[7].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[7].addEventListener('mouseleave', buttonsHoverDisable);
        !eighthBlockSecondButtonCheck ? eighthBlockSecondButtonCheck = 1 : eighthBlockSecondButtonCheck = 0;
        if (!eighthBlockSecondButtonCheck) {
            constructorButtons[22].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[22].style.color = 'white';
            document.getElementById('eighthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('eighthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[7].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[7].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function twentyfourthConstructorButtonFunction(state) {
    if (!state) {
        if (!eighthBlockThirdButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[23].style.background = 'white';
        constructorButtons[23].style.color = '#464646';
        document.getElementById('eighthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        eighthConstructorBlock.addEventListener('click', eighthConstructorBlockClickFunction);
        if (!eighthBlockThirdButtonCheck) {
            if (eighthBlockFirstButtonCheck || eighthBlockSecondButtonCheck || eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (eighthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (eighthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (eighthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[23].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[23].style.color = 'white';
            if (!eighthBlockFirstButtonCheck && !eighthBlockSecondButtonCheck && !eighthBlockThirdButtonCheck) document.getElementById('eighthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (eighthBlockFirstButtonCheck) {
            twentysecondConstructorButtonFunction(2);
            twentysecondConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }
        if (eighthBlockSecondButtonCheck) {
            twentythirdConstructorButtonFunction(2);
            twentythirdConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }

        if (!eighthBlockCheck) {
            if (!eighthBlockThirdButtonCheck) {
                eighthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (eighthBlockCheck) eighthConstructorBlock.removeEventListener('click', eighthConstructorBlockClickFunction);
        document.getElementById('eighthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('eighthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[7].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[7].addEventListener('mouseleave', buttonsHoverDisable);
        !eighthBlockThirdButtonCheck ? eighthBlockThirdButtonCheck = 1 : eighthBlockThirdButtonCheck = 0;
        if (!eighthBlockThirdButtonCheck) {
            constructorButtons[23].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[23].style.color = 'white';
            document.getElementById('eighthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('eighthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[7].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[7].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

ninthConstructorBlock.addEventListener('mouseover', () => {ninthConstructorBlockHoverFunction(0)});
ninthConstructorBlock.addEventListener('mouseleave', () => {ninthConstructorBlockHoverFunction(1)});
ninthConstructorBlock.addEventListener('click', ninthConstructorBlockClickFunction);

function ninthConstructorBlockHoverFunction(state) {
    if (!state) {
        document.getElementById('leftConstructorLabel').innerHTML = 'Фитнес';
        document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,1)';
        if (!ninthBlockCheck) {
            document.getElementById('ninthBlockFake').style.opacity = '1';
            document.getElementById('ninthZigzagConstructor').style.opacity = '1';
            document.getElementById('ninthConstructorComplexityButtonsBlock').style.opacity = '1';
            document.getElementById('ninthConstructorStateBlock').style.opacity = '1';
            document.getElementById('ninthBlockText').style.top = '5%';
            document.getElementById('ninthBlockTypeCheck').style.color = 'rgba(255,255,255,1)';

            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
        }
    } else {
        if (!ninthBlockCheck) {
            document.getElementById('leftConstructorLabel').innerHTML = 'Выберите тип';
            document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('ninthBlockFake').style.opacity = '0';
            document.getElementById('ninthZigzagConstructor').style.opacity = '0';
            document.getElementById('ninthConstructorComplexityButtonsBlock').style.opacity = '0';
            document.getElementById('ninthConstructorStateBlock').style.opacity = '0';
            document.getElementById('ninthBlockText').style.top = '40%';
            document.getElementById('ninthBlockTypeCheck').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('ninthBlockTypeCheck').style.textShadow = 'none';

            if (firstBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Руки';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Плечи';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Грудь';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Спина';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Пресс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ягодицы';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ноги';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Выносливость';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Весь комплекс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    }
}

function ninthConstructorBlockClickFunction() {
    if (firstBlockCheck) {
        firstConstructorBlockClickFunction();
        firstConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (firstBlockFirstButtonCheck) {
            firstConstructorButtonFunction(2);
        }
        if (firstBlockSecondButtonCheck) {
            secondConstructorButtonFunction(2);
        }
        if (firstBlockThirdButtonCheck) {
            thirdConstructorButtonFunction(2);
        }
    }
    if (secondBlockCheck) {
        secondConstructorBlockClickFunction();
        secondConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (secondBlockFirstButtonCheck) {
            fourthConstructorButtonFunction(2);
        }
        if (secondBlockSecondButtonCheck) {
            fifthConstructorButtonFunction(2);
        }
        if (secondBlockThirdButtonCheck) {
            sixthConstructorButtonFunction(2);
        }
    }
    if (thirdBlockCheck) {
        thirdConstructorBlockClickFunction();
        thirdConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (thirdBlockFirstButtonCheck) {
            seventhConstructorButtonFunction(2);
        }
        if (thirdBlockSecondButtonCheck) {
            eighthConstructorButtonFunction(2);
        }
        if (thirdBlockThirdButtonCheck) {
            ninthConstructorButtonFunction(2);
        }
    }
    if (fourthBlockCheck) {
        fourthConstructorBlockClickFunction();
        fourthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fourthBlockFirstButtonCheck) {
            tenthConstructorButtonFunction(2);
        }
        if (fourthBlockSecondButtonCheck) {
            eleventhConstructorButtonFunction(2);
        }
        if (fourthBlockThirdButtonCheck) {
            twelvthConstructorButtonFunction(2);
        }
    }
    if (fifthBlockCheck) {
        fifthConstructorBlockClickFunction();
        fifthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fifthBlockFirstButtonCheck) {
            thirteenthConstructorButtonFunction(2);
        }
        if (fifthBlockSecondButtonCheck) {
            fourteenthConstructorButtonFunction(2);
        }
        if (fifthBlockThirdButtonCheck) {
            fifteenthConstructorButtonFunction(2);
        }
    }
    if (sixthBlockCheck) {
        sixthConstructorBlockClickFunction();
        sixthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (sixthBlockFirstButtonCheck) {
            sixteenthConstructorButtonFunction(2);
        }
        if (sixthBlockSecondButtonCheck) {
            seventeenthConstructorButtonFunction(2);
        }
        if (sixthBlockThirdButtonCheck) {
            eighteenthConstructorButtonFunction(2);
        }
    }
    if (seventhBlockCheck) {
        seventhConstructorBlockClickFunction();
        seventhConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (seventhBlockFirstButtonCheck) {
            ninteenthConstructorButtonFunction(2);
        }
        if (seventhBlockSecondButtonCheck) {
            twentiethConstructorButtonFunction(2);
        }
        if (seventhBlockThirdButtonCheck) {
            twentyfirstConstructorButtonFunction(2);
        }
    }
    if (eighthBlockCheck) {
        eighthConstructorBlockClickFunction();
        eighthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (eighthBlockFirstButtonCheck) {
            twentysecondConstructorButtonFunction(2);
        }
        if (eighthBlockSecondButtonCheck) {
            twentythirdConstructorButtonFunction(2);
        }
        if (eighthBlockThirdButtonCheck) {
            twentyfourthConstructorButtonFunction(2);
        }
    }
    if (tenthBlockCheck) {
        tenthConstructorBlockClickFunction();
        tenthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (tenthBlockFirstButtonCheck) {
            twentyeighthConstructorButtonFunction(2);
        }
        if (tenthBlockSecondButtonCheck) {
            twentyninthConstructorButtonFunction(2);
        }
        if (tenthBlockThirdButtonCheck) {
            thirtiethConstructorButtonFunction(2);
        }
    }
        ninthConstructorBlock.style.transition = '.5s';
        ninthConstructorBlock.style.border = '2px solid #7CACE1';
        document.getElementById('ninthBlockFake').style.opacity = '1';
        document.getElementById('ninthZigzagConstructor').style.opacity = '1';
        document.getElementById('ninthConstructorComplexityButtonsBlock').style.opacity = '1';
        document.getElementById('ninthConstructorStateBlock').style.opacity = '1';
        document.getElementById('ninthBlockText').style.top = '5%';
        document.getElementById('ninthBlockTypeCheck').style.color = 'rgba(255,255,255,1)';
        document.getElementById('ninthBlockTypeCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('leftConstructorLabel').innerHTML = 'Фитнес';
        document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        !ninthBlockCheck ? ninthBlockCheck = 1 : ninthBlockCheck = 0;
        if (!ninthBlockCheck) {
            if (ninthBlockFirstButtonCheck) {
                twentyfifthConstructorButtonFunction(2);
                constructorButtons[0].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[0].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (ninthBlockSecondButtonCheck) {
                twentysixthConstructorButtonFunction(2);
                constructorButtons[1].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[1].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (ninthBlockThirdButtonCheck) {
                twentyseventhConstructorButtonFunction(2);
                constructorButtons[2].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[2].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            }
            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
            ninthConstructorBlock.style.border = 'none';
            document.getElementById('ninthBlockTypeCheck').style.textShadow = 'none';
        }


}

constructorButtons[24].addEventListener('mouseover', () => {twentyfifthConstructorButtonFunction(0)});
constructorButtons[24].addEventListener('mouseleave', () => {twentyfifthConstructorButtonFunction(1)});
constructorButtons[24].addEventListener('click', () => {twentyfifthConstructorButtonFunction(2)});
var ninthBlockFirstButtonCheck = 0;
constructorButtons[25].addEventListener('mouseover', () => {twentysixthConstructorButtonFunction(0)});
constructorButtons[25].addEventListener('mouseleave', () => {twentysixthConstructorButtonFunction(1)});
constructorButtons[25].addEventListener('click', () => {twentysixthConstructorButtonFunction(2)});
var ninthBlockSecondButtonCheck = 0;
constructorButtons[26].addEventListener('mouseover', () => {twentyseventhConstructorButtonFunction(0)});
constructorButtons[26].addEventListener('mouseleave', () => {twentyseventhConstructorButtonFunction(1)});
constructorButtons[26].addEventListener('click', () => {twentyseventhConstructorButtonFunction(2)});
var ninthBlockThirdButtonCheck = 0;

function twentyfifthConstructorButtonFunction(state) {
    if (!state) {
        if (!ninthBlockFirstButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[24].style.background = 'white';
        constructorButtons[24].style.color = '#464646';
        document.getElementById('ninthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';

    } else if (state == 1) {
        ninthConstructorBlock.addEventListener('click', ninthConstructorBlockClickFunction);
        if (!ninthBlockFirstButtonCheck) {
            if (ninthBlockFirstButtonCheck || ninthBlockSecondButtonCheck || ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (ninthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (ninthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (ninthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[24].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[24].style.color = 'white';
            if (!ninthBlockFirstButtonCheck && !ninthBlockSecondButtonCheck && !ninthBlockThirdButtonCheck) document.getElementById('ninthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (ninthBlockSecondButtonCheck) {
            twentysixthConstructorButtonFunction(2);
            twentysixthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }
        if (ninthBlockThirdButtonCheck) {
            twentyseventhConstructorButtonFunction(2);
            twentyseventhConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }

        if (!ninthBlockCheck) {
            if (!ninthBlockFirstButtonCheck) {
                ninthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (ninthBlockCheck) ninthConstructorBlock.removeEventListener('click',ninthConstructorBlockClickFunction);
        document.getElementById('ninthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('ninthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[8].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[8].addEventListener('mouseleave', buttonsHoverDisable);
        !ninthBlockFirstButtonCheck ? ninthBlockFirstButtonCheck = 1 : ninthBlockFirstButtonCheck = 0;
        if (!ninthBlockFirstButtonCheck) {
            constructorButtons[24].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[24].style.color = 'white';
            document.getElementById('ninthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('ninthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[8].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[8].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function twentysixthConstructorButtonFunction(state) {
    if (!state) {
        if (!ninthBlockSecondButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[25].style.background = 'white';
        constructorButtons[25].style.color = '#464646';
        document.getElementById('ninthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        ninthConstructorBlock.addEventListener('click', ninthConstructorBlockClickFunction);
        if (!ninthBlockSecondButtonCheck) {
            if (ninthBlockFirstButtonCheck || ninthBlockSecondButtonCheck || ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (ninthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (ninthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (ninthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[25].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[25].style.color = 'white';
            if (!ninthBlockFirstButtonCheck && !ninthBlockSecondButtonCheck && !ninthBlockThirdButtonCheck) document.getElementById('ninthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (ninthBlockFirstButtonCheck) {
            twentyfifthConstructorButtonFunction(2);
            twentyfifthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }
        if (ninthBlockThirdButtonCheck) {
            twentyseventhConstructorButtonFunction(2);
            twentyseventhConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }

        if (!ninthBlockCheck) {
            if (!ninthBlockSecondButtonCheck) {
                ninthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (ninthBlockCheck) ninthConstructorBlock.removeEventListener('click', ninthConstructorBlockClickFunction);
        document.getElementById('ninthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('ninthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[8].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[8].addEventListener('mouseleave', buttonsHoverDisable);
        !ninthBlockSecondButtonCheck ? ninthBlockSecondButtonCheck = 1 : ninthBlockSecondButtonCheck = 0;
        if (!ninthBlockSecondButtonCheck) {
            constructorButtons[25].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[25].style.color = 'white';
            document.getElementById('ninthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('ninthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[8].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[8].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function twentyseventhConstructorButtonFunction(state) {
    if (!state) {
        if (!ninthBlockThirdButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[26].style.background = 'white';
        constructorButtons[26].style.color = '#464646';
        document.getElementById('ninthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        ninthConstructorBlock.addEventListener('click', ninthConstructorBlockClickFunction);
        if (!ninthBlockThirdButtonCheck) {
            if (ninthBlockFirstButtonCheck || ninthBlockSecondButtonCheck || ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (ninthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (ninthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (ninthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[26].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[26].style.color = 'white';
            if (!ninthBlockFirstButtonCheck && !ninthBlockSecondButtonCheck && !ninthBlockThirdButtonCheck) document.getElementById('ninthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (ninthBlockFirstButtonCheck) {
            twentyfifthConstructorButtonFunction(2);
            twentyfifthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }
        if (ninthBlockSecondButtonCheck) {
            twentysixthConstructorButtonFunction(2);
            twentysixthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }

        if (!ninthBlockCheck) {
            if (!ninthBlockThirdButtonCheck) {
                ninthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (ninthBlockCheck) ninthConstructorBlock.removeEventListener('click', ninthConstructorBlockClickFunction);
        document.getElementById('ninthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('ninthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[8].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[8].addEventListener('mouseleave', buttonsHoverDisable);
        !ninthBlockThirdButtonCheck ? ninthBlockThirdButtonCheck = 1 : ninthBlockThirdButtonCheck = 0;
        if (!ninthBlockThirdButtonCheck) {
            constructorButtons[26].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[26].style.color = 'white';
            document.getElementById('ninthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('ninthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[8].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[8].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

tenthConstructorBlock.addEventListener('mouseover', () => {tenthConstructorBlockHoverFunction(0)});
tenthConstructorBlock.addEventListener('mouseleave', () => {tenthConstructorBlockHoverFunction(1)});
tenthConstructorBlock.addEventListener('click', tenthConstructorBlockClickFunction);

function tenthConstructorBlockHoverFunction(state) {
    if (!state) {
        document.getElementById('leftConstructorLabel').innerHTML = 'Весь комплекс';
        document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,1)';
        if (!tenthBlockCheck) {
            document.getElementById('tenthBlockFake').style.opacity = '1';
            document.getElementById('tenthZigzagConstructor').style.opacity = '1';
            document.getElementById('tenthConstructorComplexityButtonsBlock').style.opacity = '1';
            document.getElementById('tenthConstructorStateBlock').style.opacity = '1';
            document.getElementById('tenthBlockText').style.top = '5%';
            document.getElementById('tenthBlockTypeCheck').style.color = 'rgba(255,255,255,1)';

            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
        }
    } else {
        if (!tenthBlockCheck) {
            document.getElementById('leftConstructorLabel').innerHTML = 'Выберите тип';
            document.getElementById('leftConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('tenthBlockFake').style.opacity = '0';
            document.getElementById('tenthZigzagConstructor').style.opacity = '0';
            document.getElementById('tenthConstructorComplexityButtonsBlock').style.opacity = '0';
            document.getElementById('tenthConstructorStateBlock').style.opacity = '0';
            document.getElementById('tenthBlockText').style.top = '40%';
            document.getElementById('tenthBlockTypeCheck').style.color = 'rgba(255,255,255,.7)';
            document.getElementById('tenthBlockTypeCheck').style.textShadow = 'none';

            if (firstBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Руки';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Плечи';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Грудь';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Спина';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Пресс';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ягодицы';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Ноги';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Выносливость';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockCheck) {
                document.getElementById('leftConstructorLabel').innerHTML = 'Фитнес';
                document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    }
}

function tenthConstructorBlockClickFunction() {
    if (firstBlockCheck) {
        firstConstructorBlockClickFunction();
        firstConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (firstBlockFirstButtonCheck) {
            firstConstructorButtonFunction(2);
        }
        if (firstBlockSecondButtonCheck) {
            secondConstructorButtonFunction(2);
        }
        if (firstBlockThirdButtonCheck) {
            thirdConstructorButtonFunction(2);
        }
    }
    if (secondBlockCheck) {
        secondConstructorBlockClickFunction();
        secondConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (secondBlockFirstButtonCheck) {
            fourthConstructorButtonFunction(2);
        }
        if (secondBlockSecondButtonCheck) {
            fifthConstructorButtonFunction(2);
        }
        if (secondBlockThirdButtonCheck) {
            sixthConstructorButtonFunction(2);
        }
    }
    if (thirdBlockCheck) {
        thirdConstructorBlockClickFunction();
        thirdConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (thirdBlockFirstButtonCheck) {
            seventhConstructorButtonFunction(2);
        }
        if (thirdBlockSecondButtonCheck) {
            eighthConstructorButtonFunction(2);
        }
        if (thirdBlockThirdButtonCheck) {
            ninthConstructorButtonFunction(2);
        }
    }
    if (fourthBlockCheck) {
        fourthConstructorBlockClickFunction();
        fourthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fourthBlockFirstButtonCheck) {
            tenthConstructorButtonFunction(2);
        }
        if (fourthBlockSecondButtonCheck) {
            eleventhConstructorButtonFunction(2);
        }
        if (fourthBlockThirdButtonCheck) {
            twelvthConstructorButtonFunction(2);
        }
    }
    if (fifthBlockCheck) {
        fifthConstructorBlockClickFunction();
        fifthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fifthBlockFirstButtonCheck) {
            thirteenthConstructorButtonFunction(2);
        }
        if (fifthBlockSecondButtonCheck) {
            fourteenthConstructorButtonFunction(2);
        }
        if (fifthBlockThirdButtonCheck) {
            fifteenthConstructorButtonFunction(2);
        }
    }
    if (sixthBlockCheck) {
        sixthConstructorBlockClickFunction();
        sixthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (sixthBlockFirstButtonCheck) {
            sixteenthConstructorButtonFunction(2);
        }
        if (sixthBlockSecondButtonCheck) {
            seventeenthConstructorButtonFunction(2);
        }
        if (sixthBlockThirdButtonCheck) {
            eighteenthConstructorButtonFunction(2);
        }
    }
    if (seventhBlockCheck) {
        seventhConstructorBlockClickFunction();
        seventhConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (seventhBlockFirstButtonCheck) {
            ninteenthConstructorButtonFunction(2);
        }
        if (seventhBlockSecondButtonCheck) {
            twentiethConstructorButtonFunction(2);
        }
        if (seventhBlockThirdButtonCheck) {
            twentyfirstConstructorButtonFunction(2);
        }
    }
    if (eighthBlockCheck) {
        eighthConstructorBlockClickFunction();
        eighthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (eighthBlockFirstButtonCheck) {
            twentysecondConstructorButtonFunction(2);
        }
        if (eighthBlockSecondButtonCheck) {
            twentythirdConstructorButtonFunction(2);
        }
        if (eighthBlockThirdButtonCheck) {
            twentyfourthConstructorButtonFunction(2);
        }
    }
    if (ninthBlockCheck) {
        ninthConstructorBlockClickFunction();
        ninthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (ninthBlockFirstButtonCheck) {
            twentyfifthConstructorButtonFunction(2);
        }
        if (ninthBlockSecondButtonCheck) {
            twentysixthConstructorButtonFunction(2);
        }
        if (ninthBlockThirdButtonCheck) {
            twentyseventhConstructorButtonFunction(2);
        }
    }
        tenthConstructorBlock.style.transition = '.5s';
        tenthConstructorBlock.style.border = '2px solid #7CACE1';
        document.getElementById('tenthBlockFake').style.opacity = '1';
        document.getElementById('tenthZigzagConstructor').style.opacity = '1';
        document.getElementById('tenthConstructorComplexityButtonsBlock').style.opacity = '1';
        document.getElementById('tenthConstructorStateBlock').style.opacity = '1';
        document.getElementById('tenthBlockText').style.top = '5%';
        document.getElementById('tenthBlockTypeCheck').style.color = 'rgba(255,255,255,1)';
        document.getElementById('tenthBlockTypeCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('leftConstructorLabel').innerHTML = 'Весь комплекс';
        document.getElementById('leftConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        !tenthBlockCheck ? tenthBlockCheck = 1 : tenthBlockCheck = 0;
        if (!tenthBlockCheck) {
            if (tenthBlockFirstButtonCheck) {
                twentyeighthConstructorButtonFunction(2);
                constructorButtons[0].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[0].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (tenthBlockSecondButtonCheck) {
                twentyninthConstructorButtonFunction(2);
                constructorButtons[1].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[1].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            } else if (tenthBlockThirdButtonCheck) {
                thirtiethConstructorButtonFunction(2);
                constructorButtons[2].style.background = 'rgba(0,0,0,.5)';
                constructorButtons[2].style.color = 'white';
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
                document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
            }
            document.getElementById('leftConstructorLabel').style.textShadow = 'none';
            tenthConstructorBlock.style.border = 'none';
            document.getElementById('tenthBlockTypeCheck').style.textShadow = 'none';
        }


}

constructorButtons[27].addEventListener('mouseover', () => {twentyeighthConstructorButtonFunction(0)});
constructorButtons[27].addEventListener('mouseleave', () => {twentyeighthConstructorButtonFunction(1)});
constructorButtons[27].addEventListener('click', () => {twentyeighthConstructorButtonFunction(2)});
var tenthBlockFirstButtonCheck = 0;
constructorButtons[28].addEventListener('mouseover', () => {twentyninthConstructorButtonFunction(0)});
constructorButtons[28].addEventListener('mouseleave', () => {twentyninthConstructorButtonFunction(1)});
constructorButtons[28].addEventListener('click', () => {twentyninthConstructorButtonFunction(2)});
var tenthBlockSecondButtonCheck = 0;
constructorButtons[29].addEventListener('mouseover', () => {thirtiethConstructorButtonFunction(0)});
constructorButtons[29].addEventListener('mouseleave', () => {thirtiethConstructorButtonFunction(1)});
constructorButtons[29].addEventListener('click', () => {thirtiethConstructorButtonFunction(2)});
var tenthBlockThirdButtonCheck = 0;

function twentyeighthConstructorButtonFunction(state) {
    if (!state) {
        if (!tenthBlockFirstButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[27].style.background = 'white';
        constructorButtons[27].style.color = '#464646';
        document.getElementById('tenthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';

    } else if (state == 1) {
        tenthConstructorBlock.addEventListener('click', tenthConstructorBlockClickFunction);
        if (!tenthBlockFirstButtonCheck) {
            if (tenthBlockFirstButtonCheck || tenthBlockSecondButtonCheck || tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (tenthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (tenthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (tenthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[27].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[27].style.color = 'white';
            if (!tenthBlockFirstButtonCheck && !tenthBlockSecondButtonCheck && !tenthBlockThirdButtonCheck) document.getElementById('tenthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (tenthBlockSecondButtonCheck) {
            twentyninthConstructorButtonFunction(2);
            twentyninthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }
        if (tenthBlockThirdButtonCheck) {
            thirtiethConstructorButtonFunction(2);
            thirtiethConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
        }

        if (!tenthBlockCheck) {
            if (!tenthBlockFirstButtonCheck) {
                tenthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (tenthBlockCheck) tenthConstructorBlock.removeEventListener('click',tenthConstructorBlockClickFunction);
        document.getElementById('tenthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('tenthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[9].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[9].addEventListener('mouseleave', buttonsHoverDisable);
        !tenthBlockFirstButtonCheck ? tenthBlockFirstButtonCheck = 1 : tenthBlockFirstButtonCheck = 0;
        if (!tenthBlockFirstButtonCheck) {
            constructorButtons[27].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[27].style.color = 'white';
            document.getElementById('tenthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('tenthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[9].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[9].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function twentyninthConstructorButtonFunction(state) {
    if (!state) {
        if (!tenthBlockSecondButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[28].style.background = 'white';
        constructorButtons[28].style.color = '#464646';
        document.getElementById('tenthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        tenthConstructorBlock.addEventListener('click', tenthConstructorBlockClickFunction);
        if (!tenthBlockSecondButtonCheck) {
            if (tenthBlockFirstButtonCheck || tenthBlockSecondButtonCheck || tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (tenthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (tenthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (tenthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[28].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[28].style.color = 'white';
            if (!tenthBlockFirstButtonCheck && !tenthBlockSecondButtonCheck && !tenthBlockThirdButtonCheck) document.getElementById('tenthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (tenthBlockFirstButtonCheck) {
            twentyeighthConstructorButtonFunction(2);
            twentyeighthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }
        if (tenthBlockThirdButtonCheck) {
            thirtiethConstructorButtonFunction(2);
            thirtiethConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
        }

        if (!tenthBlockCheck) {
            if (!tenthBlockSecondButtonCheck) {
                tenthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (tenthBlockCheck) tenthConstructorBlock.removeEventListener('click', tenthConstructorBlockClickFunction);
        document.getElementById('tenthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('tenthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[9].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[9].addEventListener('mouseleave', buttonsHoverDisable);
        !tenthBlockSecondButtonCheck ? tenthBlockSecondButtonCheck = 1 : tenthBlockSecondButtonCheck = 0;
        if (!tenthBlockSecondButtonCheck) {
            constructorButtons[28].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[28].style.color = 'white';
            document.getElementById('tenthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('tenthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[9].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[9].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function thirtiethConstructorButtonFunction(state) {
    if (!state) {
        if (!tenthBlockThirdButtonCheck) {
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
        }
        constructorButtons[29].style.background = 'white';
        constructorButtons[29].style.color = '#464646';
        document.getElementById('tenthBlockLvlCheck').style.color = 'rgba(255,255,255,1)';  
        document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,1)';
    } else if (state == 1) {
        tenthConstructorBlock.addEventListener('click', tenthConstructorBlockClickFunction);
        if (!tenthBlockThirdButtonCheck) {
            if (tenthBlockFirstButtonCheck || tenthBlockSecondButtonCheck || tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
                if (tenthBlockFirstButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                if (tenthBlockSecondButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                if (tenthBlockThirdButtonCheck) document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            } else {
                document.getElementById('rightConstructorLabel').innerHTML = 'Выберите уровень';
            }
            constructorButtons[29].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[29].style.color = 'white';
            if (!tenthBlockFirstButtonCheck && !tenthBlockSecondButtonCheck && !tenthBlockThirdButtonCheck) document.getElementById('tenthBlockLvlCheck').style.color = 'rgba(255,255,255, .5)';
            document.getElementById('rightConstructorLabel').style.color = 'rgba(255,255,255,.7)';
        
            if (firstBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (firstBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (secondBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (thirdBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fourthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (fifthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (sixthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (seventhBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (eighthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (ninthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockFirstButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Легко';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockSecondButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Умеренно';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
            if (tenthBlockThirdButtonCheck) {
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
                document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
            }
        }
    } else {

        if (tenthBlockFirstButtonCheck) {
            twentyeighthConstructorButtonFunction(2);
            twentyeighthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }
        if (tenthBlockSecondButtonCheck) {
            twentyninthConstructorButtonFunction(2);
            twentyninthConstructorButtonFunction(1);
            document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
        }

        if (!tenthBlockCheck) {
            if (!tenthBlockThirdButtonCheck) {
                tenthConstructorBlockClickFunction();
                document.getElementById('rightConstructorLabel').innerHTML = 'Тяжело';
            }
        }
        document.getElementById('rightConstructorLabel').style.textShadow = '0 0 5px white, 0 0 5px white';
        if (tenthBlockCheck) tenthConstructorBlock.removeEventListener('click', tenthConstructorBlockClickFunction);
        document.getElementById('tenthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
        document.getElementById('tenthBlockLvlCheck').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('rightConstructorButton').addEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[9].addEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').addEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[9].addEventListener('mouseleave', buttonsHoverDisable);
        !tenthBlockThirdButtonCheck ? tenthBlockThirdButtonCheck = 1 : tenthBlockThirdButtonCheck = 0;
        if (!tenthBlockThirdButtonCheck) {
            constructorButtons[29].style.background = 'rgba(0,0,0,.5)';
            constructorButtons[29].style.color = 'white';
            document.getElementById('tenthBlockLvlCheck').style.color = 'rgba(255,255,255, 1)';
            document.getElementById('tenthBlockLvlCheck').style.textShadow = 'none';
            document.getElementById('rightConstructorLabel').style.textShadow = 'none';
            document.getElementById('rightConstructorButton').style.color = 'rgba(255,255,255,.7)';
        document.getElementById('rightConstructorButton').style.textShadow = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.color = 'rgba(255,255,255,.7)';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.textShadow = 'none';
        document.getElementById('rightConstructorButton').removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementsByClassName('constructorRoundStateButton')[9].removeEventListener('mouseover', buttonsHoverEnable);
        document.getElementById('rightConstructorButton').removeEventListener('mouseleave', buttonsHoverDisable);
        document.getElementsByClassName('constructorRoundStateButton')[9].removeEventListener('mouseleave', buttonsHoverDisable);
        }
    }
}

function buttonsHoverEnable() {
    if (firstBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.backgroundColor = 'white';
        document.getElementById('firstBlockRoundStateButton').setAttribute('href', 'handsEasy');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'handsEasy');
    }

    if (firstBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.backgroundColor = 'white';
        document.getElementById('firstBlockRoundStateButton').setAttribute('href', 'handsMedium');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'handsMedium');
    }

    if (firstBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.backgroundColor = 'white';
        document.getElementById('firstBlockRoundStateButton').setAttribute('href', 'handsHard');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'handsHard');
    }


    if (secondBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.backgroundColor = 'white';
        document.getElementById('secondBlockRoundStateButton').setAttribute('href', 'shouldersEasy');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'shouldersEasy');
    }

    if (secondBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.backgroundColor = 'white';
        document.getElementById('secondBlockRoundStateButton').setAttribute('href', 'shouldersMedium');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'shouldersMedium');
    }

    if (secondBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.backgroundColor = 'white';
        document.getElementById('secondBlockRoundStateButton').setAttribute('href', 'shouldersHard');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'shouldersHard');
    }


    if (thirdBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.backgroundColor = 'white';
        document.getElementById('thirdBlockRoundStateButton').setAttribute('href', 'breastEasy');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'breastEasy');
    }

    if (thirdBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.backgroundColor = 'white';
        document.getElementById('thirdBlockRoundStateButton').setAttribute('href', 'breastMedium');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'breastMedium');
    }

    if (thirdBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.backgroundColor = 'white';
        document.getElementById('thirdBlockRoundStateButton').setAttribute('href', 'breastHard');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'breastHard');
    }


    if (fourthBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.backgroundColor = 'white';
        document.getElementById('fourthBlockRoundStateButton').setAttribute('href', 'backEasy');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'backEasy');
    }

    if (fourthBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.backgroundColor = 'white';
        document.getElementById('fourthBlockRoundStateButton').setAttribute('href', 'backMedium');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'backMedium');
    }

    if (fourthBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.backgroundColor = 'white';
        document.getElementById('fourthBlockRoundStateButton').setAttribute('href', 'backHard');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'backHard');
    }


    if (fifthBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.backgroundColor = 'white';
        document.getElementById('fifthBlockRoundStateButton').setAttribute('href', 'pressEasy');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'pressEasy');
    }

    if (fifthBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.backgroundColor = 'white';
        document.getElementById('fifthBlockRoundStateButton').setAttribute('href', 'pressMedium');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'pressMedium');
    }

    if (fifthBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.backgroundColor = 'white';
        document.getElementById('fifthBlockRoundStateButton').setAttribute('href', 'pressHard');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'pressHard');
    }


    if (sixthBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.backgroundColor = 'white';
        document.getElementById('sixthBlockRoundStateButton').setAttribute('href', 'assEasy');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'assEasy');
    }

    if (sixthBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.backgroundColor = 'white';
        document.getElementById('sixthBlockRoundStateButton').setAttribute('href', 'assMedium');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'assMedium');
    }

    if (sixthBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.backgroundColor = 'white';
        document.getElementById('sixthBlockRoundStateButton').setAttribute('href', 'assHard');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'assHard');
    }


    if (seventhBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.backgroundColor = 'white';
        document.getElementById('seventhBlockRoundStateButton').setAttribute('href', 'legsEasy');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'legsEasy');
    }

    if (seventhBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.backgroundColor = 'white';
        document.getElementById('seventhBlockRoundStateButton').setAttribute('href', 'legsMedium');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'legsMedium');
    }

    if (seventhBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.backgroundColor = 'white';
        document.getElementById('seventhBlockRoundStateButton').setAttribute('href', 'legsHard');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'legsHard');
    }


    if (eighthBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.backgroundColor = 'white';
        document.getElementById('eighthBlockRoundStateButton').setAttribute('href', 'enduranceEasy');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'enduranceEasy');
    }

    if (eighthBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.backgroundColor = 'white';
        document.getElementById('eighthBlockRoundStateButton').setAttribute('href', 'enduranceMedium');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'enduranceMedium');
    }

    if (eighthBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.backgroundColor = 'white';
        document.getElementById('eighthBlockRoundStateButton').setAttribute('href', 'enduranceHard');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'enduranceHard');
    }


    if (ninthBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.backgroundColor = 'white';
        document.getElementById('ninthBlockRoundStateButton').setAttribute('href', 'fitnessEasy');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'fitnessEasy');
    }

    if (ninthBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.backgroundColor = 'white';
        document.getElementById('ninthBlockRoundStateButton').setAttribute('href', 'fitnessMedium');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'fitnessMedium');
    }

    if (ninthBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.backgroundColor = 'white';
        document.getElementById('ninthBlockRoundStateButton').setAttribute('href', 'fitnessHard');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'fitnessHard');
    }


    if (tenthBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.backgroundColor = 'white';
        document.getElementById('tenthBlockRoundStateButton').setAttribute('href', 'allEasy');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'allEasy');
    }

    if (tenthBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.backgroundColor = 'white';
        document.getElementById('tenthBlockRoundStateButton').setAttribute('href', 'allMedium');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'allMedium');
    }

    if (tenthBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = '#464646';
        document.getElementById('rightConstructorButton').style.backgroundColor = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.color = '#464646';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.backgroundColor = 'white';
        document.getElementById('tenthBlockRoundStateButton').setAttribute('href', 'allHard');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'allHard');
    }
}

function buttonsHoverDisable() {
    if (firstBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('firstBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (firstBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('firstBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (firstBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[0].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('firstBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }


    if (secondBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('secondBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (secondBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('secondBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (secondBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[1].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('secondBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }


    if (thirdBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('thirdBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (thirdBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('thirdBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (thirdBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[2].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('thirdBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }


    if (fourthBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('fourthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (fourthBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('fourthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (fourthBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[3].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('fourthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }


    if (fifthBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('fifthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (fifthBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('fifthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (fifthBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[4].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('fifthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }


    if (sixthBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('sixthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (sixthBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('sixthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (sixthBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[5].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('sixthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }


    if (seventhBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('seventhBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (seventhBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('seventhBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (seventhBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[6].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('seventhBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }


    if (eighthBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('eighthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (eighthBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('eighthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (eighthBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[7].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('eighthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }


    if (ninthBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('ninthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (ninthBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('ninthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (ninthBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[8].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('ninthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }


    if (tenthBlockFirstButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('tenthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (tenthBlockSecondButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('tenthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }

    if (tenthBlockThirdButtonCheck) {
        document.getElementById('rightConstructorButton').style.color = 'white';
        document.getElementById('rightConstructorButton').style.background = 'none';
        document.getElementById('rightConstructorButton').style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.color = 'white';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.background = 'none';
        document.getElementsByClassName('constructorRoundStateButton')[9].style.textShadow = '0 0 5px white, 0 0 5px white';
        document.getElementById('tenthBlockRoundStateButton').setAttribute('href', 'javascript:0');
        document.getElementById('constructorButtonsHref').setAttribute('href', 'javascript:0');
    }
}

document.getElementById('leftConstructorButton').addEventListener('click', constructorChoiceCancel);

function constructorChoiceCancel() {
    if (firstBlockCheck) {
        firstConstructorBlockClickFunction();
        firstConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (firstBlockFirstButtonCheck) {
            firstConstructorButtonFunction(2);
        }
        if (firstBlockSecondButtonCheck) {
            secondConstructorButtonFunction(2);
        }
        if (firstBlockThirdButtonCheck) {
            thirdConstructorButtonFunction(2);
        }
    }
    if (secondBlockCheck) {
        secondConstructorBlockClickFunction();
        secondConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (secondBlockFirstButtonCheck) {
            fourthConstructorButtonFunction(2);
        }
        if (secondBlockSecondButtonCheck) {
            fifthConstructorButtonFunction(2);
        }
        if (secondBlockThirdButtonCheck) {
            sixthConstructorButtonFunction(2);
        }
    }
    if (thirdBlockCheck) {
        thirdConstructorBlockClickFunction();
        thirdConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (thirdBlockFirstButtonCheck) {
            seventhConstructorButtonFunction(2);
        }
        if (thirdBlockSecondButtonCheck) {
            eighthConstructorButtonFunction(2);
        }
        if (thirdBlockThirdButtonCheck) {
            ninthConstructorButtonFunction(2);
        }
    }
    if (fourthBlockCheck) {
        fourthConstructorBlockClickFunction();
        fourthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fourthBlockFirstButtonCheck) {
            tenthConstructorButtonFunction(2);
        }
        if (fourthBlockSecondButtonCheck) {
            eleventhConstructorButtonFunction(2);
        }
        if (fourthBlockThirdButtonCheck) {
            twelvthConstructorButtonFunction(2);
        }
    }
    if (fifthBlockCheck) {
        fifthConstructorBlockClickFunction();
        fifthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (fifthBlockFirstButtonCheck) {
            thirteenthConstructorButtonFunction(2);
        }
        if (fifthBlockSecondButtonCheck) {
            fourteenthConstructorButtonFunction(2);
        }
        if (fifthBlockThirdButtonCheck) {
            fifteenthConstructorButtonFunction(2);
        }
    }
    if (sixthBlockCheck) {
        sixthConstructorBlockClickFunction();
        sixthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (sixthBlockFirstButtonCheck) {
            sixteenthConstructorButtonFunction(2);
        }
        if (sixthBlockSecondButtonCheck) {
            seventeenthConstructorButtonFunction(2);
        }
        if (sixthBlockThirdButtonCheck) {
            eighteenthConstructorButtonFunction(2);
        }
    }
    if (seventhBlockCheck) {
        seventhConstructorBlockClickFunction();
        seventhConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (seventhBlockFirstButtonCheck) {
            ninteenthConstructorButtonFunction(2);
        }
        if (seventhBlockSecondButtonCheck) {
            twentiethConstructorButtonFunction(2);
        }
        if (seventhBlockThirdButtonCheck) {
            twentyfirstConstructorButtonFunction(2);
        }
    }
    if (eighthBlockCheck) {
        eighthConstructorBlockClickFunction();
        eighthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (eighthBlockFirstButtonCheck) {
            twentysecondConstructorButtonFunction(2);
        }
        if (eighthBlockSecondButtonCheck) {
            twentythirdConstructorButtonFunction(2);
        }
        if (eighthBlockThirdButtonCheck) {
            twentyfourthConstructorButtonFunction(2);
        }
    }
    if (ninthBlockCheck) {
        ninthConstructorBlockClickFunction();
        ninthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (ninthBlockFirstButtonCheck) {
            twentyfifthConstructorButtonFunction(2);
        }
        if (ninthBlockSecondButtonCheck) {
            twentysixthConstructorButtonFunction(2);
        }
        if (ninthBlockThirdButtonCheck) {
            twentyseventhConstructorButtonFunction(2);
        }
    }
    if (tenthBlockCheck) {
        tenthConstructorBlockClickFunction();
        tenthConstructorBlockHoverFunction(1);
        document.getElementById('rightConstructorLabel').innerHTML = 'Выберите Уровень';
        if (tenthBlockFirstButtonCheck) {
            twentyeighthConstructorButtonFunction(2);
        }
        if (tenthBlockSecondButtonCheck) {
            twentyninthConstructorButtonFunction(2);
        }
        if (tenthBlockThirdButtonCheck) {
            thirtiethConstructorButtonFunction(2);
        }
    }
}

var constructorParallaxArea = document.getElementById('constructorName');
constructorParallaxArea.addEventListener('mouseover', constructorCursorParallax);
constructorParallaxArea.addEventListener('mousemove', constructorCursorParallax);

function constructorCursorParallax(event) {

    var horisontalParallaxPercent = (Math.round(event.pageX / document.body.clientWidth * 100) - 50) / 50;
    document.getElementById('firstParallaxP').style.transform = 'calc(100px + ' + horisontalParallaxPercent * .5 + '%)';
    document.getElementById('secondParallaxP').style.left = 'calc(200px + ' + horisontalParallaxPercent + '%)';
    document.getElementById('thirdParallaxP').style.left = 'calc(35% + ' + horisontalParallaxPercent * 1.5 + '%)';
    document.getElementById('fourthParallaxP').style.left = 'calc(55% + ' + horisontalParallaxPercent * 2 + '%)';
    document.getElementById('fifthParallaxP').style.right = 'calc(100px + ' + -horisontalParallaxPercent * 3 + '%)';
    document.getElementById('sixthParallaxP').style.right = 'calc(200px + ' + -horisontalParallaxPercent  * 1.7 + '%)';
    var verticalParallaxPercent = (Math.round(event.pageY / document.body.clientHeight * 100) - 50) / 50;
    document.getElementById('firstParallaxP').style.top = 'calc(50px + ' + verticalParallaxPercent * 1.7 + '%)';
    document.getElementById('secondParallaxP').style.top = 'calc(400px + ' + verticalParallaxPercent * .7 + '%)';
    document.getElementById('thirdParallaxP').style.top = 'calc(-50px + ' + verticalParallaxPercent * 2 + '%)';
    document.getElementById('fourthParallaxP').style.top = 'calc(450px + ' + verticalParallaxPercent * 1.5 + '%)';
    document.getElementById('fifthParallaxP').style.top = 'calc(25px + ' + verticalParallaxPercent  + '%)';
    document.getElementById('sixthParallaxP').style.top = 'calc(350px + ' + verticalParallaxPercent  + '%)';

    if (document.body.clientWidth <= 767) {
        document.getElementById('secondParallaxP').style.left = 'calc(100px + ' + horisontalParallaxPercent + '%)';
        document.getElementById('sixthParallaxP').style.right = 'calc(50px + ' + -horisontalParallaxPercent  * 1.7 + '%)';
        document.getElementById('thirdParallaxP').style.top = 'calc(120px + ' + verticalParallaxPercent * 2 + '%)';
        document.getElementById('sixthParallaxP').style.top = 'calc(450px + ' + verticalParallaxPercent  + '%)';
    }

}

var heightOst;
window.addEventListener('scroll', dayNightChanger);
window.addEventListener('load', dayNightChanger);

function dayNightChanger() {

    if (document.getElementById('constructorName').getBoundingClientRect().top - document.body.clientHeight <= 0) {
        document.getElementById('constructorName').style.backgroundColor = 'rgb(39,39,39)';

        document.getElementById('firstParallaxP').style.color = 'rgb(237,237,237)';
        document.getElementById('secondParallaxP').style.color = 'rgb(237,237,237)';
        document.getElementById('thirdParallaxP').style.color = 'rgb(237,237,237)';
        document.getElementById('fourthParallaxP').style.color = 'rgb(237,237,237)';
        document.getElementById('fifthParallaxP').style.color = 'rgb(237,237,237)';
        document.getElementById('sixthParallaxP').style.color = 'rgb(237,237,237)';
    } 

    if (document.getElementById('constructorName').getBoundingClientRect().top - document.body.clientHeight >= -699) {
        document.getElementById('constructorName').style.backgroundColor = 'rgb(237,237,237)';

        document.getElementById('firstParallaxP').style.color = 'rgb(39,39,39)';
        document.getElementById('secondParallaxP').style.color = 'rgb(39,39,39)';
        document.getElementById('thirdParallaxP').style.color = 'rgb(39,39,39)';
        document.getElementById('fourthParallaxP').style.color = 'rgb(39,39,39)';
        document.getElementById('fifthParallaxP').style.color = 'rgb(39,39,39)';
        document.getElementById('sixthParallaxP').style.color = 'rgb(39,39,39)';
    } 
    
    if (document.getElementById('constructorName').getBoundingClientRect().top - document.body.clientHeight <= 0 && document.getElementById('constructorName').getBoundingClientRect().top - document.body.clientHeight >= -700) {
        heightOst = 700 + document.getElementById('constructorName').getBoundingClientRect().top - document.body.clientHeight;
        var backColorConnect = Math.floor(39 + heightOst / 2.95);
        document.getElementById('constructorName').style.backgroundColor = 'rgb('+backColorConnect+','+backColorConnect+','+backColorConnect+')';

        var colorConnect = Math.floor(237 - heightOst / 3.5);

        document.getElementById('firstParallaxP').style.color = 'rgb('+colorConnect+','+colorConnect+','+colorConnect+')';
        document.getElementById('secondParallaxP').style.color = 'rgb('+colorConnect+','+colorConnect+','+colorConnect+')';
        document.getElementById('thirdParallaxP').style.color = 'rgb('+colorConnect+','+colorConnect+','+colorConnect+')';
        document.getElementById('fourthParallaxP').style.color = 'rgb('+colorConnect+','+colorConnect+','+colorConnect+')';
        document.getElementById('fifthParallaxP').style.color = 'rgb('+colorConnect+','+colorConnect+','+colorConnect+')';
        document.getElementById('sixthParallaxP').style.color = 'rgb('+colorConnect+','+colorConnect+','+colorConnect+')';
    }

}

document.getElementById('rightConstructorButton').addEventListener('click', userConstructorClickHelper);

function userConstructorClickHelper() {

    if (document.getElementById('firstConstructorSign').innerHTML == '<i class="fas fa-times"></i>') {
        document.getElementById('firstConstructorSign').style.animationName = 'wrongConstruct';
        document.getElementById('firstConstructorSign').style.animationIterationCount = '4';
        document.getElementById('firstConstructorSign').style.animationDuration = '.2s';
        document.getElementById('firstConstructorSignText').style.animationName = 'wrongConstruct';
        document.getElementById('firstConstructorSignText').style.animationIterationCount = '4';
        document.getElementById('firstConstructorSignText').style.animationDuration = '.2s';
    }

    if (document.getElementById('secondConstructorSign').innerHTML == '<i class="fas fa-times"></i>') {
        document.getElementById('secondConstructorSign').style.animationName = 'wrongConstruct';
        document.getElementById('secondConstructorSign').style.animationIterationCount = '4';
        document.getElementById('secondConstructorSign').style.animationDuration = '.2s';
        document.getElementById('secondConstructorSignText').style.animationName = 'wrongConstruct';
        document.getElementById('secondConstructorSignText').style.animationIterationCount = '4';
        document.getElementById('secondConstructorSignText').style.animationDuration = '.2s';
    }

    setTimeout(() => {document.getElementById('firstConstructorSign').style.animationName = 'none';document.getElementById('firstConstructorSignText').style.animationName = 'none';document.getElementById('secondConstructorSign').style.animationName = 'none';document.getElementById('secondConstructorSignText').style.animationName = 'none';}, 500);
    
}

document.getElementById('rightConstructorButton').addEventListener('mouseover', userConstructorHelper);
document.getElementById('rightConstructorButton').addEventListener('mouseleave', userConstructorDisHelper);
document.getElementById('userAdviceConstructorContent').addEventListener('mouseover', userConstructorHelper);
document.getElementById('userAdviceConstructorContent').addEventListener('mouseleave', userConstructorDisHelper);

function userConstructorHelper() {
    document.getElementById('firstConstructorSign').style.opacity = '1';
    document.getElementById('secondConstructorSign').style.opacity = '1';
    document.getElementById('firstConstructorSignText').style.opacity = '1';
    document.getElementById('secondConstructorSignText').style.opacity = '1';

    if (leftConstructorLabel.innerHTML != 'Выберите тип' && rightConstructorLabel.innerHTML != 'Выберите уровень') {
        document.getElementById('rightConstructorButton').style.cursor = 'pointer';
    } else {
        document.getElementById('rightConstructorButton').style.cursor = 'default';
    }

    if (leftConstructorLabel.innerHTML != 'Выберите тип') {
        document.getElementById('firstConstructorSign').style.backgroundColor = 'green';
        document.getElementById('firstConstructorSign').innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById('firstConstructorSignText').innerHTML = 'Тип: ' + leftConstructorLabel.innerHTML;
    }

    if (rightConstructorLabel.innerHTML != 'Выберите уровень') {
        document.getElementById('secondConstructorSign').style.backgroundColor = 'green';
        document.getElementById('secondConstructorSign').innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById('secondConstructorSignText').innerHTML =  'Сложность: ' + rightConstructorLabel.innerHTML;
    }
}

function userConstructorDisHelper() {
    document.getElementById('firstConstructorSign').style.opacity = '0';
    document.getElementById('secondConstructorSign').style.opacity = '0';
    document.getElementById('firstConstructorSignText').style.opacity = '0';
    document.getElementById('secondConstructorSignText').style.opacity = '0';

    document.getElementById('firstConstructorSign').style.backgroundColor = 'red';
    document.getElementById('firstConstructorSign').innerHTML = '<i class="fas fa-times"></i>';
    document.getElementById('secondConstructorSign').style.backgroundColor = 'red';
    document.getElementById('secondConstructorSign').innerHTML = '<i class="fas fa-times"></i>';
    document.getElementById('firstConstructorSignText').innerHTML = 'Тип не выбран';
    document.getElementById('secondConstructorSignText').innerHTML = 'Уровень не выбран';
}
