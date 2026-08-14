// Import MongoDB and connect with MongoDB
const {MongoClient} = require("mongodb");

const URL = "mongodb://localhost:27017";

const client = new MongoClient(URL, { serverSelectionTimeoutMS: 1000 });

// Import Server and connect with Server
express = require('express');
eobj = express();
port = 2100;

eobj.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


let useMongo = true;
let inMemoryBatches = [
    {"Name" : "PPA", "Fees" : "18500", "Duration" : "4 Months"},
    {"Name" : "LB", "Fees" : "19500", "Duration" : "4 Months"},
    {"Name" : "Python", "Fees" : "15000", "Duration" : "3 Months"},
    {"Name" : "LSP", "Fees" : "21000", "Duration" : "4 Months"}
];

// MongoDB Connection
async function GetConnection()
{
    try {
        let result = await client.connect();
        let db = result.db("MarvellousInfosystems");
        useMongo = true;
        console.log("Database Connected");
        return db.collection("Batches");
    } catch (err) {
        useMongo = false;
        console.log("MongoDB connection failed (ECONNREFUSED). Using in-memory fallback dataset.");
        return null;
    }
}

// Read Data from MongoDB
async function ReadData(req, res)
{
    let collection = await GetConnection();
    if (useMongo && collection) {
        let data = await collection.find().toArray();
        console.log("Data from the Marvellous Database is :");
        console.log(data);
        return data;
    } else {
        console.log("Data from in-memory fallback is :");
        console.log(inMemoryBatches);
        return inMemoryBatches;
    }
}

// Delete Data from MongoDB
async function DeleteData()
{
    let collection = await GetConnection();
    if (useMongo && collection) {
        let result = await collection.deleteOne({"Name" : "LSP"});
        if(result.acknowledged)
        {
            console.log("Data gets deleted successfully");
        }
    } else {
        inMemoryBatches = inMemoryBatches.filter(b => b.Name !== "LSP");
        console.log("Data gets deleted successfully from in-memory fallback");
    }
}

// Insert Data into MongoDB
async function InsertData()
{
    let collection = await GetConnection();
    if (useMongo && collection) {
        let result = await collection.insertOne({"Name" : "PPA", "Fees" : "15500", "Duration" : "3 Months"});
        if(result.acknowledged)
        {
            console.log("Data gets inserted successfully");
        }
    } else {
        inMemoryBatches.push({"Name" : "PPA", "Fees" : "15500", "Duration" : "3 Months"});
        console.log("Data gets inserted successfully into in-memory fallback");
    }
}

// Update Data into MongoDB
async function UpdateData()
{
    let collection = await GetConnection();
    if (useMongo && collection) {
        let result = await collection.updateOne({"Name" : "PPA"}, {$set : {"Fees" : "21000"}});
        if(result.acknowledged)
        {
            console.log("Data gets updated successfully");
        }
    } else {
        let item = inMemoryBatches.find(b => b.Name === "PPA");
        if (item) { item.Fees = "21000"; }
        console.log("Data gets updated successfully in in-memory fallback");
    }
}

// Start the Express Server
function StartServer()
{
    console.log("Marvellous Server started at Port :"+port);
}

// Root Page Response
function RootPage(req,res)
{
    res.send("Marvellous Server started at Port : 2100");
}

// getBatches
async function ReadBatches(req, res)
{
    // Read data from MongoDB
    let received_Data;
    received_Data = await ReadData();

    // Send data to Angular
    res.json(received_Data); 
}

// deleteBatches 
async function DeleteBatches(req, res)
{
    // Delete data from MongoDB
    await DeleteData();
    res.json(await ReadData());
}

// insertBatches
async function InsertBatches(req, res)
{
    // Insert data from MongoDB
    await InsertData();
    res.json(await ReadData());
}

// updateBatches
async function UpdateBatches(req, res)
{
    // Update data from MongoDB
    await UpdateData();
    res.json(await ReadData());
}


function main()
{
    // 1. Listen Server
    eobj.listen(port,StartServer);

    // 2. Send Root Data
    eobj.get('/',RootPage);

    // 3. Read requested Data
    eobj.get('/getbatches',ReadBatches);
    eobj.get('/getBatches',ReadBatches);

    // 4. Delete requested Data
    eobj.get('/deletebatches',DeleteBatches);
    eobj.get('/deleteBatches',DeleteBatches);

    // 5. Insert requested Data
    eobj.get('/insertbatches',InsertBatches);
    eobj.get('/insertBatches',InsertBatches);

    // 6. Update requested Data
    eobj.get('/updatebatches',UpdateBatches);
    eobj.get('/updateBatches',UpdateBatches);
}

main();