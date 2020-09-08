
window.addEventListener('resize', () => {menuDropDowner(0)});
window.addEventListener('load', () => {menuDropDowner(0)});

document.getElementsByClassName('dropDownListIntBlock')[0].addEventListener('mouseover', () => {menuDropDowner(1, 1, 1)});
document.getElementsByClassName('dropDownListIntBlock')[1].addEventListener('mouseover', () => {menuDropDowner(1, 1)});

document.getElementsByClassName('dropDownListInt')[0].addEventListener('mouseover', () => {menuDropDowner(2, 1, 1)});
document.getElementsByClassName('dropDownListInt')[1].addEventListener('mouseover', () => {menuDropDowner(1, 1)});

document.getElementsByClassName('dropDownListIntBlock')[0].addEventListener('mouseleave', () => {menuDropDowner(1, 0)});
document.getElementsByClassName('dropDownListIntBlock')[1].addEventListener('mouseleave', () => {menuDropDowner(1, 0)});

document.getElementsByClassName('dropDownListInt')[0].addEventListener('mouseleave', () => {menuDropDowner(2, 0)});
document.getElementsByClassName('dropDownListInt')[1].addEventListener('mouseleave', () => {menuDropDowner(1, 0)});

document.getElementsByClassName('dropDownListBlock')[0].addEventListener('mouseover', () => {menuDropDowner(2, 1, 0)});
document.getElementsByClassName('dropDownListBlock')[1].addEventListener('mouseover', () => {menuDropDowner(2, 1)});

document.getElementsByClassName('dropDownList')[0].addEventListener('mouseover', () => {menuDropDowner(2, 1, 0)});
document.getElementsByClassName('dropDownList')[1].addEventListener('mouseover', () => {menuDropDowner(2, 1)});

document.getElementsByClassName('dropDownListBlock')[0].addEventListener('mouseleave', () => {menuDropDowner(2, 0)});
document.getElementsByClassName('dropDownListBlock')[1].addEventListener('mouseleave', () => {menuDropDowner(2, 0)});

document.getElementsByClassName('dropDownList')[0].addEventListener('mouseleave', () => {menuDropDowner(2, 0)});
document.getElementsByClassName('dropDownList')[1].addEventListener('mouseleave', () => {menuDropDowner(2, 0)});
function menuDropDowner(check, state, eventer) {
    if (!check) {

        document.getElementsByClassName('dropDownList')[0].style.zIndex = '-3';
        document.getElementsByClassName('dropDownList')[0].style.opacity = '0';
        document.getElementsByClassName('dropDownList')[1].style.zIndex = '-3';
        document.getElementsByClassName('dropDownListInt')[0].style.zIndex = '-3';
        document.getElementsByClassName('dropDownListInt')[0].style.opacity = '0';
        document.getElementsByClassName('dropDownListInt')[1].style.zIndex = '-3';

    } else if (check == 1) {
        
        if (state) {
            document.getElementsByClassName('dropDownListInt')[0].style.zIndex = '2';
            document.getElementsByClassName('dropDownListInt')[1].style.zIndex = '2';
            if (!eventer) if (pageYOffset) document.getElementsByClassName('dropDownList')[0].style.opacity = '1';
            if (eventer) if (pageYOffset) document.getElementsByClassName('dropDownListInt')[0].style.opacity = '1';
        } else {
            document.getElementsByClassName('dropDownListInt')[1].style.zIndex = '-3';
            document.getElementsByClassName('dropDownListInt')[0].style.zIndex = '-3';
            document.getElementsByClassName('dropDownList')[0].style.zIndex = '-3';
            document.getElementsByClassName('dropDownList')[1].style.zIndex = '-3';
            if (pageYOffset) document.getElementsByClassName('dropDownList')[0].style.opacity = '0';
            if (pageYOffset) document.getElementsByClassName('dropDownListInt')[0].style.opacity = '0';
        }

    } else if (check == 2) {
        
        if (state) {
            document.getElementsByClassName('dropDownListInt')[0].style.zIndex = '2';
            document.getElementsByClassName('dropDownList')[0].style.zIndex = '2';
            document.getElementsByClassName('dropDownList')[1].style.zIndex = '2';
            if (!eventer) if (pageYOffset) document.getElementsByClassName('dropDownList')[0].style.opacity = '1';
            if (eventer) if (pageYOffset) document.getElementsByClassName('dropDownListInt')[0].style.opacity = '1';
        } else {
            document.getElementsByClassName('dropDownListInt')[0].style.zIndex = '-3';
            document.getElementsByClassName('dropDownList')[0].style.zIndex = '-3';
            document.getElementsByClassName('dropDownList')[1].style.zIndex = '-3';
            if (pageYOffset) document.getElementsByClassName('dropDownList')[0].style.opacity = '0';
            if (pageYOffset) document.getElementsByClassName('dropDownListInt')[0].style.opacity = '0';
        }

    } 
}

