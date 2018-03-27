	//记录日期，根据dateObj日期显示年月
	var dateObj = (function(){
		//默认当前系统事件
		var _date = new Date();
		return {
			getDate : function(){
			  return _date;
			},
			setDate : function(date) {
			  _date = date;
			}
		}
	})()
//calendar HTML内容
renderHtml();
// 表格中显示日期
showCalendarData();
 // 绑定事件
 bindEvent();
//渲染html结构
function renderHtml(){
	var calendar = document.getElementById('calendar');
	var titleBox = document.createElement("div");	//标题盒子
	var contentBox = document.createElement("div");	//日历内容

	//设置标题盒子的HTML
	titleBox.className = 'calendar-title-box';
	titleBox.innerHTML = "<span class = 'prev-month' id = 'prevMonth'></span>"+"<span class = 'calendar-title' id = 'calendarTitle'></span>"+"<span class= 'next-month' id = 'nextMonth'></span>";
	calendar.appendChild(titleBox);

	//日历内容结构
	contentBox.className = 'calendar-contetn-box';
	//星期
	var _headhtml = "<tr>"+
	"<th>日</th>"+
	"<th>一</th>"+
	"<th>二</th>"+
	"<th>三</th>"+
	"<th>四</th>"+
	"<th>五</th>"+
	"<th>六</th>"+
	"</tr>"
	var  _contenthtml = ""
	//日期
	//一个月最多31天，最多占6行
	for(i= 0;i<6;i++){
		_contenthtml += "<tr>"+
		"<td></td>"+
		"<td></td>"+
		"<td></td>"+
		"<td></td>"+
		"<td></td>"+
		"<td></td>"+
		"<td></td>"+
		"</tr>" 
	}
	contentBox.innerHTML = "<table id = 'calendarTable' class = 'calendar-table'>"+_headhtml+_contenthtml+"</table>";
	//添加到calendardiv中
	calendar.appendChild(contentBox);
	console.log(contentBox);
}
// 显示日历内容，设置类名
function showCalendarData(){
	var _year = dateObj.getDate().getFullYear();
	var _month = dateObj.getDate().getMonth()+1;
	var _dateStr = getDateStr(dateObj.getDate());
	console.log(_dateStr);
	//设置标题的年月信息
	var calendarTitle = document.getElementById("calendarTitle");
	var titleStr = _dateStr.substr(0, 4) + "年" + _dateStr.substr(4,2) + "月";
	calendarTitle.innerText = titleStr;
	//设置表格日期
	var _table = document.getElementById('calendarTitle');
	var _tds = _table.getElementsByTagName("td");
	var _firstDay = new Date(_year, _month - 1, 1);  // 当前月第一天
	var _table = document.getElementById("calendarTable");
    var _tds = _table.getElementsByTagName("td");
    var _firstDay = new Date(_year, _month - 1, 1);  // 当前月第一天
    for(var i = 0; i < _tds.length; i++) {
      var _thisDay = new Date(_year, _month - 1, i + 1 - _firstDay.getDay());
      var _thisDayStr = getDateStr(_thisDay);
      _tds[i].innerText = _thisDay.getDate();
      _tds[i].setAttribute('data', _thisDayStr);
      if(_thisDayStr == getDateStr(new Date())) {    // 当前天
        _tds[i].className = 'currentDay';
      }else if(_thisDayStr.substr(0, 6) == getDateStr(_firstDay).substr(0, 6)) {
        _tds[i].className = 'currentMonth';  // 当前月
      }else {    // 其他月
        _tds[i].className = 'otherMonth';
      }
    }
	
}
//日期转为字符串
function getDateStr(date) {
	var _year = date.getFullYear();

    var _month = date.getMonth() + 1;    // 月从0开始计数
    var _d = date.getDate();
     
    _month = (_month > 9) ? ("" + _month) : ("0" + _month);
    _d = (_d > 9) ? ("" + _d) : ("0" + _d);
	return _year + _month + _d;

  }

  //绑定上个月下个月事件
  function bindEvent() {
    var prevMonth = document.getElementById("prevMonth");
    var nextMonth = document.getElementById("nextMonth");
    addEvent(prevMonth, 'click', toPrevMonth);
    addEvent(nextMonth, 'click', toNextMonth);
  }
  //绑定事件
  function addEvent(dom, eType, func) {
    if(dom.addEventListener) {  // DOM 2.0
      dom.addEventListener(eType, function(e){
        func(e);
      });
    } else if(dom.attachEvent){  // IE5+
      dom.attachEvent('on' + eType, function(e){
        func(e);
      });
    } else {  // DOM 0
      dom['on' + eType] = function(e) {
        func(e);
      }
    }
  }
  //上个月
  function toPrevMonth() {
    var date = dateObj.getDate();
    dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    showCalendarData();
  }
  //下个月
  function toNextMonth() {
    var date = dateObj.getDate();
    dateObj.setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    showCalendarData();
  }