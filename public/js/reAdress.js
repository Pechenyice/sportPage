var reAdressPromiseCheck = 0;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function reAdressPromise() {
    if (!reAdressPromiseCheck) {
        document.getElementById('randomReAdressDivText').style.opacity = '0';
        delay(500).then( () => {document.getElementById('randomReAdressDivText').innerHTML = 'Мне повезет!'; delay(50).then( () => {document.getElementById('randomReAdressDivText').style.opacity = '1';});});
    }
    reAdressPromiseCheck = 1;
}

function reAdressRePromise() {
    if (reAdressPromiseCheck) {
        document.getElementById('randomReAdressDivText').style.opacity = '0';
        delay(500).then( () => {document.getElementById('randomReAdressDivText').innerHTML = 'Выберите за меня'; delay(50).then( () => {document.getElementById('randomReAdressDivText').style.opacity = '1';});});
    }
    reAdressPromiseCheck = 0;
}

document.getElementById('randomReAdressDivBorder').addEventListener('mouseover', () => {document.getElementsByClassName('fake')[0].style.opacity = '1';document.getElementsByClassName('fake')[1].style.opacity = '1';document.getElementsByClassName('fake')[2].style.opacity = '1';document.getElementsByClassName('fake')[3].style.opacity = '1';reAdressPromise();});
document.getElementById('randomReAdressDivBorder').addEventListener('mouseleave', () => {document.getElementsByClassName('fake')[0].style.opacity = '0';document.getElementsByClassName('fake')[1].style.opacity = '0';document.getElementsByClassName('fake')[2].style.opacity = '0';document.getElementsByClassName('fake')[3].style.opacity = '0';reAdressRePromise();});

document.getElementById('firstReAdressGridDiv').addEventListener('mouseover', () => {document.getElementsByClassName('fake')[0].style.opacity = '1';});
document.getElementById('firstReAdressGridDiv').addEventListener('mouseleave', () => {document.getElementsByClassName('fake')[0].style.opacity = '0';});

document.getElementById('secondReAdressGridDiv').addEventListener('mouseover', () => {document.getElementsByClassName('fake')[1].style.opacity = '1';});
document.getElementById('secondReAdressGridDiv').addEventListener('mouseleave', () => {document.getElementsByClassName('fake')[1].style.opacity = '0';});

document.getElementById('thirdReAdressGridDiv').addEventListener('mouseover', () => {document.getElementsByClassName('fake')[2].style.opacity = '1';});
document.getElementById('thirdReAdressGridDiv').addEventListener('mouseleave', () => {document.getElementsByClassName('fake')[2].style.opacity = '0';});

document.getElementById('fourthReAdressGridDiv').addEventListener('mouseover', () => {document.getElementsByClassName('fake')[3].style.opacity = '1';});
document.getElementById('fourthReAdressGridDiv').addEventListener('mouseleave', () => {document.getElementsByClassName('fake')[3].style.opacity = '0';});