// --- MODULO 1: Variabili Singole ---

// Libro 1
const titolo1 = "Through mom's eyes";
const autore1 = "Sheinelle Jones";
let prezzo1 = 15.00;
const urlCopertina1 = "/its-brindisi-ppw/Ripasso/Libreria/41fEIT+IOML._SY445_SX342_ML2_.jpg";
let stato1 = "Finito";
let voto1 = 5;

// Libro 2
const titolo2 = "Burn of the everflame";
const autore2 = "Penn Cole";
let prezzo2 = 18.50;
const urlCopertina2 = "/its-brindisi-ppw/Ripasso/Libreria/71YyYxRBWFL._SL1500_.jpg";
let stato2 = "In lettura";
let voto2 = 4;

// Libro 3
const titolo3 = "The beekeeper's apprentice";
const autore3 = "Laurie R. King";
let prezzo3 = 12.00;
const urlCopertina3 = "/its-brindisi-ppw/Ripasso/Libreria/81OOBKJ1vHL._SL1500_.jpg";
let stato3 = "Da leggere";
let voto3 = 0;

// Libro 4
const titolo4 = "The missing ones";
const autore4 = "A.R. Torre";
let prezzo4 = 14.90;
const urlCopertina4 = "/its-brindisi-ppw/Ripasso/Libreria/91f-93IWQFL._SL1500_.jpg";
let stato4 = "Da leggere";
let voto4 = 0;

// Libro 5
const titolo5 = "Inferno";
const autore5 = "Larry Niven & Jerry Pournelle";
let prezzo5 = 16.00;
const urlCopertina5 = "/its-brindisi-ppw/Ripasso/Libreria/81Xeqc89NcL._SL1500_.jpg";
let stato5 = "In lettura";
let voto5 = 3;

// Libro 6
const titolo6 = "Rites of the starling";
const autore6 = "Devney Perry";
let prezzo6 = 17.00;
const urlCopertina6 = "/its-brindisi-ppw/Ripasso/Libreria/91pSaVjfShL._SL1500_.jpg";
let stato6 = "Finito";
let voto6 = 4;

// Libro 7
const titolo7 = "STAR WARS: Heir to the empire";
const autore7 = "Timothy Zahn";
let prezzo7 = 22.00;
const urlCopertina7 = "/its-brindisi-ppw/Ripasso/Libreria/91xvzumCfRL._SL1500_.jpg";
let stato7 = "Da leggere";
let voto7 = 0;

// Libro 8
const titolo8 = "Between Sisters";
const autore8 = "Kristin Hannah";
let prezzo8 = 13.50;
const urlCopertina8 = "/its-brindisi-ppw/Ripasso/Libreria/81i3Q7EftzL._SL1500_.jpg";
let stato8 = "Finito";
let voto8 = 5;

// Libro 9
const titolo9 = "La ragazza dei Lupi";
const autore9 = "Mia Canestrini";
let prezzo9 = 11.00;
const urlCopertina9 = "/its-brindisi-ppw/Ripasso/Libreria/71GIdWVTyPL._SL1500_.jpg";
let stato9 = "In lettura";
let voto9 = 4;

// Libro 10
const titolo10 = "Into the Wild";
const autore10 = "Jon Krakauer";
let prezzo10 = 14.00;
const urlCopertina10 = "/its-brindisi-ppw/Ripasso/Libreria/815okd+j9pL._SL1500_.jpg";
let stato10 = "Finito";
let voto10 = 5;

// --- STAMPA BIGLIETTI DA VISITA (Esempi richiesti) ---
console.log("📖 " + titolo1 + " di " + autore1 + " - Stato: " + stato1 + " - Voto: " + voto1 + "/5 stelle");
console.log("📖 " + titolo2 + " di " + autore2 + " - Stato: " + stato2 + " - Voto: " + voto2 + "/5 stelle");
console.log("📖 " + titolo3 + " di " + autore3 + " - Stato: " + stato3 + " - Voto: " + voto3 + "/5 stelle");
console.log("📖 " + titolo4 + " di " + autore4 + " - Stato: " + stato4 + " - Voto: " + voto4 + "/5 stelle");
console.log("📖 " + titolo5 + " di " + autore5 + " - Stato: " + stato5 + " - Voto: " + voto5 + "/5 stelle");
console.log("📖 " + titolo6 + " di " + autore6 + " - Stato: " + stato6 + " - Voto: " + voto6 + "/5 stelle");
console.log("📖 " + titolo7 + " di " + autore7 + " - Stato: " + stato7 + " - Voto: " + voto7 + "/5 stelle");
console.log("📖 " + titolo8 + " di " + autore8 + " - Stato: " + stato8 + " - Voto: " + voto8 + "/5 stelle");
console.log("📖 " + titolo9 + " di " + autore9 + " - Stato: " + stato9 + " - Voto: " + voto9 + "/5 stelle");
console.log("📖 " + titolo10 + " di " + autore10 + " - Stato: " + stato10 + " - Voto: " + voto10 + "/5 stelle");

