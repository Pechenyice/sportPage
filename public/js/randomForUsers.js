document.getElementById('randomReAdressDivBorder').addEventListener('mouseover', randomTrain);

function randomTrain() {
    var rand = Math.floor(Math.random()*4);
    switch (rand) {
        case 0: {
            document.getElementById('randomReAdress').setAttribute('href','html/trains.html');
            break;
        }
        case 1: {
            document.getElementById('randomReAdress').setAttribute('href','html/programms.html');
            break;
        }
        case 2: {
            document.getElementById('randomReAdress').setAttribute('href','html/complexes.html');
            break;
        }
        case 3: {
            document.getElementById('randomReAdress').setAttribute('href','html/constructor.html');
            break;
        }
    }
}
