


function time_remaining() {
    date1= new Date();
    date2= new Date("12/31/2022")
    time= (date2.getTime() - date1.getTime())/1000;
    days= Math.floor(time / 86400);
    month=Math.floor(time/86400)/30;
    month=month.toFixed(2);
    week=Math.floor(days/7);
    hours=(time /86400)*24;
    hours=hours.toFixed(0);
    minute=(time /86400)*60*24;
    minute=minute.toFixed(0);  
    seconds=(time/86400)*60*60*24;
    seconds=seconds.toFixed(0);
    return [minute,week,hours,days,month,seconds];
}
document.getElementById('minutes').innerHTML = time_remaining()[0];
document.getElementById("weeks").innerHTML = time_remaining()[1];
document.getElementById("hours").innerHTML = time_remaining()[2];
document.getElementById("days").innerHTML = time_remaining()[3];
document.getElementById("months").innerHTML = time_remaining()[4];
document.getElementById("seconds").innerHTML = time_remaining()[5];