// --- TASK: Funzione calcolaSconto ---
// Riceve il prezzo e un booleano (true/false) per sapere se l'utente è Premium
function calcolaSconto(prezzo, isPremium) {
    let prezzoFinale;

    if (isPremium === true) {
        // Applica lo sconto del 15% per i membri Premium
        prezzoFinale = prezzo - (prezzo * 0.15);
    } else {
        // Applica lo sconto base del 5% per tutti gli altri
        prezzoFinale = prezzo - (prezzo * 0.05);
    }

    // Restituiamo il prezzo finale arrotondato a 2 decimali
    return prezzoFinale.toFixed(2);
}

// --- TASK: Funzione stampaStelle ---
// Riceve un numero da 1 a 5 e restituisce le stelline grafiche
function stampaStelle(voto) {
    if (voto === 5) {
        return "⭐⭐⭐⭐⭐";
    } else if (voto === 4) {
        return "⭐⭐⭐⭐";
    } else if (voto === 3) {
        return "⭐⭐⭐";
    } else if (voto === 2) {
        return "⭐⭐";
    } else if (voto === 1) {
        return "⭐";
    } else {
        return "Nessun voto"; // Per il voto 0
    }
}

// --- TASK: Test delle funzioni in Console ---
console.log("--- Test Modulo 2 ---");

// Testiamo lo sconto sul Libro 1 (Through mom's eyes)
let prezzoScontato1 = calcolaSconto(prezzo1, true); 
console.log("Prezzo Premium per '" + titolo1 + "': " + prezzoScontato1 + "€");

// Testiamo le stelle sul Libro 2 (Burn of the everflame)
let stelleLibro2 = stampaStelle(voto2);
console.log("Valutazione per '" + titolo2 + "': " + stelleLibro2);

// Testiamo le stelle su un libro non letto (voto 0)
console.log("Valutazione per libro non letto: " + stampaStelle(0));

// --- TASK: Creazione Array Catalogo ---
// Raggruppiamo i dati dei libri in oggetti dentro un unico array
const catalogo = [
    { titolo: titolo1, autore: autore1, prezzo: prezzo1, urlCopertina: urlCopertina1, stato: stato1, voto: voto1 },
    { titolo: titolo2, autore: autore2, prezzo: prezzo2, urlCopertina: urlCopertina2, stato: stato2, voto: voto2 },
    { titolo: titolo3, autore: autore3, prezzo: prezzo3, urlCopertina: urlCopertina3, stato: stato3, voto: voto3 },
    { titolo: titolo4, autore: autore4, prezzo: prezzo4, urlCopertina: urlCopertina4, stato: stato4, voto: voto4 },
    { titolo: titolo5, autore: autore5, prezzo: prezzo5, urlCopertina: urlCopertina5, stato: stato5, voto: voto5 },
    { titolo: titolo6, autore: autore6, prezzo: prezzo6, urlCopertina: urlCopertina6, stato: stato6, voto: voto6 },
    { titolo: titolo7, autore: autore7, prezzo: prezzo7, urlCopertina: urlCopertina7, stato: stato7, voto: voto7 },
    { titolo: titolo8, autore: autore8, prezzo: prezzo8, urlCopertina: urlCopertina8, stato: stato8, voto: voto8 },
    { titolo: titolo9, autore: autore9, prezzo: prezzo9, urlCopertina: urlCopertina9, stato: stato9, voto: voto9 },
    { titolo: titolo10, autore: autore10, prezzo: prezzo10, urlCopertina: urlCopertina10, stato: stato10, voto: voto10 }
];

// --- TASK: Ciclo di Stampa Titoli ---
console.log("--- Elenco Titoli nel Catalogo ---");
for (let i = 0; i < catalogo.length; i++) {
    console.log((i + 1) + ". " + catalogo[i].titolo);
}

// --- TASK: Dashboard Statistiche (La Sfida) ---
let valoreTotaleLibreria = 0;
let libriDaLeggereContatore = 0;

for (let i = 0; i < catalogo.length; i++) {
    // Sommiamo il prezzo di ogni libro al totale
    valoreTotaleLibreria += catalogo[i].prezzo;

    // Se lo stato è "Da leggere", aumentiamo il contatore
    if (catalogo[i].stato === "Da leggere") {
        libriDaLeggereContatore++;
    }
}

// --- TASK: Report della Libreria in Console ---
console.log("--- 📊 Report della Libreria ---");
console.log("Libri totali in catalogo: " + catalogo.length);
console.log("Valore totale della collezione: " + valoreTotaleLibreria.toFixed(2) + "€");
console.log("Libri ancora da iniziare: " + libriDaLeggereContatore);