require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const logger = require('morgan');

// Config middlewares
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Load routes
const Routes = require('./routes');
const _routesArr = Object.keys(Routes);

// Dynamic load routes
_routesArr.forEach(r => {
    const route = Routes[r];
    app.use('/api', route);
});


const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`server started on port ${port}`) })