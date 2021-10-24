`use strict`;
//---------------------------
//Object.keysでオブジェクトから配列へ
//---------------------------
{
  // 開くのID取得
  const open2 = document.getElementById('open2');
  const overlay = document.querySelector('.overlay');
  // 閉じるのID取得
  const close = document.getElementById(`close`);
  
  // メニューをクリックした場合
  open2.addEventListener('click', () => {
    // メニュー画面を開く
    overlay.classList.add('show');
    // ハンバーガー三本を消す
    open2.classList.add('hide');
  });


  // 閉じる押下時
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    // ハンバーガー三本を消す
    open2.classList.remove('hide');
  });


  // メニューを選択した場合、閉じる押下と同じ処理を実行
  function myFunction() { 
    overlay.classList.remove('show');
    // ハンバーガー三本を消す
    open2.classList.remove('hide');
  }

  }
  