### Introduction
This is a simple express middleware to log `request.query` and `request.body` to console for debugging

### Usage

1. `npm i body-parser payload-logger`
2. 
```typescript
import payloadLogger from 'payload-logger'
import bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(payloadLogger)
```