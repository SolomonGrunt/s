var canvas;
var ctx;
var upKey;
var rightKey;
var leftKey;
var downKey;
var gameloop;
var player;
var score;
var borders =[ ];
window.onload = function () {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
    //
    setupInputs();
player = new Player(200 , 500);
    for (let i =0; i <6; i++){
        borders.push(new Border(0+100*i , 620 , 100 ,100 ,1));
    }
    for (let i =0; i <6; i++){
        borders.push(new Border(0+100*i , 620 , 100 ,100 ,1));
    }
    // dont touch down
    for (let j =0; j <16; j++){
        borders.push(new Border(0+100*j , 0 , 100 ,5 ,1));
    }
    for (let j =0; j <4; j++){
        borders.push(new Border(0 , 0+100*j , 10 ,500 ,1));
    }
    for (let j =0; j <4; j++){
        borders.push(new Border(1270 , 0+100*j , 10 ,500 ,1));
    }
    for (let j =0; j <16; j++){
        borders.push(new Border(0+100*j , 720 , 100 ,5 ,1));
    }
    // dont touch ^
    for (let i =0; i <3; i++){
        borders.push(new Border(100+200*i , 160 , 50 ,50 ,3));
    }
    //
    borders.push(new Border(666 , 520 , 100 ,50 ,1));
    borders.push(new Border(666 , 620 , 100 ,50 ,2));
    borders.push(new Border(0 , 520 , 100 ,100 ,2));
    borders.push(new Border(600 , 620 , 60 ,50 ,3));
    borders.push(new Border(100 , 370 , 100 ,100 ,4)); // powerup
    borders.push(new Border(10 , 370 , 50 ,50 ,3));
    for (let i =0; i <6; i++){
        borders.push(new Border(0+120*i , 320 , 50 ,50 ,1));

    }

    // dont touch down
    for (let j =0; j <16; j++){
        borders.push(new Border(0+100*j , 0 , 100 ,5 ,1));
    }
    for (let j =0; j <4; j++){
        borders.push(new Border(0 , 0+100*j , 10 ,500 ,1));
    }
    for (let j =0; j <4; j++){
        borders.push(new Border(1270 , 0+100*j , 10 ,500 ,1));
    }
    for (let j =0; j <16; j++){
        borders.push(new Border(0+100*j , 720 , 100 ,5 ,1));
    }
    // dont touch ^
    borders.push(new Border(666 , 620 , 100 ,50 ,2));

    gameloop = setInterval(step , 1000/30);
    ctx.fillStyle = "rgba(102,255,0,0.09)"
    ctx.fillRect(0 , 0 ,1280 , 720)
}
function step () {
    player.step();
    draw();

}
function draw (){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,1280,720);
    player.draw();
    for (let i =0; i< borders.length; i++){
        borders[i].draw();
    }

}
function setupInputs () {
    document.addEventListener("keydown" , function (event){
if(event.key === "w" || event.key === "ArrowUp"){
    upKey = true;
} else if(event.key === "a" || event.key === "ArrowLeft"){
    leftKey =true;
}else if(event.key === "s" || event.key === "ArrowDown"){
    downKey =true;
}else if(event.key === "d" || event.key === "ArrowRight"){
    rightKey=true;
}
    });
    document.addEventListener("keyup" , function (event){
        if(event.key === "w" || event.key === "ArrowUp"){
            upKey = false;
        } else if(event.key === "a" || event.key === "ArrowLeft"){
            leftKey =false;
        }else if(event.key === "s" || event.key === "ArrowDown"){
            downKey =false;
        }else if(event.key === "d" || event.key === "ArrowRight"){
            rightKey=false;
        } else if(event.key === "q"){
            alert("w")
            document.location.reload();
        }
    });
}
function checkIntersection(r1,r2){
    if(r1.x >= r2.x + r2.width){
        return false;
    } else if(r1.x +r1.width <= r2.x){
        return false;
    } else if (r1.y >= r2.y +r2.height){
        return false;
    }else if( r1.y + r1.height <= r2.y){
        return false;
    }else {
        return  true;
    }
}