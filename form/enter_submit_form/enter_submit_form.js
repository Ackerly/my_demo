(function(){
        var form = document.getElementById('form');
        var input = form.getElementsByTagName('input');
        var text = document.getElementsByTagName('textarea');
        var btn = document.getElementById('btn');
        //判断是否按下回车键
        document.onkeydown = function (event){
        	if (event.keyCode == 13) {
        		alert('表单提交');
        	}
        };
    }());