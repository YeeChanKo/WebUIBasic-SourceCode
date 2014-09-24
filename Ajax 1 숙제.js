// 다음과 같이 수정해야 한다.

(function () {
    var url = "http://codepen.io/nigayo/pen/EjbcK.js";
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            result = request.responseText;
            result = JSON.parse(result);
            console.log("new title is ", result.title);
            console.log("XHR 통신종료[RESULT]  ", result); // 여기로 옮김
        }
    }

    var elDiv = document.querySelector("#resultArea");
    elDiv.style.border = "2px solid gold"
    // console.log("XHR 통신종료[RESULT]  ", result); 원위치
})();

// result라는 변수가 아직 만들어지지 않은 상태이기 때문에 reference error가 난다
// onreadystatechange 함수 안에 넣어주면 해결된다