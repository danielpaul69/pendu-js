let animaux = [
    'cheval',
    'chat',
    'chien',
    'canard'
];

let motAleatoire = animaux[Math.floor(Math.random() * animaux.length)];
let espaceJeu = document.getElementById('espaceJeu');
for (const lettre of motAleatoire) {
    espaceJeu.innerHTML += '<button class="btn btn-dark"></button>'
}