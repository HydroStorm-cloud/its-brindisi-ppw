/* modulo 1 */
const titolo = "Cime Tempestose";
const autore = "Emily Brontè";
const prezzo = 25.50;
const urlCopertina = "https://m.media-amazon.com/images/I/71yHeS1lYqL._SL1500_.jpg";
let stato = "Finito";
let voto = 5;

console.log( titolo + " " + "di" + " " + autore + " " + "- Stato:" + " " + stato + " " + "- Voto:" + " " + voto + "/5 stelle");

/* modulo 2 */
let sconto;
function calcolaSconto(prezzo, isPremium) {
    if (isPremium) {
        sconto = 0.15;
    } else {
        sconto = 0.05;
    }
    let prezzoScontato = prezzo - (prezzo * sconto);
    return prezzoScontato;
}

function stampaStelle(voto) {
    if (voto === 1) {
        return "⭐";
    } else if (voto === 2) {
        return "⭐⭐";
    } else if (voto === 3) {
        return "⭐⭐⭐";
    } else if (voto === 4) {
        return "⭐⭐⭐⭐";
    } else if (voto === 5) {
        return "⭐⭐⭐⭐⭐";
    } else {
        return "Voto non valido";
    }
}