
const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b31df822749810adf2fd488e62969d45&query=' + latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true }, (err, res) => {
        if (err) {
            callback('Unable to connect to weather service!', undefined)
        } else if (res.body.success == false) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, res.body.current.weather_descriptions[0] + ". It is currently " + res.body.current.temperature + " degrees out." + " It feels like " + res.body.current.feelslike + " degrees out.")
        }
    })
}


module.exports = forecast