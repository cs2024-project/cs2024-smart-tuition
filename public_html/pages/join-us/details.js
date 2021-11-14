var sub1 = document.getElementById('subid1');
var sub2 = document.getElementById('subid2');
var sub3 = document.getElementById('subid3');
var sub4 = document.getElementById('subid4');
var sub5 = document.getElementById('subid5');
var radio1 = document.getElementById('inlineRadio1');
var radio2 = document.getElementById('inlineRadio2');
var radio3 = document.getElementById('inlineRadio3');
var radio4 = document.getElementById('inlineRadio4');

var parentName = document.getElementById('parentname');
var contact = document.getElementById('contactNo');
var childName = document.getElementById('childName');
var childLv = document.getElementById('priId');
set1 = localStorage.getItem("set");
if (set1 == "Set C") {
    document.getElementById("subid2").disabled = false;
    document.getElementById("subid3").disabled = false;
} else if (set1 == "Set D") {
    document.getElementById("subid2").disabled = false;
    document.getElementById("subid3").disabled = false;
    document.getElementById("subid4").disabled = false;
    document.getElementById("subid5").disabled = false;
}

radio1.addEventListener("change", showone, false);
radio2.addEventListener("change", showone, false);
radio3.addEventListener("change", showthree, false);
radio4.addEventListener("change", showfive, false);


sub1.addEventListener("change", checkSame, false);
sub2.addEventListener("change", checkSame, false);
sub3.addEventListener("change", checkSame, false);
sub4.addEventListener("change", checkSame, false);
sub5.addEventListener("change", checkSame, false);

document.getElementById('submitBtn').addEventListener("click", transfer, false);

function showone() {
    document.getElementById("subid2").disabled = true;
    document.getElementById("subid3").disabled = true;
    document.getElementById("subid4").disabled = true;
    document.getElementById("subid5").disabled = true;
}

function showthree() {
    document.getElementById("subid2").disabled = false;
    document.getElementById("subid3").disabled = false;
    document.getElementById("subid4").disabled = true;
    document.getElementById("subid5").disabled = true;

}

function showfive() {
    document.getElementById("subid2").disabled = false;
    document.getElementById("subid3").disabled = false;
    document.getElementById("subid4").disabled = false;
    document.getElementById("subid5").disabled = false;
}

function checkSame() {
    if (document.getElementById('inlineRadio3').checked) {
        if (sub1.value == sub2.value || sub1.value == sub3.value || sub2.value == sub3.value) {
            alert("Please choose 3 different subjects");
        }
    } else if (document.getElementById('inlineRadio4').checked) {
        if (sub1.value == sub2.value || sub1.value == sub3.value || sub1.value == sub4.value || sub1.value == sub5.value || sub2.value == sub3.value || sub2.value == sub4.value || sub2.value == sub5.value || sub3.value == sub4.value || sub3.value == sub5.value || sub4.value == sub5.value) {
            alert("Please choose 5 different subjects");
        }
    }
}

function transfer() {

    if (document.getElementById('inlineRadio3').checked) {
        localStorage.setItem("ParName", parentName.value);
        localStorage.setItem("contact", contact.value);
        localStorage.setItem("set1", radio3.value);
        localStorage.setItem("sub1", sub1.value);
        localStorage.setItem("sub2", sub2.value);
        localStorage.setItem("sub3", sub3.value);
        localStorage.setItem("childName", childName.value);
        localStorage.setItem("childLv", childLv.value);
    } else if (document.getElementById('inlineRadio4').checked) {
        localStorage.setItem("ParName", parentName.value);
        localStorage.setItem("contact", contact.value);
        localStorage.setItem("set1", radio4.value);
        localStorage.setItem("sub1", sub1.value);
        localStorage.setItem("sub2", sub2.value);
        localStorage.setItem("sub3", sub3.value);
        localStorage.setItem("sub4", sub4.value);
        localStorage.setItem("sub5", sub5.value);
        localStorage.setItem("childName", childName.value);
        localStorage.setItem("childLv", childLv.value);
    } else if (document.getElementById('inlineRadio2').checked) {
        localStorage.setItem("ParName", parentName.value);
        localStorage.setItem("contact", contact.value);
        localStorage.setItem("set1", radio2.value);
        localStorage.setItem("sub1", sub1.value);
        localStorage.setItem("childName", childName.value);
        localStorage.setItem("childLv", childLv.value);
    } else if (document.getElementById('inlineRadio1').checked) {
        localStorage.setItem("ParName", parentName.value);
        localStorage.setItem("contact", contact.value);
        localStorage.setItem("set1", radio1.value);
        localStorage.setItem("sub1", sub1.value);
        localStorage.setItem("childName", childName.value);
        localStorage.setItem("childLv", childLv.value);
    }

}