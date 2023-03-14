require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const app = express();
const port = process.env.PORT;
const routes = require('./src/routes');

app.use(cors());
app.use(helmet());

app.use('/', routes);

app.listen(port, () => console.log(`Express app running on port ${port}!`));
