const Ticket = require('../models/ticket.model')

exports.getAllTicket = async(req, res)=>{
    try{
        const time = req.params.time

        const tickets = await Ticket.find({timing:time})
        res.send({details:tickets})
    }catch(e){
        console.log(e)
        res.send(e)
    }
}