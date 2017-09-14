const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const muniController = require('./controllers/muni');
const gMapsController = require('./controllers/gMaps');
// import * as uberContoller from './controllers/uber';
// import * as gMapsController from './controllers/gMaps';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: true }));
// app.all('/', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', true);
//     res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

/** ********
 * ROUTES *
 **********/
app.get('/vehicles', muniController.getMuniVehicles);
app.get('/vehiclesByBoundingBox', muniController.setBounds);

// app.get('/uber/available', controllers.getUberProductsByLatLng);
app.get('/maps', gMapsController.getTransitDirections);

/** ********
 * SERVER *
 **********/
app.listen(process.env.PORT || 3001, () => {
    console.log('Express server is up and running on http://localhost:3001/');
});
