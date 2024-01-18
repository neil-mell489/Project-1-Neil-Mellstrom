// Test Button Listener
document.querySelector('.test').addEventListener('click', function() {
    // Call a function or perform any actions when the "Test" button is clicked
    alert("Test button clicked!");
    // You can add your test-related code here
});



// TABLE OF CONTENTS
    //  1. Game Setup (initial)
    //  2. Reset Button
    //  3. Task List Array
    //  4. Not sure where to Put this
    //  5. Updating Task List Display
    //  6. -
    //  7. Victory and Defeat Alerts
    //  8. -
    //  9. -
    //  10. -
    //  11. Arrow Event Listeners
    //  12. Update Health Displays
    //  13. Creature Random Movement
    //  14. - 
    //  15. - 
    //  16. - 
    //  18. - 


// PREFACE
    // GLOBAL DEFININTIONS

    let x1, y1;
    let x2, y2;
    let previousX2, previousY2; 
    // let creatureSpawned = false;
    // Creature will only spawn initially once, and any attempts to spawn twice return NULL (I hope)
    


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

        console.log(`Creature FIRST spawned at coordinates: (${x2}, ${y2})`);

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

        // RESET PLAYER HEALTH AND MONSTER HEALTH (doesnt work right now bc of scoping issue)
        // updatePlayerHealth(5);
        // updateCreatureHealth(5);


                
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

// 6. -

// 7. VICTORY AND DEFEAT ALERTS
            // change to a prompt later with Reset Game button and a Dismiss button

    function displayVictoryScreen() {
        alert("(Victory) Lieutenant Helmsman Alexei Yarovoy recovered from the Barents Sea among wreckage of the Zarya Tupolevsky X-1. No evidence of animal reported by Helmsman.");
    }

    function displayDefeatScreen() {
        alert("(Defeat) Undamaged vessel of Zarya Tupolevsky X-1 recovered in Barents Sea. No survivors recovered. Cause unknown.");
    }

// 8. -

// 9. -

// 10. -

