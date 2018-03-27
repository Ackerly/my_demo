(function(){
  var text =document.getElementById('text');
  var btn = document.getElementById('btn');
  btn.onclick = function(){
  	text.value = text.value.replace(/\s+/g,'');
  };
})();