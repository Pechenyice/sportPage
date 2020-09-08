var firstCircle = document.getElementById("violetFirstStat");
var secondCircle = document.getElementById("orangeSecondStat");
var thirdCircle = document.getElementById("blueThirdStat");
var firstText = document.getElementById("violetFirstText");
var secondText = document.getElementById("orangeSecondText");
var thirdText = document.getElementById("blueThirdText");


window.addEventListener('resize', statisticResizer);

function statisticResizer() {
    if (document.body.clientWidth > 1400) {
        firstCircle.style.left = '20%';
        firstCircle.style.top = '100px';
        firstCircle.style.width = '250px';
        firstCircle.style.height = '250px';
        firstCircle.style.borderRadius = '125px';
        secondCircle.style.left = '35%';
        secondCircle.style.top = '320px';
        secondCircle.style.width = '150px';
        secondCircle.style.height = '150px';
        secondCircle.style.borderRadius = '75px';
        thirdCircle.style.left = '27%';
        thirdCircle.style.top = '470px';
        thirdCircle.style.width = '100px';
        thirdCircle.style.height = '100px';
        thirdCircle.style.borderRadius = '60px';
    } else if (document.body.clientWidth > 1200) {
        firstCircle.style.left = '10%';
        firstCircle.style.top = '100px';
        firstCircle.style.width = '250px';
        firstCircle.style.height = '250px';
        firstCircle.style.borderRadius = '125px';
        secondCircle.style.left = '27%';
        secondCircle.style.top = '320px';
        secondCircle.style.width = '150px';
        secondCircle.style.height = '150px';
        secondCircle.style.borderRadius = '75px';
        thirdCircle.style.left = '17%';
        thirdCircle.style.top = '470px';
        thirdCircle.style.width = '100px';
        thirdCircle.style.height = '100px';
        thirdCircle.style.borderRadius = '60px';
    } else if (document.body.clientWidth > 1000) {
        firstCircle.style.left = '7%';
        firstCircle.style.top = '100px';
        firstCircle.style.width = '250px';
        firstCircle.style.height = '250px';
        firstCircle.style.borderRadius = '125px';
        secondCircle.style.left = '27%';
        secondCircle.style.top = '320px';
        secondCircle.style.width = '150px';
        secondCircle.style.height = '150px';
        secondCircle.style.borderRadius = '75px';
        thirdCircle.style.left = '17%';
        thirdCircle.style.top = '470px';
        thirdCircle.style.width = '100px';
        thirdCircle.style.height = '100px';
        thirdCircle.style.borderRadius = '60px';
    } else if (document.body.clientWidth > 767) {
        firstCircle.style.left = '5%';
        firstCircle.style.top = '20%';
        firstCircle.style.width = '250px';
        firstCircle.style.height = '250px';
        firstCircle.style.borderRadius = '125px';
        secondCircle.style.left = 'calc(5% + 50px)';
        secondCircle.style.top = '75%';
        secondCircle.style.width = '150px';
        secondCircle.style.height = '150px';
        secondCircle.style.borderRadius = '75px';
        thirdCircle.style.left = 'calc(5% + 75px)';
        thirdCircle.style.top = '110%';
        thirdCircle.style.width = '100px';
        thirdCircle.style.height = '100px';
        thirdCircle.style.borderRadius = '60px';
    } else  {
        firstCircle.style.left = '5%';
        firstCircle.style.top = '20%';
        firstCircle.style.width = '150px';
        firstCircle.style.height = '150px';
        firstCircle.style.borderRadius = '125px';
        secondCircle.style.left = '5%';
        secondCircle.style.top = '65%';
        thirdCircle.style.left = '5%';
        thirdCircle.style.top = '105%';
        thirdCircle.style.width = '150px';
        thirdCircle.style.height = '150px';
        thirdCircle.style.borderRadius = '75px';
    }
}


firstCircle.addEventListener('mouseover', firstAction);
firstCircle.addEventListener('mouseleave', firstPassive);
firstText.addEventListener('mouseover', firstAction);
firstText.addEventListener('mouseleave', firstPassive);

function firstAction() {
    if (document.body.clientWidth > 1400) {
        firstCircle.style.width = '290px';
        firstCircle.style.height = '290px';
        firstCircle.style.borderRadius = '145px';
        firstCircle.style.left = 'calc(20% - 20px)';
        firstCircle.style.top = '80px';
        firstCircle.style.boxShadow = '0 0 50px rgba(186,85,211,1)';
    } else if (document.body.clientWidth > 1200) {
        firstCircle.style.width = '290px';
        firstCircle.style.height = '290px';
        firstCircle.style.borderRadius = '145px';
        firstCircle.style.left = 'calc(10% - 20px)';
        firstCircle.style.top = '80px';
        firstCircle.style.boxShadow = '0 0 50px rgba(186,85,211,1)';
    } else if (document.body.clientWidth > 1000) {
        firstCircle.style.width = '290px';
        firstCircle.style.height = '290px';
        firstCircle.style.borderRadius = '145px';
        firstCircle.style.left = 'calc(7% - 20px)';
        firstCircle.style.top = '80px';
        firstCircle.style.boxShadow = '0 0 50px rgba(186,85,211,1)';
    } else if (document.body.clientWidth > 767) {
        firstCircle.style.width = '290px';
        firstCircle.style.height = '290px';
        firstCircle.style.borderRadius = '145px';
        firstCircle.style.left = 'calc(5% - 20px)';
        firstCircle.style.top = 'calc(20% - 20px)';
        firstCircle.style.boxShadow = '0 0 50px rgba(186,85,211,1)';
    } else  {
        firstCircle.style.boxShadow = '0 0 50px rgba(186,85,211,1)';
    }

    firstText.style.background = '#BA55D3';
    firstText.style.color = 'white';
    firstText.style.boxShadow = '0 0 50px rgba(186,85,211,1)';
}

