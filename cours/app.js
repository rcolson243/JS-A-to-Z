// const question_container = document.querySelector('.click-event')
// const reponse_un         = document.getElementById('btn1');
// const reponse_deux       = document.getElementById('btn2');
// const bonne_reponse      = document.querySelector('.reponse')

// // click event
// reponse_un.addEventListener('click', () => {
//     bonne_reponse.classList.add('show-response');
//     bonne_reponse.style.backgroundColor = "#5bef76";
// })
// reponse_deux.addEventListener('click', () => {
//     bonne_reponse.classList.add('show-response');
//     bonne_reponse.style.backgroundColor = "red";
// })

// const mousemove = document.querySelector('.mousemove');

// window.addEventListener("mousemove", (e) => {
//     mousemove.style.left = e.pageX + "px";
//     mousemove.style.top  = e.pageY  + "px";
//     // mousemove.style.left = e.clientX + "px";
//     // mousemove.style.top = e.clientY  + "px";
// })

// const keypress_touch = document.querySelector('.keypress');
// const id_key         = document.getElementById('key');

// // lire un fichier son sur js 
// const son_music = () => {
//     const audio = new Audio();
//     audio.src = "./Enter.mp3";
//     audio.play();
// }

// document.addEventListener('keypress', (e) => {
//     id_key.textContent = e.key;
//     if (e.key == 'Enter') {
//         son_music();
//         console.log("hello");
//     }
// })

// // Scoll Event
// const nav = document.querySelector('nav');
// const cercle_scroll = document.querySelector('.cercle')
// window.addEventListener('scroll', () => {
//     console.log(window.scrollY);
//     if (scrollY > 120) {
//         nav.style.top = "0";
//         cercle_scroll.style.display = "block";
//     } else {
//         nav.style.top = "-50px";
//         cercle_scroll.style.display = "none";
//     }
// })

// // les form 
// const form = document.querySelector('form')
// const input_text = document.querySelector('input[type=text]');
// const input_select = document.querySelector('select');
// const checkbox = document.querySelector('#checkbox');

// let value_input;
// let value_select;

// input_text.addEventListener('input', (e) => {
//     console.log(e.data);
//     value_input = e.target.value;
//     console.log(`la variable contient ${value_input}`);
// })

// input_select.addEventListener('change', (e) => {
//     value_select = e.target.value;
// })

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (checkbox.checked) {
//         console.log(checkbox.checked);
//         document.querySelector('form > div').innerHTML = `<h3>Nom : ${value_input}</h3>
//         <h3>Votre pays favoris:  ${value_select}</h3> 
//         `
//     } else {
//         alert("Veuillez accepter les CGV")
//     }
// })

// // Load event 
// window.addEventListener('load', (e) => {
//     console.log("fin de chargement");
// })

// let lang = "Bonjour";
// let nom = "Colson";
// let prenom = "Raphael";
// const lien_item = document.getElementsByTagName('A');

// function say_hello(lang, nom, prenom) {
//     alert(`${lang} ${nom} ${prenom}`)
// }

// lien_item[2].addEventListener('click', () => {
//     lang = "Hello";
//     console.log(`Vous avez changer la langue en anglais`);
// })

// lien_item[0].addEventListener('click', () => {
//     say_hello(lang, nom , prenom);
// })

const nom_str = prompt("Quel est votre nom");
const prenom_str = prompt("Quel est votre prenom");

document.write(`
    <p>Nom : ${nom_str}</p> 
    <p>prenom : ${prenom_str}</p> 
`)















