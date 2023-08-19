var timer=60;
var score=0;
var hitnum=0;

function increaseScore(){
    score +=10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit(){
    hitnum = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitnum;
}

function makeBubble(){
    var clutter="";
for(var i=1; i<=300; i++){
    var num=Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${num}</div>`;
}
document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function () {
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML =  `<h1>Game over</h1>`;
        }
    }, 1000);
}

document.querySelector("#pbottom").addEventListener("click", function (dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitnum){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

runTimer();
makeBubble();
getNewHit();
