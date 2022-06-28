const question_container = document.querySelector(".click-event")

const reponse_un = document.getElementById('btn1');
const reponse_deux = document.getElementById('btn2');
const reponse_tois = document.getElementById('btn3');

function hello_word () {
    console.log("Salut toi comment tu vas");
}

question_container.addEventListener('click', () => {
    console.log("click");
    question_container.classList.toggle('question-clicked')
})

document.querySelector(".cache").addEventListener('click', () => {
    question_container.classList.remove('question-clicked')
})




