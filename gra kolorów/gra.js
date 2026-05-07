var colors=["Blue","Green","Yellow","Red"];
var points=0;
var time=30;
var random1,random2;correct;
function poczatek(){
    setInterval(timer,1000);
    reset();

}
function timer(){
    document.getElementById("time").innerHTML=time;
    
    if(time==0){
        alert("Game Over: "+points);
        location.reload();
    }
    time--;


}
function reset(){
    random2=Math.floor(Math.random()*2);
    if (random2==0){
        var color1=document.getElementById("color1");
        var color2=document.getElementById("color2");
    }
    else{
        var color2=document.getElementById("color1");
        var color1=document.getElementById("color2");
    }
    document.getElementById("start").style.display="none";
    

    random1=Math.floor(Math.random()*4);
    correct=colors[random1];

    color1.innerHTML=correct;
    color2.style.color=correct;

    if(random1==0){
        color1.style.color=colors[3];
    }
    else{
        color1.style.color=colors[random1-1];
    }
    if(random1==3){
        color2.innerHTML=colors[0];
    }
    else{
        color2.innerHTML=colors[random1+1];
    }
    addClick("Blue",correct);
    addClick("Yellow",correct);
    addClick("Green",correct);
    addClick("Red",correct);


}
function checkColor(color,correct){
    if(color==correct){
        points++;
        document.getElementById("True").style.opacity=1;
    }
    else{
        points--;
        document.getElementById("False").style.opacity=1;
    }
    setTimeout(function(){
        document.getElementById("True").style.opacity=0;
        document.getElementById("False").style.opacity=0;

    },500);
    document.getElementById("points").innerHTML=points;
    reset();
}
function addClick(color,correct){
    var funkcja="checkColor("+ color +","+correct+")";
    document.getElementById(color).setAttribute("onclick",funkcja);
}