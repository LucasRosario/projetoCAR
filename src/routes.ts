import { Router } from 'express';

const routes = Router();

routes.get('/',(req,res) =>{
  res.send("ROTA GET OK!");
})

export default routes;