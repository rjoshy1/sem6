//Question 1
function total(){
 a = document.getElementsByClassName("nav-item")//grabbing elements in class
 k=0;
 let i=0
 while (i<a.length )
 {
    i++;
    k+=1;
 }
 write1=document.getElementById("q1");
 write1.innerHTML="Total number of list items in yellow pane: "+k+ "<br/>";
 b=document.querySelectorAll('a');
 l=0;
 let j=0;
 while (j<b.length )
 {
    j++;
    l+=1;
 }
 write1.innerHTML+="Total number of links in blue container:"+l;
} 
total();
//Q2 copy from blue to grey container
function copy() {
    co = "";
    get = document.getElementsByClassName('main');
    for(i = 0; i < get.length; i++ ) {
      co += get[i].textContent;
    }
    document.getElementsByTagName('div')[3].textContent=co;
}
copy()

//Question3 Adding a paragraph without innerHTML
function q3(){
 manu = document.createElement('p');
 jj = document.createTextNode('New Paragraph Appended');
 manu.appendChild(jj);
 position = document.getElementsByTagName('p')[7];
 position.appendChild(manu);
}
q3();
