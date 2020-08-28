const Ticket = require('../models/ticket.model')

exports.updateTime = async(req, res)=>{
    try{
        const date = new Date(req.body.timing)
        const expiryTime = date.setHours(date.getHours() + 8)
        const updatedObj = {
            timing:req.body.timing,
            expireAt:expiryTime
        }
        const id = req.body.id

        const ticket = await Ticket.findByIdAndUpdate(id, updatedObj,{new:true})
        if(!ticket){
            return res.status(404).send({message:'Ticket not found'})
        }

        return res.send({message:'Time Updated Successfully',details:ticket})
    }catch(e){
        return res.send(e)
    }
}