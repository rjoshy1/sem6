function personalinformation(Name,Surname,Date_of_Birth,Gender,Number_of_Children){
    this.Name=Name;
    this.Surname=Surname;
    this.Date_of_Birth=Date_of_Birth;
    this.Gender=Gender;
    this.Number_of_Children=Number_of_Children;
    this.Age= function(){
    date1= new Date();
    date2= Date_of_Birth;
    date3=(date1.getTime() - Date_of_Birth.getTime());
    difference = new Date(date3);        
    yearcal = difference.getUTCFullYear();   
    age = Math.floor(yearcal - 1970);
    return this.age;  
    };
 }
 function childreninformation(name,DOB,gender){
    this.name=name;
    this.DOB=DOB;
    this.gender=gender;
    this.childage=function (){
    chdate1= new Date();
    chdate2= Date_of_Birth;
    chdate3=(date1.getTime() - Date_of_Birth.getTime());
    chdifference = new Date(date3);        
    chyearcal = difference.getUTCFullYear();   
    chage = Math.floor(yearcal - 1970);
    return this.chage;  
    };
 }
 var detail1 = new personalinformation("Harvey","Joy","12/13/1990","Male","1");
 var child = new childreninformation("Lious","12/15/2015","Male");
 detail1.hasPet=false;
 child.hasPet=false;
 var pers="Given Name:" + detail1.Name;
 var pers1="Surname:"+ detail1.Surname;
 var pers2="Date of Birth:" + detail1.Date_of_Birth;
 var pers3="Gender:" + detail1.Gender;
 var pers4="Number of Children:" + detail1.Number_of_Children;
 var pers5="Age:" + detail1.age;
 var ch1= "Name:" + child.name;
 var ch2= "Date of Birth:" + child.DOB;
 var ch3="Gender:"+ child.gender;
 var ch4="ChildAge:"+ child.chage;

 document.getElementById("q3").innerHTML=pers+"<br/>"+pers1+"<br/>"+pers2+"<br/>"+pers3+"<br/>"+pers4+"<br/>"+pers5+"<br/>"+"Child's Information:"+"<br/>"+ch1+"<br/>"+ch2+"<br/>"+ch3+"<br/>"+ch4+"<br/>";