
from pymongo.mongo_client import MongoClient

uri = "mongodb+srv://samhsteinmetz:xRkRH6K465V74b0V@cluster0.tb0cj6m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri)

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


# Create a new database
    
db = client["crowd_count"]
print("Database created!")

# Create a new collection
collection = db["people_count"]
print("Collection created!")

# Insert a new document
document = {"people_count": 10}
collection.insert_one(document)
print("Document inserted!")

# Query the collection
query = collection.find({})
print("Query results:")
for x in query:
    print(x)


