import shop from '../db/shop.json' assert { type : 'json'}


const sGet = (req, res) => {
    res.send(shop)
}

 const sDelete = (req, res) => {
    let index = -1
    for (let i = 0; i < shop.length; i++) {
      if (parseInt(shop[i].id) === parseInt(req.params.id)) {
        index = i;
      } 
     if (index == -1) {
       res.status(404).end()
     } else {
       shop.splice(index, 1)
       res.status(200).end()
     } 
   }}

  const sSearch = (req, res) => {
    const shopFiltrato = []
    for (let i = 0; i < shop.length; i++) {
      if (shop[i].nome == req.params.nome) {
        shopFiltrato.push(shop[i])
      }
    }
    res.send(shopFiltrato);
    console.log(shopFiltrato)
  }


export {
    sGet,
    sDelete,
    sSearch
}