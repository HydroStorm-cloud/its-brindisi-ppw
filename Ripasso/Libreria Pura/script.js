const contenitoreGriglia = document.querySelector("#griglia-libri");
const contenitoreStatistiche = document.querySelector("#pannello-statistiche");
const bottoneDarkMode = document.querySelector("#btn-dark-mode");


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

/* modulo 3 */
const libro1 = {
    titolo: "Burn of the everflame",
    autore: "Penn Cole",
    prezzo: 25,
    daLeggere: false,
    copertina: "/its-brindisi-ppw/Ripasso/Libreria Pura/Immagini per libreria/Libro 1.jpg"
  }
  const libro2 = {
    titolo: "STAR WARS: Heir to the empire",
    autore: "Timothy Zahn",
    prezzo: 15,
    daLeggere: true,
    copertina: "/its-brindisi-ppw/Ripasso/Libreria Pura/Immagini per libreria/Libro 2.jpg"
  }
  const libro3 = {
    titolo: "Between Sisters",
    autore: "Kristin Hannah",
    prezzo: 12,
    daLeggere: true,
    copertina: "/its-brindisi-ppw/Ripasso/Libreria Pura/Immagini per libreria/Libro 3.jpg"
  }
  const libro4 = {
    titolo: "Cime Tempestose",
    autore: "Emily Bronte",
    prezzo: 20,
    daLeggere: false,
    copertina: "/its-brindisi-ppw/Ripasso/Libreria Pura/Immagini per libreria/Libro 4.jpg"
  }

  let catalogo = JSON.parse(localStorage.getItem("mieiLibri")) || [libro1, libro2, libro3, libro4];
  console.log("Titoli nella libreria:");
  for (let i = 0; i < catalogo.length; i++) {
  console.log("- " + catalogo[i].titolo);
}
let totaleLibri = 0;
let valoreTotale = 0;
let libriDaLeggere = 0;

for (let i = 0; i < catalogo.length; i++) {
  totaleLibri++;
  valoreTotale += catalogo[i].prezzo;

  if (catalogo[i].daLeggere) {
    libriDaLeggere++;
  }
}

console.log("Report della Libreria:");
console.log("Numero totale di libri: " + totaleLibri);
console.log("Valore totale: €" + valoreTotale);
console.log("Libri da leggere: " + libriDaLeggere);

/* modulo 4 */

function aggiornaSchermo() {

  let htmlGenerato = "";

  for (let i = 0; i < catalogo.length; i++) {
    htmlGenerato += "<div class='card'>" +
      "<h3>" + catalogo[i].titolo + "</h3>" +
      "<p><i>" + catalogo[i].autore + "</i></p>" +
      "<p>" + catalogo[i].prezzo + " €</p>" +
      "</div>";
  }

  contenitoreGriglia.innerHTML = htmlGenerato;

  contenitoreStatistiche.textContent =
    "Hai " + catalogo.length + " libri in libreria.";
    localStorage.setItem("mieiLibri", JSON.stringify(catalogo));
}

bottoneDarkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark");});

aggiornaSchermo();

/* modulo 5 */
const inputTitolo = document.querySelector("#libri");
const inputAutore = document.querySelector("#autore");
const inputPrezzo = document.querySelector("#prezzo");
const btnConferma = document.querySelector("#aggiungiLibro .btn-secondary");

btnConferma.addEventListener("click", function () {
    const nuovoLibro = {
        titolo: inputTitolo.value,
        autore: inputAutore.value,
        prezzo: Number(inputPrezzo.value),
        daLeggere: true,
        copertina: "#"
    };

    if (nuovoLibro.titolo !== "") {
        catalogo.push(nuovoLibro);
        aggiornaSchermo();

        inputTitolo.value = "";
        inputAutore.value = "" ;
        inputPrezzo.value = "";
    } else {
        alert("Inserisci almeno il titolo!");
    }
});

const btnSvuota = document.querySelector("#btn-svuota");
if(btnSvuota) {
    btnSvuota.addEventListener("click", function() {
        catalogo.length = 0;
        aggiornaSchermo();
    });
}
const contenitoreStatico = document.querySelector("#catalogo .row");


const inputRicerca = document.querySelector("#input-ricerca");
const btnCerca = document.querySelector("#btn-cerca");
const testoCaricamento = document.querySelector("#testo-caricamento");

btnCerca.addEventListener("click", async function() {
    let termineRicerca = inputRicerca.value;
    let url = "https://openlibrary.org/search.json?title=" + termineRicerca.replaceAll(" ", "+");
    
    testoCaricamento.classList.remove("nascosto");
    
    let risposta = await fetch(url);
    let dati = await risposta.json();
    
    if (dati.docs.length > 0) {
        let nuovoLibro = { 
            titolo: dati.docs[0].title, 
            autore: dati.docs[0].author_name ? dati.docs[0].author_name[0] : "Sconosciuto",
            prezzo: 15 
        };
        catalogo.push(nuovoLibro);
        aggiornaSchermo();
    }
    
    testoCaricamento.classList.add("nascosto");
});

