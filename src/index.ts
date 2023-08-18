import express, { Request, Response, Express } from 'express';
import userRouter from './routers/user.router';
import profileRouter from './routers/profile.router';
import contentRouter from './routers/content.router';
import { Database } from './utils/database';
import cors from 'cors';



const app:Express = express();
const db:Database = new Database();
app.use(cors());
app.use(express.json());
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