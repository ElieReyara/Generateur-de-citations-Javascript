const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const generateButton = document.getElementById('generate-button');
let pastIndex = 0;
let randomIndex = 0;

// Tableau des citations
const quotes = [
    {
        text: "La seule façon de faire du bon travail est d’aimer ce que vous faites.",
        author: "Steve Jobs"
    },
    {
        text: "La vie, ce n’est pas d’attendre que les orages passent, c’est d’apprendre à danser sous la pluie.",
        author: "Sénèque"
    },
    {
        text: "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.",
        author: "Winston Churchill"
    },
    {
        text: "L'échec n'est qu'une occasion de recommencer plus intelligemment.",
        author: "Henry Ford"
    },
    {
        text: "Le voyage de mille lieues commence toujours par un premier pas.",
        author: "Lao Tseu"
    },
    {
        text: "La vie est ce qui arrive quand on est occupé à faire d'autres plans.",
        author: "John Lennon"
    },
    {
        text: "Il n’y a qu’une façon d’échouer, c’est d’abandonner avant d’avoir réussi.",
        author: "Georges Clemenceau"
    },
    {
        text: "Deviens ce que tu es.",
        author: "Friedrich Nietzsche"
    },
    {
        text: "L'imagination est plus importante que le savoir.",
        author: "Albert Einstein"
    },
    {
        text: "Si vous n'aimez pas où vous êtes, bougez. Vous n'êtes pas un arbre.",
        author: "Jim Rohn"
    },
    {
        text: "La meilleure vengeance est un succès massif.",
        author: "Frank Sinatra"
    },
    {
        text: "La perfection n’est pas atteignable, mais si nous la poursuivons, nous atteindrons l’excellence.",
        author: "Vince Lombardi"
    },
    {
        text: "Le seul véritable pouvoir, c'est le savoir.",
        author: "Proverbe"
    },
    {
        text: "Il est important de se concentrer sur l’essentiel pour avancer.",
        author: "Confucius"
    },
    {
        text: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
        author: "Winston Churchill"
    },
    {
        text: "Dans la vie, rien n'est à craindre, tout est à comprendre.",
        author: "Marie Curie"
    },
    {
        text: "Chaque matin, nous renaissons. Ce que nous faisons aujourd'hui est ce qui importe le plus.",
        author: "Bouddha"
    },
    {
        text: "Faites que le rêve dévore votre vie afin que la vie ne dévore pas votre rêve.",
        author: "Antoine de Saint-Exupéry"
    },
    {
        text: "Le changement est la loi de la vie. Ceux qui ne regardent que le passé ou le présent sont certains de manquer l'avenir.",
        author: "John F. Kennedy"
    },
    {
        text: "La seule limite à notre réalisation de demain sera nos doutes d’aujourd’hui.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Ce n'est pas la force, mais la persévérance qui fait les grandes œuvres.",
        author: "Samuel Johnson"
    },
    {
        text: "On ne découvre pas de terre nouvelle sans consentir à perdre de vue, d’abord et longtemps, tout rivage.",
        author: "André Gide"
    },
    {
        text: "Pour critiquer les gens, il faut les connaître, et pour les connaître, il faut les aimer.",
        author: "Coluche"
    },
    {
        text: "La créativité, c'est l'intelligence qui s'amuse.",
        author: "Albert Einstein"
    }
];

// Fonction pour générer une citation aléatoire
generateQuote = () => {
    //Generer un chiffre au hasard entre 0 et 9
    randomIndex = Math.floor(Math.random() * quotes.length);
    if(randomIndex === pastIndex){
        randomIndex++;
        if (randomIndex >= quotes.length) {
            randomIndex = 0;
        }
    }
    quoteText.innerText = quotes[randomIndex].text;
    quoteAuthor.innerText = `- ${quotes[randomIndex].author}`;
    pastIndex = randomIndex;
    
}


generateButton.addEventListener('click', (e) => {
    generateQuote();
});