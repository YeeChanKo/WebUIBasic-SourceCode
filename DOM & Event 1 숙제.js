//(1)

function getLI() {
    var ele = document.getElementsByTagName("li");
    for (var i = 0; i < ele.length; i++) {
        console.log(ele[i].className);
    }
}



//(2)

function getNonClassElements() {
    var ele = document.querySelectorAll('*:not([class])');
    console.log(ele.length);
}



//(3)

function headerMessage() {
    document.getElementById('header').addEventListener('click', function () {
        console.log("header 영역입니다");
    }, false);
}
window.addEventListener('load', headerMessage, false);