//(1)

function ok(param) {
    var message = "value is " + typeof (param);
    console.log(message);
}



//(2)

function dummy(param) {
    var myArray = [];
    myArray[0] = param[1];
    myArray[1] = param[0];
    return myArray;
}



//(3)

function dummy(param) {
    var myArray = new Array();
    for (var i = 0; i < param.Length; i++) {
        myArray[i] = param[param.Length - 1 - i];
    }
    return myArray;
}