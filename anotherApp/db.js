const dotenv = require('dotenv')

dotenv.config()

const mongodb = require('mongodb')


//const connectionString = 'mongodb://todoadmin:test@cluster0-shard-00-00.zvop7.mongodb.net:27017,cluster0-shard-00-01.zvop7.mongodb.net:27017,cluster0-shard-00-02.zvop7.mongodb.net:27017/OurApp?ssl=true&replicaSet=atlas-y6sw7f-shard-0&authSource=admin&retryWrites=true&w=majority'

mongodb.connect(process.env.CONNECTIONSTRING,{useNewUrlParser: true, useUnifiedTopology: true},function(err,client){

    module.exports = client.db()
    const app = require('./app')
    app.listen(process.env.PORT)
})