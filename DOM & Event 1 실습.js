//(1)

function toggleGenreMenu() {
    var eGenreMenu = document.getElementById('genreMenu');
    document.addEventListener("click", function (e) {
        if (eGenreMenu.style.display === "none" && e.target.className === "genre") {
            eGenreMenu.style.display = "block";
            return;
        }
        eGenreMenu.style.display = "none";
    }, false);
}

window.addEventListener('load', toggleGenreMenu, false);



//(2)

function changeGenre() {
    var eGenreMenu = document.getElementById('genreMenu');
    eGenreMenu.addEventListener("click", function (e) {
        if (e.target === e.target.parentElement.children.item(0)) {
            var eBookList = document.getElementById('firstBookList');
            var targetBookList = loadBookList1();
            eBookList.innerHTML = targetBookList;
        }
        //event delegation 기법
    }, false);
}

function loadBookList1() {
    var aBookList = [
        {
            author: "토머스 불핀치",
            id: "book-iLQ5BAAAQBAJ",
            imgSrc: "http://goo.gl/tfHw4e",
            name: "아서왕과 원탁의 기사들",
            price: "₩9500",
            src: "http://goo.gl/65Im7q"
        },
        {
            author: "앙투안 드 생텍쥐페리",
            id: "book-jLQ5BADJFIEWL",
            imgSrc: "http://goo.gl/pDXdVo",
            name: "어린왕자",
            price: "₩5000",
            src: "http://goo.gl/aSvgGF"
        },
    ];

    var sTemplate = "<li><div class='card_preview'><a id='book_image' style='background-image:url(<%=imgUrl%>);' href='<%=endPageLink%>'></a></div><div class='card_details'><div class='card_name'><%=title%></div><div class='card_author'><%=author%></div><div class='card_price'><span class='card_price_number'><%=price%></span></div></div></li>";

    return makeBookList(sTemplate, aBookList);
}


function makeBookList(sTemplate, aBookList) {
    var result = "";
    aBookList.forEach(function (v, i, o) {
        result += sTemplate.replace("<%=title%>", v.name).replace("<%=endPageLink%>", v.src).replace("<%=imgUrl%>", v.imgSrc).replace("<%=price%>", v.price).replace("<%=author%>", v.author);
    });
    return result;
}

window.addEventListener('load', changeGenre, false);