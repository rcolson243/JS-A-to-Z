const question_container = document.querySelector(".click-event")
const reponse_un         = document.getElementById('btn1');
const reponse_deux       = document.getElementById('btn2');
const bonne_reponse      = document.querySelector('.reponse')


// click event
reponse_un.addEventListener('click', () => {
    bonne_reponse.classList.add('show-response');
    bonne_reponse.style.backgroundColor = "#5bef76";
})
reponse_deux.addEventListener('click', () => {
    bonne_reponse.classList.add('show-response');
    bonne_reponse.style.backgroundColor = "red";
})

<<<<<<< HEAD
// mouse event
const mousemove = document.querySelector(".mousemove");
// console.log(mousemove);

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY  + "px";
    // mousemove.style.left = e.clientX + "px";
    // mousemove.style.top = e.clientY  + "px";
})

window.addEventListener("mousedown", (e)=> {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
})
window.addEventListener("mouseup", (e)=> {
    mousemove.style.transform = "scale(2) translate(-50%, -50%)";
    mousemove.style.border = "3px solid red";
})

window.addEventListener("mouseenter", (e)=> {
    ;
=======
question_container.addEventListener('click', () => {
    console.log("click");
    question_container.classList.toggle('question-clicked')
})

document.querySelector(".cache").addEventListener('click', () => {
    question_container.classList.remove('question-clicked')
>>>>>>> main
})





