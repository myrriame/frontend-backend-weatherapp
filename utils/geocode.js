const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibXlycmlhbWUiLCJhIjoiY2tueDd3dG8xMDVudTMybjF0M25wcTQwNiJ9.GITho7M5S-ghn2jxtuSMNQ'

    request({ url: url, json: true }, (err, res) => {
        if (err) {
            callback('Unable to connect to location services!', undefined)
        } else if (res.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: res.body.features[0].center[1],
                longitude: res.body.features[0].center[0],
                location: res.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode