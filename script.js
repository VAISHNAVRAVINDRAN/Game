var touch = document.querySelector(".touch");
var dino = document.querySelector(".dino");
var go = document.querySelector(".game-over");
var obstacle = document.querySelector(".obstacle");
var scoreVal = document.querySelector(".score-value");
touch.addEventListener('click', () => {
dino.classList.add("jump");
setTimeout(function () {
dino.classList.remove("jump");  
},600);
});
setInterval(function () {
var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
if(obstacleLeft<40 && obstacleLeft>0 && dinoTop>=130) {
obstacle.style.animation = "none";
obstacle.style.left = obstacleLeft + "px";
dino.style.top = dinoTop + "px";
go.style.display = "flex";
}
else{
var score = parseInt(scoreVal.innerText);
scoreVal.innerText=score+1;
if(score==300){
    speed();
}
else if(score == 600){
    speed1();
}
else if(score==1200){
    speed2();
}
}
},100);
function speed() {
    obstacle.style.animationDuration = '1.5s';
}
function speed1() {
    obstacle.style.animationDuration = '1s';
}
function speed2() {
    obstacle.style.animationDuration = '1.5s';
}
function peek() {
dino.classList.add("jumpmore");
setTimeout(function () {
dino.classList.remove("jumpmore");  
},600);
}
function refresh() {
    location.reload();
}