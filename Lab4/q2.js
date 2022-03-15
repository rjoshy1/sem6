function roll_dices (){
 k=Math.floor(( Math.random() * 6 )+1);
 j=Math.floor(( Math.random() * 6 )+1);
 return [k,j];
}

document.getElementById('dice1').textContent=roll_dices()[0];
document.getElementById('dice2').textContent=roll_dices()[1];

