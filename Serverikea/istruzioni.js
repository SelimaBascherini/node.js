// 1. creare la cartella db per i json con i dati da manipolare
//     1.1. recuperare il json come array di oggetti. 

// 2. creare cartella src (source) nella quale inserire l'index.js e le route. 
//      2.1. import express from 'express'
//         const app = express()
//         const port = 3000
//      2.2  creare le varie chiamate http con: app.get('/', hello) dove '/' è il path da seguire
//         nell'url e hello è la funzione importata dal file route. 
//         questa funzione ha una req (richiesta del client) e una res (risposta del server)
//      2.3  creare le route nelle quali saranno inserite le varie funzioni da passare
//         ai verbi http. Importare il json (import mobili from '../db/mobiliIkea.json' assert { type: 'json' }
//         creare la funzione di request e result come: const hello = (req, res) => {res.send('Hello World!')}
//         che andrà esportata alla fine del file con tutte quelle disponibili con:  export{hello}

// 3. creare cartella script nella quale inserire i file solitamente js che contengono informazioni 
//    e task ad esempio l'inserimento di id a tutti gli elementi. 
//      3.1. importare nel file degli script il json come: 
//           import mobili from '../db/mobiliIkea.json' assert { type: 'json' }
//           import fs from "fs"
//      3.2. concludere il documento esportando il tutto con:
//           fs.writeFileSync('../db/mobiliIkea.json', JSON.stringify(mobili, null, '  '))
//      3.3 Gli script vanno eseguiti una volta che servono dal terminale con ad es. node add-id.js dove add-id.js
//          è il nome del file dello script. 
// 




// put se il prezzo è maggiore di 199 applica uno sconto del 20% 
// post aggiungiamo il 61 oggetto ok
// delete eliminiamo il mobile 