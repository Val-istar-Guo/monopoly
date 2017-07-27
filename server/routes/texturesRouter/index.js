import fs from 'fs-extra';
import Router from 'koa-router';


const router = new Router({
  prefix: '/textures',
});

const CONTENT_TYPES = {
  '.png$': 'image/png',
  '.jpe?g$': 'image/jpeg',
};

router
  .get('/:path*', async (ctx) => {
    const path = ctx.params.path;
    ctx.body = await fs.readFile(`./textures/${path}`);

    const extension = Object.keys(CONTENT_TYPES)
      .find((pattern) => {
        const reg = new RegExp(pattern);
        return reg.test(path);
      });

    ctx.set('Content-Type', CONTENT_TYPES[extension]);
  });

export default router;

