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
//  10. Arrow Button Listeners
//  11. ...
//  12. ...

// PREFACE
    // GLOBAL DEFININTIONS

    let x1, y1;

    let x2, y2;


// MOVEMENT PSEUDO 

    // 


// 1. GAME SETUP (Initial)

    // Spawns player and monster in random tiles for their initial positions. 
    // Defines linear task tracker         (make sure linear task tracker STARTS as 0% complete)
    // Defines Task List Display            (also make sure it STARTS with the beginning tasks)
    // Defines Player and Monster Health at full (same thang)
    // Defines current turn as players turn
    // ...

// ----------------------------------------------------------

// RANDOM PLAYER COORDINATES FOR INITIAL SPAWN

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

// SPAWN ALEXEI IN TILE
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



// SPAWN CREATURE IN TILE
function spawnCreature() {
    // Retrieve and define coordinates using the generateX1Y1 function
    let [x2, y2] = generateX1Y1();

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
    const existingCreatureTile = document.querySelector(`.tile.tile_${x2}_${y2} .tileOccupant.creature`);
    if (existingCreatureTile) {
        existingCreatureTile.textContent = '';
    }

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

    // Return the coordinates for later use
    return { x: x2, y: y2 };

}


// Call the spawnAlexei and spawnCreature functions to execute the code

    let alexeiCoordinates; // Declare a variable to store Alexei's coordinates

document.addEventListener('DOMContentLoaded', function () {
    alexeiCoordinates = spawnAlexei(); // Store the coordinates
    spawnCreature();
});




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
            // (Notice how the two values are defined and stored together in an array for the player and the monster)
    
    let [randomX1, randomY1] = generateX1Y1();
    let [randomX2, randomY2] = generateX1Y1();
    let randomPlayerPosition = [randomX1, randomY1];
    let randomMonsterPosition = [randomX2, randomY2];


    // Variable to track the current turn (initially set to "player")
    let currentTurn = "player";

                                // // Call the function to get the initial random numbers
                                // const randomNumbers = twoRandomNumbers();

    // RESET PLAYER HEALTH AND MONSTER HEALTH
    let playerHealth = 5;
    let monsterHealth = 5;


              
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



    


    


    // 10. ARROW BUTTON LISTENERS









// ARROW BUTTON LISTENERS

// // UP Listener
// document.querySelector('.arrowUp').addEventListener('click', function() {
//     alert("UPPIES");
    
//     // PSUEDO 
//     //  take x1 and y1, subtract 1 from y1

// });

// // LEFT Listener
// document.querySelector('.arrowLeft').addEventListener('click', function() {
//     alert("LEFTIES");

//     // PSUEDO 
//     //  take x1 and y1, subtract 1 from x1

// });

// // DOWN Listener
// document.querySelector('.arrowDown').addEventListener('click', function() {
//     alert("DOWNIES");

//  // PSUEDO 
//     //  take x1 and y1, add 1 to y1

// });

// // RIGHT Listener
// document.querySelector('.arrowRight').addEventListener('click', function() {
//     alert("RIGHTIES");

//      // PSUEDO 
//     //  take x1 and y1, add 1 to x1

// });


// Test Button Listener
document.querySelector('.test').addEventListener('click', function() {
    // Call a function or perform any actions when the "Test" button is clicked
    alert("Test button clicked!");
    // You can add your test-related code here
});


// ARROW BUTTON LISTENERS

// UP Listener
document.querySelector('.arrowUp').addEventListener('click', function() {
    moveAlexei(0, -1);
    // changeTurn("Creature")
});

// LEFT Listener
document.querySelector('.arrowLeft').addEventListener('click', function() {
    moveAlexei(-1, 0);
    // changeTurn("Creature")
});

// DOWN Listener
document.querySelector('.arrowDown').addEventListener('click', function() {
    moveAlexei(0, 1);
    // changeTurn("Creature")
});

// RIGHT Listener
document.querySelector('.arrowRight').addEventListener('click', function() {
    moveAlexei(1, 0);
    // changeTurn("Creature")
});


// Arrow KEYS
document.addEventListener('keydown', function (event) {
    // Check if the pressed key is an arrow key
    if (event.key === 'ArrowUp') {
        // Handle the UP arrow key press
        moveAlexei(0, -1);
    } else if (event.key === 'ArrowDown') {
        // Handle the DOWN arrow key press
        moveAlexei(0, 1);
    } else if (event.key === 'ArrowLeft') {
        // Handle the LEFT arrow key press
        moveAlexei(-1, 0);
    } else if (event.key === 'ArrowRight') {
        // Handle the RIGHT arrow key press
        moveAlexei(1, 0);
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
    // For example, you can update the CSS class of the corresponding tile
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
    }
}


