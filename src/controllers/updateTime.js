const Ticket = require('../models/ticket.model')

exports.updateTime = async(req, res)=>{
    try{
        const updatedTime = req.body.timing
        const id = req.body.id

        const ticket = await Ticket.findByIdAndUpdate(id, {timing:updatedTime},{new:true})
        res.send({message:'Time Updated Successfully',details:ticket})
    }catch(e){
        res.send(e)
    }
}