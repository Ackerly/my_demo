window.onload = function(){
  var maxstring = 140;
  var content = document.getElementById('content');
  var stringnum = document.getElementById("strleng");
  content.onfocus = content.onblur = content.onkeyup=function (){
    var str = this.value.length;
    stringnum.innerHTML = maxstring - str;
  };
};