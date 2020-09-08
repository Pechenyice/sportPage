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
window.addEventListener('DOMContentLoaded', function() {menuConstructorSwitcher();});

function menuConstructorSwitcher() {
fixedMenu.style.opacity = '0';
fixedMenu.style.zIndex = '-1';
}