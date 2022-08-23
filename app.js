const hambugger = document.getElementById("hambugger");
const upper = document.getElementById("upper");
const middle = document.getElementById("middle");
const lower = document.getElementById("lower");
const menu = document.getElementById("menu");

hambugger.addEventListener('click',() => {
    if(menu.style.display==="none") {
        middle.style.transform="translateY(-70px)";
        upper.style.transform= "rotate(45deg) translate(65px, -25px)";
        lower.style.transform= "rotate(-45deg) translate(50px, 35px)";
        menu.style.display="block";
    }
    else {
        middle.style.transform="none";
        upper.style.transform= "none";
        lower.style.transform= "none";
        menu.style.display="none";
    }
}); 