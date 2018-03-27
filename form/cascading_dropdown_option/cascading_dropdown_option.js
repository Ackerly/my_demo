var province = document.getElementById('province');
var city =document.getElementById('city');
window.onload = function () {
    var provinceLen=site.province.length;
    var provinceStr="<option value=''>请选择省</option>";
    for (var i = 0; i < provinceLen; i++) {
                //循环遍历省
                provinceStr=provinceStr+"<option value='"+site.province[i].key+"'>"+site.province[i].value+"</option>";
            }
            province.innerHTML=provinceStr;
};
function setCityByProvice(){
        var provincevalue=province.value;
        var cityList=site.city[provincevalue];
        
        var cityStr="<option value=''>请选择市</option>";
        var cityLen=cityList.length;
        for (var i = 0; i < cityLen; i++) {
            cityStr=cityStr+"<option value='"+cityList[i].key+"'>"+cityList[i].value+"</option>";
        }
        
        city.innerHTML=cityStr;
    }