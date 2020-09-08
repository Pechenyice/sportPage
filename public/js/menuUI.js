var vh = document.body.clientHeight;
var min = vh < 900 ? vh : 900;

var fixedMenu = document.getElementById('fixedMenu');
var underline1 = document.getElementsByClassName('navElemUnd')[0];
var underline2 = document.getElementsByClassName('navElemUnd')[1];
var underline3 = document.getElementsByClassName('navElemUnd')[2];
var underline4 = document.getElementsByClassName('navElemUnd')[3];
var underline5 = document.getElementsByClassName('navElemUnd')[4];
var underline6 = document.getElementsByClassName('navElemUnd')[5];
var underline7 = document.getElementsByClassName('navElemUnd')[6];

window.addEventListener('scroll', function() {menuSwitcher();});
window.addEventListener('DOMContentLoaded', function() {menuSwitcher();});

function menuSwitcher() {

    if (document.body.clientWidth < 767) {
        if (pageYOffset > min + 4200) {
            fixedMenu.style.backgroundColor = 'rgb(106, 90, 205)';
            underline1.style.backgroundColor = '#FF9E6A';
            underline2.style.backgroundColor = '#FF9E6A';
            underline3.style.backgroundColor = '#FF9E6A';
            underline4.style.backgroundColor = '#FF9E6A';
            underline5.style.backgroundColor = '#FF9E6A';
            underline6.style.backgroundColor = '#FF9E6A';
            underline7.style.backgroundColor = '#FF9E6A';
            fixedMenu.style.opacity = '1';
            return;
        } else if (pageYOffset < min + 4200) {
            fixedMenu.style.backgroundColor = '#7CACE1';
            underline1.style.backgroundColor = '#7CACE1';
            underline2.style.backgroundColor = '#7CACE1';
            underline3.style.backgroundColor = '#7CACE1';
            underline4.style.backgroundColor = '#7CACE1';
            underline5.style.backgroundColor = '#7CACE1';
            underline6.style.backgroundColor = '#7CACE1';
            underline7.style.backgroundColor = '#7CACE1';
        }

        if (pageYOffset > min + 3700) {
            fixedMenu.style.backgroundColor = '#7CACE1';
            underline1.style.backgroundColor = '#FF9E6A';
            underline2.style.backgroundColor = '#FF9E6A';
            underline3.style.backgroundColor = '#FF9E6A';
            underline4.style.backgroundColor = '#FF9E6A';
            underline5.style.backgroundColor = '#FF9E6A';
            underline6.style.backgroundColor = '#FF9E6A';
            underline7.style.backgroundColor = '#FF9E6A';
            fixedMenu.style.opacity = '1';
            return;
        } else if (pageYOffset < min + 3700) {
            fixedMenu.style.backgroundColor = 'rgb(106, 90, 205)';
            underline1.style.backgroundColor = '#7CACE1';
            underline2.style.backgroundColor = '#7CACE1';
            underline3.style.backgroundColor = '#7CACE1';
            underline4.style.backgroundColor = '#7CACE1';
            underline5.style.backgroundColor = '#7CACE1';
            underline6.style.backgroundColor = '#7CACE1';
            underline7.style.backgroundColor = '#7CACE1';
        }

        if (pageYOffset > min + 2850) {
            fixedMenu.style.backgroundColor = 'rgb(106, 90, 205)';
            underline1.style.backgroundColor = '#7CACE1';
            underline2.style.backgroundColor = '#7CACE1';
            underline3.style.backgroundColor = '#7CACE1';
            underline4.style.backgroundColor = '#7CACE1';
            underline5.style.backgroundColor = '#7CACE1';
            underline6.style.backgroundColor = '#7CACE1';
            underline7.style.backgroundColor = '#7CACE1';
            fixedMenu.style.opacity = '1';
            return;
        } else if (pageYOffset < min + 2850) {
            fixedMenu.style.backgroundColor = '#7CACE1';
            underline1.style.backgroundColor = '#FF9E6A';
            underline2.style.backgroundColor = '#FF9E6A';
            underline3.style.backgroundColor = '#FF9E6A';
            underline4.style.backgroundColor = '#FF9E6A';
            underline5.style.backgroundColor = '#FF9E6A';
            underline6.style.backgroundColor = '#FF9E6A';
            underline7.style.backgroundColor = '#FF9E6A';
        }

        if (pageYOffset > min + 240) {
            fixedMenu.style.backgroundColor = '#7CACE1';
            fixedMenu.style.opacity = '1';
            underline1.style.backgroundColor = '#FF9E6A';
            underline2.style.backgroundColor = '#FF9E6A';
            underline3.style.backgroundColor = '#FF9E6A';
            underline4.style.backgroundColor = '#FF9E6A';
            underline5.style.backgroundColor = '#FF9E6A';
            underline6.style.backgroundColor = '#FF9E6A';
            underline7.style.backgroundColor = '#FF9E6A';
            return;
        } else if (pageYOffset < min + 240) {
            fixedMenu.style.backgroundColor = 'rgb(106, 90, 205)';
            underline1.style.backgroundColor = '#7CACE1';
            underline2.style.backgroundColor = '#7CACE1';
            underline3.style.backgroundColor = '#7CACE1';
            underline4.style.backgroundColor = '#7CACE1';
            underline5.style.backgroundColor = '#7CACE1';
            underline6.style.backgroundColor = '#7CACE1';
            underline7.style.backgroundColor = '#7CACE1';
        }

        if (pageYOffset > min + 60) {
            fixedMenu.style.backgroundColor = 'rgb(106, 90, 205)';
            fixedMenu.style.opacity = '1';
            fixedMenu.style.zIndex = '2';
            underline1.style.backgroundColor = '#7CACE1';
            underline2.style.backgroundColor = '#7CACE1';
            underline3.style.backgroundColor = '#7CACE1';
            underline4.style.backgroundColor = '#7CACE1';
            underline5.style.backgroundColor = '#7CACE1';
            underline6.style.backgroundColor = '#7CACE1';
            underline7.style.backgroundColor = '#7CACE1';
            return;
        } else if (pageYOffset < min + 60) {
            fixedMenu.style.backgroundColor = '#7CACE1';
            fixedMenu.style.opacity = '0';
            fixedMenu.style.zIndex = '-1';
            underline1.style.backgroundColor = '#FF9E6A';
            underline2.style.backgroundColor = '#FF9E6A';
            underline3.style.backgroundColor = '#FF9E6A';
            underline4.style.backgroundColor = '#FF9E6A';
            underline5.style.backgroundColor = '#FF9E6A';
            underline6.style.backgroundColor = '#FF9E6A';
            underline7.style.backgroundColor = '#FF9E6A';
        }
    } else {
        if (pageYOffset > min + 3150) {
            fixedMenu.style.backgroundColor = 'rgb(106, 90, 205)';
            underline1.style.backgroundColor = '#FF9E6A';
            underline2.style.backgroundColor = '#FF9E6A';
            underline3.style.backgroundColor = '#FF9E6A';
            underline4.style.backgroundColor = '#FF9E6A';
            underline5.style.backgroundColor = '#FF9E6A';
            underline6.style.backgroundColor = '#FF9E6A';
            underline7.style.backgroundColor = '#FF9E6A';
            fixedMenu.style.opacity = '1';
            return;
        } else if (pageYOffset < min + 3150) {
            fixedMenu.style.backgroundColor = '#7CACE1';
            underline1.style.backgroundColor = '#7CACE1';
            underline2.style.backgroundColor = '#7CACE1';
            underline3.style.backgroundColor = '#7CACE1';
            underline4.style.backgroundColor = '#7CACE1';
            underline5.style.backgroundColor = '#7CACE1';
            underline6.style.backgroundColor = '#7CACE1';
            underline7.style.backgroundColor = '#7CACE1';
        }

        if (pageYOffset > min + 2700) {
            fixedMenu.style.backgroundColor = '#7CACE1';
            underline1.style.backgroundColor = '#FF9E6A';
            underline2.style.backgroundColor = '#FF9E6A';
            underline3.style.backgroundColor = '#FF9E6A';
            underline4.style.backgroundColor = '#FF9E6A';
            underline5.style.backgroundColor = '#FF9E6A';
            underline6.style.backgroundColor = '#FF9E6A';
            underline7.style.backgroundColor = '#FF9E6A';
            fixedMenu.style.opacity = '1';
            return;
        } else if (pageYOffset < min + 2700) {
            fixedMenu.style.backgroundColor = 'rgb(106, 90, 205)';
            underline1.style.backgroundColor = '#7CACE1';
            underline2.style.backgroundColor = '#7CACE1';
            underline3.style.backgroundColor = '#7CACE1';
            underline4.style.backgroundColor = '#7CACE1';
            underline5.style.backgroundColor = '#7CACE1';
            underline6.style.backgroundColor = '#7CACE1';
            underline7.style.backgroundColor = '#7CACE1';
        }

        if (pageYOffset > min + 2050) {
            fixedMenu.style.backgroundColor = 'rgb(106, 90, 205)';
            underline1.style.backgroundColor = '#7CACE1';
            underline2.style.backgroundColor = '#7CACE1';
            underline3.style.backgroundColor = '#7CACE1';
            underline4.style.backgroundColor = '#7CACE1';
            underline5.style.backgroundColor = '#7CACE1';
            underline6.style.backgroundColor = '#7CACE1';
            underline7.style.backgroundColor = '#7CACE1';
            fixedMenu.style.opacity = '1';
            return;
        } else if (pageYOffset < min + 2050) {
            fixedMenu.style.backgroundColor = '#7CACE1';
            underline1.style.backgroundColor = '#FF9E6A';
            underline2.style.backgroundColor = '#FF9E6A';
            underline3.style.backgroundColor = '#FF9E6A';
            underline4.style.backgroundColor = '#FF9E6A';
            underline5.style.backgroundColor = '#FF9E6A';
            underline6.style.backgroundColor = '#FF9E6A';
            underline7.style.backgroundColor = '#FF9E6A';
        }

        if (pageYOffset > min + 240) {
            fixedMenu.style.backgroundColor = '#7CACE1';
            fixedMenu.style.opacity = '1';
            underline1.style.backgroundColor = '#FF9E6A';
            underline2.style.backgroundColor = '#FF9E6A';
            underline3.style.backgroundColor = '#FF9E6A';
            underline4.style.backgroundColor = '#FF9E6A';
            underline5.style.backgroundColor = '#FF9E6A';
            underline6.style.backgroundColor = '#FF9E6A';
            underline7.style.backgroundColor = '#FF9E6A';
            return;
        } else if (pageYOffset < min + 240) {
            fixedMenu.style.backgroundColor = 'rgb(106, 90, 205)';
            underline1.style.backgroundColor = '#7CACE1';
            underline2.style.backgroundColor = '#7CACE1';
            underline3.style.backgroundColor = '#7CACE1';
            underline4.style.backgroundColor = '#7CACE1';
            underline5.style.backgroundColor = '#7CACE1';
            underline6.style.backgroundColor = '#7CACE1';
            underline7.style.backgroundColor = '#7CACE1';
        }

        if (pageYOffset > min + 60) {
            fixedMenu.style.backgroundColor = 'rgb(106, 90, 205)';
            fixedMenu.style.opacity = '1';
            fixedMenu.style.zIndex = '2';
            underline1.style.backgroundColor = '#7CACE1';
            underline2.style.backgroundColor = '#7CACE1';
            underline3.style.backgroundColor = '#7CACE1';
            underline4.style.backgroundColor = '#7CACE1';
            underline5.style.backgroundColor = '#7CACE1';
            underline6.style.backgroundColor = '#7CACE1';
            underline7.style.backgroundColor = '#7CACE1';
            return;
        } else if (pageYOffset < min + 60) {
            fixedMenu.style.backgroundColor = '#7CACE1';
            fixedMenu.style.opacity = '0';
            fixedMenu.style.zIndex = '-1';
            underline1.style.backgroundColor = '#FF9E6A';
            underline2.style.backgroundColor = '#FF9E6A';
            underline3.style.backgroundColor = '#FF9E6A';
            underline4.style.backgroundColor = '#FF9E6A';
            underline5.style.backgroundColor = '#FF9E6A';
            underline6.style.backgroundColor = '#FF9E6A';
            underline7.style.backgroundColor = '#FF9E6A';
        }
    }

}