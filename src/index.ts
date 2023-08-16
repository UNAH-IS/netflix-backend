import express, { Request, Response, Express } from 'express';
import userRouter from './routers/user.router';
import profileRouter from './routers/profile.router';
import contentRouter from './routers/content.router';


const app:Express = express();
app.use('/users', userRouter);
app.use('/profiles', profileRouter);
app.use('/content', contentRouter);


app.get("/", (req:Request, res: Response) => {
  res.send("Servidor para el ejercicio de netflix");
  res.end();
});

app.listen(3001, () => {
  console.log("Servidor levantado en el puerto 3001");
})