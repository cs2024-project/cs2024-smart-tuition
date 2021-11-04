var a = document.getElementById('A');
var b = document.getElementById('B');
var c = document.getElementById('C');

A.addEventListener("click", setA, false);
B.addEventListener("click", setB, false);
C.addEventListener("click", setC, false);

function setA() {
    localStorage.setItem("set", a.value);
}

function setB() {
    localStorage.setItem("set", b.value);
}

function setC() {
    localStorage.setItem("set", c.value);
}