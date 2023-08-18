import { Request, Response } from 'express';
import { ProfileSchema } from '../models/profile.schema';
import mongoose from 'mongoose';


// (Controlador de perfiles) obtener el detalle de un perfil en particular
export const obtenerPerfil = async (req: Request, res: Response) => {
  const profile = await ProfileSchema.findById(req.params.id);
  if (profile) 
    res.send({status: true, profile});
  else 
    res.send({status: false, message: 'Perfil no existe'});
  res.end();
}

// (Controlador de perfiles) agregar pelicula al arreglo continue del perfil seleccionado
export const agregarContenidoContinue = async (req: Request, res: Response) => {
  const resultado = await ProfileSchema.updateOne({_id: req.params.id}, {
    $push: {
      continue: {
        _id: new mongoose.Types.ObjectId(req.body._id),
        name: req.body.name,
        coverImage: req.body.coverImage,
        videoTrailer: req.body.videoTrailer
      }
    }
  })
  res.send(resultado);
  res.end();
}
// (Controlador de perfiles) obtener contenido favorito (my list) (No sería muy necesario porque ya está en el detalle del perfil)
export const obtenerContenidoMyList = (req: Request, res: Response) => {
  res.send("Obtener el contenido de myList para el perfil " + req.params.id);
  res.end();
}

// (Controlador de perfiles) obtener contenido pendiente por ver (continue)(No sería muy necesario porque ya está en el detalle del perfil)
export const obtenerContenidoContinue = (req: Request, res: Response) => {
  res.send("Obtener el contenido de Continue para el perfil " + req.params.id);
  res.end();
}