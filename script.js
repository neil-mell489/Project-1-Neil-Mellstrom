// TABLE OF CONTENTS
//  1. Game Setup (initial)
//  2. Reset Button
//  3. Task List Array
//  4. Not sure where to Put this
//  5. Updating Task List Display
//  6. Rooms List (currently does nothing. Probbaly will never do anything)
//  7. Victory and Defeat Alerts
//  8. Player Initial Position (this should be in Game Setup)
//  9. Player Movement Functions
//  10. ...
//  11. ...
//  12. ...


// NOTE TO SELF - You probbaly want an array of arrays (a matrix) that has all the rooms x and y values. 
// each stored in their own two value array.
//  This will allow you to 






// 1. GAME SETUP (Initial)

    // Spawns player and monster in random tiles for their initial positions. 
    // Defines linear task tracker         (make sure linear task tracker STARTS as 0% complete)
    // Defines Task List Display            (also make sure it STARTS with the beginning tasks)
    // Defines Player and Monster Health at full (same thang)
    // Defines current turn as players turn
    // ...

// ----------------------------------------------------------

    // RANDOM PLAYER COORDINATES FOR INITIAL SPAWN
    // RANDOMLY GENERATE OUR X1, X2 and our Y1, Y2 values while making sure they are not the same coordinates.

        // Function to generate two random numbers
        function generateTwoRandomNumbers() {
            // Generate the first random number in the range [1, 3]
            const randomX1 = Math.floor(Math.random() * 3) + 1;
        
            let randomX2;
        
            // Generate the second random number in the range [1, 7], excluding certain values if the first number is 2
            if (randomX1 === 2) {
                do {
                    randomX2 = Math.floor(Math.random() * 7) + 1;
                } while (randomX2 % 2 === 0);
            } else {
                randomX2 = Math.floor(Math.random() * 7) + 1;
            }
        
            return [randomX1, randomX2];
        }







// 2. RESET BUTTON 

    // spawns player and monster in random tiles
    // Resets Task Display to first and second tasks
    // Resets the linear task tracker to incomplete.
    // Sets turn to players turn
    // Resets health for both player and monster to 5/5
    // ...

function resetGame() {

    // Reset Task Display
    
    resetTaskList()

    // Variables to store random positions for the player


    // Notice how the two values are stored together in an array for the player and the monster.
    let randomPlayerPosition = [randomX1, randomY1];
    let randomMonsterPosition = [randomX2, randomY2];


                // I dont thik this is the best way to set the spawnpoint and manipulate movement (below)
                    // function generateTileCoordinatesString() {
                    //     // Generate two random numbers
                    //     const [randomNumber1, randomNumber2] = generateTwoRandomNumbers();
                    
                    //     // Create the string in the format "tile X,Y"
                    //     const coordinatesString = `tile ${randomNumber1},${randomNumber2}`;
                    
                    //     return coordinatesString;
                    // }





    // SPAWN ALEXEI ON TILE



                // Same here, kinda chunky isn't it?

                    // function moveAlexeiToTile(initialPlayerPosition, targetCoordinatesString) {
                    //     // Get the initial player position element
                    //     const initialTileElement = getTileElementByCoordinatesString(initialPlayerPosition);
                    
                    //     // Get the target tile element
                    //     const targetTileElement = getTileElementByCoordinatesString(targetCoordinatesString);
                    
                    //     // Get the Alexei span element
                    //     const alexeiSpan = initialTileElement.querySelector('.tileOccupant');
                    
                    //     // Remove Alexei from the initial tile
                    //     initialTileElement.removeChild(alexeiSpan);
                    
                    //     // Append Alexei to the target tile
                    //     targetTileElement.appendChild(alexeiSpan);
                    // }
    
                    // // Example usage with initial player position and target coordinates
                    // const initialPlayerPosition = "tile 1 1";
                    // const targetCoordinatesString = "tile 2 2";
                    
                    // // Move Alexei to the new tile
                    // moveAlexeiToTile(initialPlayerPosition, targetCoordinatesString);

    



    // Variable to track the current turn (initially set to "player")
    let currentTurn = "player";

                                // // Call the function to get the initial random numbers
                                // const randomNumbers = twoRandomNumbers();

    // RESET PLAYER HEALTH AND MONSTER HEALTH
    let playerHealth = 5;
    let monsterHealth = 5;


                        // ENTIRE HEALTH DISPLAY DOESNT WORK RIGHT NOW

                            // // Function to update the health display for both player and monster
                            // function updateHealthDisplay() {
                            //     updatePlayerHealth();
                            //     updateMonsterHealth();
                            // }

                            // // Function to update the player health display
                            // function updatePlayerHealth() {
                            //     const playerHealthSquares = document.querySelectorAll('.player-health-square');

                            //     playerHealthSquares.forEach((square, index) => {
                            //         // If the index is less than playerHealth, show a solid green square; otherwise, show an empty square
                            //         square.classList.toggle('empty', index >= playerHealth);
                            //     });
                            // }

                            // // Function to update the monster health display
                            // function updateMonsterHealth() {
                            //     const monsterHealthSquares = document.querySelectorAll('.monster-health-square');

                            //     monsterHealthSquares.forEach((square, index) => {
                            //         // If the index is less than monsterHealth, show a solid green square; otherwise, show an empty square
                            //         square.classList.toggle('empty', index >= monsterHealth);
                            //     });
                            // }

                            // // Call the updateHealthDisplay function to initialize the health display
                            // updateHealthDisplay();

    // CONTINUE RESET FUNCTION RIGHT HERE

}

