
const express = require('express')
const app = express()
const connectDB = require('./config/connectDB')
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://192.168.180.58');
const port = 8688
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/// connect mqtt
client.on('connect', () => {
    console.log('mqtt connected');
    client.subscribe('sensor'); // Replace with the topic you want to subscribe to
});

const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
    },
});
app.get('/',(req,res)=>{
    res.send('<h1>Successfully<h1>');
})

server.listen(port);

client.on('message',async (topic, message) => {
    try {
        
        //topic là chủ đề, message là cái mình gửi
        const data = JSON.parse(message); // Convert the message to a Object JSON
        // Save the data to MySQL database here
        var state_1 = data.state_1;
        var state_2 = data.state_2;
        var temp_data = Math.floor(Math.round(data.temperature));
        var humi_data = data.humidity;
        var light_data = Math.floor(Math.round(12000 / data.light));
        var db_data = data.db;
 
        //cho giá trị vào bảng data trên mysql
        var sql =
            'insert into iot.sensordata(temp,light,humi) value ( ' +
            temp_data +
            ' , ' +
            light_data +
            ' , '+
            humi_data +
            ')';
        
        connectDB.query(sql, function (err, result) {
            if (err)console.log(err);
            console.log(
               "successfully"
            );
        });
        
       
        io.emit('temp', temp_data);
        io.emit('humi', humi_data);
        io.emit('light', light_data);
        io.emit('relay_1', state_1);
        io.emit('relay_2', state_2);
        
       
    } catch (error) {
        console.error('Error saving data to MySQL database:', error);
    }
});

io.on('connection', function (socket) {
    // console.log(connection);
    // console.log('user ' + socket.id + ' connected'); //thông báo có người kết nối
 
    socket.on('control_relay_1', function (state1) {

        if (state1 === '1') {
            client.publish('relay_1', '1'); //pub sang bên esp
            connectDB.query(
                "insert into iot.den(name,state) value ('LED',1)",
            );
            console.log('bat den 1')
            
        } else {
            client.publish('relay_1', '0');
            connectDB.query(
                "insert into iot.den(name,state) value ('LED',0)",
            );
            console.log('tat den 0')
        }
    });

    socket.on('control_relay_2', function (state2) {
        if (state2 === '1') {
            client.publish('relay_2', '1');
            connectDB.query(
                "insert into iot.den(name,state) value ('QUAT',1)",
            );
            console.log('bat quat 1')
        } else {
            client.publish('relay_2', '0');
            connectDB.query(
                "insert into iot.den(name,state) value ('QUAT', 0)",
            );
            console.log('tat quat 0')
        }
    });

});

const sensor = require('./routes/Sensordata');
const relay = require('./routes/Relay');
const { error } = require('console');
app.use('/api/sensordata', sensor);
app.use('/api/relay', relay);




