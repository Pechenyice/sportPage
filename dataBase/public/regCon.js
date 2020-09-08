var 
enter = document.getElementById('userDataEnter'),
reg = document.getElementById('userDataRegistr'),
email = document.getElementById('userEmailInput'),
emailCheck = 0,
pass = document.getElementById('userPasswordInput'),
passCheck = 0,
username = document.getElementById('userNameInput'),
nameCheck = 0
;

// enter.addEventListener('click', function() {enterCheck();});
reg.addEventListener('click', function() {regCheck();});
email.addEventListener('focus', function() {emailEvent();});
pass.addEventListener('focus', function() {passEvent();});
username.addEventListener('focus', function() {nameEvent();});


function emailEvent() {
    if (emailCheck == 0) {
        email.value = '';
    }
    email.style.backgroundColor= 'white';
    email.style.color = 'black';
    emailCheck = 1;

}

function passEvent() {
    if (passCheck == 0) {
        pass.value = '';
    }
    pass.style.backgroundColor= 'white';
    pass.style.color = 'black';
    passCheck = 1;
}

function nameEvent() {
    if (nameCheck == 0) {
        username.value = '';
    }
    username.style.backgroundColor= 'white';
    username.style.color = 'black';
    nameCheck = 1;
}