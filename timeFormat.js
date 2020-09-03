// 时间格式化
function timeFormat(times) {
    if(!times){
        return false
    }
    if (times.indexOf('T') > 0) { //去除时分
        times = times.substring(0, times.indexOf('T'))
    }
    if (times.indexOf(' ') > 0) { //去除时分
        times = times.substring(0, times.indexOf(' '))
    }
    times = times.replace("/", "-").replace("/", "-") //用'-'替换'/'
    var timeArry = times.split('-'); //字符分割
    for (i = 0; i < timeArry.length; i++) {
        if (Number(timeArry[i]) < 10) {
            if (timeArry[i].length == 1) {
                timeArry[i] = '0' + String(timeArry[i])
            }
        }
    }
    var timeFormat = timeArry.join("-");
    return timeFormat
}
timeFormat('2019/10/31')   //2019-10-31
timeFormat('2019-1-31')   //2019-01-31
