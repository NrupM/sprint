const Uber = require('node-uber');

const uberClientOptions = {
    server_token: 'AYMQBo7KKJn8E1XYI4VatuKtz5R15rhG6W5vZI6S',
    name: 'sagan',
};
const uberClient = new Uber(uberClientOptions);


function getUberProductsByLatLng(req, res) {
    const userLat = req.query.lat;
    const userLng = req.query.lng;

    if (userLat == null || userLng == null) {
        console.log('lat or lng missing from request');
        res.sendStatus(500);
        return;
    }

    uberClient.products.getAllForLocationAsync(userLat, userLng)
        .then((products) => {
            res.json(products);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
}

module.exports = {
    getUberProductsByLatLng,
};
