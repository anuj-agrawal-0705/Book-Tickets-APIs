const mongoose = require('mongoose')

const ticketOneId = new mongoose.Types.ObjectId()
const ticketTwoId = new mongoose.Types.ObjectId()
const ticketTiming = "September 3 2020 17:30"
const otherTiming = "December 3 2020 17:30"
//const ticketThrId = new mongoose.Types.ObjectId()

const ticketOne = {
    _id:ticketOneId,
    name:"Ayushi",
    phoneNumber:"7894562230",
    timing:ticketTiming
}

const ticketTwo = {
    name:"Prashant",
    phoneNumber:"9890562230",
    timing:ticketTiming
}

module.exports = {
    ticketOne,
    ticketTwo,
    ticketOneId,
    ticketTwoId,
    ticketTiming,
    otherTiming
}