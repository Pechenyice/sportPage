// var menuUsorsArea = document.getElementById('absoluteMenu');
// var menuFirstUsor = document.getElementById('menuUsorBorderCircle');
// var menuSecondUsor = document.getElementById('menuUsorBorderSecondCircle');
// menuUsorsArea.addEventListener('mouseover', menuCursorParallax);
// menuUsorsArea.addEventListener('mousemove', menuCursorParallax);
// function menuCursorParallax(event) {


//     var horisontalParallaxPercent = (Math.round(event.pageX / document.body.clientWidth * 100) - 50) / 50;
//     menuFirstUsor.style.left = 'calc(5% + ' + -horisontalParallaxPercent + '%)';
//     menuSecondUsor.style.right = 'calc(10% + ' + -horisontalParallaxPercent * 2.5 + '%)';
//     var verticalParallaxPercent = (Math.round(event.pageY / document.body.clientHeight * 100) - 50) / 50;
//     menuFirstUsor.style.top = 'calc(5vh + ' + -verticalParallaxPercent + 'vh)';
//     menuSecondUsor.style.bottom = 'calc(8% + ' + (-verticalParallaxPercent * 2) + 'vh)';
// }

// if (!menuMoverTimer) var menuMoverTimer = setInterval(menuFirstUsorTranslator, 500);

// function menuFirstUsorTranslator() {
//     var RandomA = Math.round(Math.random() * 5 + 5);
//     var RandomB = Math.round(Math.random() * 5 + 5);


//     menuFirstUsor.style.transform = 'translate(' + RandomA + 'px,' + RandomB + 'px)';
//     menuFirstUsor.style.left = menuFirstUsor.getBoundingClientRect().left;
//     menuFirstUsor.style.top = menuFirstUsor.getBoundingClientRect().top;
// }