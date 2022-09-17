import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import graphqlSchema from './graphqlSchema.js'
import path from 'path'
import favicon from 'serve-favicon'

const { APP_PORT } = process.env
const __dirname = path.resolve()

const app = express()

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')))

app.use(
	'/',
	graphqlHTTP({
		graphiql: true,
		schema: graphqlSchema,
	})
)

app.listen(APP_PORT, () =>
	console.log(`UTA-API listening on port ${APP_PORT}!`)
)
