//(1)

function changeGenre() {
    var eGenreMenu = document.getElementById('genreMenu');
    eGenreMenu.addEventListener("click", function (e) {
        if (e.target === e.target.parentElement.children.item(0)) {
            // 첫번째 자식의 경우
        } else if (e.target === e.target.parentElement.children.item(1)) {
            // 두번째 자식의 경우
        } else if (e.target === e.target.parentElement.children.item(2)) {
            // 세번째 자식의 경우
        } else if (e.target === e.target.parentElement.children.item(3)) {
            // 네번째 자식의 경우
        }
        // ......
    }, false);
}



//(2)

function seeMore() {
    var seeMoreButton = document.getElementById('seeMoreButton');
    seeMoreButton.addEventListener('click', function () {
        // 데이터 만들어 책 내용 추가하는 것은 'DOM & EVENT 1 실습'의 (2) 참고
    }, false);
}



//(3)

ar x_beforeTouch = 0;
var x_afterTouch = 0;

function cardListTouchStart(e) {
    x_beforeTouch = e.changedTouches[0].clientX;
}

function cardListTouchEnd(e) {
    x_afterTouch = e.changedTouches[0].clientX;
    var target_ul = e.currentTarget.firstElementChild;
    var prevMarginLeft = parseInt(target_ul.style.marginLeft);
    var maxMarginLeft = -(parseInt((target_ul.childElementCount - 1) / 2)) * 340;

    // 넘어가는 기준 120px, 북카드 하나의 폭(padding, margin 포함) 340px
    if (((x_beforeTouch - x_afterTouch) >= 120) && (prevMarginLeft > maxMarginLeft)) {
        target_ul.style.marginLeft = (prevMarginLeft - 340) + "px";
    } else if (((x_beforeTouch - x_afterTouch) <= -120) && (prevMarginLeft < 0)) {
        target_ul.style.marginLeft = (prevMarginLeft + 340) + "px";
    }
}

var targetLists = document.querySelectorAll(".card_list");
for (var i = 0; i < targetLists.length; i++) {
    targetLists[i].addEventListener("touchstart", cardListTouchStart, false);
    targetLists[i].addEventListener("touchend", cardListTouchEnd, false);
    targetLists[i].firstElementChild.style.marginLeft = "0px"; // 초기화
}