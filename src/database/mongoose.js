const mongoose = require('mongoose')

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
};

mongoose.connect(process.env.MONGO_URI,options,()=>{
    console.log('Mongodb connected')
})

module.exports = mongoose