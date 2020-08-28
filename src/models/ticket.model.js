const mongoose = require('../database/mongoose')


const TicketSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10
    },
    timing:{
        type:Date,
        required:true
    },
    expireAt: {
        type: Date,
        //default: Date.now,
        index: { expires: '2m' },
    },
})

const Ticket = mongoose.model('Ticket', TicketSchema)

module.exports = Ticket