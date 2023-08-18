import {Request, Response} from 'express';
import { UserSchema } from '../models/user.schema';
// (Controlador de usuarios) login
export const login = async (req: Request, res: Response) => {

  // asd.456
  const usuario = await UserSchema.findOne({email: req.body.email, password: req.body.password}, {password: false});
  if (usuario) {
    res.send({status: true, message: 'Login correcto', usuario});
  }
  else 
    res.send({status: false, message: 'Login incorrecto'});
  res.end();
}

// (Controlador de usuarios) Obtener los detalles de un usuario
export const obtenerUsuario = (req: Request, res: Response) => {
  res.send("Obtenner usuario está funcionando " + req.params.id);
  res.end();
}

export const obtenerListaPerfiles = async (req: Request, res: Response) => {
  const usuario = await UserSchema.findById(req.params.id, {profiles: true});
  if (usuario) {
    res.send({status: true, message: 'Perfiles obtenidos con exito', profiles: usuario.profiles});
  }
  else 
    res.send({status: false, message: 'Usuario no existe'});
  res.end();
}
