import axios from 'axios'

async function postMobili() {
    const res = await axios.post('http://localhost:3000/libri', {  //req.body
        "nome": "Godmorgon",
        "prezzo": 349.99,
        "annoInCommercio": 2010,
        "areaUtilizzo": "bagno"
    })
}
postMobili()