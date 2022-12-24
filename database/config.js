const mongoose = require('mongoose');

const dbConnection = async() => {

    try {

        mongoose.connect( process.env.MONGODBCONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    
        console.log('Base de datos online');

    } catch (error) {
        console.log({
            msgError:"Error a la hora de iniciar la base de datos",
            error
        })
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}


module.exports = {
    dbConnection
}
