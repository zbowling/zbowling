globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_p5F7L4fb.mjs';
import './chunks/astro/server_f5ZeWRRA.mjs';
import { s as sequence } from './chunks/index_obcmzCPA.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
