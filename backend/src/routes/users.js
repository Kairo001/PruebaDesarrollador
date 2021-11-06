import * as userCtrl from '../controllers/users.controller'
import {Router} from 'express'
const router = Router()

router.get('/:n_control', userCtrl.getUser)

router.post('/', userCtrl.createUser)

router.put('/:n_control', userCtrl.updateUser)

router.delete('/:n_control', userCtrl.deleteUser)

export default router