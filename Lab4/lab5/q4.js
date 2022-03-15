function static_clock(){
    current = new Date();
    hours = current.getHours(); 
    minutes = current.getMinutes();
    seconds = current.getSeconds();
    hours = (hours % 12) || 12;
    a=document.getElementById("Hours");
    b=document.getElementById("Minutes");
    c=document.getElementById("Seconds");
    let h=0;
    while (h<hours){
    h++;
    l=a.innerText+=String.fromCodePoint(0x1F37F);
    }
    let i=0;
    while (i<minutes){
    i++;
    m=b.innerText+=String.fromCodePoint(0x1F604);
    }
    let j=0;   
    while (j<seconds){
    j++;
    n=c.innerText+=String.fromCodePoint(0x1F439);
    }
    return l,m,n;
}
static_clock();

