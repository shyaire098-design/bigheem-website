const loading = document.getElementById("loading");
const dots = document.getElementById("dots");

const winner = document.getElementById("winner");
const loser = document.getElementById("loser");

let dotCount = 1;

// Wait 2 seconds after page loads
window.onload = () => {

    setTimeout(() => {

        loading.scrollIntoView({
            behavior: "smooth"
        });

        startLoading();

    }, 2000);

};

function startLoading(){

    const dotAnimation = setInterval(() => {

        dotCount++;

        if(dotCount > 3){
            dotCount = 1;
        }

        dots.textContent = ".".repeat(dotCount);

    },500);

    // Change this later for QR logic
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
