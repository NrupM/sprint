const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const muniController = require('./controllers/muni');
const gMapsController = require('./controllers/gMaps');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: true }));

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
