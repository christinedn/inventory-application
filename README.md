
# inventory-application
A inventory management application incorporating CRUD operations and following the MVC architectural pattern.
   

## Technologies used
Backend:
- Node.js
- Express
- MongoDB

Frontend:
- HTML
- CSS
- EJS


## Run it locally
### Prerequisites
- A running MongoDB instance, either locally or on the cloud. Follow [this documentation](https://www.mongodb.com/docs/atlas/getting-started/) to deploy one easily.
- Nodejs
### Clone the repository
```
# Clone the repository
$ git clone git@github.com:christinedn/inventory-application.git

# Go into the repository
$ cd inventory-application
```

### Getting the server ready
```
# Install dependencies
$ npm install
```

### Setting up environment variables
- Rename file `.env.example` to `.env`
- Update placeholders for `DB_URI` with your MongoDB instance's data

```
# Start the server
$ npm start
```


#
Live preview: https://distinct-eel-scrubs.cyclic.app/