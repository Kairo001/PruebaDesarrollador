import mysql from 'mysql2'
import { promisify } from 'util'
import { DB } from './keys'

const pool = mysql.createPool(DB.database)

pool.getConnection((error, connection) => {
    if(error) {
        if(error.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('Database connection closed')
        }
        if(error.code === 'ER_CON_COUNT_ERROR'){
            console.error('Database has to many connections')
        }
        if(error.code === 'ECONNREFUSED'){
            console.error('The connection to the database was refused')          
        }
    }

    if (connection) {
        connection.release()
        console.log(`Connected to the database ${DB.database.database}`)
    }
    return
})

pool.query = promisify(pool.query)

export default pool