// 11. ARROW BUTTON LISTENERS

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


    // Arrow key press listener
    document.addEventListener('keydown', function (event) {
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



// 12. UPDATE HEALTH DISPLAYS

    // Function to test player health
    function updatePlayerHealth(healthValue) {
        const playerHealthBox = document.querySelector('.player-health-box');
        clearHealthBox(playerHealthBox);

        for (let i = 1; i <= 5; i++) {
            const square = document.createElement('div');
            square.classList.add('health-square');
            if (i <= healthValue) {
                square.classList.add('solid-square');
            } else {
                square.classList.add('hollow-square');
            }
            playerHealthBox.appendChild(square);
        }
    }

    // Function to test creature health
    function updateCreatureHealth(healthValue) {
        const creatureHealthBox = document.querySelector('.creature-health-box');
        clearHealthBox(creatureHealthBox);

        for (let i = 1; i <= 5; i++) {
            const square = document.createElement('div');
            square.classList.add('health-square');
            if (i <= healthValue) {
                square.classList.add('solid-square');
            } else {
                square.classList.add('hollow-square');
            }
            creatureHealthBox.appendChild(square);
        }
    }

    // Function to clear health box
    function clearHealthBox(healthBox) {
        healthBox.innerHTML = '';
    }


    // // ADJUST THESE PARAMETERS TO UPDATE HEALTH OF PLAYER OR CREATURE
    updatePlayerHealth(5);
    updateCreatureHealth(5);




// 13. CREATURE MOVEMENT
// IMPORTANT SIDE NOTE: IF THIS DOESNT WORK, 
// MAKE A SIMILAR BUT DIFFERENT VERSION OF THE SECTION FOR ALEXEIS MOVEMENT.
// COPY AND PASTE HIS ENTIRE SECTION THEN REPLACE ARROW FUNCTION INPUT WITH RANDOM NUMBER INPUT
// Might also be good to just copy and paste Alexei logic to make Creature Move and 
// before doing creature specific edits, 
// just make sure your arrow keys and buttons work to move creature around


        // global definitions for creature (i think????)

        // let updatedX, updatedY;

// a. CREATURE MOVEMENT TEST BUTTON
document.addEventListener('DOMContentLoaded', function () {
    // b. Select the button for testing creature movement
    let moveCreatureButton = document.querySelector('.testmovecreature');

    // c. Add a click event listener to the button
    moveCreatureButton.addEventListener('click', function () {
        alert("oh!")
        // d. Call the function to move the creature randomly
        moveCreatureRandomly();
    });
});



function moveCreatureRandomly() {


    // 1)   find creature element, NOT alexei element.

function detectCreatureCoordinates() {
        // Get all tiles
        const tiles = document.querySelectorAll('.tile');
    
        // Iterate through all tiles
        for (const tile of tiles) {
            // Check if the tile has the 'creature' class in its occupants
            const creatureOccupant = tile.querySelector('.tileOccupant.creature');
            if (creatureOccupant) {
                // Extract the x and y coordinates from the tile's class
                const classList = tile.classList;
                const [x, y] = Array.from(classList).find(className => className.startsWith('tile_')).split('_').slice(1);
    
                // Return the coordinates as an object
                return { x: parseInt(x), y: parseInt(y) };
            }
        }
    
        // If no tile with Creature text is found, return null
        return null;
    }
    
    // Call the function after the Creature is spawned (e.g., in your spawnCreature function)
    document.addEventListener('DOMContentLoaded', function () {
        alexeiCoordinates = spawnAlexei(); // Store the coordinates
        
    


        // After spawning, call the detectCreatureCoordinates function
        const creatureCoordinates = detectCreatureCoordinates();
        if (creatureCoordinates) {
            const { x, y } = creatureCoordinates;
            console.log(`Creature is at coordinates: (${x}, ${y})`);
        } else {
            console.log('Creature not found.');
        }
    });

    // 3)   define x and y coordinates as their own variables (not needed. theyre alredy defined. BUT 
        // POTENTIAL SCOPING ISSUE!!!!!!

    // 4)   generate random number from 1 to 4

   

    function generateRandomNumber() {
        // Generate a random decimal between 0 (inclusive) and 1 (exclusive)
        const randomDecimal = Math.random();
    
        // Scale the random decimal to be between 1 and 5
        // Math.floor is used to round down to the nearest integer
        const randomNumber = Math.floor(randomDecimal * 4) + 1;
    
        return randomNumber;
    }

    

    // 5)   define 4 functions, up down left right. each adds or subtracts from values of initial coordinates
    
                // Function to move the creature up
                    function moveCreatureUp(currentX, currentY) {
                        const updatedY = currentY - 1;
                        return { updatedX: currentX, updatedY };
                    }

                    // Function to move the creature down
                    function moveCreatureDown(currentX, currentY) {
                        const updatedY = currentY + 1;
                        return { updatedX: currentX, updatedY };
                    }

                    // Function to move the creature left
                    function moveCreatureLeft(currentX, currentY) {
                        const updatedX = currentX - 1;
                        return { updatedX, updatedY: currentY };
                    }

                    // Function to move the creature right
                    function moveCreatureRight(currentX, currentY) {
                        const updatedX = currentX + 1;
                        return { updatedX, updatedY: currentY };
                    }
    
    
    
    // 6)   use random number to choose one of the 4 (and in doing so, updating the initial coordinates to the new ones)
    
                    // Gotta delcare this outside of the switch bc of scoping
                    
                    let newCoordinates;
                    
                switch (generateRandomNumber()) {
                    case 1:
                        newCoordinates = moveCreatureUp(updatedX, updatedY);
                        break;
                    case 2:
                        newCoordinates = moveCreatureDown(updatedX, updatedY);
                        break;
                    case 3:
                        newCoordinates = moveCreatureLeft(updatedX, updatedY);
                        break;
                    case 4:
                        newCoordinates = moveCreatureRight(updatedX, updatedY);
                        break;
                    default:
                        console.error("Invalid randomNumber.");
                        return;
                }

                // Use newCoordinates to update the position
    placeCreature(newCoordinates.updatedX, newCoordinates.updatedY);

    // 7)   clear Creature text from board and ONLY creature text

            function removeCreatureText(tiles) {
                for (let i = 0; i < tiles.length; i++) {
                    const tile = tiles[i];
                    const text = tile.textContent;
            
                    // Check if the text contains "Creature" but NOT "Alexei"
                    if (text.includes("Creature") && !text.includes("Alexei")) {
                        // Delete the text from the tile
                        tile.textContent = "";
                    }
                }
            }


    // 8)   retrieve new coordinates and use them to add Creature text to corresponding tile.

    function placeCreature(updatedX, updatedY) {
        // Create a unique identifier for the tile based on coordinates
        const tileId = `tile${updatedX}_${updatedY}`;
    
        // Find the tile element using the identifier
        const tileElement = document.getElementById(tileId);
    
        // Check if the tile element exists
        if (tileElement) {
            // Set the text content of the tile to "Creature"
            tileElement.querySelector('.tileText').textContent = 'Creature';
        } else {
            console.error(`Tile not found for coordinates X: ${updatedX}, Y: ${updatedY}`);
        }
    }

    placeCreature(updatedX, updatedY);
    console.log("creature placed at" + updatedX + updatedY);

}

    




    
// FUNCTION NEEDS TO BE REPEATABLE

        



    // PSEUDO (old)
    // works just like player movement only it 
    // uses x2 and y2, it will choose a random direction (excluding walls and the way it came) and it will be tested by the MOVE CREATURE button.

   



    // // Detect where the creature element is and return the coordinates
    // function detectCreatureCoordinates() {
    //     // Find the tile element containing the creature
    //     const creatureTile = document.querySelector('.tileOccupant.creature');

    //     // Check if the creature tile is found
    //     if (creatureTile) {
    //         // Extract the x and y coordinates from the tile's class
    //         const classList = creatureTile.parentElement.classList;
    //         const [x, y] = Array.from(classList).find(className => className.startsWith('tile_')).split('_').slice(1);

    //         // Return the coordinates as an object
    //         return { x: parseInt(x), y: parseInt(y) };
    //     } else {
    //         // If the creature is not found, return null
    //         return null;
    //     }
    // }

    // // Generate a random number to determine Manipulation of Spawn Coordinates
    // function creatureRandomDecisionNumber() {
    //     return Math.floor(Math.random() * 4) + 1;
    // }

    // // Constants for movement directions
    // const letCreatureNorth = 1;
    // const letCreatureSouth = 2;
    // const letCreatureEast = 3;
    // const letCreatureWest = 4;

    // // Function to move the creature based on random decision
    // function moveCreatureRandomly() {
    //     // Check if the creature has been spawned
    //     if (!creatureSpawned) {
    //         alert("Creature has not been spawned yet.");
    //         return;
    //     }

    //     // Get the current coordinates of the creature
    //     const creatureCoordinates = detectCreatureCoordinates();

    //     // Check if creature coordinates are found
    //     if (creatureCoordinates) {
    //         const { x: currentX, y: currentY } = creatureCoordinates;

    //         // Generate a random decision number
    //         const decisionNumber = creatureRandomDecisionNumber();

    //         // Determine the new coordinates based on the random decision
    //         let newX = currentX;
    //         let newY = currentY;

    //         switch (decisionNumber) {
    //             case letCreatureNorth:
    //                 newY--;
    //                 break;
    //             case letCreatureSouth:
    //                 newY++;
    //                 break;
    //             case letCreatureEast:
    //                 newX++;
    //                 break;
    //             case letCreatureWest:
    //                 newX--;
    //                 break;
    //         }

    //         // Check if the new coordinates are within the game boundaries and not a forbidden coordinate
    //         if (isValidMove(newX, newY)) {
    //             // Update the creature's position
    //             updateCreaturePosition(newX, newY);
    //         } else {
    //             // Retry the movement if the new coordinates are not valid
    //             moveCreatureRandomly();
    //         }
    //     } else {
    //         alert("Creature coordinates not found.");
    //     }
    // }

    // // Function to check if a move is valid
    // function isValidMove(newX, newY) {
    //     const forbiddenCoordinates = [[2, 2], [4, 2], [6, 2]];

    //     return newX >= 1 && newX <= 7 && newY >= 1 && newY <= 3 &&
    //         !forbiddenCoordinates.some(coord => coord[0] === newX && coord[1] === newY);
    // }

    // // Function to update the creature's position
    // function updateCreaturePosition(newX, newY) {
    //     // Update the UI to reflect the new position
    //     const currentTile = document.querySelector(`.tile.tile_${x2}_${y2}`);
    //     const newTile = document.querySelector(`.tile.tile_${newX}_${newY}`);

    //     if (currentTile && newTile) {
    //         // Remove the creature from the current tile
    //         currentTile.querySelector('.tileOccupant').textContent = '';

    //         // Update the creature's position in the new tile
    //         let tileOccupant = newTile.querySelector('.tileOccupant');
    //         if (!tileOccupant) {
    //             tileOccupant = document.createElement('span');
    //             tileOccupant.classList.add('tileOccupant');
    //             newTile.appendChild(tileOccupant);
    //         }
    //         tileOccupant.textContent = 'Creature';

    //         // Update the global coordinates
    //         x2 = newX;
    //         y2 = newY;

    //         // Log the updated coordinates
    //         console.log(`Creature moved to coordinates: (${x2}, ${y2})`);
    //     }
    // }




