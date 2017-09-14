const request = require('request');


function getTransitDirections(req, res) {
    console.log('getTransitDirections via maps controller', req.body);
    const originLat = req.query.originLat;
    const originLng = req.query.originLng;
    const destinationLat = req.query.destinationLat;
    const destinationLng = req.query.destinationLng;
    const mode = req.query.mode;
    const newUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${originLat},${originLng}&destination=${destinationLat},${destinationLng}&key=AIzaSyCnyu2FJac70-X0EXKaoIxVw5RB4luN0uk&mode=${mode}`;

    console.log(newUrl);
    res.header('Access-Control-Allow-Origin', '*');
    request(newUrl, function (error, response, body) {
        const transitRoutes = JSON.parse(body).routes[0];
        console.log('*!!!!!!!', transitRoutes);

        // ^ res is not defined within this scope
    }).pipe(res);
}

module.exports = {
    getTransitDirections,
};