var clickSportCheck = 0;
var clickIntrestingCheck = 0;
var hoverOurTeamCheck = 0;
var hoverBackToMainCheck = 0;
var rollingLi = document.getElementsByClassName('rollMenu');
var rollMenuSport = document.getElementById('rollMenuSport');
var rollMenuIntresting = document.getElementById('rollMenuIntresting');

document.getElementsByClassName('rollMenu')[0].firstChild.addEventListener('click', sportLiRollOver);
document.getElementsByClassName('rollMenu')[1].firstChild.addEventListener('click', intrestingLiRollOver);

document.getElementById('absoluteMenuAbout').firstChild.addEventListener('mouseover', function() {hoverOurTeamCheck = 1;document.getElementById('absoluteMenuAboutBack').style.transition = '1s';document.getElementById('absoluteMenuAboutBack').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));document.getElementById('absoluteMenuAboutBack').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));document.getElementById('absoluteMenuAboutBack').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;document.getElementById('absoluteMenuAboutBack').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;document.getElementById('absoluteMenuAboutBack').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;window.addEventListener('resize', menuAutoReBacker);});
document.getElementById('absoluteMenuAbout').firstChild.addEventListener('mouseleave', function() {hoverOurTeamCheck = 0;document.getElementById('absoluteMenuAboutBack').style.transition = '1s';document.getElementById('absoluteMenuAboutBack').style.width = '0';document.getElementById('absoluteMenuAboutBack').style.height = '0';document.getElementById('absoluteMenuAboutBack').style.left = '50%';document.getElementById('absoluteMenuAboutBack').style.top = '50%';document.getElementById('absoluteMenuAboutBack').style.borderRadius = '50%';window.addEventListener('resize', menuAutoReBacker);});
document.getElementById('absoluteMenuToMain').firstChild.addEventListener('mouseover', function() {hoverBackToMainCheck = 1;document.getElementById('absoluteMenuToMainBack').style.transition = '1s';document.getElementById('absoluteMenuToMainBack').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));document.getElementById('absoluteMenuToMainBack').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));document.getElementById('absoluteMenuToMainBack').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;document.getElementById('absoluteMenuToMainBack').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;document.getElementById('absoluteMenuToMainBack').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;window.addEventListener('resize', menuAutoReBacker);});
document.getElementById('absoluteMenuToMain').firstChild.addEventListener('mouseleave', function() {hoverBackToMainCheck = 0;document.getElementById('absoluteMenuToMainBack').style.transition = '1s';document.getElementById('absoluteMenuToMainBack').style.width = '0';document.getElementById('absoluteMenuToMainBack').style.height = '0';document.getElementById('absoluteMenuToMainBack').style.left = '50%';document.getElementById('absoluteMenuToMainBack').style.top = '50%';document.getElementById('absoluteMenuToMainBack').style.borderRadius = '50%';window.addEventListener('resize', menuAutoReBacker);});
document.getElementById('rollMenuSport1').addEventListener('mouseover', function() {document.getElementById('absoluteMenuSportBack1').style.transition = '1s';document.getElementById('absoluteMenuSportBack1').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));document.getElementById('absoluteMenuSportBack1').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));document.getElementById('absoluteMenuSportBack1').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;document.getElementById('absoluteMenuSportBack1').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;document.getElementById('absoluteMenuSportBack1').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;document.getElementById('rollMenuSport1').style.color = '#56b28e';window.addEventListener('resize', menuAutoReBacker);});
document.getElementById('rollMenuSport1').addEventListener('mouseleave', function() {document.getElementById('absoluteMenuSportBack1').style.transition = '1s';document.getElementById('absoluteMenuSportBack1').style.width = '0';document.getElementById('absoluteMenuSportBack1').style.height = '0';document.getElementById('absoluteMenuSportBack1').style.left = '50%';document.getElementById('absoluteMenuSportBack1').style.top = '50%';document.getElementById('absoluteMenuSportBack1').style.borderRadius = '50%';document.getElementById('rollMenuSport1').style.color = 'black';window.addEventListener('resize', menuAutoReBacker);});
document.getElementById('rollMenuSport2').addEventListener('mouseover', function() {document.getElementById('absoluteMenuSportBack2').style.transition = '1s';document.getElementById('absoluteMenuSportBack2').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));document.getElementById('absoluteMenuSportBack2').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));document.getElementById('absoluteMenuSportBack2').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;document.getElementById('absoluteMenuSportBack2').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;document.getElementById('absoluteMenuSportBack2').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;document.getElementById('rollMenuSport2').style.color = '#66b2ba';window.addEventListener('resize', menuAutoReBacker);});
document.getElementById('rollMenuSport2').addEventListener('mouseleave', function() {document.getElementById('absoluteMenuSportBack2').style.transition = '1s';document.getElementById('absoluteMenuSportBack2').style.width = '0';document.getElementById('absoluteMenuSportBack2').style.height = '0';document.getElementById('absoluteMenuSportBack2').style.left = '50%';document.getElementById('absoluteMenuSportBack2').style.top = '50%';document.getElementById('absoluteMenuSportBack2').style.borderRadius = '50%';document.getElementById('rollMenuSport2').style.color = 'black';window.addEventListener('resize', menuAutoReBacker);});
document.getElementById('rollMenuSport3').addEventListener('mouseover', function() {document.getElementById('absoluteMenuSportBack3').style.transition = '1s';document.getElementById('absoluteMenuSportBack3').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));document.getElementById('absoluteMenuSportBack3').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));document.getElementById('absoluteMenuSportBack3').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;document.getElementById('absoluteMenuSportBack3').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;document.getElementById('absoluteMenuSportBack3').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;document.getElementById('rollMenuSport3').style.color = '#16baa6';window.addEventListener('resize', menuAutoReBacker);});
document.getElementById('rollMenuSport3').addEventListener('mouseleave', function() {document.getElementById('absoluteMenuSportBack3').style.transition = '1s';document.getElementById('absoluteMenuSportBack3').style.width = '0';document.getElementById('absoluteMenuSportBack3').style.height = '0';document.getElementById('absoluteMenuSportBack3').style.left = '50%';document.getElementById('absoluteMenuSportBack3').style.top = '50%';document.getElementById('absoluteMenuSportBack3').style.borderRadius = '50%';document.getElementById('rollMenuSport3').style.color = 'black';window.addEventListener('resize', menuAutoReBacker);});
document.getElementById('rollMenuSport4').addEventListener('mouseover', function() {document.getElementById('absoluteMenuSportBack4').style.transition = '1s';document.getElementById('absoluteMenuSportBack4').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));document.getElementById('absoluteMenuSportBack4').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));document.getElementById('absoluteMenuSportBack4').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;document.getElementById('absoluteMenuSportBack4').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;document.getElementById('absoluteMenuSportBack4').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;document.getElementById('rollMenuSport4').style.color = '#ff927a';window.addEventListener('resize', menuAutoReBacker);});
document.getElementById('rollMenuSport4').addEventListener('mouseleave', function() {document.getElementById('absoluteMenuSportBack4').style.transition = '1s';document.getElementById('absoluteMenuSportBack4').style.width = '0';document.getElementById('absoluteMenuSportBack4').style.height = '0';document.getElementById('absoluteMenuSportBack4').style.left = '50%';document.getElementById('absoluteMenuSportBack4').style.top = '50%';document.getElementById('absoluteMenuSportBack4').style.borderRadius = '50%';document.getElementById('rollMenuSport4').style.color = 'black';window.addEventListener('resize', menuAutoReBacker);});
document.getElementById('rollMenuIntresting1').addEventListener('mouseover', function() {document.getElementById('absoluteMenuIntrestingBack1').style.transition = '1s';document.getElementById('absoluteMenuIntrestingBack1').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));document.getElementById('absoluteMenuIntrestingBack1').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));document.getElementById('absoluteMenuIntrestingBack1').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;document.getElementById('absoluteMenuIntrestingBack1').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;document.getElementById('absoluteMenuIntrestingBack1').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;document.getElementById('rollMenuIntresting1').style.color = '#FE534C';window.addEventListener('resize', menuAutoReBacker);});
document.getElementById('rollMenuIntresting1').addEventListener('mouseleave', function() {document.getElementById('absoluteMenuIntrestingBack1').style.transition = '1s';document.getElementById('absoluteMenuIntrestingBack1').style.width = '0';document.getElementById('absoluteMenuIntrestingBack1').style.height = '0';document.getElementById('absoluteMenuIntrestingBack1').style.left = '50%';document.getElementById('absoluteMenuIntrestingBack1').style.top = '50%';document.getElementById('absoluteMenuIntrestingBack1').style.borderRadius = '50%';document.getElementById('rollMenuIntresting1').style.color = 'black';window.addEventListener('resize', menuAutoReBacker);});
document.getElementById('rollMenuIntresting2').addEventListener('mouseover', function() {document.getElementById('absoluteMenuIntrestingBack2').style.transition = '1s';document.getElementById('absoluteMenuIntrestingBack2').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));document.getElementById('absoluteMenuIntrestingBack2').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));document.getElementById('absoluteMenuIntrestingBack2').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;document.getElementById('absoluteMenuIntrestingBack2').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;document.getElementById('absoluteMenuIntrestingBack2').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;document.getElementById('rollMenuIntresting2').style.color = '#92ca6e';window.addEventListener('resize', menuAutoReBacker);});
document.getElementById('rollMenuIntresting2').addEventListener('mouseleave', function() {document.getElementById('absoluteMenuIntrestingBack2').style.transition = '1s';document.getElementById('absoluteMenuIntrestingBack2').style.width = '0';document.getElementById('absoluteMenuIntrestingBack2').style.height = '0';document.getElementById('absoluteMenuIntrestingBack2').style.left = '50%';document.getElementById('absoluteMenuIntrestingBack2').style.top = '50%';document.getElementById('absoluteMenuIntrestingBack2').style.borderRadius = '50%';document.getElementById('rollMenuIntresting2').style.color = 'black';window.addEventListener('resize', menuAutoReBacker);});

