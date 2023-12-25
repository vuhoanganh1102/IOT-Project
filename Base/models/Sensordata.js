const dbConn = require('../config/connectDB');

const Sensordata = function (dataSensor) {
    this.temp = dataSensor.temp;
    this.humi = dataSensor.humi;
    this.light = dataSensor.light;
    this.db = dataSensor.db;
    this.date = dataSensor.date;
};

Sensordata.getAll = function (result) {
    dbConn.query('SELECT * FROM iot.sensordata', function (err, res) {   //SELECT * FROM sensordata ORDER BY id DESC
        if (err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            console.log('data : ', res);
            result(null, res);
        }
    });
};

Sensordata.getAllByTempUp = function (result) {
    dbConn.query('SELECT * FROM iot.sensordata ORDER BY temp ASC', function (err, res) {   //SELECT * FROM sensordata ORDER BY id DESC
        if (err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            console.log('data : ', res);
            result(null, res);
        }
    });
};

Sensordata.getAllByHumiUp = function (result) {
    dbConn.query('SELECT * FROM iot.sensordata ORDER BY humi ASC', function (err, res) {   //SELECT * FROM sensordata ORDER BY id DESC
        if (err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            console.log('data : ', res);
            result(null, res);
        }
    });
};

Sensordata.getAllByLightUp = function (result) {
    dbConn.query('SELECT * FROM sensordata ORDER BY light ASC', function (err, res) {   //SELECT * FROM sensordata ORDER BY id DESC
        if (err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            console.log('data : ', res);
            result(null, res);
        }
    });
};

Sensordata.getAllByDbUp = function (result) {
    dbConn.query('SELECT * FROM sensordata ORDER BY db ASC', function (err, res) {   //SELECT * FROM sensordata ORDER BY id DESC
        if (err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            console.log('data : ', res);
            result(null, res);
        }
    });
};

Sensordata.getAllByTempDown = function (result) {
    dbConn.query('SELECT * FROM sensordata ORDER BY temp DESC', function (err, res) {   //SELECT * FROM sensordata ORDER BY id DESC
        if (err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            console.log('data : ', res);
            result(null, res);
        }
    });
};

Sensordata.getAllByHumiDown = function (result) {
    dbConn.query('SELECT * FROM sensordata ORDER BY humi DESC', function (err, res) {   //SELECT * FROM sensordata ORDER BY id DESC
        if (err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            console.log('data : ', res);
            result(null, res);
        }
    });
};

Sensordata.getAllByLightDown = function (result) {
    dbConn.query('SELECT * FROM sensordata ORDER BY light DESC', function (err, res) {   //SELECT * FROM sensordata ORDER BY id DESC
        if (err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            console.log('data : ', res);
            result(null, res);
        }
    });
};

Sensordata.getAllByDbDown = function (result) {
    dbConn.query('SELECT * FROM sensordata ORDER BY db DESC', function (err, res) {   //SELECT * FROM sensordata ORDER BY id DESC
        if (err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            console.log('data : ', res);
            result(null, res);
        }
    });
};
Sensordata.getOneTemp = function (result) {
    dbConn.query('SELECT temp FROM iot.sensordata ORDER BY id DESC LIMIT 1', function (err, res) {   //SELECT * FROM sensordata ORDER BY id DESC
        if (err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            console.log('data : ', res);
            result(null, res);
        }
    });
};
Sensordata.getOneLight = function (result) {
    dbConn.query('SELECT light FROM iot.sensordata ORDER BY id DESC LIMIT 1', function (err, res) {   //SELECT * FROM sensordata ORDER BY id DESC
        if (err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            console.log('data : ', res);
            result(null, res);
        }
    });
};
Sensordata.getOneHumi = function (result) {
    dbConn.query('SELECT humi FROM iot.sensordata ORDER BY id DESC LIMIT 1', function (err, res) {   //SELECT * FROM sensordata ORDER BY id DESC
        if (err) {
            console.log('error: ', err);
            result(null, err);
        } else {
            console.log('data : ', res);
            result(null, res);
        }
    });
};
Sensordata.getDataDenQuat = function (result) {
    dbConn.query('SELECT * FROM iot.den', function (err, res) {
        if(err){
            console.log('error:',err);
            result(null,err);
        }else{
            console.log('data:', res)
            result(null,res)
        }
    });
}
Sensordata.countLED = function(result) {
    dbConn.query(`SELECT COUNT(id) AS countLED FROM iot.den WHERE name= 'LED';`,function(err,res){
        if(err){
            console.log('error: ',err);
            result(null,err)
        }
        else{
            console.log('data: ',res)
            result(null,res)
        }
    })
}
Sensordata.countFAN = function(result) {
    dbConn.query(`SELECT COUNT(id) AS countFAN FROM iot.den WHERE name= 'QUAT';`,function(err,res){
        if(err){
            console.log('error: ',err);
            result(null,err)
        }
        else{
            console.log('data: ',res)
            result(null,res)
        }
    })
}
Sensordata.MaxFAN = function(result) {
    dbConn.query(`SELECT state AS MaxFAN FROM iot.den WHERE id=(SELECT MAX(id) FROM iot.den WHERE name= 'QUAT');`,function(err,res){
        if(err){
            console.log('error: ',err);
            result(null,err)
        }
        else{
            console.log('data: ',res)
            result(null,res)
        }
    })
}
Sensordata.MaxLED = function(result) {
    dbConn.query(`SELECT state AS MaxLED FROM iot.den WHERE id=(SELECT MAX(id) FROM iot.den WHERE name='LED')`,function(err,res){
        if(err){
            console.log('error: ',err);
            result(null,err)
        }
        else{
            console.log('data: ',res)
            result(null,res)
        }
    })
}
module.exports = Sensordata;
