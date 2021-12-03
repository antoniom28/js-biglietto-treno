/*
chiedere a utente il num di km che vuole fare E l'età del passeggero
calcola il pezzo tot del viaggio con queste regole:
0.21 euro al km
20% per i minorenni
40% per gli over 65
output finale con 2 decimali

numero da modificare.toFixed(numero di decimali);
*/

/* ESERCITAZIONE ESERCITAZIONE ESERCITAZIONE ESERCITAZIONE ESERCITAZIONE */
document.writeln(' <h1> ESERCITAZIONE ASSEGNATA </h1> ');

let utenteKm = prompt(' quanti Km devi/vuoi fare? ');
while(isNaN(utenteKm)){
    utenteKm = (prompt('Errore!! , quanti Km devi/vuoi fare? '));
}

let utenteEta = (prompt(' quanti anni hai? '));
while(isNaN(utenteEta)){
    utenteEta = (prompt('Errore!! , quanti anni hai? '));
}

let prezzoTot = 0.21 * utenteKm;

document.writeln('Prezzo per il biglietto : ' , prezzoTot.toFixed(2) , ' &euro;');

if(utenteEta < 18){
    prezzoTot -= ((prezzoTot * 20) / 100);
    document.writeln('<br> Applicato sconto 20% per minorenni');
} else if(utenteEta > 65){
    prezzoTot -= ((prezzoTot * 40) / 100);
    document.writeln('<br> Applicato sconto 40% per over');
}

document.writeln(' <br>Prezzo biglietto : ' , prezzoTot.toFixed(2) , ' &euro;');

 /* BONUS MIO BONUS MIO BONUS MIO BONUS MIO BONUS MIO BONUS MIO */
let totPrezzo = 0;
let totSconto = 0;
let totOrdine = 0;
let inputKm = 0;
let inputEta = 0;

function calcolaPrezzo() {
    inputKm = document.getElementById('inputKm').value;
    inputEta = document.getElementById('inputEta').value;

    if(inputKm > 0 && inputEta > 0){
        totPrezzo = 0.21 * inputKm;

    document.getElementById('euroPrezzo').innerHTML =totPrezzo.toFixed(2) + ' &euro;';

    if(inputEta < 18)
        totSconto = ((totPrezzo * 20) / 100);
    else if(inputEta > 65)
        totSconto = ((totPrezzo * 40) / 100);
        else
            totSconto = 0;
    
    document.getElementById('euroSconto').innerHTML ='- ' + totSconto.toFixed(2) + ' &euro;';

    totOrdine = totPrezzo - totSconto;

    document.getElementById('euroOrdine').innerHTML =totOrdine.toFixed(2) + ' &euro;';

    
    document.getElementById('inputKm').value = '';
    document.getElementById('inputEta').value = '';
    }
}


