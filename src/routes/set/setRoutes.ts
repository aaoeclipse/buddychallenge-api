import express from 'express'

const router = express.Router()

// ALL GETS ARE PROTECTED

router.get('/', (_req, res) => {
  res.status(200).send('Here goes all the sets of the current user')
})

router.post('/new', (_req, res) => {
  res.status(200).send('create new post from user')
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  res.status(200).send(`Update id ${id}`)
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  res.status(200).send(`Delete id ${id}`)
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  res.status(200).send(`Get set by the id ${id}`)
})

export default router
