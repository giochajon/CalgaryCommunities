import dbcomm
from flask import Flask

app = Flask(__name__)






@app.route('/')
def index():
    return "<h1>Calgary community info </h1><br><p>add /community for the array or the /community/NAME to retreive the data</p> "

@app.route('/community/')
def listcom():
    lacom = dbcomm.miarreglo()
    return "{}".format(lacom)

@app.route('/community/<name>')
def getdata(name):
    lacom = dbcomm.traiga(name)
    return "{}".format(lacom)

if __name__ == '__main__':
    app.run()
    debug == True