import os
import dbcomm
from flask import Flask
from flask_cors import CORS
import json
from flask_sslify import SSLify


app = Flask(__name__)
CORS(app)



@app.route('/')
def index():
    return "<h1>Calgary community info </h1><br><p>add /community for the array or the /community/NAME to retreive the data</p> "

@app.route('/community/')
def listcom():
    lacom = dbcomm.miarreglo()
    #return "{}".format(lacom)
    return json.dumps(lacom)

@app.route('/community/<name>/')
def getdata(name):
    lacom = dbcomm.traiga(name)
    #return "{}".format(lacom)
    return json.dumps(lacom)

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    #app.run(host='0.0.0.0', port=port, ssl_context='adhoc')
    app.run(host='0.0.0.0', port=port)
    sslify = SSLify(app)
    # if 'DYNO' in os.environ: # only trigger SSLify if the app is running on Heroku
    #     sslify = SSLify(app)
