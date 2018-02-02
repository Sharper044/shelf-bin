const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const binControler = require('./controllers/binControler');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING).then( db => app.set('db', db)).catch(err => console.log(err));

app.get('/api/shelf/:id', binControler.getShelf);
app.get('/api/bin/:id', binControler.getBin);
app.put('/api/bin/:id', binControler.update);
app.post('/api/bin/:id', binControler.create);
app.delete('/api/bin/:id', binControler.delete);

const port = process.env.PORT || 3030
app.listen(port, () => console.log(`Hailing frequencies open on port ${port}...`));