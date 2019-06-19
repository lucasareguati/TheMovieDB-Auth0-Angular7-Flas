from bson.objectid import ObjectId
from bson import json_util
import json
from pymongo import MongoClient
from flask_cors import CORS
from flask import Flask, jsonify, request, Response
from clases.pelicula import Pelicula 
import firebase_admin
from firebase_admin import credentials, firestore

app = Flask(__name__)
CORS(app)

#Firebase cloud firestore
def dbPersonajes_connect():
    
    if (not len(firebase_admin._apps)):
        cred = credentials.Certificate("key.json")
        appFire = firebase_admin.initialize_app(cred)
    dbP = firestore.client() #DbPersonajes
    col = dbP.collection('personajes')
    return col 

@app.route('/personajes', methods=['GET', 'POST'])
def getPersonajes():
    dbper = dbPersonajes_connect()
    

    if(request.method == 'GET'):
        personajes = dbper.get()
        a = []
        for doc in personajes:
            a.append([doc.id, doc.to_dict()])

        return json.dumps(a)

    data = request.get_json()
    
    if(request.method == 'POST'):
        dbper.add({'nombre': data['nombre'], 'biografia': data['biografia'], 'peliculas': data['peliculas'], 'imagen': data['imagen']})
        print(data)
        return jsonify({'ok': True, 'message': 'Creado con éxito'})
    
@app.route('/personajes/<id>', methods=['GET', 'PUT', 'DELETE'])
def getPersonaje(id):
    dbper = dbPersonajes_connect()
    data = request.get_json()

    if(request.method == 'GET'):
        doc = dbper.document(id).get().to_dict()
        
        return json.dumps(doc)
    
    if(request.method == 'DELETE'):
        dbper.document(id).delete()
        return jsonify({'ok': True, 'message': 'Eliminado con éxito'})

    
    if(request.method == 'PUT'):
        dbper.document(id).update({'nombre': data['nombre'], 'biografia': data['biografia'], 'peliculas': data['peliculas']})
        return 'Actualizado con éxito'
        
#mongo
def after(response): return response

def db_connect():
    client = MongoClient('localhost', 27017)
    
    db = client.peli.peliculas
    
    return db

@app.route('/peliculas/<id>', methods=['GET', 'PUT', 'DELETE'])
def getPelicula(id):
    a = db_connect()
    if (request.method == 'GET'):
        pelicula = a.find_one({"_id" : ObjectId(id)})
        print(pelicula)
        
        return json.dumps(pelicula, default=json_util.default)

    data = request.get_json()

    if (request.method == 'PUT'):
        if data.get('titulo', None) is not None:
            a.update_one({'_id': ObjectId(id)}, {'$set': {'titulo': data.get('titulo'), 'sinopsis': data.get('sinopsis'),
                            'fechaLanzamiento': data.get('fechaLanzamiento')}})
            return jsonify({'ok': True, 'message':'Actualizado con exito'})
        else:
            return jsonify({'ok': False, 'message': 'Error al actualizar'})

    if (request.method == 'DELETE'):
        a.delete_one({'_id': ObjectId(id)})
        return jsonify({'ok': True, 'message':'Eliminado con exito'})


@app.route('/peliculas', methods= ['GET','POST'])
def get_pelis():
    a = db_connect()
    if (request.method == 'GET'):
        peliculas = list(a.find({}))
        return json.dumps(peliculas, default=json_util.default)
    
    data = request.get_json()
    
    if (request.method == 'POST'):
        if data.get('titulo', None) is not None:
            a.insert_one(data)
            return jsonify({'ok': True, 'message': 'Pelicula guardado con éxito'})
        else:
            return jsonify({'ok': False, 'message': 'Bad request parameters'})