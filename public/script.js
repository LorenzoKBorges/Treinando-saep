import { json } from "express"
import nodemon from "nodemon"

const btnCadastrar = document.getElementById(btn-cadastro)
const btnAtualizar = document.getElementById(btn-atualizar)
const btnDeletar = document.getElementById(btn-deletar)
const btnLista = document.getElementById(btn-lista)



btnLista.addEventListener('click', async () =>{
    const response = await fetch('URL')
    cons
})



btnCadastrar.addEventListener('click', async () =>{
    const response = await fetch('URL', {
        method: 'POST',
        headers: {'Content-Type' : 'Application/json'},
        body: JSON.stringify({
            nome : document.getElementById('cad-nome').valeu,
            idade : document.getElementById('cad-idade').valeu
        })
    })
    const data = response
    response.json(data)
})


