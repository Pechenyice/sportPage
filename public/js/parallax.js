var parallaxH1 = document.getElementsByClassName('parallaxH1');
var paralaxIMG = document.getElementsByClassName('parallaxIMG');

document.addEventListener('scroll', parallax);

function parallax() {
    parallaxH1[0].style.transform = 'translate(0,' + pageYOffset*0.2 + 'px)';
    parallaxH1[1].style.transform = 'translate(0,' + pageYOffset*0.2 + 'px)';
    parallaxH1[2].style.transform = 'translate(0,' + pageYOffset*0.2 + 'px)';
    paralaxIMG[0].style.transform = 'translate(0,' + pageYOffset*0.3 + 'px)';
    paralaxIMG[0].style.zIndex = '-2';
}