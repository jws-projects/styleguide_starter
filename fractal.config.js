'use strict';
const pugAdapter = require('@rsm/fractal-pug-adapter');
const path = require('path');

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = (module.exports = require('@frctl/fractal').create());

fractal.components.engine(
  pugAdapter({
    options: {
      foo: 'bar',
    },
  })
);
fractal.components.set('ext', '.pug');

fractal.set('project.title', 'Style Guide');

fractal.components.set('path', path.join(__dirname, '/styleguide/components'));

fractal.docs.set('path', path.join(__dirname, '/styleguide/docs'));

fractal.web.set('server.sync', true);

fractal.web.set('server.syncOptions', { open: true });

fractal.web.set('builder.dest', path.join(__dirname, '/styleguide/public'));

fractal.web.set('static.path', path.join(__dirname, '/public/assets/'));
