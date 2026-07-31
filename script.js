// Big Heem Exotics V2.0

const arrow = document.getElementById("arrow");
const loading = document.getElementById("loading");

const dots = document.getElementById("dots");

const winner = document.getElementById("winner");
const loser = document.getElementById("loser");

// CLICK ARROW

arrow.addEventListener("click", () => {

    loading.scrollIntoView({
        behavior: "smooth"
    });

    startLoading();

});

// LOADING ANIMATION

let dotCount = 1;

function startLoading(){

    const dotAnimation = setInterval(() => {

        dotCount++;

        if(dotCount > 3){
            dotCount = 1;
        }

        dots.textContent = ".".repeat(dotCount);

    },500);

    // CHANGE THIS TO FALSE WHEN USING LOSER QR

    const isWinner = true;

    setTimeout(() => {

        clearInterval(dotAnimation);

        loading.style.display = "none";

        if(isWinner){

            winner.classList.remove("hidden");

            winner.scrollIntoView({
                behavior:"smooth"
            });

        }else{

            loser.classList.remove("hidden");

            loser.scrollIntoView({
                behavior:"smooth"
            });

        }

    },3000);

}
