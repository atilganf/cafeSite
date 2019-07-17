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
        nav.style.width = "14em";
        div1.style.transform = "rotate(-45deg)";
        div1.style.top = "calc(50% - 1px)"
        div2.style.opacity = 0;
        div3.style.transform = "rotate(45deg)";
        div3.style.bottom = "calc(50% - 1px)";
        nav.style.opacity = 1;
    }
}
var timer = setInterval(plusSlide, 5000);
var slides = document.getElementsByClassName("figc");
var fig = document.getElementById("fig");
var cs = 0;
function plusSlide(n) {
    slides[cs].classList.remove("active_figc");
    if (n) { cs += n }
    else { cs += 1; }
    if (cs == 7) { cs = 0 }
    if (cs == -1) { cs = 6 }
    fig.style.backgroundImage = "url(img/banner" + (cs + 1) + ".jpg)";
    setTimeout(function () {
        slides[cs].classList.add("active_figc");
    }, 1000);
}
var btns = document.getElementsByClassName("btns");
btns[0].addEventListener("click", function (e) {
    if (e.target.classList.contains("prev")) { plusSlide(-1) }
    if (e.target.classList.contains("next")) { plusSlide(1) }
    clearInterval(timer);
    timer = setInterval(plusSlide, 5000);
});


//map init
function initMap() {
    var mapElement = document.getElementById("map");
    var mapOptions = {
        zoom: 16,
        scrollwheel: false,
        center: new google.maps.LatLng(38.6165855, 27.400674900000013),
        styles: [{
            "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 },
            { "color": "#000000" }, { "lightness": 40 }]
        }, {
            "featureType": "all", "elementType": "labels.text.stroke",
            "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon", "stylers": [{ "visibility": "off" }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }]
        },
        {
            "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" },
            { "lightness": 17 }, { "weight": 1.2 }]
        }, {
            "featureType": "landscape", "elementType": "geometry",
            "stylers": [{ "color": "#000000" }, { "lightness": 20 }]
        }, {
            "featureType": "poi", "elementType": "geometry",
            "stylers": [{ "color": "#000000" }, { "lightness": 21 }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }]
        },
        {
            "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" },
            { "lightness": 29 }, { "weight": 0.2 }]
        }, {
            "featureType": "road.arterial", "elementType": "geometry",
            "stylers": [{ "color": "#000000" }, { "lightness": 18 }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }]
        },
        {
            "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" },
            { "lightness": 19 }]
        }, {
            "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" },
            { "lightness": 17 }]
        }]
    };

    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(38.6165855, 27.400674900000013),
        map: map
    });
}
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1100
});

//creating menu
function capitalize(txt) {
    var newtext = txt.charAt(0).toUpperCase() + txt.slice(1);
    return newtext;
}
function createMenuDiv() {
    var li = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum turpis, iaculis non placerat eu, ultrices tincidunt tellus. Morbi in quam congue mauris pellentesque dictum. Ut at enim ante. Integer sollicitudin pharetra purus, eget egestas ipsum porta eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sit amet diam sit amet hendrerit. Nunc tristique iaculis eros, id vestibulum eros convallis ac. Morbi non massa nunc. Vestibulum a velit facilisis, aliquam lectus nec, malesuada ex. Phasellus lobortis vestibulum turpis, ac malesuada dui tristique et. Duis eget leo ac justo gravida varius rhoncus at nulla. Donec vel elit ipsum. Curabitur rhoncus, mi nec interdum posuere, nulla nisi ultrices magna, a imperdiet urna nisi sit amet metus. Duis eget congue ex. Suspendisse non purus turpis.";
    li = li.replace(/,/g, "");
    li = li.replace(/\./g, "");
    li = li.toLowerCase();
    li = li.split(" ");
    var newDiv = document.createElement("div");
    var txtDiv = document.createElement("div");

    var newH = document.createElement("h4");
    var rnd1 = Math.floor(Math.random() * 100);
    var htext = document.createTextNode(
        capitalize(li[rnd1]) + " " + capitalize(li[rnd1 + 1]));
    newH.appendChild(htext);

    var newP = document.createElement("p");
    var rnd2 = Math.floor(Math.random() * 100);
    var rnd3 = Math.floor(Math.random() * 5) * 6 + 5;
    var ptext = capitalize(li[rnd2]);
    for (let i = 0; i < rnd3; i++) {
        if (Math.round(Math.random())) {
            ptext += ", "
        } else {
            ptext += " "
        }
        rnd2++;
        ptext += li[rnd2];
    }
    newP.appendChild(document.createTextNode(ptext));
    txtDiv.appendChild(newH);
    txtDiv.appendChild(newP);
    newDiv.appendChild(txtDiv);
    newDiv.classList.add("menuIngr");

    return newDiv;
}
function createCameraIcon() {
    var cam = document.createElement("img");
    cam.src = "img/camera_icon.png";
    return cam;
}
var menuDiv = document.getElementsByClassName("menu_div");
function createMenu() {
    for (let i = 0; i < menuDiv.length; i++) {
        var rndm = 8 + Math.floor(Math.random() * 8);
        var camRndm = 1 + Math.floor(Math.random() * 3);
        for (let j = 0; j < rndm; j++) {
            var newDiv = createMenuDiv();
            //each 1-3 gaps create div with cam icon
            if (j == camRndm) {
                camRndm += 1 + Math.floor(Math.random() * 3);
                newDiv.insertBefore(createCameraIcon(), newDiv.childNodes[0]);
                console.log(newDiv);    
            }else{
                var fakeImg = document.createElement("div");
                newDiv.insertBefore(fakeImg, newDiv.childNodes[0]);
            }
            menuDiv[i].appendChild(newDiv);
            
        }
    }
}
createMenu();
//creating menu

function showMenu(btn) {
    var btns = document.getElementById("left-col").querySelectorAll("button");
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active_menu_btn");
    }
    btn.classList.add("active_menu_btn");
    for (let i = 0; i < menuDiv.length; i++) {
        menuDiv[i].classList.remove("active_menu_div");
        var menuH = menuDiv[i].querySelector("h3").innerHTML;
        if (menuH == btn.innerHTML) {
            menuDiv[i].classList.add("active_menu_div");
        }
    }
}
