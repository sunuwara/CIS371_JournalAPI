# CIS371_JournalAPI

Quarantine Journaling REST API for CIS371

Endpoints avaliable:

- /users
- /journals
- /images
- /comments
- /locations
- /static

## Installing

_Install all dependencies_:

    npm install

## Running program

_Start the main program_:

    node app.js

_Query object information at endpoint_:

    curl -iX GET http://localhost:8080/{endpoint}/{object_id}

_Create new object at endpoint_:

    curl -iX POST http://localhost:8080/{endpoint}

_Update object information at endpoint_:

    curl -iX PUT -H "Content-Type: application/json" -d '{"key":"val","key":"val"}' http://localhost:8080/{endpoint}/{object_id}

_Delete object at endpoint_:

    curl -iX DELETE http://localhost:8080/{endpoint}/{object_id}

## Built With

- [nodeJS](https://nodejs.org/en/) - JavaScript server environment
- [mongoDB](https://cloud.mongodb.com/) - Database Host
- [express](https://expressjs.com/) - Node.js web application framework

## Authors

- Aron Sunuwar
