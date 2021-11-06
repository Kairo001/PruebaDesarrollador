import app from './app'

(async () => {
    await app.listen(app.get('port'))
    console.log(`Servidor en el puerto ${app.get('port')}`)
})()