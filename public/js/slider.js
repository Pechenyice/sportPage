var curs = document.getElementById('resizeAreaCursor');
var block = document.getElementById('resizeArea');
var animation = document.getElementById('resizeAreaAction');
var pressed;

curs.addEventListener('mouseover', function() {curs.style.color = '#FF9E6A';});
curs.addEventListener('mouseleave', function() {curs.style.color = '#464646';});
curs.addEventListener('mousedown', function() {pressed = 1;curs.style.color = '#FF9E6A';});
curs.addEventListener('mouseup', function() {pressed = 0;curs.style.color = '#464646';});
block.addEventListener('mouseup', function() {pressed = 0;curs.style.color = '#464646';});
block.addEventListener('mousemove', () => {check();if (pressed) curs.style.color = '#FF9E6A';});

function check() {
    if(pressed) {
        if (document.body.clientWidth > 1000) {
            var width = document.getElementsByClassName('Container')[0].clientWidth;
            var num = event.clientX - width * 0.26;
            if (num > width * 0.48 - 25) num = width * 0.48 - 25;
            if (num < 25) num = 25;
            curs.style.left = num - 25 + 'px';
            animation.style.width = num + 'px';
            block.style.cursor = "w-resize";
        } else if (document.body.clientWidth > 767) {
            var width = document.getElementsByClassName('Container')[0].clientWidth;
            var num = event.clientX - width * 0.17;
            if (num > width * 0.66 - 25) num = width * 0.66 - 25;
            if (num < 25) num = 25;
            curs.style.left = num - 25 + 'px';
            animation.style.width = num + 'px';
            block.style.cursor = "w-resize";
        } else {
            var width = document.getElementsByClassName('Container')[0].clientWidth;
            var num = event.clientX - width * 0.08;
            if (num > width * 0.84 - 25) num = width * 0.84 - 25;
            if (num < 25) num = 25;
            curs.style.left = num - 25 + 'px';
            animation.style.width = num + 'px';
            block.style.cursor = "w-resize";
        }
    }
}