
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]

if (!address) {

    console.log('please provide a location')

} else {

    geocode(address, (err, data) => {

        if (err) {
            return console.log(err)
        }

        forecast(data.latitude, data.longitude, (error, forecastdata) => {

            if (err) {
                return console.log(err)
            }

            console.log(`${data.location}: ${forecastdata}`)

        })
    })

}