var taskBlock = document.getElementsByClassName('task');
var taskConnect = document.getElementsByClassName('taskConnect');
var taskConnectActive = document.getElementsByClassName('taskConnectActive');
var taskActive = document.getElementsByClassName('taskActive');


console.log(taskBlock);
for (let i = 0; i < taskBlock.length; i++) {
    taskBlock[i].addEventListener('mouseover', ()=>{taskHovered(i);});
    taskBlock[i].addEventListener('mouseleave', ()=>{taskDisHovered(i);});
    taskBlock[i].addEventListener('click', ()=>{clearInterval(timer); currentTask = i;mainApp(currentTask);});
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


var nextTask = document.getElementById('mainAppNextTask');
var prevTask = document.getElementById('mainAppPrevTask');
var mainHead = document.getElementById('mainAppHeadline');
var taskImg = document.getElementById('mainAppImage');
var taskDescription = document.getElementById('mainAppDescription');
var userTask = document.getElementById('mainAppUserTask');
var userTaskContent = document.getElementById('mainAppUserTaskContent');
var helpNextTask = document.getElementById('mainAppHelpNextTask');
var pause = document.getElementById('mainAppPauseTask');
var appContent = document.getElementById('mainAppContent');

var currentTask = 0;
var paused = 0;
var timer;
var timerCounter;

nextTask.addEventListener('mouseover', appButtonHoverer);
nextTask.addEventListener('mouseleave', appButtonDisHoverer);
prevTask.addEventListener('mouseover', appButton1Hoverer);
prevTask.addEventListener('mouseleave', appButton1DisHoverer);

function appButtonHoverer() {
    nextTask.style.backgroundColor = 'white';
    nextTask.style.color = 'black';
    nextTask.style.boxShadow = '0 0 10px white';
}

function appButtonDisHoverer() {
    nextTask.style.backgroundColor = 'rgba(0,0,0,0)';
    nextTask.style.color = 'white';
    nextTask.style.boxShadow = 'none';
}

function appButton1Hoverer() {
    prevTask.style.backgroundColor = 'white';
    prevTask.style.color = 'black';
    prevTask.style.boxShadow = '0 0 10px white';
}


function appButton1DisHoverer() {
    prevTask.style.backgroundColor = 'rgba(0,0,0,0)';
    prevTask.style.color = 'white';
    prevTask.style.boxShadow = 'none';
}


pause.addEventListener('click', () => {if (!paused){if (timer) clearInterval(timer); pause.innerHTML = '<i class="fas fa-play"></i>'; paused++;} else { pause.innerHTML = '<i class="fas fa-pause"></i>'; paused--; if (timerCounter) { timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); current += 0.5; mainApp(current);}}, 1000);}} });


nextTask.addEventListener('click', () => {if (currentTask < 14) {pause.innerHTML = '<i class="fas fa-pause"></i>'; clearInterval(timer); currentTask += 0.5;mainApp(currentTask);}});
prevTask.addEventListener('click', () => {if (currentTask > 0) {pause.innerHTML = '<i class="fas fa-pause"></i>'; clearInterval(timer); if (currentTask % 1){currentTask -= .5}else{currentTask--};mainApp(currentTask);}});

