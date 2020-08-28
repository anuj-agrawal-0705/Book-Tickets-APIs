const Ticket = require('../models/ticket.model')

exports.getTicketDetails = async(req, res)=>{
    try{
        const id = req.params.ticketId

        const ticket = await Ticket.findById(id)
        res.send({message:'User Details', details:ticket})
    }catch(e){
        res.send(e)
    }
}