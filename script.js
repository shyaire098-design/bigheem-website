// ===========================
// SETTINGS
// ===========================

const isWinner = true;

// Change this for each winning QR
const redemptionCode = "HEEM-A7X4-K9P2";


// ===========================
// ELEMENTS
// ===========================

const loading = document.getElementById("loading");

const dots = document.getElementById("dots");

const winnerOverlay = document.getElementById("winnerOverlay");

const loserOverlay = document.getElementById("loserOverlay");

const codeBox = document.getElementById("codeBox");


// ===========================
// SET CODE
// ===========================

codeBox.textContent = redemptionCode;


// ===========================
// ANIMATED DOTS
// ===========================

let loadingStarted = false;

function animateDots(){

    let count = 1;

    return setInterval(()=>{

        count++;

        if(count>3){
            count=1;
        }

        dots.textContent=".".repeat(count);

    },500);

}


// ===========================
// START WHEN USER SCROLLS
// ===========================

const observer = new IntersectionObserver((entries)=>{

    if(entries[0].isIntersecting && !loadingStarted){

        loadingStarted=true;

        startLoading();

    }

},{
    threshold:.6
});

observer.observe(loading);


// ===========================
// LOADING
// ===========================

function startLoading(){

    const dotTimer=animateDots();

    setTimeout(()=>{

        clearInterval(dotTimer);

        if(isWinner){

            winnerOverlay.classList.add("show");

        }else{

            loserOverlay.classList.add("show");

        }

    },3000);

}


// ===========================
// CLOSE
// ===========================

function closeOverlay(){

    winnerOverlay.classList.remove("show");

    loserOverlay.classList.remove("show");

}
