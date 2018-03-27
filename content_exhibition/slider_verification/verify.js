(function(){
	var slider = document.getElementById("slider");
    var sliderbg = document.getElementById("sliderbg");
    var slidertext = document.getElementById("slidertext");
    var sliderlogo = document.getElementById("sliderlogo");
    //滑块最大偏移量
    var maxoffset = slider.clientWidth - sliderlogo.clientWidth;
    initSlider();
    function initSlider() {
                slidertext.textContent = "拖动滑块验证";
                sliderlogo.addEventListener("mousedown", onSliderDown);
            }
    function onSliderDown(){
    	document.addEventListener("mousemove",onSliderMove);
    	document.addEventListener("mouseup",onSliderUp);
    }
    function onSliderMove(){
    	var left = event.clientX -sliderlogo.clientWidth/2;
    	if(left < 0){
    		left = 0 ;
    	}else if(left > maxoffset){
    		left = maxoffset;
    		sliderSucc();
    	}
    	sliderlogo.style.left = left + "px";
    	sliderbg.style.width = sliderlogo.style.left;
    }
    function onSliderUp(){
    	document.addEventListener("mousemove",onSliderMove);
    	document.addEventListener("mouseup",onSliderUp);
    	sliderlogo.style.left = 0;
    	sliderbg.style.width = 0;
    }
    //成功
    function sliderSucc(){
    	slidertext.textContent = "验证通过";
    	slidertext.style.color = "white";
    	sliderlogo.setAttribute("class", "sliderok");
    	sliderlogo.removeEventListener("mousedown", onSliderDown);
        document.removeEventListener("mousemove", onSliderMove);
        document.removeEventListener("mouseup", onSliderUp);

    }
})();