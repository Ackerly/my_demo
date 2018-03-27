(function (){
  var allcheck = document.getElementById('all');
  var box = document.getElementsByName('item');
  allcheck.onclick = all;
  function all(){
	  for(i=0;i<box.length;i++){
	  	box[i].checked = allcheck.checked;
	  }
  }
})();