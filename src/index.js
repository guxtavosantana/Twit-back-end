const express= require('express');
const mongoose= require('mongoose');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');

mongoose.connect('mongodb://your-db-conection', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use(express.json());
app.use(cors());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log('server started on port 3000');
});