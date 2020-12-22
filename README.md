# require-overrides

A hacky way to alias modules with *SSR* counterparts, currently working with *CommonJS* only.

### Example
```js
const overrides = require('require-overrides');

// use 'uhtml-ssr' instead of 'uhtml' when components
// are loaded through the server, not the client
overrides.set('uhtml', 'uhtml-ssr');

// now every
const {render, html, svg} = require('uhtml');
// will point instead at require('uhtml-ssr')
```
