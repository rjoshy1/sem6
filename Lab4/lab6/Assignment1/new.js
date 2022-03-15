const starting = document.querySelector('.turn');
const first=document.getElementById("click");
//Since onclick is not allowed addeventlistner is being used for managing the click
function getInputValue() {
    //grabbing the user names and since both the text box have same class i am using [0] and [1]
    inputVal = document.getElementsByClassName("name")[0].value;
    inputva= document.getElementsByClassName("name")[1].value;
    //for displaying error if the value of textbox that is name is null and the state of the game is made false so the game won't start
    if (inputVal==""){
        h=document.getElementById('yo').innerText='Both players names must be entered before we could start the game.';
        k=gameActive=false;
        return k;}
    //for displaying error if the value of textbox that is name is null and the state of the game is made false so the game won't start
    else if(inputva==""){
        h=document.getElementById('yo').innerText='Both players names must be entered before we could start the game.' ;
        k=gameActive=false;
        return k; }
    //remove the class so hidden stuff will be displayed and the gamestate is being made active
    else{
        rock = document.getElementById("alertdisplayed");
        rock.classList.remove("hiding");
        k=gameActive=true;
        
    }
}
//validate the click and display output
first.addEventListener("click",getInputValue);


//variable player made it empty
player = "";
// different possible plays 
posibility = ["", "", "", "", "", "", "", "", ""];
//displaying the winning message
Messagewin = () => `${l} is the winner!`;
//if game ends in draw message is being displayed 
drawMessage = () => `Game ended in a draw!`;
//the next one shows the players turn grabs value based on the entered name and for loop is being used in the below line code
playerturn = () => ` ${player}`;

starting.innerHTML = playerturn();
//these are winning condition because there are 9 outcomes for winning like diagonal, vertical . horizontal 
const conditiontowin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 3, 6],
    [0, 4, 8],
    [2, 4, 6]
];
//this function is for handling the cells based on the player clicking 
function handleCellPlayed(clickedCell, clickedCellIndex) {
    posibility[clickedCellIndex] = player;
    clickedCell.innerHTML = player;
}
//the below function for handling the player change and here options a player  have X and O. one come after another.
function handlePlayerChange() {

    player = player === 'X'?'O':'X';
//if statement is used and if x comes in the player like in the cell then the name of the first player is stored in variable l and this will be displayed in the who's turn
    if (player==='X'){
        l=inputVal;
        starting.innerHTML = inputVal;
    }
    else if(player==='O'){
        l=inputva;
        starting.innerHTML = inputva;
    }
}


function handleResultValidation() {
    let winning = false;
    for (let i = 0; i <= 7; i++) {
        const win = conditiontowin[i];
        r = posibility[win[0]];
        o = posibility[win[1]];
        s = posibility[win[2]];
        if (r === ''){ 
            continue;
        }
        if (o === ''){ 
            continue;
        }
        if (s === ''){ 
            continue;
        }
        if (r === o && o === s) {
            winning = true;
            break
        }
    }

    if (winning) {
        starting.innerHTML = Messagewin();
        gameActive = false;
        return;
    }

    let roundDraw = !posibility.includes("");
    if (roundDraw) {
        starting.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('id'));

    if (posibility[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

document.querySelectorAll('.cells').forEach(cell => cell.addEventListener('click', handleCellClick));
