const Ticket = require('../models/ticket.model')

exports.deleteTicket = async (req, res)=>{
    try{
        const id = req.body.id

        const ticket = await Ticket.findOneAndDelete({_id:id})
        if(!ticket){
            return res.status(404).send({Message:'Ticket not found'})
        }

        //const ticket = await Ticket.deleteOne({_id:id})

        return res.send({message:'Deleted the given ticket',details:ticket})


    }catch(e){
        return res.send(e)
    }
}