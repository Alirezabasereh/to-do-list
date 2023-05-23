let _taskadder
let addcount = -1
let texttemp
let colorpick
let tempcolor
let parentTask
let highLevelTasks
let midLevelTasks
let lowLevelTasks
let datetime


function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;

    let time = hh + ":" + mm + " " + session;

    document.getElementsByTagName("h3")[0].innerText = time;
    let t = setTimeout(function () { currentTime() }, 1000);
}
currentTime();


let username = prompt('enter you fullname:')
document.getElementById('userfirstname').innerText = username + "!"

function para(tempcolor) {
    colorpick = tempcolor.title
}

function taskadding() {

    addcount++
    _taskadder = document.createElement('div')
    document.getElementById('tasks').appendChild(_taskadder)
    document.getElementById('tasks').children[addcount].classList.add('taskmain')
    document.getElementById('tasks').children[addcount].classList.add('list' + addcount)
    _taskadder1 = document.createElement('div')
    document.getElementsByClassName('taskmain')[addcount].appendChild(_taskadder1)
    document.getElementsByClassName('taskmain')[addcount].children[0].classList.add('taskmain1')
    _taskadder2 = document.createElement('div')
    document.getElementsByClassName('taskmain1')[addcount].appendChild(_taskadder2)
    _taskadder3 = document.createElement('div')
    document.getElementsByClassName('taskmain')[addcount].appendChild(_taskadder3)
    texttemp = document.getElementById("usertext").value
    document.getElementsByClassName("taskmain")[addcount].children[1].innerHTML = texttemp
    document.getElementsByClassName("taskmain")[addcount].children[1].classList.add("textcheck" + addcount)
    document.getElementsByClassName("taskmain")[addcount].children[1].setAttribute('contenteditable', 'true')
    _taskadder4 = document.createElement('div')
    document.getElementsByClassName("taskmain")[addcount].appendChild(_taskadder4)
    document.getElementsByClassName("taskmain")[addcount].children[2].innerHTML = '<i class="bi bi-check-circle"></i>'
    document.getElementsByClassName("taskmain")[addcount].children[2].children[0].setAttribute('id', 'textcheck' + addcount)
    document.getElementsByClassName("taskmain")[addcount].children[2].children[0].setAttribute('onclick', 'textchecker(event)')
    _taskadder5 = document.createElement('div')
    document.getElementsByClassName("taskmain")[addcount].appendChild(_taskadder5)
    document.getElementsByClassName("taskmain")[addcount].children[3].innerHTML = '<i class="bi bi-x-circle"></i>'
    document.getElementsByClassName("taskmain")[addcount].children[3].children[0].setAttribute('id', 'list' + addcount)
    document.getElementsByClassName("taskmain")[addcount].children[3].children[0].setAttribute('onclick', 'taskdeleter(event)')
    if (colorpick == 'high') {
        document.getElementsByClassName('taskmain1')[addcount].children[0].classList.add('highlevel')
    }
    if (colorpick == 'mid') {
        document.getElementsByClassName('taskmain1')[addcount].children[0].classList.add('midlevel')
    }
    if (colorpick == 'low') {
        document.getElementsByClassName('taskmain1')[addcount].children[0].classList.add('lowlevel')
    }
    document.getElementById('usertext').value = null
    document.getElementById('usertext').focus()

}
function taskdeleter(e) {
    let buttonclick = e.target.id
    console.log(buttonclick);
    document.getElementsByClassName(buttonclick)[0].classList.add('deleter')
}
function textchecker(t) {
    let checktext = t.target.id
    console.log(checktext);
    document.getElementsByClassName(checktext)[0].classList.toggle('checking')
}
document.getElementById('highpriority').addEventListener('click', function () {
    midLevelTasks = document.querySelectorAll('.taskmain .midlevel');
    midLevelTasks.forEach(midLevels => {
        parentTask = midLevels.closest('.taskmain');
        parentTask.classList.toggle('visibility')
    });
    lowLevelTasks = document.querySelectorAll('.taskmain .lowlevel');
    lowLevelTasks.forEach(lowLevels => {
        parentTask = lowLevels.closest('.taskmain');
        parentTask.classList.toggle('visibility')
    });
})
document.getElementById('mediumpriority').addEventListener('click', function () {
    highLevelTasks = document.querySelectorAll('.taskmain .highlevel');
    highLevelTasks.forEach(highLevels => {
        parentTask = highLevels.closest('.taskmain');
        parentTask.classList.toggle('visibility')
    });
    lowLevelTasks = document.querySelectorAll('.taskmain .lowlevel');
    lowLevelTasks.forEach(lowLevels => {
        parentTask = lowLevels.closest('.taskmain');
        parentTask.classList.toggle('visibility')
    });
})
document.getElementById('lowpriority').addEventListener('click', function () {
    highLevelTasks = document.querySelectorAll('.taskmain .highlevel');
    highLevelTasks.forEach(highLevels => {
        parentTask = highLevels.closest('.taskmain');
        parentTask.classList.toggle('visibility')
    });
    midLevelTasks = document.querySelectorAll('.taskmain .midlevel');
    midLevelTasks.forEach(midLevels => {
        parentTask = midLevels.closest('.taskmain');
        parentTask.classList.toggle('visibility')
    });
})