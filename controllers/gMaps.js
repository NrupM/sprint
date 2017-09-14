const request = require('request');


function getTransitDirections(req, res) {
    console.log('getTransitDirections via maps controller', req.body);
    const originLat = req.body.originLat;
    const originLng = req.body.originLng;
    const destinationLat = req.body.destinationLat;
    const destinationLng = req.body.destinationLng;
    const mode = req.body.mode;

    request(`https://maps.googleapis.com/maps/api/directions/json?origin=${originLat},${originLng}&destination=${destinationLat},${destinationLng}&key=AIzaSyCnyu2FJac70-X0EXKaoIxVw5RB4luN0uk&mode=${mode}`).pipe(res);
}

module.exports = {
    getTransitDirections,
};
