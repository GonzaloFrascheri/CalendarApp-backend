const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        
        await mongoose.connect( process.env.DB_CNN //, {
            //useNewUrlParser: true
            , 
            
            //useUnifiedTopology: true,
            
            //useCreateIndex: true,
            
            //useFindAndModify: false
        //}
        );

        console.log('DB Online');


    } catch (error) {
        console.log('Error a la hora de inicializar BD');
        //throw new Error('Error a la hora de inicializar BD');
    }

}

module.exports = {
    dbConnection
}