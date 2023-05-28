// prendo il json con tutti i mobili ikea
// parto con un id = 1
// per ogni mobile
//   aggiungo all'i-esimo l'id
//   aumento id di 1
//salvo nel file

import { log } from 'console'
import fs from "fs"
import mobili from '../db/mobiliIkea.json' assert { type: 'json' }

let id = 1
let m = mobili.map(mob => {
    mob.id = id
    id++
    return mob
})
console.log(m);


fs.writeFileSync('../db/mobiliIkea.json', JSON.stringify(m, null, '  '))