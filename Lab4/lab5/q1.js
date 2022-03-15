function greeting(){
 var current = new Date();
 var hour = current.getHours();
 var minute = current.getMinutes();

 var hello;


    if (hour <=12 && minute ==0) {
        hello = 'Good Morning';}
    else if (hour >= 12 && minute > 0 && hour <=18) {
        hello = 'Good Afternoon';}
    else if(hour >= 18 && minute > 0 ){
        hello = 'Good Evening';}
 return hello;
}
document.getElementById("q1").innerHTML=greeting();
