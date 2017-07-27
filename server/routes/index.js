import Router from 'koa-router';
import texturesRouter from './texturesRouter';


const router = new Router();

router
  .use(texturesRouter.routes());

export default router;

