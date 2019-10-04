const express = require('express');
//brings in express
const connectDB = require('./config/db');

const app = express();
//initialize app variable with express
connectDB();

//init middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API Running'));
//test: makes a get request reponse  | sends data to browser

//Define Routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 3000;
//looks for an environment variable called PORT
app.listen(PORT, () => console.log(`Server started on ${PORT}`))
//app variable listens out for port