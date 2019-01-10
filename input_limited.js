// 只能输入1-9数字
$(document).on("input propertychange",".agentinput",function(){
    var limitNum = $(this).val().replace(/[^\d]/g, "");
    if(limitNum>=0){
        $(this).val(limitNum);
    }else{
        $(this).val("");
    }
})