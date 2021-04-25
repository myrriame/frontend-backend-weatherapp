
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]

if (!address) {

    console.log('please provide a location')

} else {

    geocode(address, (err, { latitude, longitude, location } = {}) => {

        if (err) {
            return console.log(err)
        }

        forecast(latitude, longitude, (error, forecastdata) => {

            if (err) {
                return console.log(err)
            }

            console.log(`${location}: ${forecastdata}`)

        })
    })

}