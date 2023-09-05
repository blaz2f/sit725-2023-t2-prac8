let express = require("express");
let app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
require('./dbConnection.js');
let router = require('./routes/router.js');
app.use('/api/cat', router)

let http = require('http').createServer(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('io client is connected');
    socket.on('disconect', () => {
        console.log('user disconected')
    });

    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);

});


var port = process.env.port || 3000;

http.listen(port, () => {
    console.log("App listening to: " + port);
});