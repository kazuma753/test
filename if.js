// 「JavaSccriptにおける、if文の書き方について」

const condition = true;
// まず、Boolean型（trueとfalseの２種類しかの値がないデータ型）を定数（今回は、condition）に入れる。
// 定数の中身がtrueの場合は、ブロックの中のコードを実行する。
// 定数の中身がfalseの場合は、実行しない。
// これが、JavaSccriptにおける、if文である。

// {} = ブロック
if (condition){
    console.log("条件はtrueです。");
}
console.log("出力します");

const condition1 = true;
const condition2 = true;

if (condition1){
    console.log("condition1は、trueです。");

    if (condition2){
        console.log("condition2は、trueです。");
    }
}
console.log("出力します");

// 「Boolean型の二項演算、論理和と論理積について」
// ２つのBoolean型の値から、１つのBoolean型の値を作り出す計算。

// 論理和＝||
// 論理積＝&&
// 論理和＝どちらかがtrueであればtrue。両方falseであればfalse。
// 論理積＝どちらかがfalseであればfalse。どちもtrueであればtrue。

const okanemothi = true;
const ikemen = true;

if (okanemothi && ikemen){
console.log("好みのタイプ")
}
console.log("Boolean型、二項演算のテスト");

// 否定演算
// 「否定＝！」
// ！を付けると、値を逆にできる。
// !true = false
// !false = true  になる。

const men = true;
const women = true;

if (men && women){
console.log("普通");
}
if (!(men && women)){
    console.log("おかま");
}

// 「if else 構文」
// else = そうでなかった場合
const x = true;
const y = false;

if ( x && y ){
console.log("trueです。");
}
// 上記がtrueではなかった場合、下記を実行。
else {
    console.log("falseです。");
}


const a = true;
const b = true;

if ( a && b ){
    console.log("trueです。");
    }
    // 上記がではなかった場合、下記を実行。
else if ( a || b ){
    console.log("どちらか１つがtrueです。");
    }
    // 上記の条件をどちらも満たしていなかった場合、下記を実行。
else {
    console.log("falseです。");
}

// 「比較演算」
const soushisan = 100000000;
const ganmenhensachi = 75;

if (soushisan > 100000000 && ganmenhensachi >= 65){
    console.log("好みのタイプ");
} else {
    console.log("アウトオブ眼中");
}