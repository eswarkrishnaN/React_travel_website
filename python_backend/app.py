from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient("mongodb+srv://unkow:1234@cluster0.qsnxv7k.mongodb.net/?retryWrites=true&w=majority")
db = client["webpage"]
CORS(app)


try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


@app.get("/api-get" )  
def get_data():
     data = []
     for item in db.webpage1.find():
         data.append({
            "id": str(item["_id"]),
            "imageurl": item["imageur"],
            "title": item["title"],
            "location": item["loaction"],
            "grade": item["grade"],
            "fees": item["fees"],
            "description": item["description"],
         })
         
     return jsonify(data), 201

if __name__ =="__main__":
    app.run(debug=True,host="0.0.0.0",port=8888)