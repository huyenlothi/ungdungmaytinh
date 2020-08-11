function result1(){
    let a = parseInt(document.getElementById("so1").value);
    let b = parseInt(document.getElementById("so2").value);
    let tong = a + b;
    document.getElementById("result").value = tong;
}
function result2(){
    let a = parseInt(document.getElementById("so1").value);
    let b = parseInt(document.getElementById("so2").value);
    let hieu = a - b;
    document.getElementById("result").value = hieu;
}
function result3(){
    let a = parseInt(document.getElementById("so1").value);
    let b = parseInt(document.getElementById("so2").value);
    let tich = a * b;
    document.getElementById("result").value = tich;
}
function result4(){
    let a = parseInt(document.getElementById("so1").value);
    let b = parseInt(document.getElementById("so2").value);
    let thuong = a / b;
    document.getElementById("result").value = thuong;
}

