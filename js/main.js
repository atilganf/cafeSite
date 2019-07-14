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
setInterval(plusSlide, 5000);
var slides = document.getElementsByClassName("figc");
var fig = document.getElementById("fig");
var cs = 0;
function plusSlide(n) {
    slides[cs].classList.remove("active_figc");
    cs += 1;
    if (n) { cs += n }
    if (cs == 7) { cs = 0 }
    if (cs == -1) { cs = 6 }
    fig.style.backgroundImage = "url(img/banner" + (cs + 1) + ".jpg)";
    setTimeout(function () {
        slides[cs].classList.add("active_figc");
    }, 1000);
}
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
