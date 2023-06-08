// prendo il json con tutti i mobili ikea
// parto con un id = 1
// per ogni mobile
//   aggiungo all'i-esimo l'id
//   aumento id di 1
//salvo nel file

import { log } from 'console'
import fs from "fs"
import libri from '../db/libri.json' assert { type: 'json' }

let id = 1
let l = libri.map(lib => {
    lib.id = id
    id++
    return lib
})
console.log(l);


fs.writeFileSync('../db/libri.json', JSON.stringify(m, null, '  '))