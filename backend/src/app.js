import express from 'express'
import pkg from '../package.json'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import routes_users from './routes/users'


// Inicialization
const app = express()

// Settings
app.set('port', process.env.PORT || 4000)
app.set('pkg', pkg)

// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(helmet())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.status(200).json({
        Nombre : app.get('pkg').name,
        Autor : app.get('pkg').author,
        Description : app.get('pkg').description
    })
})

app.use('/api/users', routes_users)

export default app