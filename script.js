// TABLE OF CONTENTS

//     Preface
//  1. Game Setup (initial)
//  2. Reset Button
//  3. Dropdown Buttons
//  4. Test Button
//  5. Updating Task List Display
//  6. Victory and Defeat Alerts
//  7. Arrow Event Listeners
//  8. Creature Random Movement
//  9. Health (MVP)
//  10. Victory + Defeat Condition Checkers
//  11. Dev Mode Toggle Switch



// PREFACE

// GLOBAL DEFININTIONS

let x1, y1;
let x2, y2;
let previousX2, previousY2;
let alexeiCoordinates;
let [randomX1, randomY1] = generateX1Y1();
let [randomX2, randomY2] = generateX1Y1();
let randomPlayerPosition = [randomX1, randomY1];
let randomMonsterPosition = [randomX2, randomY2];

// 1. GAME SETUP (Initial)


// Random Alexei Coordinates for Initial Spawn

// Generate a random X value and Y value for Player's spawn coordinates
function generateX1Y1() {
    let randomx1;
    let randomy1;

    const forbiddenCoordinates = [[2, 2], [4, 2], [6, 2]];

    do {
        // Generate the first random number in the range [1, 7]
        randomx1 = Math.floor(Math.random() * 7) + 1;

        // Generate the second random number in the range [1, 3]
        randomy1 = Math.floor(Math.random() * 3) + 1;
    } while (forbiddenCoordinates.some(coord => coord[0] === randomx1 && coord[1] === randomy1));

    // Return an array with the generated values
    return [randomx1, randomy1];
}

// Write Spawn Alexei in Tile
function spawnAlexei() {
    // Retrieve and define coordinates using the generateX1Y1 function
    [x1, y1] = generateX1Y1();

    // Remove existing Alexei from any tile
    const existingAlexei = document.querySelector('.tileOccupant.alexei');
    if (existingAlexei) {
        existingAlexei.textContent = '';
    }

    // Find the target tile with appropriate x1 and y1
    const targetTile1 = document.querySelector(`.tile.tile_${x1}_${y1}`);

    if (targetTile1) {
        // Update the text in the target tile
        let tileOccupant = targetTile1.querySelector('.tileOccupant');
        if (tileOccupant) {
            tileOccupant.textContent = 'Alexei';
            tileOccupant.classList.add('alexei'); // Add a class to identify Alexei
        }
    }

    console.log(`Alexei FIRST spawned at coordinates: (${x1}, ${y1})`);

    let tileOccupant = targetTile1.querySelector('.tileOccupant');

    if (!tileOccupant) {
        tileOccupant = document.createElement('span');
        tileOccupant.classList.add('tileOccupant');
        targetTile1.appendChild(tileOccupant);
    }
    tileOccupant.textContent = 'Alexei';

    // Log visibility
    console.log('Is Alexei visible?', tileOccupant.offsetWidth > 0);

    // Return the coordinates for later use
    return { x: x1, y: y1 };
}

// WRITE SPAWN CREATURE IN TILE
function spawnCreature() {
    // Retrieve and define coordinates using the generateX1Y1 function
    [x2, y2] = generateX1Y1();  // Use the global x2 and y2 variables

    // Check if Alexei is present in the target tile
    const existingAlexei = document.querySelector(`.tile.tile_${x2}_${y2} .tileOccupant.alexei`);
    if (existingAlexei) {
        // If Alexei is present, rerun the spawnCreature function
        return spawnCreature();
    }

    // Check if Creature is present in the target tile
    const existingCreature = document.querySelector(`.tile.tile_${x2}_${y2} .tileOccupant.creature`);
    if (existingCreature) {
        // If Creature is present, rerun the spawnCreature function
        return spawnCreature();
    }

    // Remove existing Creature from any tile
    const existingCreatureTiles = document.querySelectorAll(`.tileOccupant.creature`);
    existingCreatureTiles.forEach(tile => {
        tile.textContent = '';
    });

    // Find the target tile with appropriate x2 and y2
    const targetTile2 = document.querySelector(`.tile.tile_${x2}_${y2}`);

    let tileOccupant = targetTile2.querySelector('.tileOccupant');
    if (!tileOccupant) {
        tileOccupant = document.createElement('span');
        tileOccupant.classList.add('tileOccupant');
        targetTile2.appendChild(tileOccupant);
    }

    tileOccupant.textContent = 'Creature';
    tileOccupant.classList.add('creature'); // Add a class to identify the Creature

    // Log visibility
    console.log('Is Creature visible?', tileOccupant.offsetWidth > 0);

    console.log(`Creature FIRST spawned at coordinates: (${x2}, ${y2})`);

    // Return the coordinates for later use
    return { x: x2, y: y2 };
}

// Call the spawnAlexei and spawnCreature functions to execute the code

