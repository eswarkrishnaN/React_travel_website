from flask import Flask,request,jsonify
from pymongo  import MongoClient
from flask_cors import CORS


#flask --app example --debug run
app =Flask(__name__)
client = MongoClient("mongodb+srv://unkow:1234@cluster0.qsnxv7k.mongodb.net/?retryWrites=true&w=majority")
db= client["webpage"]
CORS(app)


try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)





@app.post("/add-data")
def add_data():
    data = request.json
    result = db.webpage1.insert_one(data)
    response = {'message': 'Data added successfully', 'id': str(result.inserted_id)}
    return jsonify(response) ,201


if __name__ =="__main__":
    app.run(debug=True)