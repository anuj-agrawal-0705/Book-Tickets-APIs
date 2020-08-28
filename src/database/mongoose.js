const mongoose = require('mongoose')

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
};

mongoose.connect("mongodb+srv://anuj:9621337879@cluster0.heo0c.mongodb.net/test",options,()=>{
    console.log('Mongodb connected')
})

module.exports = mongoose