var char = document.getElementById("chara");
var block = document.getElementById("block");
77

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        jump();
    }
}
function jump(){
    if(char.classList != "animate"){
        char.classList.add("animate");
    }
    setTimeout(function(){
        char.classList.remove("animate");
    },500);
}


var hit = setInterval(function(){
    var chartop = 
    parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    var blockleft = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockleft<8 && blockleft>0 && chartop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Mati liao!");
    }
},10)