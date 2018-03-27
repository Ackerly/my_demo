(function(){
        var form = document.getElementById('form');
        var input = form.getElementsByTagName('input');
        for(var i = 0; i < input.length; i++){
            input[i].oncopy = input[i].onpaste = function(){
                return false;
            }
        }
    }());