// data.js -- les données de Jàng Afrig

// --- Le tableau des pays africains (10 pays, chacun avec son code, nom et capitale) ---
const pays = [
    { cca3: "SEN", nom: "Sénégal",        capitale: "Dakar" },
    { cca3: "MLI", nom: "Mali",           capitale: "Bamako" },
    { cca3: "GHA", nom: "Ghana",          capitale: "Accra" },
    { cca3: "KEN", nom: "Kenya",          capitale: "Nairobi" },
    { cca3: "MAR", nom: "Maroc",          capitale: "Rabat" },
    { cca3: "NGA", nom: "Nigéria",        capitale: "Abuja" },
    { cca3: "EGY", nom: "Égypte",         capitale: "Le Caire" },
    { cca3: "CIV", nom: "Côte d'Ivoire",  capitale: "Yamoussoukro" },
    { cca3: "TUN", nom: "Tunisie",        capitale: "Tunis" },
    { cca3: "ETH", nom: "Éthiopie",       capitale: "Addis-Abeba" }
];

// --- Renvoie un élément au hasard dans un tableau ---
function choisirAuHasard(tableau) {
    const index = Math.floor(Math.random() * tableau.length); // index entre 0 et tableau.length - 1
    return tableau[index]; // on retourne l'élément à cet index
}

// --- Mélange un tableau (algorithme classique d'échange) ---
function melanger(tableau) {
    const copie = [...tableau]; // copie du tableau pour ne pas modifier l'original
    for (let i = copie.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // index aléatoire entre 0 et i
        const temp = copie[i]; // on garde copie[i] de côté
        copie[i] = copie[j];  // on écrase copie[i] avec copie[j]
        copie[j] = temp;       // on remet l'ancienne valeur de copie[i] dans copie[j]
    }
    return copie; // on retourne le tableau mélangé
}