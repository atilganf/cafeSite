var nav = document.querySelector("nav");
var div1 = document.getElementById("btn_div_1");
var div2 = document.getElementById("btn_div_2");
var div3 = document.getElementById("btn_div_3");
function showNav() {
    if (nav.style.width) {
        nav.style.width = null;
        div1.style.transform = null;
        div1.style.top = "7px"
        div2.style.opacity = 1;
        div3.style.transform = null;
        div3.style.bottom = "7px";
        nav.style.opacity = 0;
    } else {
        nav.style.width = "60%";
        div1.style.transform = "rotate(-45deg)";
        div1.style.top = "calc(50% - 1px)"
        div2.style.opacity = 0;
        div3.style.transform = "rotate(45deg)";
        div3.style.bottom = "calc(50% - 1px)";
        nav.style.opacity = 1;
    }
}