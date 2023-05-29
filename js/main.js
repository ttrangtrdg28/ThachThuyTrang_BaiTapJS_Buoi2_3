/**
 * Bài 1:
 * Đàu vào
 * - Tạo biến total của button click
 * Xử lý
 * - Tạo biến costPerDay gán giá trị là 100.000
 * - Tạo biến workDay cho người dùng nhập
 * - Tạo biến calculator = costPerDay * workDay
 * Đầu ra
 * - Tạo biến costPerMonth hiển thị Số tiền 1 tháng
 */

var total = document.getElementById("total");
total.onclick = function () {
    var costPerDay = document.getElementById("costPerDay").value;
    var workDay = document.getElementById("workDay").value;

    costPerDay = parseFloat(costPerDay);
    workDay = parseFloat(workDay);
    var calculator = workDay * costPerDay;

    var result = "Số tiền 1 tháng kiếm được: " + calculator;

    var costPerMonth = document.getElementById("costPerMonth");
    costPerMonth.innerHTML = result;
}


/**
 * BÀI 2:
 * Đầu vào: 
 * - Tạo tiến avg để tính trung bình
 * Xử lý:
 * - Tạo biến nhập vào số thực 1, 2, 3, 4, 5
 * - Tạo biến avg tính trung bình
 * - Tạo biến rs để hiển kết quả
 * Đầu ra:
 * - Kết quả tính trung bình
 */

var avg = document.getElementById("avg");
avg.onclick = function () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);
    num4 = parseFloat(num4);
    num5 = parseFloat(num5);

    var b = (num1 + num2 + num3 + num4 + num5) / 5;
    var rs = "Trung bình cộng của 5 số là " + b;

    var average = document.getElementById("average");
    average.innerHTML = rs;
}


/**
 * BÀI 3:
 * Đầu vào:
 * - Tạo biến vnd nhập số tiền theo VND
 * - Tạo biến usd nhập số tiền theo USD
 * Xử lý:
 * - Tạo biến change để tính tiền quy đổi = usd * vnd
 * - Tạo biến changeRs để ghi kết quả
 * Đầu ra:
 * - Tạo biến changeMoney để hiển thị kết quả
 */

var changeToVND = document.getElementById("changeToVND");
changeToVND.onclick = function () {
    var vnd = document.getElementById("vnd").value;
    var usd = document.getElementById("usd").value;

    vnd = parseFloat(vnd);
    usd = parseFloat(usd);
    var change = usd * vnd;
    var changeRs = "= " + change + " VND";

    var changeMoney = document.getElementById("changeMoney");
    changeMoney.innerHTML = changeRs
}


/**
 * BÀI 4
 * Đầu vào:
 * - Tạo biến cd nhập chiều dài hình chữ nhật
 * - Tạo biện cr nhập chiều rộng hình chữ nhật
 * Xử lý
 * - Tạo biến tính cv hình chữ nhật
 * - Tạo biến tính dt hình chữ nhật
 * Đầu ra:
 * - Hiển thị kết quả tình cv, dt hình chữ nhật
 */

var calculate = document.getElementById("calculate");
calculate.onclick = function () {
    var cd = document.getElementById("cd").value;
    var cr = document.getElementById("cr").value;

    cd = parseFloat(cd);
    cr = parseFloat(cr);

    var cv = (cd + cr) * 2;
    var dt = cd * cr;

    var cvRS = "Chu vi hình chữ nhật là: " + cv;
    var dtRS = "Diện tích hình chữ nhật là: " + dt;

    var showCV = document.getElementById("cv");
    var showDT = document.getElementById("dt");
    showCV.innerHTML = cvRS;
    showDT.innerHTML = dtRS;
}

/**
 * BÀI 4
 * Đầu vào:
 * - Tạo biến nhập số có 2 chữ số
 * Xử lý
 * - Tách số ở hàng chục
 * - Tách số ở hàng đơn vị
 * - Tính tổng 2 số
 * Đầu ra:
 * - Hiển thị kết quả tính tổng 2 số
 */

var sum = document.getElementById("sum");
sum.onclick = function () {
    var number = document.getElementById("number").value;
    number = parseInt(number);

    var ten = Math.floor(number / 10);
    var unit = number - ten * 10;
    var sum2 = ten + unit;
    var sumRs = "Tổng 2 ký số là: " + sum2;

    var sum2Number = document.getElementById("sum2Number");
    sum2Number.innerHTML = sumRs;
}
