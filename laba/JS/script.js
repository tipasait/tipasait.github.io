document.getElementById("pass").addEventListener('input', password, false);
document.getElementById("pass_t").addEventListener('focusout', a, false);
document.getElementById("Check").addEventListener('click', check, false);
var as = document.querySelectorAll(".qw");
for (var i = 0; i < as.length; i++) {
    as[i].addEventListener('keyup', prov, false);
}

function prov() {
    var obj = this;
    var d = (this.nextSibling).nextSibling;
    if (obj.value.length == 0) {
        obj.classList.add("error");
        d.classList.add("title");
        return;
    }
    if (/\d/.test(obj.value)) {
        obj.classList.add("error");
        d.classList.add("title");
    } else {
        obj.classList.remove("error");
        d.classList.remove("title");
    }
}

function password() {
    var a = this;
    var b = this.nextSibling;
    b = b.nextSibling;
    if (a.value.length < 8) {
        a.classList.add("error");
        b.classList.add("title");
    } else {
        a.classList.remove("error");
        b.classList.remove("title");
    }
}

function a() {
    var c = (this.nextSibling).nextSibling;
    if (this.value == document.getElementById('pass').value) {
        this.classList.remove("error");
        c.classList.remove("title");
    } else {
        this.classList.add("error");
        c.classList.add("title");
    }
}

function check() {
    var C = document.getElementById("Check");
    var P1 = document.getElementById('pass');
    var P2 = document.getElementById('pass_t');
    if (C.checked == true) {
        P1.type = "text";
        P2.type = "text";
    } else {
        P1.type = "password";
        P2.type = "password";
    }
}