const Ticket = require('../models/ticket.model')

exports.bookTicket = async(req, res)=>{
    try{
        const ticket = new Ticket(req.body)

        await ticket.save()
        res.send({message:'Ticket Bokked Successfully',details:ticket})
    }catch(e){
        console.log(e)
        res.send(e)
    }
}

