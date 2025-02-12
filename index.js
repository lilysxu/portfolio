// refs to DOM elements
document.addEventListener("DOMContentLoaded", function () {
    function checkOrientation() {
        if (window.innerHeight > window.innerWidth) {
            // Portrait mode
            document.querySelector('.landscape-content').style.display = 'none';
            document.querySelector('.portrait-warning').style.display = 'block';
        } else {
            // Landscape mode
            document.querySelector('.landscape-content').style.display = 'block';
            document.querySelector('.portrait-warning').style.display = 'none';
        }
    }

    // Initial check
    checkOrientation();

    // Listen for orientation changes
    window.addEventListener('resize', checkOrientation);
});



const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const polaroid1 = document.querySelector("#polaroid1");
const polaroid2 = document.querySelector("#polaroid2");
const camera1=document.querySelector("#camera1");
const bow=document.querySelector("#bow");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6=document.querySelector("#p6");

prevBtn.addEventListener("click", goPrevPage);
document.getElementById("prev-btn").style.display = "none";
nextBtn.addEventListener("click", goNextPage);


let currentLocation = 1;
let numOfPapers=6;
let maxLocation = numOfPapers+1;




function openBook(){
    book.style.transform = "translateX(50%)";
    // prevBtn.style.transform = "translateX(-240px)";
    // nextBtn.style.transform = "translateX(250px)";
    prevBtn.style.transform="translateX(-12vw)";
    nextBtn.style.transform = "translateX(17vw)";
    polaroid1.style.transform = "translate(600px, 300px) rotate(10deg)";
    polaroid2.style.transform = "translateX(-850px) translateY(-300px) rotate(-20deg)";
    camera1.style.transform="translate(800px, -300px) rotate(220deg)";
    bow.style.transform="translate(-700px, 200px) rotate(20deg)";

}


function closeBook(isAtBeginning){
    if(isAtBeginning){
        book.style.transform = "translateX(0%)";
       
    }
    else{
        book.style.transform = "translateX(100%)";

    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
    polaroid1.style.transform = "translate(500px,100px) rotate(20deg)";
    polaroid2.style.transform = "translateX(-800px) translateY(-100px) rotate(-20deg)";
    camera1.style.transform="translate(500px, -300px) rotate(200deg)";
    bow.style.transform="translateX(-600px) translateY(400px) rotate(-20deg)";
    
}

function goNextPage(){
    if(currentLocation<maxLocation){
        switch(currentLocation){
            case 1:
                document.getElementById("prev-btn").style.display = "inline";
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex=1;
                
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex=2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex=3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex=4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex=5;
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex=5;
                document.getElementById("next-btn").style.display = "none";
                closeBook();
                break;
            default:
                throw new Error("unknown state");
        }
    }
        
        currentLocation++;
    }



function goPrevPage(){
    if(currentLocation>1){
        switch(currentLocation){
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex=6;
                document.getElementById("prev-btn").style.display = "none";
               
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex=5;
                break;
            case 4:
                
                paper3.classList.remove("flipped");
                paper3.style.zIndex=4;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex=3;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex=2;
                break;
            case 7:
                openBook();
                paper6.classList.remove("flipped");
                paper6.style.zIndex=1;
                document.getElementById("next-btn").style.display = "inline";
                break;
            default:
                throw new Error("unknown state");
                
        }
       
    }
    currentLocation--;
}

