import express from 'express'
import { User } from './types'
import * as service from '../../services/user/userService'

const router = express.Router()

router.get('/', (_req, res) => {
  service.getSecureEntries().then((allUsers) => res.json(allUsers)).catch((_err) => res.status(400).send('Error fetching users'))
})

router.post('/', (req, res) => {
  const user = req.body as User

  service.addUser(user).then(
    (result) => {
      res.json(result)
    }
  ).catch(
    (_err) => { res.send('Error with user!') }
  )
})

router.get('/:id', (req, res) => {
  service.findUserById(+req.params.id).then((foundUser) => {
    if (foundUser != null) res.send(foundUser)
    else res.status(404).send('User Not Found!')
  }).catch((_err) => res.status(400).send('Error on Server'))
})

export default router
