`use strict`;
//---------------------------
//メニュー押下時、メニューを上部へ戻す
//---------------------------
{
  function changeCheckbox(idname){
    var obj = document.getElementById(idname);
    obj.checked = false;
    console.log("onlink");
  }
}