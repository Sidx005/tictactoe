let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let turn0 = true; // true for 'O', false for 'X'
let winner = document.querySelector('.winner');
let intervalId = null;

// Define winning patterns
const winPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Add event listener to each box
boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log('clicked');
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

// Function to check for a winner
function checkWinner() {
    for (let i = 0; i < winPatterns.length; i++) {
        // Get the current winning pattern
        let pattern = winPatterns[i];
        
        // Get the values of the boxes for the current pattern
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
      console.log(boxes[pattern[0]]);
      
        // Check if all three positions in the pattern have the same value
        if (pos1 != '' && pos2 != '' && pos3 != '') {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log('winner');
                
                // Disable all boxes
                for (let j = 0; j < boxes.length; j++) {
                    boxes[j].disabled = true;
                }

                // Blink the winner message
                intervalId = setInterval(() => {
                    winner.classList.toggle("hidden");
                }, 1000);
                
                // Exit the function after finding a winner
                return;
            }
        }
    }

    // let allFilled = [...boxes].every(box => box.innerText !== '');
    // if (allFilled) {
    //     winner.innerText = 'Draw';
    //     for (let j = 0; j < boxes.length; j++) {
    //         boxes[j].disabled = true;
    //     }
    //     intervalId = setInterval(() => {
    //         winner.classList.toggle("hidden");
    //     }, 1000);
    // }
}

// Reset button functionality
reset.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = '';
        box.disabled = false;
        if (intervalId) {
            clearInterval(intervalId);
            winner.classList.add('hidden');
            intervalId = null; // Reset intervalId after clearing
        }
    });
    turn0 = true; // Reset the turn to 'O'
});
