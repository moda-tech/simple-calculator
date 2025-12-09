//記号のidをhtmlからとってくる
const clear = document.getElementById("clear");
const del = document.getElementById("del");
const equal = document.getElementById("equal");
const sum = document.getElementById("sum");

//数字ボタン、演算子をそれぞれ配列に(idは一致させる)
const numberButtons = ["n0","n00","n1","n2","n3","n4","n5","n6","n7","n8","n9"];
const operators = ["tasu","hiku","kakeru","waru"];

//num1,num2,state,calをそれぞれ定義する

//数字表示の更新

// 数字ボタン共通処理 数字ボタン押したときの処理

// 計算処理　switch文

// 演算子ボタン共通処理　演算子を押したときの処理、num2を空けてstate"b"に戻る

// 数字ボタン設定　各数字ボタンにイベントリスナー→数字ボタン共通処理

// 演算子ボタン設定 各演算子ボタンにイベントリスナー→演算子ボタン共通処理

// クリア

// 削除

// イコール ＝にイベントリスナー、state"c"の時だけ処理→計算処理

