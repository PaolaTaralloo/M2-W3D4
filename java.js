// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function modH1() {
    let titolo = document.getElementsByTagName("h1")[0] //perchè byTagName mi restituisce un array e quindi va specificato l'indice tra quadre
    titolo.innerText = "Nuovo SmartZone"
    console.log(titolo)
}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function modBg() {
    let tagling = document.querySelector("link")
    tagling.href = "/style1.css"
}

//ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function modIndirizzo() {
    let indirizzo = document.getElementById("indirizzo")
    indirizzo.innerText = "Via Inventata, 12 - Napoli"
    console.log(indirizzo)
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function addCssLink() {
    let cssLink = document.querySelectorAll(".amazonLink")
    for (let i = 0; i < cssLink.length; i++) {
        cssLink[i].classList.add("link")
    }
    console.log(cssLink)
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function nascondiImg(){
    let element = document.querySelectorAll("img")
    for (let i = 0; i < element.length; i++){
        element[i].classList.toggle("visibility")
    }
}

function riattivaImg() {
    let element1 = document.querySelectorAll("img")
    for (let i = 0; i < element1.length; i++){
        element1[i].classList.remove("visibility")
    }
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

const colori = ["#FF6347", "#4682B4", "#32CD32", "#FFD700", "#8A2BE2"];

function modPrezzi(){
    let element2 = document.querySelectorAll(".prezzi")
    for (let i = 0; i < element2.length; i++){
        let randomColore = colori[Math.floor(Math.random()*colori.length)];
        element2[i].style.color = randomColore;
    }
}