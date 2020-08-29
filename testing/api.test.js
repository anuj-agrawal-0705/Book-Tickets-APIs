const request = require('supertest')
const app = require('../app')
const mongoose = require('mongoose')
const Ticket = require('../src/models/ticket.model')
const {ticketOne,ticketTwo, ticketOneId,ticketTwoId,ticketTiming, otherTiming} = require('./importObjects')


beforeEach(async ()=>{
    await Ticket.deleteMany()
    await new Ticket(ticketOne).save()
    await new Ticket(ticketTwo).save()
})

afterEach(()=>{
    console.log('after')
})

test('should create a new ticket', async () => {
    await request(app)
    .post('/ticket').send({
        "name":"Anuj",
        "phoneNumber":"7894561230",
        "timing":"September 2 2020 17:30 "
    }).expect(200)

    
})

test('should get a ticket by id', async () => {
    await request(app)
    .get(`/ticketDetails/${ticketOneId}`)
    .send()
    .expect(200)
})

test('should not get a non existing ticket', async() => {
    await request(app)
    .get(`/ticketDetails/${ticketTwoId}`)
    .send()
    .expect(404)
})


test(`should update a ticket's timing`, async() => {
    await request(app)
    .patch(`/ticket/time`)
    .send({
        id:ticketOneId,
        timing:"September 3 2020 19:30"
    }).expect(200)
})

test(`should not update a non existing ticket's timing`, async() => {
    await request(app)
    .patch(`/ticket/time`)
    .send({
        id:ticketTwoId,
        timing:"September 3 2020 19:30"
    }).expect(404)
})

test('should get all the tickets of a time', async() => {
    await request(app).get(`/tickets/${ticketTiming}`).send().expect(200)
})

test('should give not found if no tickets are present', async() => {
    await request(app).get(`/tickets/${otherTiming}`).send().expect(404)
})

test('should delete ticket', async() => {
    await request(app)
    .delete(`/ticket`)
    .send({
        id:ticketOneId
    }).expect(200)
})

test('should not delete non existing ticket', async() => {
    await request(app)
    .delete(`/ticket`)
    .send({
        id:ticketTwoId
    }).expect(404)
})



