import fs from 'node:fs/promises'
import users from '../db/users.json' assert { type: 'json' }
import todoUsers from '../db/todos-users.json' assert { type: 'json' }

const DB_PATH = './db/users.json'
const DB_PATH_TODOS_USERS = './db/todos-users.json'

let NEXT = Object
  .keys(users)
  .reduce((biggest, id) => biggest > id ? biggest : id, 0)


export const create = async (req, res) => {
  NEXT++
  users[NEXT] = req.body

  // never use sync, go the async way
  // fs.writeFileSync(DB_PATH, JSON.stringify(users, null, '  '))

  await fs.writeFile(DB_PATH, JSON.stringify(users, null, '  '))
  res
    .status(201)
    .send({
      message: 'user created'
    })
}

export const get = (req, res) => {
  let user = users[req.params.id]
  if (user && !user.cancelled) {
    res.send({ data: user })
  } else {
    res
      .status(200)
      .send({
        data: {},
        error: true,
        message: 'user not found'
      })
  }
}

export const getAll = (req, res) => {
  let nonCancelled = Object.keys(users)
    .reduce((nonCancelled, id) => {
      if (!users[id].cancelled) {
        nonCancelled[id] = users[id]
      }
      return nonCancelled
    }, {})
  res.send(nonCancelled)
}

export const search = (req, res) => {
  const query = req.query
  let filtered = Object.values(users)
      .filter(u => u.name === query.name || u.surname === query.surname)
  res.send(filtered)
}

export const update = async (req, res) => {
  let user = users[req.params.id]
  if (user) {
    let newUser = { ...user, ...req.body }
    users[req.params.id] = newUser
    await fs.writeFile(DB_PATH, JSON.stringify(users, null, '  '))
    res.send(newUser)
  } else {
    res
      .status(200)
      .send({
        data: {},
        error: true,
        message: 'user not found'
      })
  }
}

export const remove = async (req, res) => {
  let user = users[req.params.id]
  if (user) {

    // delete users[req.params.id]
    users[req.params.id].cancelled = true

 // make sure we delete any todos-users
    // related to this user
    Object.keys(todoUsers).forEach(idut => {
      let split = idut.split('-')
      if (split[0] == req.params.id) {
        delete todoUsers[idut]
      }
    })
    await fs.writeFile(DB_PATH_TODOS_USERS, JSON.stringify(todoUsers, null, '  '))
    
    await fs.writeFile(DB_PATH, JSON.stringify(users, null, '  '))
    res.status(200).end()
  } else {
    res
      .status(200)
      .send({
        data: {},
        error: true,
        message: 'user not found'
      })
  }
}
    
//usare la delete in modo che aggiunga a quel determinato valore anche cancelled= true 
    // prendo le chiavi di user  
    // ciclo sulle chiavi 
    // aggiungo cancelled=false all'oggetto valore di ogni chiave con user[i]["cancelled"]=false
//dire alla get di mandare il messaggio user not found se cancelled è true
