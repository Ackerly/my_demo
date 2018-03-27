(function (){
	var ol = document.getElementById('ol');
	var h1s = document.querySelectorAll('h1');
    var dls = document.querySelectorAll('dl');
    for(i=0;i < h1s.length;i++){
    	h1s[i].index = i;
    h1s[i].onclick = function(){
    		var index = this.index;
    		dls[index].style.display = dls[index].style.display ==='block' ? 'none' : 'block';
    		for (var k = 0; k < ps.length; k++) {
            if (k === index) {
                continue;
            }
            dls[k].style.display = "none";
        }
    	};
    }
})();