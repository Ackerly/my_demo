(function(){
  var msg = document.getElementById('msg');
  var btn = document.getElementById('btn');
  var key = ["番茄","土豆"];
   btn.onclick = displace;
  //替换敏感词
   function displace(){
    for(i=0;i < key.length;i++){
      var reg = RegExp(key[i],"g");
      if (msg.value.indexOf(key[i])!=-1) {
      	var text = msg.value.replace(reg,"**");
      	msg.value = text;
      }
    }
  };
})();