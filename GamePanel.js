const games = [

    {
        name: "Patintero",
        image: "Patintero.jpg",

        description:
            "Pogi si Darwin",

        players:
            "Pogi si Darwin",

        materials:
            "Pogi si Darwin",

        instructions:
            "Pogi si Darwin"
    },

    {
        name: "Tumbang Preso",
        image: "TP.jpg",

        description:
            "Pogi si Darwin",
        players:
            "Pogi si Darwin",

        materials:
            "Pogi si Darwin",

        instructions:
            "Pogi si Darwin",
    },

    {
        name: "Chinese Garter",
        image: "CG.jpg",
    },

    {
        name: "Langit Lupa",
        image: "LaL.jpg",
    },

    {
        name: "Tago-Taguan",
        image: "TT.jpg",
     },

    {
        name: "Pogi si Darwin",
        image: "pogiako.jpg",
      },

    {
        name: "Pogi si Darwin",
        image: "pogiako.jpg",
     },

    {
        name: "Pogi si Darwin",
        image: "pogiako.jpg",
      },

    {
        name: "Pogi si Darwin",
        image: "pogiako.jpg",
      },

    {
        name: "Pogi si Darwin",
        image: "pogiako.jpg",
      }

];

/* =====================================
   CURRENT SLIDE
===================================== */

let currentSlide = 0;

/* =====================================
   DISPLAY GAME INFORMATION
===================================== */

function showSlide(index) {

    // Update current slide
    currentSlide = index;

    // Get selected game
    const game = games[currentSlide];

    // Update game title
    document.getElementById("game-title").textContent =
        game.name;

    // Update game image
    document.getElementById("game-image").src =
        game.image;

    document.getElementById("game-image").alt =
        game.name;

    // Update game information
    document.getElementById("game-name").textContent =
        game.name;

    document.getElementById("game-description").textContent =
        game.description;

    document.getElementById("game-players").textContent =
        game.players;

    document.getElementById("game-materials").textContent =
        game.materials;

    document.getElementById("game-instructions").textContent =
        game.instructions;

    // Update active indicator
    updateIndicators();

}

/* =====================================
   NEXT SLIDE
===================================== */

function nextSlide() {

    currentSlide++;

    // Return to first slide after the last slide
    if (currentSlide >= games.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

/* =====================================
   PREVIOUS SLIDE
===================================== */

function previousSlide() {

    currentSlide--;

    // Return to last slide if currently on first
    if (currentSlide < 0) {
        currentSlide = games.length - 1;
    }

    showSlide(currentSlide);

}

/* =====================================
   CREATE SLIDE INDICATORS
===================================== */

function createIndicators() {

    const indicatorContainer =
        document.getElementById("indicators");

    // Clear existing indicators
    indicatorContainer.innerHTML = "";

    // Create 10 buttons
    games.forEach((game, index) => {

        const button = document.createElement("button");

        button.type = "button";

        button.setAttribute(
            "aria-label",
            "Go to " + game.name
        );

        // Click indicator to change slide
        button.addEventListener("click", function() {

            showSlide(index);

        });

        indicatorContainer.appendChild(button);

    });

    updateIndicators();

}

/* =====================================
   UPDATE ACTIVE INDICATOR
===================================== */

function updateIndicators() {

    const indicators =
        document.querySelectorAll(".indicators button");

    indicators.forEach((indicator, index) => {

        if (index === currentSlide) {

            indicator.classList.add("active");

        } else {

            indicator.classList.remove("active");

        }

    });

}

/* =====================================
   INITIALIZE CAROUSEL
===================================== */

// Generate 10 indicators
createIndicators();

// Display the first game
showSlide(0);