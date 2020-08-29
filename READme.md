# Movie Ticket Booking  

---
---

### Steps For Running The Server Locally  

1. For installation of dependencies run

```bash
npm install
```

2. Setup environment variables in .env file in the root

  ```bash
PORT=5000
MONGO_URI='Your Mongo Uri'
  ```

3. Run the server

```bash
npm run dev
```
---

## Running Test Server

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

---

### Features

1. *At a given time maximun 20 tickets can be booked.*

1. *Tickets gets deleted automatically, 8 hours after the ticket timing.*