// let alexeiCoordinates; // Declare a variable to store Alexei's coordinates

document.addEventListener('DOMContentLoaded', function () {

    alexeiCoordinates = spawnAlexei(); // Store the coordinates
    spawnCreature();

});


// 2. RESET BUTTON 

function resetGame() {
    location.reload();
}

// RESET BUTTON LISTENER
let resetButton = document.querySelector('.resetbtn');

resetButton.addEventListener('click', function () {
    // Call the resetGame function when the reset button is clicked
    resetGame();
});

// 3. DROPDOWN BUTTONS


// Listeners
document.addEventListener("DOMContentLoaded", function () {
    // Get the RULES button and its content
    const rulesButton = document.querySelector('.dropdown.rightbottombtn .dropbtn');
    const rulesContent = document.querySelector('.dropdown.rightbottombtn .dropdown-content');

    // Get the CLASSIFIED INFO button and its content
    const classifiedButton = document.querySelector('.dropdown.leftbottombtn .dropbtn');
    const classifiedContent = document.querySelector('.dropdown.leftbottombtn .dropdown-content');

    // Add mouseover event listener for the RULES button
    rulesButton.addEventListener('mouseover', function () {
        // Show the RULES content popup in the middle of the screen
        showRulesPopup(rulesContent.innerText);
    });

    // Add mouseover event listener for the CLASSIFIED INFO button
    classifiedButton.addEventListener('mouseover', function () {
        // Show the CLASSIFIED INFO content popup in the middle of the screen
        showInfoPopup(classifiedContent.innerText);
    });

    // Add mouseout event listener for the RULES button to hide the content popup
    rulesButton.addEventListener('mouseout', function () {
        // Hide the RULES content popup
        hidePopup();
    });

    // Add mouseout event listener for the CLASSIFIED INFO button to hide the content popup
    classifiedButton.addEventListener('mouseout', function () {
        // Hide the CLASSIFIED INFO content popup
        hidePopup();
    });
});

// Function to show RULES content popup in the middle of the screen
function showRulesPopup(content) {
    const popup = createPopup(content);
    document.body.appendChild(popup);
    centerPopup(popup);
}

// Function to show CLASSIFIED INFO content popup in the middle of the screen
function showInfoPopup(content) {
    const popup = createPopup(content);
    document.body.appendChild(popup);
    centerPopup(popup);
}

// Function to hide content popup
function hidePopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        document.body.removeChild(popup);
    }
}

// Function to create a popup with specified content
function createPopup(content) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerText = content;
    return popup;
}

// Function to center the popup in the middle of the screen
function centerPopup(popup) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;

    const leftPosition = (screenWidth - popupWidth) / 2;
    const topPosition = (screenHeight - popupHeight) / 2;

    popup.style.left = leftPosition + 'px';
    popup.style.top = topPosition + 'px';
}



// 4. TEST BUTTON

    // Test Button Listener
document.querySelector('.test').addEventListener('click', function () {
    // Call a function or perform any actions when the "Test" button is clicked
    alert("Test button clicked!");
});

// 5. UPDATING TASK LIST DISPLAY

// Task List Array
let taskList = [
    "1 ~ Acquire scientist's notes from Lab.",
    "2 ~ Acquire fire extinguisher from Storage.",
    "3 ~ Acquire Captain's notes in his Quarters.",
    "4 ~ Restart Engines.",
    "5 ~ Pilot vessel from Control room to surface",
    "6 ~ Set Reactor to self destruct.",
    "7 ~ Escape via Torpedo Bay."
]

function updateTaskList() {
    let nextTask = document.getElementById("task-list-next");
    nextTask.textContent = "Next Task:\n" + taskList[1];

    let currentTask = document.getElementById("task-list-current");
    currentTask.textContent = "Current Task:\n" + taskList[0];
}

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
    }
}
updateTaskList(currentTaskDisplay)

// 6. VICTORY AND DEFEAT ALERTS


// Function to display victory screen
function displayVictoryScreen() {

    // Create a div element for the victory screen
    const victoryScreen = document.createElement('div');
    victoryScreen.classList.add('victory-screen');

    // Create content for the victory screen
    const content = document.createElement('div');
    content.innerHTML = `
        <h1 style="font-size: 2em;">VICTORY</h1>
        <p>Lieutenant Helmsman Alexei Yarovoy recovered from the Barents Sea among wreckage of the Zarya Tupolevsky X-1. No evidence of animal reported by Helmsman. 10-10-1982</p>
        <p>Helmsman insisted on adding quote to record:</p>
        <blockquote>Very often, all the activity of the human mind is directed not in revealing the truth, but in hiding the truth.<br>~Leo Tolstoy</blockquote>
    `;

    // Append content to the victory screen
    victoryScreen.appendChild(content);

    // Create a reset button
    const victoryResetButton = document.createElement('button');
    victoryResetButton.innerText = 'Reset Game';
    victoryResetButton.classList.add('resetbtn');
    victoryResetButton.addEventListener('click', resetGame);

    // Append the reset button to the victory screen
    victoryScreen.appendChild(victoryResetButton);

    // Append the victory screen to the document body
    document.body.appendChild(victoryScreen);
}

