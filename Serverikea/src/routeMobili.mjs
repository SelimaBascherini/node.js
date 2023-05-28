import mobili from '../db/mobiliIkea.json' assert { type: 'json' }

const hello = (req, res) => {
    res.send('Hello World!')
}

const mGet = (req, res) => {
  res.send(mobili)
}

const areaGet = (req, res) => {
  const areaFilter = []
  for (let i = 0; i < mobili.length; i++) {
    if(mobili[i].areaUtilizzo == req.params.area){
      areaFilter.push(mobili[i])
    }
  }
  res.send(areaFilter)
}

const postMobile = (req,res) =>{
  mobili.push(req.body)
  res.status(201).end()    // è la conferma del server quando non deve ritornare niente. 
                           // In questo caso è la conferma della creazione di una risorsa 
}

const deleteArea = (req,res) => {                           //RIFARE. Come fare una delete.
  mobili.filter(m => m.areaUtilizzo !== req.params.area)
  res.status(201).end()
}

export {
  hello,
  mGet,
  areaGet,
  postMobile,
  deleteArea
}   