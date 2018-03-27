(function(){
        var form = document.getElementById('form');
        var input = form.getElementsByTagName('input');
        for(var i = 0; i < input.length; i++){
            input[i].onfocus = input[i].onblur = input[i].onkeyup = function(){
            	//非数字替换为空
                this.value = this.value.replace(/\D/g, '');
            };
        }
 }());