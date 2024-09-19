let button=document.querySelectorAll('.box');
let reset=document.querySelector('.reset');
let statusdiv=document.querySelector('.status')
let win=Array(9).fill(null);
let turn=true
for(let i=0;i<button.length;i++){
button[i].addEventListener("click",()=>{
    console.log(button[i])
    if(turn){
        button[i].innerHTML="0";
        statusdiv.innerHTML=`Player X turn`

        turn=false
    }else{
        button[i].innerHTML="X";
        statusdiv.innerHTML=`Player 0 turn `

        turn=true
    }
button[i].disabled=true
checkWinner()
}

)
}

const checkWinner = () => {
    // Check rows
    if (button[0].innerHTML && button[0].innerHTML === button[1].innerHTML && button[1].innerHTML === button[2].innerHTML) {
        alert(`Player ${button[0].innerHTML} wins!`);
        button.forEach(btn => btn.disabled = true);
        return;
    }
    if (button[3].innerHTML && button[3].innerHTML === button[4].innerHTML && button[4].innerHTML === button[5].innerHTML) {
        alert(`Player ${button[3].innerHTML} wins!`);
        button.forEach(btn => btn.disabled = true);
        return;
    }
    if (button[6].innerHTML && button[6].innerHTML === button[7].innerHTML && button[7].innerHTML === button[8].innerHTML) {
        alert(`Player ${button[6].innerHTML} wins!`);
        button.forEach(btn => btn.disabled = true);
        return;
    }

    // Check columns
    if (button[0].innerHTML && button[0].innerHTML === button[3].innerHTML && button[3].innerHTML === button[6].innerHTML) {
        alert(`Player ${button[0].innerHTML} wins!`);
        button.forEach(btn => btn.disabled = true);
        return;
    }
    if (button[1].innerHTML && button[1].innerHTML === button[4].innerHTML && button[4].innerHTML === button[7].innerHTML) {
        alert(`Player ${button[1].innerHTML} wins!`);
        button.forEach(btn => btn.disabled = true);
        return;
    }
    if (button[2].innerHTML && button[2].innerHTML === button[5].innerHTML && button[5].innerHTML === button[8].innerHTML) {
        alert(`Player ${button[2].innerHTML} wins!`);
        button.forEach(btn => btn.disabled = true);
        return;
    }

    // Check diagonals
    if (button[0].innerHTML && button[0].innerHTML === button[4].innerHTML && button[4].innerHTML === button[8].innerHTML) {
        alert(`Player ${button[0].innerHTML} wins!`);
        button.forEach(btn => btn.disabled = true);
        return;
    }
    if (button[2].innerHTML && button[2].innerHTML === button[4].innerHTML && button[4].innerHTML === button[6].innerHTML) {
        alert(`Player ${button[2].innerHTML} wins!`);
        button.forEach(btn => btn.disabled = true);
        return;
    }

    // Check for draw
    if ([...button].every(btn => btn.innerHTML)) {
        alert('Draw!');
        button.forEach(btn => btn.disabled = true);
    }
};

reset.addEventListener("click",()=>{
    button.forEach(element => {
        element.innerHTML='';
        turn=true;
        element.disabled=false
    });
})