function show() {
    document.getElementById("myFrm").style.display = "block";
    document.getElementById("search-btn").style.display = "none";
    document.getElementById("ch-btn").style.display = "inline-block";
}

function myClose() {
    document.getElementById("myFrm").style.display = "none";
    document.getElementById("search-btn").style.display = "inline-block";
    document.getElementById("ch-btn").style.display = "none";
}

function frmShow() {
    document.getElementById("frm").style.display = "block";
    document.getElementById("login-btn").style.display = "none";
    document.getElementById("form-close").style.display = "inline-block";
}

function frmClose() {
    document.getElementById("frm").style.display = "none";
    document.getElementById("login-btn").style.display = "inline-block";
    document.getElementById("form-close").style.display = "none";

}

function menuOpen() {
    document.getElementById("navi").style.display = "block";
    document.getElementById("close-bar").style.display = "block";
    document.getElementById("menu-bar").style.display = "none";
}

function menuClose() {
    document.getElementById("navi").style.display = "none";
    document.getElementById("close-bar").style.display = "none";
    document.getElementById("menu-bar").style.display = "block";
}

var imgLen = document.getElementsByClassName('slidImg');

// Hide
for (let i = 1; i < imgLen.length; i++) {
    imgLen[i].style.display = "none";
}

var activeImg = 0;

let next = 0;


function nextBtn() {
    //console.log(imgLen.length);
    imgLen[next].style.display = "none";
    //next += 1;
    activeImg++;
    imgLen[activeImg - 1].style.display = "none";
    if (activeImg > imgLen.length - 1) {
        activeImg = 0;

    }
    console.log(activeImg);

    imgLen[activeImg].style.display = "block";

}
let prev = 0;

function prevBtn() {

    activeImg -= 1;
    imgLen[activeImg + 1].style.display = "none";
    if (activeImg < 0) {
        activeImg = imgLen.length - 1;
    }

    imgLen[activeImg].style.display = "block";


}