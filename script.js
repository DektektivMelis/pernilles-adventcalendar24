// Map days to document URLs
const documents = {
    
    // Add more documents as needed
};

const calendarContainer = document.getElementById("calendar");
const today = new Date();

// Create buttons for each day
for (let i = 1; i <= 24; i++) { // Adjusted for 24 days
    const button = document.createElement("button");
    button.textContent = `Day ${i}`;
    button.classList.add("day-button");

    // Check if the day is "unlocked" based on the date
    if (today.getMonth() === 11 && today.getDate() >= i) {
        button.classList.remove("locked"); // Make the button look "unlocked"

        // Check if a document exists for the day
        const docUrl = documents[i];
        if (docUrl) {
            button.addEventListener("click", () => {
                window.open(docUrl, "_blank");
            });
        } else {
            // If no document exists, show a custom message
            button.addEventListener("click", () => {
                alert("The story for this day isn't ready yet. You cheater!");
            });
        }
    } else {
        button.classList.add("locked"); // Keep the button locked for future days
    }

    calendarContainer.appendChild(button);
}


// Modal close functionality
const closeButtons = document.querySelectorAll(".close-button");

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.closest(".modal").style.display = "none";
    });
});

window.addEventListener("click", (event) => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


// Function to create snowflakes
function createSnowflakes() {
    const snowflakeCount = 100;  // Increased number of snowflakes
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Randomize the size of each snowflake
        snowflake.style.width = `${Math.random() * 10 + 5}px`;  // Size between 5px and 15px
        snowflake.style.height = snowflake.style.width;  // Make them round
        snowflake.style.left = `${Math.random() * 100}%`;  // Randomly position them horizontally
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;  // Randomize speed (between 5s and 10s)
        snowflake.style.animationDelay = `${Math.random() * 5}s`;  // Randomize delay (between 0s and 5s)
        
        // Add snowflake to the body
        document.body.appendChild(snowflake);
    }
}

// Call the function to start snowfall
createSnowflakes();
