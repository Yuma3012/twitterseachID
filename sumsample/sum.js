// 足し算を行う関数
function calculateSum() {
    // フォームから数字を取得
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // 足し算を実行
    var sum = num1 + num2;

    // 結果を表示
    document.getElementById("result").textContent = sum;
}