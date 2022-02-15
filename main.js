"use strict";

let box = document.getElementById("box");
let target = document.getElementById('target-image');
let newImage;
let nth = 1;

const testAddEventListenerLoad = () => {
    // document.getElementById('imagemessage').innerHTML = '読込完了しました！';
    // console.log("After");
}

const onClick = () => {
    // ↓ 結局これでも正しいスケールは出るけど、画像がでかいと console.log の後で画像が切り替わってしまう。
    const src = "1.jpg";
    let img = new Image();
    img.onload = () => {
        console.log(img.naturalWidth);
        target.src = src;
    };
    img.src = src;

    // if(target.src.substr(-5) === "0.jpg"){
    //     target.src = "1.jpg";
    // } else {
    //     target.src = "0.jpg";
    // }
    // console.log("Before: " + target.src.substr(-5));

    // target.onload(() => {
    //     console.log("After.");
    // });

    // target.onload = function() {
    //     console.log("After.");
    // }

    // newImage = document.createElement("img");
    // newImage.addEventListener("load", testAddEventListenerLoad);
    // box.appendChild(newImage);
    // newImage.id = "p-" + nth;
    // newImage.style.opacity = 0;
    // newImage.src = "1.jpg";
    // newImage.onload(() => {
    //     console.log("load completed");
    // });
    // nth++;
}

console.log("Before.");
// target.addEventListener("load", testAddEventListenerLoad);
// newImage.addEventListener("load", testAddEventListenerLoad);


// src 属性の書き換えだと、画像の表示が終わる前に「After」が表示されてしまう。
// たぶんだけど、src 属性を書き換えて画面が表示し終わるのを待つという方法はないんじゃないか。
// 新しい img を createElement して追加した方が確実かも？
// createElement しても、src を書き換えて画像を配置するのは変わらない。