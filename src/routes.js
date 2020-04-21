import { Router } from 'express'

//importe dos controllers
//import UserController from './app/controllers/UserController'

const routes = new Router()

//rotas propriamente dita
routes.get('/users', (req, res) => {
  res.json({ Ok: 'Deu certo' })
})

export default routes