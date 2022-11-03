alert('ゲームの結果は右のアニメーションで表示されます');
function Saikoro() {

  let saikoro = Math.floor(Math.random() * 6) + 1;

  // kekkaに表示する

  // document.getElementById("kekka").innerHTML = saikoro;
  //サイコロを表示する
  document.getElementById("sainome").src = "img/" + saikoro + ".jpg";

  // 右画像

  if (saikoro === 1 || saikoro === 2) {
    document.getElementById("right").src = "img/goal.jpg";

    // console.log("12");
  } else if (saikoro === 3 || saikoro === 4) {
    document.getElementById("right").src = "img/baby.jpg";
    // console.log("35");
  } else if (saikoro === 5 || saikoro === 6) {
    document.getElementById("right").src = "img/king.jpg";

  }
}

// console.log('a');
// ボタンを押したらランダムな数値を生成
//
// $('.button').on('click', function () {

//   // 乱数を変数へ格納
//   saikoro = Math.floor(Math.random() * 6) + 1;

  // 変数の結果をwhileでループさせる
//   while{
//     if(saikoro === 1 || 2) {
//     //.kekkaに勝ちと表示する
//   }else if{

//   }
//   }



// }
// );
