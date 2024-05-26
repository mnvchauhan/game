var timer = 61;
var score = 0;
var newhit = 0;
 

function increaseScore(){
    score = score + 10;
    document.querySelector("#scoreVal").textContent = score;
}
function makeBubble(){
var clutter = "";

for(var i = 0; i<=149;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML= clutter
}
function runTimer(){
    var timerr = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(timerr);
            document.querySelector("#pbtm").innerHTML =`<h1>Game Over</h1>`;
        }
    },1000)
}
function newhitt(){
   newhit =  Math.floor(Math.random()*10);
   document.querySelector("#hit").textContent = newhit;
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum =Number(dets.target.textContent)
    if(clickednum===newhit){
        increaseScore();
        makeBubble();
        newhitt();
    }

});
newhitt();
runTimer();
makeBubble();
// increaseScore();