function menuAutoReBacker() {
    if (hoverOurTeamCheck) {
        document.getElementById('absoluteMenuAboutBack').style.transition = '0s';
        document.getElementById('absoluteMenuAboutBack').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuAboutBack').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuAboutBack').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuAboutBack').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuAboutBack').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;
    }
    if (hoverBackToMainCheck) {
        document.getElementById('absoluteMenuToMainBack').style.transition = '0s';
        document.getElementById('absoluteMenuToMainBack').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuToMainBack').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuToMainBack').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuToMainBack').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuToMainBack').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;
    }
    if (clickSportCheck) {
        document.getElementById('absoluteMenuSportBackMain').style.transition = '0s';
        document.getElementById('absoluteMenuSportBackMain').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuSportBackMain').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuSportBackMain').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuSportBackMain').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuSportBackMain').style.borderRadius = -Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;
        document.getElementById('absoluteMenuSportBack1').style.transition = '0s';
        document.getElementById('absoluteMenuSportBack1').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuSportBack1').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuSportBack1').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuSportBack1').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuSportBack1').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;
        document.getElementById('absoluteMenuSportBack2').style.transition = '0s';
        document.getElementById('absoluteMenuSportBack2').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuSportBack2').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuSportBack2').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuSportBack2').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuSportBack2').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;
        document.getElementById('absoluteMenuSportBack3').style.transition = '0s';
        document.getElementById('absoluteMenuSportBack3').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuSportBack3').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuSportBack3').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuSportBack3').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuSportBack3').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;
        document.getElementById('absoluteMenuSportBack4').style.transition = '0s';
        document.getElementById('absoluteMenuSportBack4').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuSportBack4').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuSportBack4').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuSportBack4').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuSportBack4').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;
    }
    if (clickIntrestingCheck) {
        document.getElementById('absoluteMenuIntrestingBackMain').style.transition = '0s';
    document.getElementById('absoluteMenuIntrestingBackMain').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
    document.getElementById('absoluteMenuIntrestingBackMain').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
    document.getElementById('absoluteMenuIntrestingBackMain').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
    document.getElementById('absoluteMenuIntrestingBackMain').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
    document.getElementById('absoluteMenuIntrestingBackMain').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;
        document.getElementById('absoluteMenuIntrestingBack1').style.transition = '0s';
        document.getElementById('absoluteMenuIntrestingBack1').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuIntrestingBack1').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuIntrestingBack1').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuIntrestingBack1').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuIntrestingBack1').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;
        document.getElementById('absoluteMenuIntrestingBack2').style.transition = '0s';
        document.getElementById('absoluteMenuIntrestingBack2').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuIntrestingBack2').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuIntrestingBack2').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuIntrestingBack2').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuIntrestingBack2').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;
    }
    document.getElementById('absoluteMenu').style.backgroundColor = '#7CACE1';
    document.getElementById('absoluteMenu').style.width = '100%';
    document.getElementById('absoluteMenu').style.overflow = 'hidden';
}

