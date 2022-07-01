const question_container = document.querySelector('.click-event')
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


const mousemove = document.querySelector('.mousemove');

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top  = e.pageY  + "px";
    // mousemove.style.left = e.clientX + "px";
    // mousemove.style.top = e.clientY  + "px";
})

const keypress_touch = document.querySelector('.keypress');
const id_key         = document.getElementById('key');

const son_music = () => {
    const audio = new Audio();
    audio.src = "./Enter.mp3";
    audio.play();
}

document.addEventListener('keypress', (e) => {
    id_key.textContent = e.key;
    if (e.key == 'Enter') {
        son_music();
        console.log("hello");
    }
})









