function static_clock(){
    current = new Date();
    hours = current.getHours(); 
    minutes = current.getMinutes();
    seconds = current.getSeconds();
    hours = (hours % 12) || 12;
    a=document.getElementById("Hour");
    b=document.getElementById("Minute");
    c=document.getElementById("Second");
    for (h=0 ; h<hours; h++)
    {
        l=a.innerText+=String.fromCodePoint(0x1F37F);
    }
    for (i=0 ; i<minutes; i++)
    {
        m=b.innerText+=String.fromCodePoint(0x1F604);
    }
    for (j=0 ; j<seconds; j++)
    {
        n=c.innerText+=String.fromCodePoint(0x1F439);
    }
    return l,m,n;
}
static_clock();