function mainApp(current) {
    switch (current) {
        case 0: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = '1. Приседания, 50 повторений';
                taskImg.setAttribute('src', '../../img/shoulders2.jpg');
                taskDescription.innerHTML = 'Поставьте ноги на ширине плеч. Носки смотрят немного в сторону. Приседайте до того момента, когда бедра будут параллельны земле.';
                userTask.innerHTML = 'Выполнить:';
                userTaskContent.innerHTML = '50 приседаний';
                helpNextTask.innerHTML = 'Следующее упражнение: Выпады, 40 повторений';
            },300);
            timerCounter = 0;
            break;
        }

        case 0.5: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = 'Отдых, подготовьтесь к упражнению';
                taskImg.setAttribute('src', '../../img/ass.jpg');
                taskDescription.innerHTML = 'Встаньте свободно, ноги на ширине плеч. Отведите одну ногу назад, колено вперед. Делайте пружинистые приседания и меняйте ногу.';
                userTask.innerHTML = 'Отдых:';
                userTaskContent.innerHTML = '30 секунд';
                helpNextTask.innerHTML = 'Следующее упражнение: Выпады, 40 повторений';
            },300);
            timerCounter = 29;
            timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); currentTask += 0.5; mainApp(currentTask);}}, 1000);
            break;
        }

        case 1: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = '2. Выпады, 40 повторений';
                taskImg.setAttribute('src', '../../img/ass.jpg');
                taskDescription.innerHTML = 'Встаньте свободно, ноги на ширине плеч. Отведите одну ногу назад, колено вперед. Делайте пружинистые приседания и меняйте ногу.';
                userTask.innerHTML = 'Выполнить:';
                userTaskContent.innerHTML = '40 выпадов';
                helpNextTask.innerHTML = 'Следующее упражнение: Махи ногой, 40 повторений';
            },300);
            timerCounter = 0;
            break;
        }

        case 1.5: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = 'Отдых, подготовьтесь к упражнению';
                taskImg.setAttribute('src', '../../img/shoulders2.jpg');
                taskDescription.innerHTML = 'Встаньте на четвереньки. Медленно поднимайте ногу, пока она не образует прямую линию со спиной. Меняйте ногу.';
                userTask.innerHTML = 'Отдых:';
                userTaskContent.innerHTML = '30 секунд';
                helpNextTask.innerHTML = 'Следующее упражнение: Махи ногой, 40 повторений';
            },300);
            timerCounter = 29;
            timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); currentTask += 0.5; mainApp(currentTask);}}, 1000);
            break;
        }

        case 2: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = '3. Махи ногой, 40 повторений';
                taskImg.setAttribute('src', '../../img/shoulders2.jpg');
                taskDescription.innerHTML = 'Встаньте на четвереньки. Медленно поднимайте ногу, пока она не образует прямую линию со спиной. Меняйте ногу.';
                userTask.innerHTML = 'Выполнить:';
                userTaskContent.innerHTML = '40 махов';
                helpNextTask.innerHTML = 'Следующее упражнение: Поднятие ног, 40 повторений';
            },300);
            timerCounter = 0;
            break;
        }

        case 2.5: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = 'Отдых, подготовьтесь к упражнению';
                taskImg.setAttribute('src', '../../img/ass.jpg');
                taskDescription.innerHTML = 'Лягте на бог и поднимайте ногу примерно на 45°. Меняйте ноги.';
                userTask.innerHTML = 'Отдых:';
                userTaskContent.innerHTML = '30 секунд';
                helpNextTask.innerHTML = 'Следующее упражнение: Поднятие ног, 40 повторений';
            },300);
            timerCounter = 29;
            timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); currentTask += 0.5; mainApp(currentTask);}}, 1000);
            break;
        }

        case 3: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = '4. Поднятие ног, 40 повторений';
                taskImg.setAttribute('src', '../../img/ass.jpg');
                taskDescription.innerHTML = 'Лягте на бог и поднимайте ногу примерно на 45°. Меняйте ноги.';
                userTask.innerHTML = 'Выполнить:';
                userTaskContent.innerHTML = '40 Махов';
                helpNextTask.innerHTML = 'Следующее упражнение: Приседания, 40 повторений';
            },300);
            timerCounter = 0;
            break;
        }

        case 3.5: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = 'Отдых, подготовьтесь к упражнению';
                taskImg.setAttribute('src', '../../img/shoulders2.jpg');
                taskDescription.innerHTML = 'Поставьте ноги на ширине плеч. Носки смотрят немного в сторону. Приседайте до того момента, когда бедра будут параллельны земле.';
                userTask.innerHTML = 'Отдых:';
                userTaskContent.innerHTML = '30 секунд';
                helpNextTask.innerHTML = 'Следующее упражнение: Приседания, 40 повторений';
            },300);
            timerCounter = 29;
            timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); currentTask += 0.5; mainApp(currentTask);}}, 1000);
            break;
        }

        case 4: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = '5. Приседания, 40 повторений';
                taskImg.setAttribute('src', '../../img/shoulders2.jpg');
                taskDescription.innerHTML = 'Поставьте ноги на ширине плеч. Носки смотрят немного в сторону. Приседайте до того момента, когда бедра будут параллельны земле.';
                userTask.innerHTML = 'Выполнить:';
                userTaskContent.innerHTML = '40 приседаний';
                helpNextTask.innerHTML = 'Следующее упражнение: Махи ногами стоя, 40 повторений';
            },300);
            timerCounter = 0;
            break;
        }

        case 4.5: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = 'Отдых, подготовьтесь к упражнению';
                taskImg.setAttribute('src', '../../img/ass.jpg');
                taskDescription.innerHTML = 'Встаньте свободно, ноги на ширине плеч. Отводите ногу в стороны примерно на 45°. Меняйте ноги.';
                userTask.innerHTML = 'Отдых:';
                userTaskContent.innerHTML = '30 секунд';
                helpNextTask.innerHTML = 'Следующее упражнение: Махи ногами стоя, 40 повторений';
            },300);
            timerCounter = 29;
            timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); currentTask += 0.5; mainApp(currentTask);}}, 1000);
            break;
        }

        case 5: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = '6. Махи ногами стоя, 40 повторений';
                taskImg.setAttribute('src', '../../img/ass.jpg');
                taskDescription.innerHTML = 'Встаньте свободно, ноги на ширине плеч. Отводите ногу в стороны примерно на 45°. Меняйте ноги.';
                userTask.innerHTML = 'Выполнить:';
                userTaskContent.innerHTML = '40 махов';
                helpNextTask.innerHTML = 'Следующее упражнение: Мостик, 40 повторений';
            },300);
            timerCounter = 0;
            break;
        }

        case 5.5: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = 'Отдых, подготовьтесь к упражнению';
                taskImg.setAttribute('src', '../../img/shoulders2.jpg');
                taskDescription.innerHTML = 'Лягте на спину. Облокотитесь на локти и поднимайте тело, пока не образуется прямая линия с животом.';
                userTask.innerHTML = 'Отдых:';
                userTaskContent.innerHTML = '30 секунд';
                helpNextTask.innerHTML = 'Следующее упражнение: Мостик, 40 повторений';
            },300);
            timerCounter = 29;
            timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); currentTask += 0.5; mainApp(currentTask);}}, 1000);
            break;
        }

        case 6: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = '7. Мостик, 40 повторений';
                taskImg.setAttribute('src', '../../img/shoulders2.jpg');
                taskDescription.innerHTML = 'Лягте на спину. Облокотитесь на локти и поднимайте тело, пока не образуется прямая линия с животом.';
                userTask.innerHTML = 'Выполнить:';
                userTaskContent.innerHTML = '40 подъемов';
                helpNextTask.innerHTML = 'Следующее упражнение: "Велосипед, 60 секунд"';
            },300);
            timerCounter = 0;
            break;
        }

        case 6.5: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = 'Отдых, подготовьтесь к упражнению';
                taskImg.setAttribute('src', '../../img/ass.jpg');
                taskDescription.innerHTML = 'Лягте на пол. Поднимите ноги и делайте вид, что крутите педали.';
                userTask.innerHTML = 'Отдых:';
                userTaskContent.innerHTML = '30 секунд';
                helpNextTask.innerHTML = 'Следующее упражнение: "Велосипед, 60 секунд"';
            },300);
            timerCounter = 29;
            timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); currentTask += 0.5; mainApp(currentTask);}}, 1000);
            break;
        }

        case 7: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = '8. "Велосипед", 60 секунд';
                taskImg.setAttribute('src', '../../img/ass.jpg');
                taskDescription.innerHTML = 'Лягте на пол. Поднимите ноги и делайте вид, что крутите педали.';
                userTask.innerHTML = 'Продержаться:';
                userTaskContent.innerHTML = '60 секунд';
                helpNextTask.innerHTML = 'Следующее упражнение: Скакалка, 150 прыжков';
            },300);
            timerCounter = 59;
            timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); current += 0.5; mainApp(current);}}, 1000);
            break;
        }

        case 7.5: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = 'Отдых, подготовьтесь к упражнению';
                taskImg.setAttribute('src', '../../img/shoulders2.jpg');
                taskDescription.innerHTML = 'Просто возьмите скакалку и прыгайте!';
                userTask.innerHTML = 'Отдых:';
                userTaskContent.innerHTML = '30 секунд';
                helpNextTask.innerHTML = 'Следующее упражнение: Скакалка, 150 прыжков';
            },300);
            timerCounter = 29;
            timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); currentTask += 0.5; mainApp(currentTask);}}, 1000);
            break;
        }

        case 8: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = '9. Скакалка, 150 повторений';
                taskImg.setAttribute('src', '../../img/shoulders2.jpg');
                taskDescription.innerHTML = 'Просто возьмите скакалку и прыгайте!';
                userTask.innerHTML = 'Выполнить:';
                userTaskContent.innerHTML = '150 прыжков';
                helpNextTask.innerHTML = 'Следующее упражнение: Приседания, 40 повторений';
            },300);
            timerCounter = 0;
            break;
        }

        case 8.5: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = 'Отдых, подготовьтесь к упражнению';
                taskImg.setAttribute('src', '../../img/ass.jpg');
                taskDescription.innerHTML = 'Поставьте ноги на ширине плеч. Носки смотрят немного в сторону. Приседайте до того момента, когда бедра будут параллельны земле.';
                userTask.innerHTML = 'Отдых:';
                userTaskContent.innerHTML = '30 секунд';
                helpNextTask.innerHTML = 'Следующее упражнение: Приседания, 40 повторений';
            },300);
            timerCounter = 29;
            timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); currentTask += 0.5; mainApp(currentTask);}}, 1000);
            break;
        }


        case 9: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = '10. Приседания, 40 повторений';
                taskImg.setAttribute('src', '../../img/ass.jpg');
                taskDescription.innerHTML = 'Поставьте ноги на ширине плеч. Носки смотрят немного в сторону. Приседайте до того момента, когда бедра будут параллельны земле.';
                userTask.innerHTML = 'Выполнить:';
                userTaskContent.innerHTML = '40 приседаний';
                helpNextTask.innerHTML = 'Следующее упражнение: Махи с утяжелителем, 20 повторений';
            },300);
            timerCounter = 0;
            break;
        }

        case 9.5: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = 'Отдых, подготовьтесь к упражнению';
                taskImg.setAttribute('src', '../../img/shoulders2.jpg');
                taskDescription.innerHTML = 'Возьмите что-то тяжелое, к примеру, гантели. Встаньте на четвереньки, положите их на ноги и поднимайте ноги.';
                userTask.innerHTML = 'Отдых:';
                userTaskContent.innerHTML = '30 секунд';
                helpNextTask.innerHTML = 'Следующее упражнение: Махи с утяжелителем, 20 повторений';
            },300);
            timerCounter = 29;
            timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); currentTask += 0.5; mainApp(currentTask);}}, 1000);
            break;
        }

        case 10: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = '11. Махи с утяжелителем, 20 повторений';
                taskImg.setAttribute('src', '../../img/shoulders2.jpg');
                taskDescription.innerHTML = 'Возьмите что-то тяжелое, к примеру, гантели. Встаньте на четвереньки, положите их на ноги и поднимайте ноги.';
                userTask.innerHTML = 'Выполнить:';
                userTaskContent.innerHTML = '20 махов';
                helpNextTask.innerHTML = 'Следующее упражнение: Выпрыгивания, 15 повторений';
            },300);
            timerCounter = 0;
            break;
        }

        case 10.5: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = 'Отдых, подготовьтесь к упражнению';
                taskImg.setAttribute('src', '../../img/ass.jpg');
                taskDescription.innerHTML = 'Встаньте свободно, ноги на ширине плеч. Присядьте и с силой выпрыгните наверх.';
                userTask.innerHTML = 'Отдых:';
                userTaskContent.innerHTML = '30 секунд';
                helpNextTask.innerHTML = 'Следующее упражнение: Выпрыгивания, 15 повторений';
            },300);
            timerCounter = 29;
            timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); currentTask += 0.5; mainApp(currentTask);}}, 1000);
            break;
        }

        case 11: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = '12. Выпрыгивания, 15 повторений';
                taskImg.setAttribute('src', '../../img/ass.jpg');
                taskDescription.innerHTML = 'Встаньте свободно, ноги на ширине плеч. Присядьте и с силой выпрыгните наверх.';
                userTask.innerHTML = 'Выполнить:';
                userTaskContent.innerHTML = '15 прыжков';
                helpNextTask.innerHTML = 'Следующее упражнение: Болгарские приседания, 20 повторений';
            },300);
            timerCounter = 0;
            break;
        }

        case 11.5: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = 'Отдых, подготовьтесь к упражнению';
                taskImg.setAttribute('src', '../../img/shoulders2.jpg');
                taskDescription.innerHTML = 'Вытяните одну ногу назад и положите ее на скамейку. Приседайте, напрягая вторую ногу. Не забывайте менять их.';
                userTask.innerHTML = 'Отдых:';
                userTaskContent.innerHTML = '30 секунд';
                helpNextTask.innerHTML = 'Следующее упражнение: Болгарские приседания, 20 повторений';
            },300);
            timerCounter = 29;
            timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); currentTask += 0.5; mainApp(currentTask);}}, 1000);
            break;
        }

        case 12: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = '13. Болгарские приседания';
                taskImg.setAttribute('src', '../../img/shoulders2.jpg');
                taskDescription.innerHTML = 'Вытяните одну ногу назад и положите ее на скамейку. Приседайте, напрягая вторую ногу. Не забывайте менять их.';
                userTask.innerHTML = 'Выполнить:';
                userTaskContent.innerHTML = '20 приседаний';
                helpNextTask.innerHTML = 'Следующее упражнение: планка, 60 секунд';
            },300);
            timerCounter = 0;
            break;
        }

        case 12.5: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = 'Отдых, подготовьтесь к упражнению';
                taskImg.setAttribute('src', '../../img/ass.jpg');
                taskDescription.innerHTML = 'Лягье на живот, облокотитесь на локти и поддерживайте прямую линию со спиной';
                userTask.innerHTML = 'Отдых:';
                userTaskContent.innerHTML = '30 секунд';
                helpNextTask.innerHTML = 'Следующее упражнение: планка, 60 секунд';
            },300);
            timerCounter = 29;
            timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); currentTask += 0.5; mainApp(currentTask);}}, 1000);
            break;
        }


        case 13: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = '14. Планка, 60 секунд';
                taskImg.setAttribute('src', '../../img/ass.jpg');
                taskDescription.innerHTML = 'Лягте на живот, облокотитесь на локти и поддерживайте прямую линию со спиной';
                userTask.innerHTML = 'Продержаться:';
                userTaskContent.innerHTML = '60 секунд';
                helpNextTask.innerHTML = 'Следующее упражнение: Приседания, 30 повторений';
            },300);
            timerCounter = 59;
            timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); current += 0.5; mainApp(current);}}, 1000);
            break;
        }

        case 13.5: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = 'Отдых, подготовьтесь к упражнению';
                taskImg.setAttribute('src', '../../img/shoulders2.jpg');
                taskDescription.innerHTML = 'Поставьте ноги на ширине плеч. Носки смотрят немного в сторону. Приседайте до того момента, когда бедра будут параллельны земле.';
                userTask.innerHTML = 'Отдых:';
                userTaskContent.innerHTML = '30 секунд';
                helpNextTask.innerHTML = 'Следующее упражнение: Приседания, 30 повторений';
            },300);
            timerCounter = 29;
            timer = setInterval(() => {this.userTaskContent.innerHTML = timerCounter + ' секунд';if (timerCounter % 10 == 1) this.userTaskContent.innerHTML = timerCounter + ' секундa'; if (timerCounter % 10 == 2) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 3) this.userTaskContent.innerHTML = timerCounter + ' секунды'; if (timerCounter % 10 == 4) this.userTaskContent.innerHTML = timerCounter + ' секунды'; timerCounter--;if (!timerCounter) {clearInterval(timer); currentTask += 0.5; mainApp(currentTask);}}, 1000);
            break;
        }

        case 14: {
            appContent.style.opacity = '0';
            setTimeout(()=>{appContent.style.opacity = '1'}, 400);
            setTimeout(()=>{
                mainHead.innerHTML = '15. Приседания, 30 повторений';
                taskImg.setAttribute('src', '../../img/shoulders2.jpg');
                taskDescription.innerHTML = 'Поставьте ноги на ширине плеч. Носки смотрят немного в сторону. Приседайте до того момента, когда бедра будут параллельны земле.';
                userTask.innerHTML = 'Выполнить:';
                userTaskContent.innerHTML = '30 приседаний';
                helpNextTask.innerHTML = 'Поздравляем с выполнением тренировки, это последнее упражнение!';
            },300);
            timerCounter = 0;
            break;
        }
    }
}