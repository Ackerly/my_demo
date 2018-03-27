(function(){
	var main = document.getElementById('main');
	var content = document.getElementById('content');
	var content2 = document.getElementById('content2');
	content2.innerHTML = content.innerHTML;
	var time = 100;  //滚动的时间
	setInterval(scrollup,time);
	//向上滚动函数
	function scrollup(){
		if(main.scrollTop >= content.offsetHeight){
			main.scrollTop = 0;
		}else{
			main.scrollTop++;
		}
	}
	//鼠标移动到滚动内容时停止
	main.onmouseover = function(){
		clearInterval(scroll);
	};
	//鼠标离开滚动内容时继续执行
	main.onmouseout = function(){
	scroll = setInterval(scrollup,time);
	};
})();
