var regButton = document.getElementById("userDataEnter");
regButton.addEventListener('click', () => {
    var xml = new XMLHttpRequest();
    var val = {
        login: document.getElementById("userEmailInput").value,
        password: document.getElementById("userPasswordInput").value,
        name: document.getElementById("userNameInput").value
    }
    xml.open("post","/registr");
    xml.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xml.send(JSON.stringify(val));
    xml.onload = () => {
        // alert(xml.response);
        var answer = JSON.parse(xml.response);
        if (answer.loginError) {
            alert("This login: " + answer.user.login + ", is already in use, choose another one please!");
        }
    };
});