function firstPassive() {

    if (document.body.clientWidth > 1400) {
        firstCircle.style.width = '250px';
        firstCircle.style.height = '250px';
        firstCircle.style.borderRadius = '125px';
        firstCircle.style.left = '20%';
        firstCircle.style.top = '100px';
        firstCircle.style.boxShadow = 'none';
    } else if (document.body.clientWidth > 1200) {
        firstCircle.style.width = '250px';
        firstCircle.style.height = '250px';
        firstCircle.style.borderRadius = '125px';
        firstCircle.style.left = '10%';
        firstCircle.style.top = '100px';
        firstCircle.style.boxShadow = 'none';
    } else if (document.body.clientWidth > 1000) {
        firstCircle.style.width = '250px';
        firstCircle.style.height = '250px';
        firstCircle.style.borderRadius = '125px';
        firstCircle.style.left = '7%';
        firstCircle.style.top = '100px';
        firstCircle.style.boxShadow = 'none';
    } else if (document.body.clientWidth > 767) {
        firstCircle.style.width = '250px';
        firstCircle.style.height = '250px';
        firstCircle.style.borderRadius = '125px';
        firstCircle.style.left = '5%';
        firstCircle.style.top = '20%';
        firstCircle.style.boxShadow = 'none';
    } else  {
        firstCircle.style.boxShadow = 'none';
    }
    
    firstText.style.background = 'none';
    firstText.style.color = '#464646';
    firstText.style.boxShadow = 'none';
}

secondCircle.addEventListener('mouseover', secondAction);
secondCircle.addEventListener('mouseleave', secondPassive);
secondText.addEventListener('mouseover', secondAction);
secondText.addEventListener('mouseleave', secondPassive);

function secondAction() {

    if (document.body.clientWidth > 1400) {
        secondCircle.style.width = '180px';
        secondCircle.style.height = '180px';
        secondCircle.style.borderRadius = '140px';
        secondCircle.style.left = 'calc(35% - 15px)';
        secondCircle.style.top = '305px';
        secondCircle.style.boxShadow = '0 0 50px rgba(255, 158, 106, 1)';
    } else if (document.body.clientWidth > 1200) {
        secondCircle.style.width = '180px';
        secondCircle.style.height = '180px';
        secondCircle.style.borderRadius = '140px';
        secondCircle.style.left = 'calc(27% - 15px)';
        secondCircle.style.top = '305px';
        secondCircle.style.boxShadow = '0 0 50px rgba(255, 158, 106, 1)';
    } else if (document.body.clientWidth > 1000) {
        secondCircle.style.width = '180px';
        secondCircle.style.height = '180px';
        secondCircle.style.borderRadius = '140px';
        secondCircle.style.left = 'calc(27% - 15px)';
        secondCircle.style.top = '305px';
        secondCircle.style.boxShadow = '0 0 50px rgba(255, 158, 106, 1)';
    } else if (document.body.clientWidth > 767) {
        secondCircle.style.width = '180px';
        secondCircle.style.height = '180px';
        secondCircle.style.borderRadius = '140px';
        secondCircle.style.left = 'calc(5% + 35px)';
        secondCircle.style.top = 'calc(75% - 15px)';
        secondCircle.style.boxShadow = '0 0 50px rgba(255, 158, 106, 1)';
    } else  {
        secondCircle.style.left = '5%';
        secondCircle.style.top = '65%';
        secondCircle.style.boxShadow = '0 0 50px rgba(186,85,211,1)';
    }

    secondText.style.background = 'rgb(255, 158, 106)';
    secondText.style.color = 'white';
    secondText.style.boxShadow = '0 0 50px rgba(255, 158, 106, 1)';
}

