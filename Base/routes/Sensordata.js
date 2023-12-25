const express = require('express')
const router = express.Router()

const Sensordata =   require('../controllers/Sensordata');

router.get('/', Sensordata.getAll);
router.get('/tempup', Sensordata.getAllByTempUp);
router.get('/humiup', Sensordata.getAllByHumiUp);
router.get('/lightup', Sensordata.getAllByLightUp);
router.get('/dbup', Sensordata.getAllByDbUp);

router.get('/tempdown', Sensordata.getAllByTempDown);
router.get('/humidown', Sensordata.getAllByHumiDown);
router.get('/lightdown', Sensordata.getAllByLightDown);
router.get('/temp', Sensordata.getOneTemp);
router.get('/humi', Sensordata.getOneHumi);
router.get('/light', Sensordata.getOneLight);
router.get('/denQuat',Sensordata.getDataDenQuat)
router.get('/countLED',Sensordata.countLED)
router.get('/countFAN',Sensordata.countFAN)
router.get('/maxFAN',Sensordata.MaxFAN)
router.get('/maxLED',Sensordata.MaxLED)
module.exports = router