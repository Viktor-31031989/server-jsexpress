import infoRouter from '../info/Routes';
import homeRouter from '../home/Routes';
import userRouter from '../user/Routes';
import postRouter from '../post/Routes';
import deleteSomethingRouter from '../delete/Routes';

export default function routes(app) {
  app.use('/info', infoRouter);
  app.use('/', homeRouter);
  app.use('/post', postRouter);
  app.use('/delete', deleteSomethingRouter);
  app.use('/user', userRouter);
}
