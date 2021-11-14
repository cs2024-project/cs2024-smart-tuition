var a = document.getElementById('A');
var b = document.getElementById('B');
var c = document.getElementById('C');
var d = document.getElementById('D');
A.addEventListener("click", setA, false);
B.addEventListener("click", setB, false);
C.addEventListener("click", setC, false);
D.addEventListener("click", setD, false);

function setA() {
    localStorage.setItem("set", a.value);
}

function setB() {
    localStorage.setItem("set", b.value);
}

function setC() {
    localStorage.setItem("set", c.value);
}

function setD() {
    localStorage.setItem("set", d.value);
}