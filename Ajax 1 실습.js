//(1) & (2)

var ajaxResult = "";

var request = new XMLHttpRequest();
request.open("GET", url, true);
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        clearTimeout(timeOutSetter);
        ajaxResult = request.responseText;
        ajaxResult = JSON.parse(ajaxResult);
    } else if (request.status !== 200 || request.status !== 304) {
        alert("XMLHttpRequest failed");
    }
}
request.send(null);

var timeOutSetter = setTimeout(requestTimeOut, 2);

function requestTimeOut() {
    request.abort();
    alert("Request timed out");
}

// ajaxResult는 BookList 데이터가 된다
// 이 데이터를 HTML코드로 변환해 본문에 추가하는 것은 "DOM & Event 1 실습"의 (2)를 참고