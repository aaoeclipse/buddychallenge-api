import express from 'express'
import { CreateUser } from './UserModel'
import * as service from './UserService'

const router = express.Router()

router.post('/login', (req, res) => {
  service.loginUser(req.body.email, req.body.password).then((user) => {
    console.log(user)
    res.json(user)
  }).catch((_err) => res.status(500).send('Error on login in user'))
})

router.get('/', (_req, res) => {
  service.getSecureEntries().then((allUsers) => res.json(allUsers)).catch((_err) => res.status(400).send('Error fetching users'))
})

router.post('/', (req, res) => {
  const user = req.body as CreateUser

  service.addUser(user).then(
    (result) => {
      res.json(result)
    }
  ).catch(
    (_err) => { res.status(500).send('Email already exists!') }
  )
})

router.get('/:id', (req, res) => {
  service.findUserById(+req.params.id).then((foundUser) => {
    if (foundUser != null) res.send(foundUser)
    else res.status(404).send('User Not Found!')
  }).catch((_err) => res.status(400).send('Error on Server'))
})

export default router
