import pool from '../database'

const validarCorreo = correo => {
    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    return expReg.test(correo)
}

export const getUser =  async(req, res) => {
    const { n_control } = req.params
    try {
        const user = await pool.query('SELECT * FROM usuarios WHERE n_control = ?', [n_control])
        if(user[0]) {
            return res.status(200).json({user})
        }
        return res.status(404).json({message : `El usuario con numero de control ${n_control} no existe.`})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Ocurrió un error al consultar el usuario.'})
    }
}

export const createUser =  async(req, res) => {
    const {nombres, apellidos, email, n_control, verificacion} = req.body
    if(!nombres || !apellidos || !email || !n_control || (verificacion != 0 && verificacion != 1)) {
        return res.status(400).json({message: 'Es necesario escribir todos los campos.'})
    }
    if(!validarCorreo(email)){
        return res.status(400).json({message: 'Ingresar un correo electrónico válido.'})
    }
    const newUser = {nombres, apellidos, email, n_control, verificacion}
    try {
        const user = await pool.query('SELECT * FROM usuarios WHERE n_control = ?', [n_control])
        if(user[0]) {
            return res.status(400).json({message: `El usuario con n_control ${n_control} ya existe.`})
        }
        await pool.query('INSERT INTO usuarios SET ?',[newUser])
        return res.status(201).json({message: 'Usuario creado correctamente.'})
    } catch (error) {
        return res.status(500).json({message: 'Ocurrió un error al crear el usurio.'})
    }
}

export const updateUser =  async(req, res) => {
    const {nombres, apellidos, email, verificacion} = req.body
    const { n_control } = req.params
    if(!nombres || !apellidos || !email || !n_control || (verificacion != 0 && verificacion != 1)) {
        return res.status(400).json({message: 'Es necesario escribir todos los campos.'})
    }
    if(!validarCorreo(email)){
        return res.status(400).json({message: 'Ingresar un correo electrónico válido.'})
    }
    const userUpdated = {nombres, apellidos, email, n_control, verificacion}
    try {
        await pool.query('UPDATE usuarios SET ? WHERE n_control = ?',[userUpdated, n_control])
        return res.status(200).json({message: 'Usuario actualizado correctamente.'})
    } catch (error) {
        return res.status(500).json({message: 'Ocurrió un error al actualizar el usurio.'})
    }
}

export const deleteUser =  async(req, res) => {
    const { n_control } = req.params
    try {
        const userDeleted = await pool.query('DELETE FROM usuarios WHERE n_control = ?', [n_control])
        if(userDeleted.affectedRows == 1) {
            return res.status(200).json({message: 'Usuario eliminado correctamente.'})
        }
        return res.status(404).json({message : `El usuario con numero de control ${n_control} no existe.`})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Ocurrió un error al consultar el usuario.'})
    }
}