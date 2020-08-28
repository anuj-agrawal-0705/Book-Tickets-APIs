const Ticket = require('../models/ticket.model')

exports.deleteTicket = async (req, res)=>{
    try{
        const id = req.body.id

        const ticket = await Ticket.deleteOne({_id:id})
        res.send({message:'Deleted the given ticket',details:ticket})


    }catch(e){
        res.send(e)
    }
}