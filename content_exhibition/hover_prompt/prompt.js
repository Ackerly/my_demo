(function(){
        var prompt = document.getElementById('content');
        var links = prompt.getElementsByTagName('a');
        var tip = createTip();
        for(var i = 0; i < links.length; i++){
            links[i].onmousemove = function(e){
                e = e || event;
                var title = this.getAttribute('data-title');
                tip.innerHTML = title;
                tip.style.display = 'block';
                tip.style.left = e.clientX + 10 + 'px';
                tip.style.top = e.clientY + 15 + 'px';
            }
            links[i].onmouseout = function(e){
                tip.style.display = 'none'
            }
        }
        createTip();
        function createTip(){
            var div = document.createElement('div');
            div.className = 'tip';
            return document.body.appendChild(div);
        }
    }());