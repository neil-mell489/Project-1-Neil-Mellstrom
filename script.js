// RESET BUTTON AND GAME SETUP
function resetGame() {

    // Reset Task Display
    
    resetTaskList()

    // Variables to store random positions for the player and monster
    let randomPlayerPosition = null;
    let randomMonsterPosition = null;

    // Function to generate two distinct random numbers
    function twoRandomNumbers() {
        let randomNumber1, randomNumber2;

        // Generate the first random number
        randomNumber1 = Math.floor(Math.random() * 18) + 1;

        // Generate the second random number, ensuring it's different from the first
        do {
            randomNumber2 = Math.floor(Math.random() * 18) + 1;
        } while (randomNumber2 === randomNumber1);

        console.log(`randomnumber1 = ${randomNumber1} and randomnumber2 = ${randomNumber2}`);

        // Assign values to randomPlayerPosition and randomMonsterPosition
        randomPlayerPosition = randomNumber1;
        randomMonsterPosition = randomNumber2;

        return [randomNumber1, randomNumber2];
    }

    // Variable to track the current turn (initially set to "player")
    let currentTurn = "player";

    // Call the function to get the initial random numbers
    const randomNumbers = twoRandomNumbers();

    // RESET PLAYER HEALTH AND MONSTER HEALTH
    let playerHealth = 5;
    let monsterHealth = 5;

    // Function to update the health display for both player and monster
    function updateHealthDisplay() {
        updatePlayerHealth();
        updateMonsterHealth();
    }

    // Function to update the player health display
    function updatePlayerHealth() {
        const playerHealthSquares = document.querySelectorAll('.player-health-square');

        playerHealthSquares.forEach((square, index) => {
            // If the index is less than playerHealth, show a solid green square; otherwise, show an empty square
            square.classList.toggle('empty', index >= playerHealth);
        });
    }

    // Function to update the monster health display
    function updateMonsterHealth() {
        const monsterHealthSquares = document.querySelectorAll('.monster-health-square');

        monsterHealthSquares.forEach((square, index) => {
            // If the index is less than monsterHealth, show a solid green square; otherwise, show an empty square
            square.classList.toggle('empty', index >= monsterHealth);
        });
    }

    // Call the updateHealthDisplay function to initialize the health display
    updateHealthDisplay();

    // CONTINUE RESET FUNCTION RIGHT HERE





}

// Event listener for the reset button
let resetButton = document.querySelector('.resetbtn');

resetButton.addEventListener('click', function() {
    // Call the resetGame function when the reset button is clicked
    resetGame();
});




// TASK LIST ARRAY AND UPDATER

let taskList = [
    "1 ~ Acquire scientist's notes from Lab.", 
    "2 ~ Acquire fire extinguisher from Storage.",
    "3 ~ Acquire Captain's notes in his Quarters.",
    "4 ~ Restart Engines.",
    "5 ~ Pilot vessel from Control room to surface",
    "6 ~ Set Reactor to self destruct.",
    "7 ~ Escape via Torpedo Tubes."
]

function resetTaskList() {
    let nextTask = document.getElementById("task-list-next");
    nextTask.textContent = "Next Task:\n" + taskList[1];

    let currentTask = document.getElementById("task-list-current");
    currentTask.textContent = "Current Task:\n" + taskList[0];

    // let previousTask = document.getElementById("task-list-previous");
    // previousTask.textContent = "Previous Task:\n" + "";
}


// UPDATING TASK LIST - PSUEDO

    //  we need a function that'll fire off 

    let currentTaskDisplay = 0; // Set the current task display index

    // when currentTaskDisplay equals 0, that's your starting display. 1 is next. then 2,3,4,etc

    function updateTaskList(currentTaskDisplay) {
        // Validate the input index
        if (currentTaskDisplay >= 0 && currentTaskDisplay < taskList.length) {
            // Update the task list based on the input index
            let nextTaskIndex = (currentTaskDisplay + 1) % taskList.length;
            let currentTaskIndex = currentTaskDisplay % taskList.length;
    
            let nextTask = document.getElementById("task-list-next");
            nextTask.textContent = "Next Task:\n" + taskList[nextTaskIndex];
    
            let currentTask = document.getElementById("task-list-current");
            currentTask.textContent = "Current Task:\n" + taskList[currentTaskIndex];
        } else {
            console.error("Invalid currentTaskDisplay value.");
        }
    }
    
    // Example usage
    updateTaskList(currentTaskDisplay)











// ROOMS LIST (currently does nothing whoops)

const roomsArray = [
    [1, 'Crew Quarters 1'],
    [2, 'Torpedo Bay'],
    [3, 'Crew Quarters 2'],
    [4, 'H1'],
    [5, 'H4'],
    [6, 'Mess Hall'],
    [7, 'Control'],
    [8, 'Sonar'],
    [9, 'H2'],
    [10, 'H5'],
    [11, 'Lab'],
    [12, 'Reactor'],
    [13, 'Batteries'],
    [14, 'H3'],
    [15, 'H6'],
    [16, "Captain's Quarters"],
    [17, 'Engines'],
    [18, 'Storage']
];


// VICTORY AND DEFEAT SCREEN

displayVictoryScreen() {
    alert("(Victory) Lieutenant Helmsman Alexei Yarovoy recovered from the Barents Sea among wreckage of the Zarya Tupolevsky X-1. No evidence of animal reported by Helmsman.")
}

displayDefeatScreen() {
    alert("(Defeat) Undamaged vessel of Zarya Tupolevsky X-1 recovered in Barents Sea. No survivors recovered. Cause unknown.")
}



