//example
// console.log('test');
// var date = new Date();
// console.log(JSON.stringify(date));

// date.setDate(date.getDate()+30);
// console.log(JSON.stringify(date));

// var json_date = date.toString();


// var date2 = new Date(json_date);
// date2.setDate(date.getDate()+2);
// console.log(JSON.stringify(date2));

// console.log('compare',date==date);


function getCurrentTimeMillis(hour, minute, second){
    console.log(hour+','+minute+','+second);
    var date = new Date();
    if (hour>=0)
        date.setHours(hour);
    if (minute>=0)
        date.setMinutes(minute);
    if (second>=0)
        date.setSeconds(second);
    console.log('kq: '+date.getTime());
    return date.getTime()+"";
}

// function checkReward(last_login_reward){
//     var cur_date = new Date();
//     var last_login_reward_date = new Date(last_login_reward);
//     return cur_date>=last_login_reward_date;
// }
// function getCurrentTime(){
//     var cur_date = new Date();
//     return cur_date.toString();
// }
// function getNextReward(last_login_reward){
//     var cur_date = new Date();
//     cur_date.setDate(cur_date.getDate()+1);
//     return cur_date.toString();
// }
// function getCurrentTimeJson(){
//     var cur_date = new Date();
//     var hour = cur_date.getHours();
//     var minute = cur_date.getMinutes();
//     return JSON.stringify({"hour":hour, "minute":minute});
// }
// function getDeltaHour(count_day, hour){
//     var date_to_add = new Date();
//     date_to_add.setDate(date_to_add.getDate()+count_day);
//     date_to_add.setHours(hour);
//     date_to_add.setMinutes(0);
//     date_to_add.setSeconds(0);

//     var cur_date = new Date();
    
//     var delta_milli_seconds =  date_to_add.getTime()-cur_date.getTime();
//     console.log('delta_milli_seconds',delta_milli_seconds);
//     return delta_milli_seconds/1000;
// }
// function getTime(hour, minute, second){
//     var date = new Date();
//     if (hour)
//         date.setHours(hour);
//     if (minute)
//         date.setMinutes(minute);
//     if (second)
//         date.setSeconds(second);
//     console.log(JSON.stringify(date));
//     return date;
// }