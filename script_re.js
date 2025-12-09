const sum = document.getElementById("sum");
const clear = document.getElementById("clear");
const del = document.getElementById("del");
const equal = document.getElementById("equal");

const numberButtons = ["n0","n00","n1","n2","n3","n4","n5","n6","n7","n8","n9"];
const operators = ["tasu","hiku","kakeru","waru"];

let num1 = [];
let num2 = [];
let state = "a";  // a:入力1 b:演算子入力 c:入力2 d:結果表示
let cal = "";

// 数字表示更新
function updateDisplay() {
    sum.textContent = (state === "c" ? num2 : num1).join("");
}

// 数字ボタン共通処理
function numberClick(value) {
    let target = (state === "a" || state === "d") ? num1 : num2;

    if(state === "d") {
        num1 = [];
        target = num1;
        state = "a";
    }
    if(state === "b") {
        state = "c";
        target = num2;
    }

    target.push(value);
    updateDisplay();
}

// 計算処理
function calculate() {
    const n1 = Number(num1.join(""));
    const n2 = Number(num2.join(""));
    switch(cal) {
        case "tasu": return n1 + n2;
        case "hiku": return n1 - n2;
        case "kakeru": return n1 * n2;
        case "waru": return n1 / n2;
    }
    return n1;
}

// 演算子ボタン共通処理
function operatorClick(op) {
    if(state === "c") {
        num1 = String(calculate()).split("");
        num2 = [];
    }
    cal = op;
    state = "b";
    updateDisplay();
}

// 数字ボタン設定
numberButtons.forEach(id => {
    const btn = document.getElementById(id);
    btn.addEventListener("click", () => {
        const value = id === "n00" ? "00" : id.replace("n",""); // IDから数字取得
        numberClick(value);
    });
});

// 演算子ボタン設定
operators.forEach(op => {
    const btn = document.getElementById(op);
    btn.addEventListener("click", () => operatorClick(op));
});

// クリア
clear.addEventListener("click", () => {
    num1 = [];
    num2 = [];
    cal = "";
    state = "a";
    updateDisplay();
});

// 削除
del.addEventListener("click", () => {
    let target = (state === "c") ? num2 : num1;
    target.pop();
    updateDisplay();
});

// イコール
equal.addEventListener("click", () => {
    if(state === "c") {
        num1 = String(calculate()).split("");
        num2 = [];
        state = "d";
        cal = "";
        updateDisplay();
    }
});
