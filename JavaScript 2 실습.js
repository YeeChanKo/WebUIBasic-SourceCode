//(1)

function pow(num, exp) {
    if (exp == 0)
        return 1;
    else
        return num * pow(num, exp - 1);
}



//(2)

var aMyBookList = [["생각버리기연습", 12300], ["자아의발견", 9900], ["토지4", 13000], ["기록의정석", 4000], ["하늘바람과별과시", 4000]];

function getExpensiveBook(aMyBookList) {
    aMyBookList.filter(function (v, i, a) {
        return v[1] >= 10000;
    }).map(function (v, i, a) {
        return v[0];
    })
}

var aList = getExpensiveBook(aMyBookList, comparePrice, getTitle);



//(3)

function extractString(str) {
    var index = str.indexOf("위치는 ");
    var index2 = str.indexOf(",");
    var first = index + "위치는 ".length;
    return str.slice(first, index2);
}

extractString("우리학교는 NEXT. 위치는 판교, 종목은 SW");



//(4)

var aBookList = [
    {
        id: "book-iLQ5BAAAQBAJ",
        name: "아서왕과 원탁의 기사들",
        imgSrc: "http://goo.gl/tfHw4e",
        src: "http://goo.gl/65Im7q",
        author: "토머스 불핀치"
    },
    {
        id: "book-jLQ5BADJFIEWL",
        name: "어린왕자",
        imgSrc: "http://goo.gl/pDXdVo",
        src: "http://goo.gl/aSvgGF",
        author: "앙투안 드 생텍쥐페리"
    }
];

var sTemplate = "<h2><%=title%></h2><div><a href='<%=endPageLink%>'><img src='<%=imgUrl%>'></a></div>";

function makeBookElement(sTemplate, aBookList) {
    var result = "";
    aBookList.forEach(function (v, i, o) {
        result += sTemplate.replace("<%=title%>", v.name).replace("<%=endPageLink%>", v.src).replace("<%=imgUrl%>", v.imgSrc);
    });

    return result;
}

makeBookElement(sTemplate, aBookList);