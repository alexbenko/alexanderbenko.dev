const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router.js');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 4200;

app.prepare()
.then(() => {
  const server = express()

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended:true}));
  server.use(cors());
  server.use(morgan('dev'));
  //server.use(helmet());

  server.use('/api',router)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Listening on http://localhost:${port}`)
  })
})
.catch((err) => {
  console.error(err.stack)
  process.exit(1)
})