function sportLiRollOver() {

    if (!clickSportCheck) {
        rollMenuSport.style.height = '250px';
        rollMenuSport.style.overflow = 'hidden';
        rollMenuSport.style.transition = '.5s';
        clickSportCheck = 1;
        document.getElementById('absoluteMenuSportBackMain').style.transition = '1s';
        document.getElementById('absoluteMenuSportBackMain').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuSportBackMain').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuSportBackMain').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuSportBackMain').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuSportBackMain').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;
        window.addEventListener('resize', menuAutoReBacker);
    } else if (clickSportCheck) {
        rollMenuSport.style.height = '0px';
        rollMenuSport.style.overflow = 'hidden';
        rollMenuSport.style.transition = '.5s';
        clickSportCheck = 0;
        document.getElementById('absoluteMenuSportBackMain').style.transition = '1s';
        document.getElementById('absoluteMenuSportBackMain').style.width = '0';
        document.getElementById('absoluteMenuSportBackMain').style.height = '0';
        document.getElementById('absoluteMenuSportBackMain').style.left = '50%';
        document.getElementById('absoluteMenuSportBackMain').style.top = '50%';
        document.getElementById('absoluteMenuSportBackMain').style.borderRadius = '50%';
        window.removeEventListener('resize', menuAutoReBacker);
    }
}

