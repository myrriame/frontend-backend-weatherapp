
const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b31df822749810adf2fd488e62969d45&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.success == false) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out." + " It feels like " + body.current.feelslike + " degrees out.")
        }
    })
}


module.exports = forecast