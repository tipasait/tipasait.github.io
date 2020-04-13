document.getElementById("tema_").addEventListener('click', check, false);


function load() {

}

function check() {
    var obj = this;
    var style1 = document.createElement('style');
    style1.type = 'text/css';
    style1.className='cssClass';
    style1.innerHTML = '.cssClass {  background: #cccccc; color: #000; }';
    var box1 = document.querySelectorAll(".box");
    var Grid1 = document.querySelector(".Grid");
    var Img_1 = document.querySelector(".Img_1");
    var Ablock = document.querySelector(".Ablock");
    var Bblock = document.querySelector(".Bblock");
    var menu1 = document.querySelector(".menu");
    var table1=document.querySelector('table');
    var menu_c=document.querySelectorAll('.menu_c')[1];
    var menu12 = menu1.getElementsByTagName('a');
    if (obj.checked == true) {
        document.querySelector('body').style.background='#2a2a2e';
        table1.style='font-size: 19px;background: #1a224b;width: 50%;border: 4px solid #669;';
        Ablock.style.color = '#d1d1d1';
        Ablock.style.background = '#002222';
        Bblock.style.background = '#14261D';
        Grid1.style.background = '#162A34';
        Grid1.style.color = '#F5F5F5';
        menu_c.style='background: #162A34; color: #d4af37;';
        f(box1, 'background: #0E4976');
        f(menu12, 'background: #162A34; color: #d4af37;');
        Img_1.style='background: url(./Img/playstation.jpg); background-size: cover;';
    } else {
        f(box1, 'none');
        f(menu12, 'none');
        table1.style = 'none';
        Ablock.style = 'none';
        Bblock.style = 'none';
        Grid1.style = 'none';
        menu_c.style = 'none';
        document.querySelector('body').style='none';
        Img_1.style='none';
    }
}
function f(a, b) {
    for (var i = 0; i < a.length; i++) {
        a[i].style = b;
    }
}