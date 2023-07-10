import express from 'express'
import userRoutes from './routes/user/user'
import setRouter from './routes/set/setRoutes'

const app = express()
app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/set', setRouter)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
