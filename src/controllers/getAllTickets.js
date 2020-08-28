const Ticket = require('../models/ticket.model')

exports.getAllTicket = async(req, res)=>{
    try{
        const time = req.params.time

        const tickets = await Ticket.find({timing:time})
        if(!tickets){
            return res.status(404).send({Message:'No tickets found at this time'})
        }
        return res.send({details:tickets})
    }catch(e){
        return res.send(e)
    }
}