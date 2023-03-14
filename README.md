# Throttling App

A basic API throttling system, which serves HTTP(S) requests

---
## Requirements

    $ node --version
    v18.12.1

    $ npm --version
    6.14.17
    
    $ redis-server -v
    6.0.8


---

## Install

    $ git clone https://github.com/aswatyn/throttling-app.git
    $ cd throttling-app.git
    $ touch .env
    $ npm install

## Running the project

    $ npm start

## Running the project in development mode
    $ npm run start:dev
    
## Code Formatting command
    $ npm run format
    
## Sample .env data

    #Application Related
    PORT=3000
    
    #Redis
    REDIS_HOST='localhost'
    REDIS_PORT=6379
    
    #Rate Limiter
    TIME_INTERVAL_IN_SEC=60  // time interval in seconds
    REQUEST_LIMIT=3  // no of requests
    
# Test API Details

    PATH : ${baseUrl}/test-rate-limiter  // sample baseUrl : localhost:5000
    Method : GET
    
    On exeeding rate limiter , The error will be as below,
```json
{
   "message": "Too many requests",
    "success": false,
    "error": "Too many requests"
}
```

The default limits are 3 request in 60s.
This can be configured from env file.
    `TIME_INTERVAL_IN_SEC=60`  // time interval in seconds
    `REQUEST_LIMIT=3 ` // no of requests



