
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import graphqlSchema from './graphqlSchema.js'

const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

app.use('/', graphqlHTTP({
	graphiql: true,
	schema: graphqlSchema,
}))

//Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))