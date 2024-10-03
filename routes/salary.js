import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { AddSalary ,getSalary } from '../controllers/salaryController.js'


const router = express.Router()



router.post('/add', authMiddleware,AddSalary )
router.get('/:id', authMiddleware,getSalary )



export default router