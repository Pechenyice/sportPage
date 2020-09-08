var preloader = document.getElementById('preloader');
var preloaderLoading = document.getElementById('preloadLoad');
var loadValue = 0;
document.body.style.overflowY = 'hidden';
var intervalLoading = setInterval(loading, 70);
window.addEventListener('load', function() {setTimeout(preload, 1000);});

function preload() {
    preloader.style.opacity = 0;
    preloader.style.zIndex = -1;
    document.body.style.overflowY = 'scroll';
    clearInterval(this.intervalLoading);
}

function loading() {
    if(loadValue <= 90) loadValue += 10;
    preloaderLoading.innerHTML = loadValue + '%';
}