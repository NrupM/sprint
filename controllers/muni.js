const fetch = require('node-fetch');

let vehiclesResponse = [];

function updateVehicles() {
    fetch('http://restbus.info/api/agencies/sf-muni/vehicles').then((res) => res.json())
        .then((data) => {
            vehiclesResponse = data;
            // wait 5 seconds to update
            // setInterval
            // setTimeout(updateVehicles, 5000);
        })
        .catch((error) => console.log(`There has been a problem with your fetch operation: ${error.message}`));
}

updateVehicles();

function getMuniVehicles(req, res) {
    res.json(vehiclesResponse);
}

function setBounds(req, res) {
    const TLlat = req.query.TLlat;
    const TLlng = req.query.TLlng;
    const BRlat = req.query.BRlat;
    const BRlng = req.query.BRlng;
    res.send(`${TLlat} and ${TLlng} and ${BRlat} and ${BRlng}`);
}

module.exports = {
    getMuniVehicles,
    setBounds,
};
