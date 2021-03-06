const Ticket = require('../models/ticket.model')

exports.getTicketDetails = async(req, res)=>{
    try{
        const id = req.params.ticketId

        const ticket = await Ticket.findById(id)
        if(!ticket){
            return res.status(404).send({message:'Ticket not found'})
        }

        return res.send({message:'User Details', details:ticket})
    }catch(e){
        return res.send(e)
    }
}