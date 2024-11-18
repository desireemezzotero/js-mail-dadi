/* Chiedi all’utente la sua email, 
   controlla che sia nella lista di chi può accedere, 
   stampa un messaggio appropriato sull’esito del controllo.
   Non è necessario provvedere alla validazione delle email 
*/

const email = ['desireemezzotero', 'fabiorossi', 'ciccio', 'cioccolata'];
const insertEmail = prompt('inserisci la tua email');
console.log(insertEmail)
let message = 'il tuo accesso non può avvenire'
   

for (let i = 0; i < email.length; i++) {
   if (insertEmail == email[i]) {
      message = 'il tuo accesso è avvenuto con successo'
   } 
}

console.log(message)
