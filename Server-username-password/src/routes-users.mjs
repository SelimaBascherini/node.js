import fs from 'node:fs/promises'
import users from '../db/users.json' assert { type: 'json' }
import axios from 'axios'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const DB_PATH = './db/users.json'


// route homepage
export const getIndex = (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
}

//route signup page
export const getSignup = (req, res) => {
    res.sendFile(__dirname + '/static/signup.html')
}

// create new user through form
export const signup = (req, res) => {

    let idRandom = Date.now()
    users[idRandom] = req.body

    fs.writeFile(DB_PATH, JSON.stringify(users, null, '  '))

    res
        .status(201)
        .send({
            message: 'user created'
        })
}  
