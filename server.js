import express from 'express'
import { getSeries } from './src/controllers/controlsSeries.js';


const app = express();
const PORT = 3000;

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//req(request) =peticion del cliente y res(response = respuesta del servidor)
app.post('/series', (req, res) => { 
    try{
const { id, name, genero, estreno, temporada, autor}= req.body



    }catch (error){

    }
})

app.get("/series" , getSeries)

app.listen(PORT, () => {
    console.log(`servidor running on port ${PORT}`)
})