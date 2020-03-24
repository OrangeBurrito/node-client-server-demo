const express = require('express')
const cors = require('cors')
const data = require('./data')
const {sleep} = require('./util')
const app = express()

let port = 2200

app.use(cors())

app.use(express.static('/public'))
app.get('/', (req, res) => {
	res.send('<h1>Todos API</h1>')
})
app.get('/todos', async (req, res) => {
	// await sleep(4000)
	res.json(data.todos)
})
app.get('/books', async(req, res) => {
	// await sleep(4000)
	res.json(data.books)
})

app.listen(port, () => console.log(`listening on localhost:${port}`))