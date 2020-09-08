var taskBlock = document.getElementsByClassName('task');
var taskConnect = document.getElementsByClassName('taskConnect');
var taskConnectActive = document.getElementsByClassName('taskConnectActive');
var taskActive = document.getElementsByClassName('taskActive');


console.log(taskBlock);
for (let i = 0; i < taskBlock.length; i++) {
    taskBlock[i].addEventListener('mouseover', ()=>{taskHovered(i);});
    taskBlock[i].addEventListener('mouseleave', ()=>{taskDisHovered(i);});
}

function taskHovered(iteration) {
    console.log(iteration);
    taskActive[iteration].style.width = '100%';
    taskActive[iteration].style.backgroundColor = '#FF9E6A';
    var currentIteration = 0;
    while (currentIteration < iteration) {
        if (currentIteration < 5) {
            taskConnectActive[currentIteration].style.width = '100%';
            if (!(iteration - currentIteration - 1)) taskConnectActive[currentIteration].style.backgroundColor = '#FF9E6A';
        } else if (currentIteration < 11) {
            taskConnectActive[currentIteration - 1].style.width = '100%';
            if (!(iteration - currentIteration - 1)) taskConnectActive[currentIteration - 1].style.backgroundColor = '#FF9E6A';
        } else {
            taskConnectActive[currentIteration - 2].style.width = '100%';
            if (!(iteration - currentIteration - 1)) taskConnectActive[currentIteration - 2].style.backgroundColor = '#FF9E6A';
        }
        taskActive[currentIteration].style.width = '100%';
        currentIteration++;
    }
}

function taskDisHovered(iteration) {
    console.log(iteration);
    taskActive[iteration].style.width = '0%';
    taskActive[iteration].style.backgroundColor = '#7CACE1';
    var currentIteration = 0;
    while (currentIteration < iteration) {
        if (currentIteration < 5) {
            taskConnectActive[currentIteration].style.width = '0%';
            taskConnectActive[currentIteration].style.backgroundColor = '#7CACE1';
        } else if (currentIteration < 11) {
            taskConnectActive[currentIteration - 1].style.width = '0%';
            taskConnectActive[currentIteration - 1].style.backgroundColor = '#7CACE1';
        } else {
            taskConnectActive[currentIteration - 2].style.width = '0%';
            taskConnectActive[currentIteration - 2].style.backgroundColor = '#7CACE1';
        }
        taskActive[currentIteration].style.width = '0%';
        currentIteration++;
    }
}