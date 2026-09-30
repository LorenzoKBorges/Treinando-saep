import express from "express"
import cors from "cors"
import pool from "./db.js"

const PORT = 3000
const app = express()



app.use(express.json())
app.use(cors())



app.get('/alunos', async (req, res) =>{
    const alunos = await pool.query('SELECT * FROM alunos')
    res.json(alunos)
})

app.post("/alunos", async (req, res) =>{
    const {nome, idade} = req.body
    const novoAluno = await pool.query("INSERT INTO alunos (nome, idade) VALUES ($1, $2) RETURNING *", [nome, idade])
    res.json(novoAluno.rows[0])
})

app.put("/alunos/:id", async (req, res) =>{
    const {id} = req.params
    const {nome, idade} = req.body
    const alunoAtt = await pool.query("UPDATE alunos SET nome = $1, idade = $2 WHERE id = $3 RETURNING*", [nome, idade, id])
    res.json(alunoAtt.rows[0])
})

app.delete("/alunos/:id", async (req, res) =>{
    const {id} = req.params
    const alunoDelete = await pool.query("DELETE FROM alunos WHERE id = $1 RETURNING*", [id])
    res.json(alunoDelete.rows[0])
})


app.listen(PORT, () =>{
    console.log("API rodando na porta 3000")
})