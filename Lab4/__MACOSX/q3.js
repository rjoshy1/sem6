function static_clock()
{
    /*getting time values */
    var day = new Date();
    var hour = day.getHours();
    var min=day.getMinutes();
    var sec=day.getSeconds();
    var x=document.getElementById("q3");
    var i;
    var k;
    var s;
    var msg='';

    /*using if else to replace 24 hour time to 12 hour format  */
    if (hour==0)
    {
        hour=hour+12;
    }
    else if(hour>12)
    {
        hour=hour-12;
    }
    else
    {
        hour=hour;
    }

    var x=document.getElementById("hour");
    var y=document.getElementById("minute");
    var z=document.getElementById("second");
    /*For Loop for Hour*/
    for (i=0 ; i<hour; i++)
    {
        x.textContent+=("😀");
    }
    
    for (k=0 ; k<min; k++)
    {
        y.textContent+=("🍔");
    }
 
    for (s=0 ; s<sec; s++)
    {
        z.textContent+=("🔥");
    }


}

static_clock();
