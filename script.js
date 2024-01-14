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
    "Acquire scientist's notes from Lab.", 
    "Acquire fire extinguisher from Storage.",

    // TASKS TO ADD WHEN THEIR FUNCTIONALITY WORKS
    // weaken the monster so its at 1 HP
    // then use the fire extinguisher on it

    "Acquire Captain's notes in his Quarters.",
    "Restart Engines.",
    "Pilot vessel from Control room to surface",
    "Set Reactor to self destruct.",
    "Escape via Torpedo Tubes."
]

function resetTaskList() {
    let nextTask = document.getElementById("task-list-next");
    nextTask.textContent = "Next Task:\n" + taskList[1];

    let currentTask = document.getElementById("task-list-current");
    currentTask.textContent = "Current Task:\n" + taskList[0];

    let previousTask = document.getElementById("task-list-previous");
    previousTask.textContent = "Previous Task:\n" + "";
}












// ROOMS LIST

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


