const routes = require('express').Router()
const {bookTicket} = require('../controllers/bookTicket')
const {updateTime} = require('../controllers/updateTime')
const {getAllTicket} = require('../controllers/getAllTickets')
const {getTicketDetails} = require('../controllers/getTicketDetails')
const {deleteTicket} = require('../controllers/deleteTicket')

routes.post('/ticket',bookTicket)
routes.patch('/ticket/time',updateTime)
routes.get('/tickets/:time', getAllTicket)
routes.get('/ticketDetails/:ticketId', getTicketDetails)
routes.delete('/ticket',deleteTicket)


module.exports = routes