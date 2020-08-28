const Ticket = require('../models/ticket.model')

exports.bookTicket = async(req, res)=>{
    try{
        const count = await Ticket.find({timing:req.body.timing}).countDocuments()
        //console.log(count)

        if(count == 20){
            return res.status(403).send({Message:'Ticket limit reached at this time'})
        }
        const date = new Date(req.body.timing)
        const expiryTime = date.setHours(date.getHours() + 8)
        const ticket = new Ticket({...req.body, expireAt:expiryTime})

        await ticket.save()
        return res.send({message:'Ticket Bokked Successfully',details:ticket})
    }catch(e){
        
        return res.send(e)
    }
}

