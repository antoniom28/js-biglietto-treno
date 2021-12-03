/*
chiedere a utente il num di km che vuole fare E l'età del passeggero
calcola il pezzo tot del viaggio con queste regole:
0.21 euro al km
20% per i minorenni
40% per gli over 65
output finale con 2 decimali

numero da modificare.toFixed(numero di decimali);
*/

let utenteKm = parseInt(prompt(' quanti Km devi/vuoi fare? '));
let utenteEta = parseInt(prompt(' quanti anni hai? '));
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