function secondPassive() {
    if (document.body.clientWidth > 1400) {
        secondCircle.style.width = '150px';
        secondCircle.style.height = '150px';
        secondCircle.style.borderRadius = '75px';
        secondCircle.style.left = '35%';
        secondCircle.style.top = '320px';
        secondCircle.style.boxShadow = 'none';
    } else if (document.body.clientWidth > 1200) {
        secondCircle.style.width = '150px';
        secondCircle.style.height = '150px';
        secondCircle.style.borderRadius = '75px';
        secondCircle.style.left = '27%';
        secondCircle.style.top = '320px';
        secondCircle.style.boxShadow = 'none';
    } else if (document.body.clientWidth > 1000) {
        secondCircle.style.width = '150px';
        secondCircle.style.height = '150px';
        secondCircle.style.borderRadius = '75px';
        secondCircle.style.left = '27%';
        secondCircle.style.top = '320px';
        secondCircle.style.boxShadow = 'none';
    } else if (document.body.clientWidth > 767) {
        secondCircle.style.width = '150px';
        secondCircle.style.height = '150px';
        secondCircle.style.borderRadius = '75px';
        secondCircle.style.left = 'calc(5% + 50px)';
        secondCircle.style.top = '75%';
        secondCircle.style.boxShadow = 'none';
    } else  {
        secondCircle.style.left = '5%';
        secondCircle.style.top = '65%';
        secondCircle.style.boxShadow = 'none';
    }
    
    secondText.style.background = 'none';
    secondText.style.color = '#464646';
    secondText.style.boxShadow = 'none';
}

thirdCircle.addEventListener('mouseover', thirdAction);
thirdCircle.addEventListener('mouseleave', thirdPassive);
thirdText.addEventListener('mouseover', thirdAction);
thirdText.addEventListener('mouseleave', thirdPassive);

function thirdAction() {

    if (document.body.clientWidth > 1400) {
        thirdCircle.style.width = '120px';
        thirdCircle.style.height = '120px';
        thirdCircle.style.borderRadius = '60px';
        thirdCircle.style.left = 'calc(27% - 10px)';
        thirdCircle.style.top = '460px';
        thirdCircle.style.boxShadow = '0 0 50px rgb(106, 90, 205)';
    } else if (document.body.clientWidth > 1200) {
        thirdCircle.style.width = '120px';
        thirdCircle.style.height = '120px';
        thirdCircle.style.borderRadius = '60px';
        thirdCircle.style.left = 'calc(17% - 10px)';
        thirdCircle.style.top = '460px';
        thirdCircle.style.boxShadow = '0 0 50px rgb(106, 90, 205)';
    } else if (document.body.clientWidth > 1000) {
        thirdCircle.style.width = '120px';
        thirdCircle.style.height = '120px';
        thirdCircle.style.borderRadius = '60px';
        thirdCircle.style.left = 'calc(17% - 10px)';
        thirdCircle.style.top = '460px';
        thirdCircle.style.boxShadow = '0 0 50px rgb(106, 90, 205)';
    } else if (document.body.clientWidth > 767) {
        thirdCircle.style.width = '120px';
        thirdCircle.style.height = '120px';
        thirdCircle.style.borderRadius = '60px';
        thirdCircle.style.left = 'calc(5% + 65px)';
        thirdCircle.style.top = 'calc(110% - 10px)';
        thirdCircle.style.boxShadow = '0 0 50px rgb(106, 90, 205)';
    } else  {
        thirdCircle.style.width = '150px';
        thirdCircle.style.height = '150px';
        thirdCircle.style.borderRadius = '75px';
        thirdCircle.style.left = '5%';
        thirdCircle.style.top = '105%';
        thirdCircle.style.boxShadow = '0 0 50px rgb(106, 90, 205)';
    }

    thirdText.style.background = 'rgb(106, 90, 205)';
    thirdText.style.color = 'white';
    thirdText.style.boxShadow = '0 0 50px rgb(106, 90, 205)';
}

function thirdPassive() {
    if (document.body.clientWidth > 1400) {
        thirdCircle.style.width = '100px';
        thirdCircle.style.height = '100px';
        thirdCircle.style.borderRadius = '60px';
        thirdCircle.style.left = '27%';
        thirdCircle.style.top = '470px';
        thirdCircle.style.boxShadow = 'none';
    } else if (document.body.clientWidth > 1200) {
        thirdCircle.style.width = '100px';
        thirdCircle.style.height = '100px';
        thirdCircle.style.borderRadius = '60px';
        thirdCircle.style.left = '17%';
        thirdCircle.style.top = '470px';
        thirdCircle.style.boxShadow = 'none';
    } else if (document.body.clientWidth > 1000) {
        thirdCircle.style.width = '100px';
        thirdCircle.style.height = '100px';
        thirdCircle.style.borderRadius = '60px';
        thirdCircle.style.left = '17%';
        thirdCircle.style.top = '470px';
        thirdCircle.style.boxShadow = 'none';
    } else if (document.body.clientWidth > 767) {
        thirdCircle.style.width = '100px';
        thirdCircle.style.height = '100px';
        thirdCircle.style.borderRadius = '60px';
        thirdCircle.style.left = 'calc(5% + 75px)';
        thirdCircle.style.top = '110%';
        thirdCircle.style.boxShadow = 'none';
    } else  {
        thirdCircle.style.width = '150px';
        thirdCircle.style.height = '150px';
        thirdCircle.style.borderRadius = '75px';
        thirdCircle.style.left = '5%';
        thirdCircle.style.top = '105%';
        thirdCircle.style.boxShadow = 'none';
    }
    
    thirdText.style.background = 'none';
    thirdText.style.color = 'white';
    thirdText.style.boxShadow = 'none';
}