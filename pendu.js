let animaux = [
    'cheval',
    'chat',
    'chien',
    'canard'
];

let lettresSaisies = [];

let motAleatoire = animaux[Math.floor(Math.random() * animaux.length)];
console.log(motAleatoire);

let espaceJeu = document.getElementById('espaceJeu');

for (let i = 0; i < motAleatoire.length; i++) {
    espaceJeu.innerHTML += `<button id="${i}" class="btn btn-dark"></button>`;
}

function jouer() {
    let lettre = document.getElementById('lettre').value;

    if (motAleatoire.includes(lettre)) {
        for (let i = 0; i < motAleatoire.length; i++) {
            if (motAleatoire[i] === lettre) {
                document.getElementById(i).innerText = lettre;

                document.getElementById(i).classList.remove('btn-dark');
                document.getElementById(i).classList.add('btn-primary');
            }
        }
    } else {
        if (!lettresSaisies.includes(lettre.toUpperCase())) {
            lettresSaisies.push(lettre.toUpperCase());
        }
    }

    document.getElementById('lettresSaisies').innerText = 'Lettres saisies : ' + lettresSaisies.join(' | ');
    console.log(lettresSaisies);
}