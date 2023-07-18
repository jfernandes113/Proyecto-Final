require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./createTables');
//const cookieParser = require('cookie-parser');
const { db, cors: options } = require('./configs');
//const errors = require('./misc/errors');

const app = express();

// Middleware
app.use(cors(options));
app.use(express.json());

// Routes
const routes = require('./routes');
//app.use('/api', routes);
app.use(routes(db));

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