// RESET BUTTON LISTENER
let resetButton = document.querySelector('.resetbtn');

resetButton.addEventListener('click', function() {
    // Call the resetGame function when the reset button is clicked
    resetGame();
});





// 3. TASK LIST ARRAY

let taskList = [
    "1 ~ Acquire scientist's notes from Lab.", 
    "2 ~ Acquire fire extinguisher from Storage.",
    "3 ~ Acquire Captain's notes in his Quarters.",
    "4 ~ Restart Engines.",
    "5 ~ Pilot vessel from Control room to surface",
    "6 ~ Set Reactor to self destruct.",
    "7 ~ Escape via Torpedo Bay."
]


// 4. NOT SURE WHERE TO PUT THIS
// Reset Task List (function writing)

function resetTaskList() {
    let nextTask = document.getElementById("task-list-next");
    nextTask.textContent = "Next Task:\n" + taskList[1];

    let currentTask = document.getElementById("task-list-current");
    currentTask.textContent = "Current Task:\n" + taskList[0];

    // let previousTask = document.getElementById("task-list-previous");
    // previousTask.textContent = "Previous Task:\n" + "";
    // ^^^^^This is for if you decide to put the previous task back in the game.
}


// 5. UPDATING TASK LIST DISPLAY

    // THIS LINE BELOW IS WHAT MAKES THE TASK LIST DISPLAY UPDPATE. CHANGE THE NUMBER, UPDATE TASK LIST DISPLAY. EASY!
    let currentTaskDisplay = 0; // Set the current task display index
                // ^^^^^^^^^^when currentTaskDisplay equals 0, that's your starting display. 1 is next. then 2,3,4,etc

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
    
    updateTaskList(currentTaskDisplay)











// 6. ROOMS LIST (currently does nothing whoops)

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


// 7. VICTORY AND DEFEAT ALERTS
            // change to a prompt later with Reset Game button and a Dismiss button

function displayVictoryScreen() {
    alert("(Victory) Lieutenant Helmsman Alexei Yarovoy recovered from the Barents Sea among wreckage of the Zarya Tupolevsky X-1. No evidence of animal reported by Helmsman.");
}

function displayDefeatScreen() {
    alert("(Defeat) Undamaged vessel of Zarya Tupolevsky X-1 recovered in Barents Sea. No survivors recovered. Cause unknown.");
}






// 8. PLAYER INITIAL POSITION FUNCTION aka spawnAlexei()  (PSEUDO)

    // Pseudo 
    // a function that accepts the x coordinate and the y coordinate as the parameters and displays ALEXEI in the correct tile.

    // function spawnAlexeiRandomTile(randomX, randomY) {
    //     // Edit content of HTML element (span within span within div tile) to display Alexei in tile with randomX and random Y coordinates.
    //     }
    // }


// 9. PLAYER MOVEMENT FUNCTIONS (PSEUDO)

    // 4 different functions. one for each arrow key. moveLeft(), moveRight()... 
    // For each movement function work, the player's initial x and y coordinates must be retrieved then passed into the movement function as parameters.


