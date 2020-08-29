# Movie Ticket Booking  

---
---

## Live Url

[Book Tickets](https://bookthetickets.herokuapp.com "Book Tickets")

---

### Steps For Running The Server Locally  

1. For installation of dependencies run

```bash
npm install
```

2. Setup environment variables in dev.env file in the

>/src/config

  ```bash
PORT=5000
MONGO_URI='Your Mongo Uri'
  ```

3. Run the server

```bash
npm run dev
```
---

## Steps For Running Test Server

1. Setup environment variables in test.env file in the

>/src/config

  ```bash
PORT=5000
MONGO_URI='Your Test Mongo Uri'
  ```

2. Run Test Server

```bash
npm run test
```

---

### API Endpoints  

#### 1. Book Ticket  

```javascript
method:POST
endpoint: /ticket
payload:{
	"name":"Anuj",
	"phoneNumber":"7894561230",
	"timing":"September 2 2020 17:30 "
}
```

#### 2. Update Ticket Timing

```javascript
method:PATCH
endpoint: /ticket/time
payload:{
	"id":"5f4a172a35fc587be14ef841",
	"timing":"September 2 2020 18:30 "
}
```

#### 3. View A Ticket  

```javascript
method:GET
endpoint:/ticketDetails/:ticketId
```

#### 4. View All Tickets of A Time

```javascript
method:GET
endpoint: /tickets/:time
```

#### 5. Delete A Ticket

```javascript
method:DELETE
endpoint: /ticket
payload:{
  id:"5f4a172a35fc587be14ef841"
}
```

#### Note  

>Postman test Image are in  **/postmanImg** folder

---

### Features

1. *At a given time maximun 20 tickets can be booked.*

1. *Tickets gets deleted automatically, 8 hours after the ticket timing.*

1. *Testing of all the endpoints*  
