const Sensordata = require('../models/Sensordata');

const getAll = function (req, res) {
    Sensordata.getAll(function (err, data) {
        console.log('controller');
        if (err) res.send(err);
        console.log('res', data);
        res.send(data);
    });
};

const getAllByTempUp = function (req, res) {
    Sensordata.getAllByTempUp(function (err, data) {
        console.log('controller');
        if (err) res.send(err);
        console.log('res', data);
        res.send(data);
    });
};

const getAllByHumiUp = function (req, res) {
    Sensordata.getAllByHumiUp(function (err, data) {
        console.log('controller');
        if (err) res.send(err);
        console.log('res', data);
        res.send(data);
    });
};

const getAllByLightUp = function (req, res) {
    Sensordata.getAllByLightUp(function (err, data) {
        console.log('controller');
        if (err) res.send(err);
        console.log('res', data);
        res.send(data);
    });
};

const getAllByDbUp = function (req, res) {
    Sensordata.getAllByDbUp(function (err, data) {
        console.log('controller');
        if (err) res.send(err);
        console.log('res', data);
        res.send(data);
    });
};

const getAllByTempDown = function (req, res) {
    Sensordata.getAllByTempDown(function (err, data) {
        console.log('controller');
        if (err) res.send(err);
        console.log('res', data);
        res.send(data);
    });
};

const getAllByHumiDown = function (req, res) {
    Sensordata.getAllByHumiDown(function (err, data) {
        console.log('controller');
        if (err) res.send(err);
        console.log('res', data);
        res.send(data);
    });
};

const getAllByLightDown = function (req, res) {
    Sensordata.getAllByLightDown(function (err, data) {
        console.log('controller');
        if (err) res.send(err);
        console.log('res', data);
        res.send(data);
    });
};

const getOneTemp = function (req, res) {
    Sensordata.getOneTemp(function (err, data) {
        console.log('controller');
        if (err) res.send(err);
        console.log('res', data);
        res.send(data);
    });
};
const getOneLight = function (req, res) {
    Sensordata.getOneLight(function (err, data) {
        console.log('controller');
        if (err) res.send(err);
        console.log('res', data);
        res.send(data);
    });
};
const getOneHumi = function (req, res) {
    Sensordata.getOneHumi(function (err, data) {
        console.log('controller');
        if (err) res.send(err);
        console.log('res', data);
        res.send(data);
    });
};
const getDataDenQuat = function (req,res) {
    Sensordata.getDataDenQuat(function(err,data){
        console.log('controller')
        if(err) res.send(err);
        console.log('res',data);
        res.send(data)
    })
}
const countLED = function (req,res) {
    Sensordata.countLED(function(err,data){
        console.log('controller')
        if(err) res.send(err);
        console.log('res',data);
        res.send(data)
    })
}
const countFAN = function (req,res) {
    Sensordata.countFAN(function(err,data){
        console.log('controller')
        if(err) res.send(err);
        console.log('res',data);
        res.send(data)
    })
}
const MaxFAN = function (req,res) {
    Sensordata.MaxFAN(function(err,data){
        console.log('controller')
        if(err) res.send(err);
        console.log('res',data);
        res.send(data)
    })
}
const MaxLED = function (req,res) {
    Sensordata.MaxLED(function(err,data){
        console.log('controller')
        if(err) res.send(err);
        console.log('res',data);
        res.send(data)
    })
}
module.exports = {
    getAll,
    getAllByTempUp,
    getAllByTempDown,
    getAllByHumiUp,
    getAllByLightUp,
    getAllByDbUp,
    getAllByHumiDown,
    getAllByLightDown,
    getOneTemp,getOneLight,getOneHumi,getDataDenQuat,countLED,countFAN,MaxFAN,MaxLED

};
