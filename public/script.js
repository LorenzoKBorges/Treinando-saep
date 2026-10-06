const btnCadastrar = document.getElementById('btn_cadastro')
const btnAtualizar = document.getElementById('btn_atualizar')
const btnDeletar = document.getElementById('btn_deletar')
const btnLista = document.getElementById('btn_lista')



btnLista.addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/alunos');
    const data = await response.json();
    document.getElementById('lista').textContent = JSON.stringify(data, null, 2);
});



btnCadastrar.addEventListener('click', async () =>{
    const response = await fetch('http://localhost:3000/alunos', {
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



btnAtualizar.addEventListener('click', async (req, res) =>{
    const id = document.getElementById('id-att').value
    const responde = await fetch(`http://localhost:3000/alunos/:${id}`, {
        method: 'PUT',
        headers: {'Content-Type':'Application/JSON'},
        body: JSON.stringify({
            nome: document.getElementById('nome-att').valeu,
            idade: document.getElementById('idade-att').valeu
        })
    })

    const data = await responde.json()
    console.log(responde)
})

btnDeletar.addEventListener('click', async (req, res) =>{
    const id = document.getElementById('id-delete').value
    const responde = await fetch(`http://localhost:3000/alunos/:${id}`, {
        method: 'DELETE',
    })
    const data = await responde.json()
    console.log("Aluno deletado")
})
