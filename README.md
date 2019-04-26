### Introduction
This is a simple express middleware to log `request.query` and `request.body` to console for debugging

### Usage
1. `npm i payload-logger`
2. `import payloadLogger from 'payload-logger''` or `const payloadLogger = require('payload-logger'').default`
3. `app.use(payloadLogger)`