(function(){
        var form = document.getElementById('form');
        var input = form.getElementsByTagName('input');
        for(var i = 0; i < input.length; i++){
            input[i].onfocus = function(){
                if(this.getAttribute('data-ime')){
                    cancel(this);
                }
            };
            //如果没有imeMode这个属性则清除输入的中文，只有火狐和ie有imeMode这个属性
            if(input[i].style.imeMode == undefined){
                input[i].onkeyup = input[i].onblur = function(){
                    clear(this);
                };
            }
        }
        function cancel(content){
            //imeMode为disabled时禁止输入法
            content.style.imeMode = 'disabled';

        }
        function clear(content){
            //将中文清除
            content.value = content.value.replace(/[\u4e00-\u9fa5]/g, '');
        }
    }());