function intrestingLiRollOver() {

    if (!clickIntrestingCheck) {
        rollMenuIntresting.style.height = '125px';
        rollMenuIntresting.style.overflow = 'hidden';
        rollMenuIntresting.style.transition = '.5s';
        clickIntrestingCheck = 1;
        document.getElementById('absoluteMenuIntrestingBackMain').style.transition = '1s';
        document.getElementById('absoluteMenuIntrestingBackMain').style.width = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuIntrestingBackMain').style.height = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2));
        document.getElementById('absoluteMenuIntrestingBackMain').style.left = (document.body.clientWidth - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuIntrestingBackMain').style.top = (document.body.clientHeight - Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / 2;
        document.getElementById('absoluteMenuIntrestingBackMain').style.borderRadius = Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / 2;
        window.addEventListener('resize', menuAutoReBacker);
    } else if (clickIntrestingCheck) {
        rollMenuIntresting.style.height = '0px';
        rollMenuIntresting.style.overflow = 'hidden';
        rollMenuIntresting.style.transition = '.5s';
        clickIntrestingCheck = 0;
        document.getElementById('absoluteMenuIntrestingBackMain').style.transition = '1s';
        document.getElementById('absoluteMenuIntrestingBackMain').style.width = '0';
        document.getElementById('absoluteMenuIntrestingBackMain').style.height = '0';
        document.getElementById('absoluteMenuIntrestingBackMain').style.left = '50%';
        document.getElementById('absoluteMenuIntrestingBackMain').style.top = '50%';
        document.getElementById('absoluteMenuIntrestingBackMain').style.borderRadius = '50%';
        window.removeEventListener('resize', menuAutoReBacker);
    }
}

document.getElementsByClassName('rollMenu')[0].firstChild.addEventListener('mouseover', preOpenerForMenuLi);
document.getElementsByClassName('rollMenu')[1].firstChild.addEventListener('mouseover', preOpenerForMenuLiDouble);
document.getElementsByClassName('rollMenu')[0].firstChild.addEventListener('mousemove', preOpenerForMenuLi);
document.getElementsByClassName('rollMenu')[1].firstChild.addEventListener('mousemove', preOpenerForMenuLiDouble);
document.getElementsByClassName('rollMenu')[0].firstChild.addEventListener('mouseleave', preCloserForMenuLi);
document.getElementsByClassName('rollMenu')[1].firstChild.addEventListener('mouseleave', preCloserForMenuLiDouble);

function  preOpenerForMenuLi(event) {
    document.getElementById('menuCursorUI').style.opacity = '1';
    document.getElementById('menuCursorUI').style.left = event.pageX + 20 + 'px';
    document.getElementById('menuCursorUI').style.top = event.pageY + 20 + 'px';


    if (!clickSportCheck) {
        rollMenuSport.style.height = '15px';
        rollMenuSport.style.transition = '.5s';
    }
}

function  preOpenerForMenuLiDouble(event) {
    document.getElementById('menuCursorUI').style.opacity = '1';
    document.getElementById('menuCursorUI').style.left = event.pageX + 20 + 'px';
    document.getElementById('menuCursorUI').style.top = event.pageY + 20 + 'px';

    if (!clickIntrestingCheck) {
        rollMenuIntresting.style.height = '15px';
        rollMenuIntresting.style.transition = '.5s';
    }
}

function  preCloserForMenuLi() {
    document.getElementById('menuCursorUI').style.opacity = '0';

    if (!clickSportCheck) {
        rollMenuSport.style.height = '0px';
        rollMenuSport.style.transition = '.5s';
    }
}

function  preCloserForMenuLiDouble() {
    document.getElementById('menuCursorUI').style.opacity = '0';

    if (!clickIntrestingCheck) {
        rollMenuIntresting.style.height = '0px';
        rollMenuIntresting.style.transition = '.5s';
    }
}



var openderAbsMenu1 = document.getElementById('fixedMenu');
var openderAbsMenu2 = document.getElementById('preloader');
var openderAbsMenu3 = document.getElementById('mainSection');
var openderAbsMenu4 = document.getElementById('rulesSection');
var openderAbsMenu5 = document.getElementById('reAdressSection');
var openderAbsMenu6 = document.getElementById('motivationSlider');
var openderAbsMenu7 = document.getElementById('gallery');
var openderAbsMenu8 = document.getElementById('statistic');
var openderAbsMenu9 = document.getElementById('footer');

var openButton1 = document.getElementsByClassName('menuOpener')[0];
var openButton2 = document.getElementsByClassName('menuOpener')[1];
var menu = document.getElementById('absoluteMenu');
var closeButton = document.getElementById('menuClose');
var vipadMenu = document.getElementsByClassName('vipadMenu')[0];
var menuFixedMenu = document.getElementById('fixedMenu');
var AbsMenuScrollBefore;

openButton1.addEventListener('click', function() {AbsMenuScrollBefore = scrollY;openMenu();});
openButton2.addEventListener('click', function() {AbsMenuScrollBefore = scrollY;openMenu();});
closeButton.addEventListener('click', menuCloseFix);
document.getElementById('menuContent').addEventListener('mousedown', function() {menu.removeEventListener('click', menuCloseFix);});
document.getElementById('menuContent').addEventListener('mouseup', function() {setTimeout(function() {menu.addEventListener('click', menuCloseFix);}, 1)});
menu.addEventListener('click', menuCloseFix);
vipadMenu.addEventListener('click', vipad);

function menuCloseFix() {
    closeMenu(AbsMenuScrollBefore);
}

function vipad() {
    menu.style.zIndex = '2';
    menu.style.opacity = '1';
    document.body.style.overflow = 'hidden';
}

function autoMarginer() {

    if (document.body.clientHeight > 600) {
        document.getElementById('menuContent').style.margin = 'calc((100vh - 400px) / 2) 35%';
        if (document.body.clientWidth < 768) document.getElementById('menuContent').style.margin = 'calc((100vh - 400px) / 2) 30%';
    } else {
        document.getElementById('menuContent').style.margin = '100px 35%';
        if (document.body.clientWidth < 768) document.getElementById('menuContent').style.margin = '100px 30%';
    }

}

function openMenu() {
    window.scrollTo(0,0);

    window.addEventListener('resize', autoMarginer);

    autoMarginer();

    menu.style.zIndex = '2';
    menu.style.opacity = '1';
    menuFixedMenu.style.opacity = '0';
    menuFixedMenu.style.zIndex = '-1';

    document.body.removeChild(openderAbsMenu1);
    document.body.removeChild(openderAbsMenu2);
    document.body.removeChild(openderAbsMenu3);
    document.body.removeChild(openderAbsMenu4);
    document.body.removeChild(openderAbsMenu5);
    document.body.removeChild(openderAbsMenu6);
    document.body.removeChild(openderAbsMenu7);
    document.body.removeChild(openderAbsMenu8);
    document.body.removeChild(openderAbsMenu9);
}

function closeMenu(scroll) {
    menu.style.zIndex = '0';
    menu.style.opacity = '0';

    window.removeEventListener('resize', autoMarginer);

    document.body.appendChild(openderAbsMenu1);
    document.body.appendChild(openderAbsMenu2);
    document.body.appendChild(openderAbsMenu3);
    document.body.appendChild(openderAbsMenu4);
    document.body.appendChild(openderAbsMenu5);
    document.body.appendChild(openderAbsMenu6);
    document.body.appendChild(openderAbsMenu7);
    document.body.appendChild(openderAbsMenu8);
    document.body.appendChild(openderAbsMenu9);
    window.scrollTo(0, scroll);

    if (pageYOffset > min + 60) {
        menuFixedMenu.style.opacity = '1';
        menuFixedMenu.style.zIndex = '2';
    }
}
