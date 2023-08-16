import {Request, Response} from 'express';
// (Controlador de usuarios) login
export const login = (req: Request, res: Response) => {
  res.send("Login está funcionando");
  res.end();
}

// (Controlador de usuarios) Obtener los detalles de un usuario
export const obtenerUsuario = (req: Request, res: Response) => {
  res.send("Obtenner usuario está funcionando " + req.params.id);
  res.end();
}

export const obtenerListaPerfiles = (req: Request, res: Response) => {
  res.send("Obtenner la lista de perfiles del usuario " + req.params.id);
  res.end();
}
