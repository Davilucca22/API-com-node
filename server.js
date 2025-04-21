require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')

const route = require('./routes')

//serve para tratar o body da requisicao
app.use(express.urlencoded({extended:true}))

//conecta ao banco de dados com o link de adm(privei por segurança) mostra a mensagem confirmando a conxao e emite 'pronto'
mongoose.connect(process.env.LINKADM).then(() => {
    console.log('CONECTEI A BASE DE DADOS')
    app.emit('pronto')
})

//usa o arquivo routes.js para configurar as rotas da pagina
app.use(route)

//nome e caminho da pasta onde o arquivo "html" ficara
app.set('views','./src/views')

//indica a engine instalada(ejs)
app.set('view engine','ejs')


//quando a apliçao passar pelo status "pronto", o servidor carrega a pagina
app.on('pronto', () => {
    app.listen(3000, () => { //porta 3000
        console.log('acesse: http://localhost:3000')
        console.log('SERVIDOR ATIVO')
    })    
})
