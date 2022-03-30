const x_class = "x";
const circle_class = "circle";
let circleTurn = "circle";

const WINNING_COMBINATION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const cellElements = document.querySelectorAll("[data-cell]")
const box = document.getElementById('box');

startGame();

function startGame(){
    cellElements.forEach(cell => {
        setHoverClass();
        cell.addEventListener('click', handleClick, {once: true});
    })
    
}




function handleClick(e){
    //placeMark
    var cell = e.target ;
    var current_class = circleTurn ? circle_class : x_class;

    cell.classList.add(current_class);

    //Check for Win
    if (checkWin(current_class)){
        alert(current_class + " Won!");
        resetGame();
        return 
    };

    //Check for Draw
    //Switch Turns  
    switchTurn();
    setHoverClass();

    
}

function switchTurn()
{
    circleTurn = !circleTurn;
}

function setHoverClass(){
    box.classList.remove(x_class);
    box.classList.remove(circle_class);
    if (circleTurn){
        box.classList.add(circle_class);
    }
    else{
        box.classList.add(x_class);
    }
}


function checkWin(current_class){
    return WINNING_COMBINATION.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(current_class);
        })
    })
}


function resetGame(){
    cellElements.forEach(cell => {
        cell.removeEventListener;
        cell.classList.remove('circle');
        cell.classList.remove('x');

        startGame();
    })
}