const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

//Express
const app = express();
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//Routes
const { PORT } = process.env;
const routes = require('./src/routes');
app.use(`/api`, routes);

const port = PORT || 8000;
const env = (port === 8000 ? `development` : `production`);
const baseUrl = (port === 8000 ? `http://localhost:${port}` : `http://172.104.174.244:${port}`);

app.get('/', function(request, response){
	response.send(`Hello! ThriveSolutions API is ${env} environment at ${baseUrl}/api`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
	console.log(`Server is ${env} env at port: ${port}. Accessible through ${baseUrl}.`);
});
