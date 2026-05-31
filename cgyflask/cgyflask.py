import os
import dbcomm
from flask import Flask
from flask_cors import CORS
import json


def init_db():
    """Seed the database on first start if tables do not exist yet."""
    sql_file = os.path.join(os.path.dirname(__file__), 'init.sql')
    if not os.path.exists(sql_file):
        return
    try:
        import psycopg2
        conn = psycopg2.connect(
            host=os.environ.get('DB_HOST', ''),
            user=os.environ.get('DB_USER', ''),
            password=os.environ.get('DB_PASSWORD', ''),
            dbname=os.environ.get('DB_NAME', 'cgyinfo'),
            port=os.environ.get('DB_PORT', 5432),
        )
        conn.autocommit = True
        cur = conn.cursor()
        cur.execute("SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'census2018')")
        if not cur.fetchone()[0]:
            with open(sql_file) as f:
                # strip psql meta-commands (e.g. \connect) that psycopg2 cannot handle
                sql = '\n'.join(line for line in f if not line.startswith('\\'))
            cur.execute(sql)
            print('Database seeded from init.sql.')
        cur.close()
        conn.close()
    except Exception as e:
        print(f'DB init skipped: {e}')


init_db()

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
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
