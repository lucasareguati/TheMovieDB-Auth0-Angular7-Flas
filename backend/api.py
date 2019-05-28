from bson import json_util
import json
from pymongo import MongoClient
from flask_cors import CORS
from flask import Flask, jsonify, request, Response
from clases.pelicula import Pelicula 


app = Flask(__name__)
CORS(app)

def after(response): return response

def db_connect():
    client = MongoClient('localhost', 27017)
    db = client.peli.peliculas
    
    return db


@app.route('/peliculas', methods= ['GET','POST'])
def get_pelis():
    a = db_connect()
    if (request.method == 'GET'):
        peliculas = list(a.find({},{'_id':0}))
        return json.dumps(peliculas, default=json_util.default)
    
    data = request.get_json()
    
    if (request.method == 'POST'):
        if data.get('titulo', None) is not None:
            a.insert_one(data)
            return jsonify({'ok': True, 'message': 'Pelicula guardado con éxito'})
        else:
            return jsonify({'ok': False, 'message': 'Bad request parameters'})



    
    