// Detect and Display Defeat 

function detectDefeat() {
    if (x1 === x2 && y1 === y2)
        displayDefeatScreen()
}




// 7. ARROW EVENT LISTENERS

// UP Listener
document.querySelector('.arrowUp').addEventListener('click', function () {
    moveAlexei(0, -1);
    moveCreatureRandomly();
});

// LEFT Listener
document.querySelector('.arrowLeft').addEventListener('click', function () {
    moveAlexei(-1, 0);
    moveCreatureRandomly();
});

// DOWN Listener
document.querySelector('.arrowDown').addEventListener('click', function () {
    moveAlexei(0, 1);
    moveCreatureRandomly();
});

// RIGHT Listener
document.querySelector('.arrowRight').addEventListener('click', function () {
    moveAlexei(1, 0);
    moveCreatureRandomly();

});

// Arrow key press listener
document.addEventListener('keydown', function (event) {
    moveCreatureRandomly();

    // Check if the pressed key is an arrow key
    if (event.key.startsWith('Arrow')) {
        event.preventDefault(); // Prevent the default behavior of arrow keys (scrolling)

        // Determine the direction based on the arrow key pressed
        let dx = 0;
        let dy = 0;

        switch (event.key) {
            case 'ArrowUp':
                dy = -1;
                break;
            case 'ArrowDown':
                dy = 1;
                break;
            case 'ArrowLeft':
                dx = -1;
                break;
            case 'ArrowRight':
                dx = 1;
                break;
        }

        // Move Alexei in the determined direction
        moveAlexei(dx, dy);

        // Check for Defeat Condition after each move.
        detectDefeat();
    }

});

// Function to move Alexei based on the given dx and dy
function moveAlexei(dx, dy) {
    // Retrieve the current coordinates
    let currentX = x1;
    let currentY = y1;

    // Calculate the new coordinates
    let newX = currentX + dx;
    let newY = currentY + dy;

    // Perform any additional checks or actions based on the new coordinates

    // Update Alexei's position
    updateAlexeiPosition(newX, newY);
}

// Function to update Alexei's position
function updateAlexeiPosition(newX, newY) {
    // Update the UI to reflect the new position
    const currentTile = document.querySelector(`.tile.tile_${x1}_${y1}`);
    const newTile = document.querySelector(`.tile.tile_${newX}_${newY}`);

    if (currentTile && newTile) {
        // Remove Alexei from the current tile
        currentTile.querySelector('.tileOccupant').textContent = '';

        // Update Alexei's position in the new tile
        let tileOccupant = newTile.querySelector('.tileOccupant');
        if (!tileOccupant) {
            tileOccupant = document.createElement('span');
            tileOccupant.classList.add('tileOccupant');
            newTile.appendChild(tileOccupant);
        }
        tileOccupant.textContent = 'Alexei';

        // Update the global coordinates
        x1 = newX;
        y1 = newY;

        // Log the updated coordinates
        console.log(`Alexei moved to coordinates: (${x1}, ${y1})`);

        // Check for Task Tile
        checkTileAndIncrementTask(x1, y1)
    }
}



// 8. CREATURE RANDOM MOVEMENT

// TEST BUTTON FOR CREATURE MOVEMENT IF THE CLASS NAME DIDN'T GIVE IT AWAY
document.querySelector('.testmovecreature').addEventListener('click', function () {
    moveCreatureRandomly();
});

// Function to move Creature Randomly
function moveCreatureRandomly() {

    let moveSuccessful = false;

    // Continue trying to move until a valid move is made
    while (!moveSuccessful) {
        // Determine the direction based on what number has been randomly selected.
        let dx = 0;
        let dy = 0;

        // Generate a random number between 1 and 4 for creature's decision
        let decisionNumber = Math.floor(Math.random() * 4) + 1;

        switch (decisionNumber) {
            case 1:
                dy = -1;
                break;
            case 2:
                dy = 1;
                break;
            case 3:
                dx = -1;
                break;
            case 4:
                dx = 1;
                break;
        }

        // Attempt to move the creature in the determined direction
        moveSuccessful = moveCreature(dx, dy);
    }
    
}

