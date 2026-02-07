let no=document.getElementById("no");

if(no){
no.onmouseover=()=>{
no.style.position="absolute";
no.style.left=Math.random()*400+"px";
no.style.top=Math.random()*400+"px";
}
}

let music=document.getElementById("music");

if(localStorage.getItem("play")=="yes" && music){
music.play();
}

function letters(){
location="letters.html";
}

function show(n){
["l1","l2","l3"].forEach(id=>{
document.getElementById(id).style.display="none";
});
document.getElementById("l"+n).style.display="block";
}
