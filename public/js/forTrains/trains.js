var trainsParallaxArea = document.getElementById('trainsName');
trainsParallaxArea.addEventListener('mouseover', trainsCursorParallax);
trainsParallaxArea.addEventListener('mousemove', trainsCursorParallax);

function trainsCursorParallax(event) {

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

    if (document.getElementById('trainsName').getBoundingClientRect().top - document.body.clientHeight <= 0) {
        document.getElementById('trainsName').style.backgroundColor = 'rgb(39,39,39)';

        document.getElementById('firstParallaxP').style.color = 'rgb(237,237,237)';
        document.getElementById('secondParallaxP').style.color = 'rgb(237,237,237)';
        document.getElementById('thirdParallaxP').style.color = 'rgb(237,237,237)';
        document.getElementById('fourthParallaxP').style.color = 'rgb(237,237,237)';
        document.getElementById('fifthParallaxP').style.color = 'rgb(237,237,237)';
        document.getElementById('sixthParallaxP').style.color = 'rgb(237,237,237)';
    } 

    if (document.getElementById('trainsName').getBoundingClientRect().top - document.body.clientHeight >= -699) {
        document.getElementById('trainsName').style.backgroundColor = 'rgb(237,237,237)';

        document.getElementById('firstParallaxP').style.color = 'rgb(39,39,39)';
        document.getElementById('secondParallaxP').style.color = 'rgb(39,39,39)';
        document.getElementById('thirdParallaxP').style.color = 'rgb(39,39,39)';
        document.getElementById('fourthParallaxP').style.color = 'rgb(39,39,39)';
        document.getElementById('fifthParallaxP').style.color = 'rgb(39,39,39)';
        document.getElementById('sixthParallaxP').style.color = 'rgb(39,39,39)';
    } 
    
    if (document.getElementById('trainsName').getBoundingClientRect().top - document.body.clientHeight <= 0 && document.getElementById('trainsName').getBoundingClientRect().top - document.body.clientHeight >= -700) {
        heightOst = 700 + document.getElementById('trainsName').getBoundingClientRect().top - document.body.clientHeight;
        var backColorConnect = Math.floor(39 + heightOst / 2.95);
        document.getElementById('trainsName').style.backgroundColor = 'rgb('+backColorConnect+','+backColorConnect+','+backColorConnect+')';

        var colorConnect = Math.floor(237 - heightOst / 3.5);

        document.getElementById('firstParallaxP').style.color = 'rgb('+colorConnect+','+colorConnect+','+colorConnect+')';
        document.getElementById('secondParallaxP').style.color = 'rgb('+colorConnect+','+colorConnect+','+colorConnect+')';
        document.getElementById('thirdParallaxP').style.color = 'rgb('+colorConnect+','+colorConnect+','+colorConnect+')';
        document.getElementById('fourthParallaxP').style.color = 'rgb('+colorConnect+','+colorConnect+','+colorConnect+')';
        document.getElementById('fifthParallaxP').style.color = 'rgb('+colorConnect+','+colorConnect+','+colorConnect+')';
        document.getElementById('sixthParallaxP').style.color = 'rgb('+colorConnect+','+colorConnect+','+colorConnect+')';
    }

}