// Function to move the creature based on the given dx and dy
function moveCreature(dx, dy) {
    // Retrieve the current coordinates
    let currentX = x2;
    let currentY = y2;

    // Calculate the new coordinates
    let newX = currentX + dx;
    let newY = currentY + dy;

    // Check if the move is valid
    if (isValidMove(newX, newY)) {
        // Update the creature's position
        updateCreaturePosition(newX, newY);

        // Return true indicating a successful move
        return true;
    } else {
        // Return false indicating an unsuccessful move
        return false;
    }
}

// Function to display defeat screen
function displayDefeatScreen() {
    // Create a div element for the defeat screen
    const defeatScreen = document.createElement('div');
    defeatScreen.classList.add('defeat-screen');

    // Create content for the defeat screen
    const content = document.createElement('div');
    content.innerHTML = `
                <p>Undamaged vessel of Zarya Tupolevsky X-1 recovered in Barents Sea. No survivors recovered. Cause unknown. Investigation concluded. 10-10-1982</p>
                <h1 style="font-size: 2em;">DEFEAT</h1>
                `;

    // Append content to the defeat screen
    defeatScreen.appendChild(content);

    // Append the defeat screen to the document body
    document.body.appendChild(defeatScreen);

    // Create a reset button
    const resetButton = document.createElement('button');
    resetButton.innerText = 'Reset Game';
    resetButton.classList.add('resetbtn');
    resetButton.addEventListener('click', resetGame);

    // Append the reset button to the defeat screen
    document.querySelector('.defeat-screen').appendChild(resetButton);
}

// Function to check if a move is valid
function isValidMove(newX, newY) {
    const forbiddenCoordinates = [[2, 2], [4, 2], [6, 2]];
    return newX >= 1 && newX <= 7 && newY >= 1 && newY <= 3 &&
        !forbiddenCoordinates.some(coord => coord[0] === newX && coord[1] === newY);
}

// Function to update the creature's position
function updateCreaturePosition(newX, newY) {
    // Update the UI to reflect the new position
    const currentTile = document.querySelector(`.tile.tile_${x2}_${y2}`);
    const newTile = document.querySelector(`.tile.tile_${newX}_${newY}`);

    if (currentTile && newTile) {
        // Remove the creature from the current tile
        currentTile.querySelector('.tileOccupant').textContent = '';

        // Update the creature's position in the new tile
        let tileOccupant = newTile.querySelector('.tileOccupant');
        if (!tileOccupant) {
            tileOccupant = document.createElement('span');
            tileOccupant.classList.add('tileOccupant');
            newTile.appendChild(tileOccupant);
        }
        tileOccupant.textContent = 'Creature';

        // Update the global coordinates
        x2 = newX;
        y2 = newY;

        // Log the updated coordinates
        console.log(`Creature moved to coordinates: (${x2}, ${y2})`);
    }
}

// 9. Health Displays (MVP)



// 10. VICTORY + DEFEAT CONDITION CHECKERS


function checkTileAndIncrementTask(x, y) {
    // Define the coordinates for each task
    const taskCoordinates = [
        { x: 3, y: 1 },
        { x: 1, y: 3 },
        { x: 1, y: 1 },
        { x: 7, y: 2 },
        { x: 3, y: 2 },
        { x: 5, y: 2 },
        { x: 1, y: 2 },
        { x: 0, y: 0 }
        // Add coordinates for the rest of the tasks
    ];

    // Loop through the task coordinates
    for (let i = 0; i < taskCoordinates.length; i++) {
        const taskCoord = taskCoordinates[i];

        // Check if Alexei is in the specified tile
        if (x === taskCoord.x && y === taskCoord.y) {


            // Check is Aelexi has completed all tasks and is in Torpedo Bay
            if (x === 1 && y === 2 && currentTaskDisplay >= 6) {
                displayVictoryScreen()
            }

            // Check if the visited tiles are in order
            if (i === currentTaskDisplay) {
                // Increment the task display
                currentTaskDisplay++;

                // Update the task list display
                updateTaskList(currentTaskDisplay);

                console.log(currentTaskDisplay);


                // Break the loop after finding the correct tile
                break;



            }
        }
    }
}



// 11. DEV MODE TOGGLE SWITCH

let devMode = false;

function toggleDevMode() {
    devMode = !devMode;
    updateToggleHandle();
    updateButtonVisibility();
    updateDevModeIndicator();
}

function updateToggleHandle() {
    const toggleHandle = document.querySelector('.toggleHandle');
    toggleHandle.classList.toggle('on', devMode);
}

function updateButtonVisibility() {
    const moveCreatureBtn = document.querySelector('.testmovecreature');
    const testBtn = document.querySelector('.test');

    moveCreatureBtn.style.display = devMode ? 'inline-block' : 'none';
    testBtn.style.display = devMode ? 'inline-block' : 'none';
}

function updateDevModeIndicator() {
    const indicator = document.getElementById('devModeIndicator');
    indicator.textContent = devMode ? 'ON' : 'OFF';
}





