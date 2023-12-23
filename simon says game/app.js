let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let body = document.querySelector("body");
let score = document.querySelector(".score");
let nm = score.querySelector("#name");
let add = score.querySelector("button");
let ul = score.querySelector("ul");

add.addEventListener("click", function () {
    if (started == false) {
        console.log("Game hajimaruzo");
        started = true;
        setTimeout(levelUp, 1000);
    }
    addName();
});

function addName() {
    if(nm.value != ""){
        let li = document.createElement("li");
        li.classList.add("name-item")
        ul.appendChild(li);
        li.innerText = `${nm.value} scored ${level}`;
        nm.value = "";
    }
}


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

    function sco() {
        let listItem = ul.children;
    
        // Loop through each list item and update its text content
        for (let i = 0; i < listItem.length; i++) {
            listItem[i].innerText = `${listItem[i].innerText.split(' ')[0]} scored ${level}`;
        }
    }

function checkAns (idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
            sco();
        }
    } else {
        h2.innerHTML = `Game Over. Your score was <b>${level}</b> press Enter to Start.`;
        reset();
    }
}

function btnPress () {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

function reset () {
    started = false;
    level = 0;
    userSeq = [];
    gameSeq = [];
    body.classList.add("redd");
    setTimeout(() => {
        body.classList.remove("redd");
    }, 300);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {          
    btn.addEventListener("click", btnPress)
}