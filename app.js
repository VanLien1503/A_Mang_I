let arr = [];
let count = 0;
let check = 0;
let bigger = 0;
let sum = 0;
let newArr = [];

function random() {
    let input = parseInt(document.getElementById("number").value);
    if (input > 20) {
        if (confirm("Nhập Lại Số Từ 0-20")) {
            input = document.getElementById("number").value = "";
        } else {
            input = document.getElementById("number").value = "";
        }
    } else {
        for (let i = 0; count < input; i++) {
            let number = Math.floor(Math.random() * 20) + -10;
            if (arr.indexOf(number) == -1) {
                arr.push(number);
                count++;
                if (number === 10) {
                    check++;
                } else if (number > 10) {
                    bigger++
                }
            }
        }
        document.getElementById("resuleArr").innerHTML = "arr=[" + arr + "]";
        document.getElementById("resule").innerHTML = "Có " + check + " Phần Tử Bằng 10" + "<br>"
            + "Có " + bigger + " Phần Tử Lớn Hơn 10";
        count = 0;
    }
}

function check2() {
    let max = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    let sumTB = sum / arr.length;
    document.getElementById("resultTB").innerHTML =
        "Giá Trị Trung Bình của các " + "<br>"
        + "phần tử trong mảng là : " + sumTB;
    document.getElementById("resultMAX").innerHTML = " Số Lớn Nhất Trong Mảng Arr[] Là " + max + "<br>"
        + "Độ Dài  Arr[] là : " + arr.length + "<br>" + " độ dài Số Lớn Nhất Là : " + index;
}

function checkArr() {
    let first = 0;
    let last = arr.length - 1;
    while (first < last) {
        let b = arr[first];
        arr[first] = arr[last];
        arr[last] = b;
        first++;
        last--;
    }
    document.getElementById("ruslutReve").innerHTML = "NewArr= [ " + arr + " ]";
}

function check05() {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < 0) {
            count++;
            newArr.push(arr[i]);
        }
    }
    document.getElementById("Vowel").innerHTML = "Hàm Arr Có " + count + " Số Nguyên Âm" + "<br>" +
        " NewArr=[ " + newArr + " ]";
}

function checkNumber() {
    let n = parseInt(document.getElementById("checkNumber").value);
    let index = arr.indexOf(n);
    if (arr.indexOf(n) == -1) {
        document.getElementById("resultNumber").innerHTML = n + " IS NOT in the array";
        document.getElementById("resultNewArr").innerHTML = "Số " + n + " Không Có Trong Mảng" + "<br>" + "Mảng Arr = [ " + arr + " ]";

    } else {
        let b = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = b;
        document.getElementById("resultNumber").innerHTML = n + " in the array";
        document.getElementById("resultNewArr").innerHTML = "Vị Trí Tìm Thấy " + n + " Có Chỉ Số =  " + index + "<br>"
            + "Hàm Arr Sau Khi Tìm Thấy : " + n + " là :" + "<br>" +
            "arr=[ " + arr + " ]";
    }
}

function checkSort() {
    document.getElementById("resularr").innerHTML = "Arr=[ " + arr + " ]";
    arr.sort(function (a, b) {
        return a - b
    });
    document.getElementById("resultSort").innerHTML = "SortArr=[ " + arr + " ]";
}

function arrConcat() {
    document.getElementById("Arr1").innerHTML = "a= [ " + arr + " ]";
    let concat = arr.concat(newArr);
    document.getElementById("Arr2").innerHTML = "b= [ " + newArr + " ]" +
        "<br>" + "C= [ " + concat + " ]";
}