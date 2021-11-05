var set3 = document.getElementById('setid');
var sub1 = document.getElementById('subid1');
var sub2 = document.getElementById('subid2');
var sub3 = document.getElementById('subid3');
var sub4 = document.getElementById('subid4');

var parentName = document.getElementById('parentname');
var contact = document.getElementById('contactno');
var childName = document.getElementById('childName');
var childLv = document.getElementById('priId');

set1 = localStorage.getItem("set");
if (set1 == "Set C") {
    document.getElementById("subid4").style.visibility = "visible";
} else {
    document.getElementById("subid4").style.visibility = "hidden";
}

set3.addEventListener("change", appear, false);
sub1.addEventListener("change", checkSame, false);
sub2.addEventListener("change", checkSame, false);
sub3.addEventListener("change", checkSame, false);
sub4.addEventListener("change", checkSame, false);
submitBtn.addEventListener("click", transfer, false);

function appear() {
    if (this.selectedIndex == 2) {
        document.getElementById("subid4").style.visibility = "visible";
    } else {
        document.getElementById("subid4").style.visibility = "hidden";
    }
}

function checkSame() {
    if (document.getElementById('setid').selectedIndex == 2) {
        if (sub1.value == sub2.value || sub1.value == sub3.value || sub1.value == sub4.value || sub2.value == sub3.value || sub2.value == sub4.value || sub3.value == sub4.value) {
            alert("Please choose 4 different subjects");
        }
    } else if (sub1.value == sub2.value || sub1.value == sub3.value || sub2.value == sub3.value) {
        alert("Please choose 3 different subjects");
    }
}

function transfer() {
    if (set3.value == "Set C") {
        localStorage.setItem("ParName", parentName.value);
        localStorage.setItem("contact", contact.value);
        localStorage.setItem("set1", set3.value);
        localStorage.setItem("sub1", sub1.value);
        localStorage.setItem("sub2", sub2.value);
        localStorage.setItem("sub3", sub3.value);
        localStorage.setItem("sub4", sub4.value);
        localStorage.setItem("childName", childName.value);
        localStorage.setItem("childLv", childLv.value);
    } else {
        localStorage.setItem("ParName", parentName.value);
        localStorage.setItem("contact", contact.value);
        localStorage.setItem("set1", set3.value);
        localStorage.setItem("sub1", sub1.value);
        localStorage.setItem("sub2", sub2.value);
        localStorage.setItem("sub3", sub3.value);
        localStorage.setItem("childName", childName.value);
        localStorage.setItem("childLv", childLv.value);
    }

}