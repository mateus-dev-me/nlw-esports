import express from 'express'

const app = express()

app.get('/ads', (resquest: any, response: any)=>{
    return response.json([
        {id: 1, anuncio: 'Anuncio 1'},
        {id: 2, anuncio: 'Anuncio 2'},
        {id: 3, anuncio: 'Anuncio 3'}
    ])
})


app.listen(3333)