var char = document.getElementById("chara");
var block = document.getElementById("block");
var btn = document.getElementById("btn");

btn.addEventListener("click", ani(), false)

function ani() {
    alert("ss");
    document.getElementById("chara").style.animationPlayState = "running";
    document.getElementById("block").style.animationPlayState = "running";
}