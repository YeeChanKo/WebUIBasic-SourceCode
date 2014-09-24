//(1)

var aData = [0, false, -1, 1, null, "", "     ", undefined, NaN, ];
for (var i = 0; i < aData.length; i++) {
    if (aData[i])
        console.log(aData[i] + "is true");
}

// 결과:
// -1 is true
// 1 is true
//     is true
//
// 이유:
// 0을 제외한 integer 값은 모두 true로 판정된다.
// boolean은 true만 true로 판정된다.
// null 값은 false로 판정된다.
// 비어있는 string, 즉 ""은 false로 판정된다.
// undefined와 NaN 역시 false로 판정된다.
// 참고로 NaN은 typeof를 해보면 number로 나오긴 하지만 'not a number'라는 뜻으로 숫자연산에서 실패한 경우에 사용된다.



//(2)

ar a = null;
a = 0 + null;
var myValue = a || "default value";
console.log(myValue);

// 결과:
// default value
//
// 이유:
// null 값과 0을 더해 a에 0이 들어간다. 0은 false 값으로 판정되므로 string인 "default value"와 OR 연산을 하면 "default value"가 결과값으로 나오고, 이 값이 myValue에 들어가기 때문에 최종적으로 myValue의 값은 "default value"로 출력되게 된다.



//(3)

result = 0;
var i = 0;
while (i < 10) {
    result += i;
    i++;
}
console.log(result);



//(4)

var arr = [1, 2, 3, 4, 44, 66, 42, 12, 32, "234", 33, 98];
var count = 0;
for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string")
        break;
    else if (arr[i] % 2 == 0)
        count++;
}
console.log(count);



//(5)

obj = {
    name: 'javascript',
    age: 14,
    type: 'dynamic'
};

function printobj(obj) {
    for (var i in obj) {
        console.log(i + " : " + obj[i]);
    }
}
printobj(obj);



//(6)

var arr = [23, -2, 23.4, "324", 333, 34, 1000, 20];

function userFunction(arr) {
    var result = [];
    result = arr.filter(
        function (item) {
            if (typeof item != "string")
                return item % 2 === 0;
        }
    );
    return result;
}
userFunction(arr);