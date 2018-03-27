var move = document.getElementById('move');
var small = document.getElementById('small');
var big = document.getElementById('big');
var enlarge = document.getElementById('enlarge');
small.onmousemove = function(event){
	event = event || window.event;
	this.style.cursor = 'move';
	move.style.display = enlarge.style.display = 'block';
	//move移动块的left值
	var move_left = event.clientX - this.offsetLeft - move.offsetWidth/2;
	//move移动块的top值
	var move_top = event.clientY - this.offsetTop - move.offsetHeight/2;
	// 超出左边界值为0
	move_left = move_left < 0 ? 0 : move_left;
	 // 超出右边界赋值为盒子宽度-移动块的宽度
    move_left = move_left > this.offsetWidth - move.offsetWidth ? this.offsetWidth - move.offsetWidth : move_left;
    // 超出上边界赋值为0
    move_top = move_top < 0 ? 0 : move_top;
    // 超出下边界赋值为盒子高度-移动块高度
    move_top = move_top > this.offsetHeight - move.offsetHeight ? this.offsetHeight - move.offsetHeight : move_top;
    // 修改移动块left、top值
    move.style.left = move_left + 'px';
    move.style.top = move_top + 'px';
    var big_x = move_left/(small.offsetWidth-move.offsetWidth) * (enlarge.offsetWidth-big.offsetWidth);
    var big_y = move_top/(small.offsetHeight-move.offsetHeight) * (enlarge.offsetHeight-big.offsetHeight);
    // 修改图片定位
    enlarge.style.left = -big_x + 'px';
    enlarge.style.top = -big_y + 'px';
};
small.onmouseout = function(event){
    move.style.display = enlarge.style.display = 'none';
 };
