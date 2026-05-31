import os
import psycopg2
import json
from psycopg2.extensions import AsIs

_user = os.environ.get("DB_USER", "")
_passwor = os.environ.get("DB_PASSWORD", "")
_connstring = os.environ.get("DB_HOST", "")
_dbname = os.environ.get("DB_NAME", "cgyinfo")
_port = os.environ.get("DB_PORT", "5432")


def retreive(consulta,condicion):
    resultado =""
    connection = None

    try:
        connection = psycopg2.connect(user=_user, password=_passwor, host=_connstring, port=_port, database=_dbname)
        
        connection.autocommit = True
        cursor = connection.cursor()
        ###cursor.execute("select comm_code, name, sector, class, res_cnt,dwell_cnt, comm_structure from census2018 where name = %s",(nombre,))
        cursor.execute(consulta,condicion)
        #cursor.execute(consulta,tuple(condicion))
        records = cursor.fetchone()
        resultado = records
        #print (consulta)
        #print (condicion)
        
        
    except (Exception, psycopg2.Error) as error :
        print ("Error while connecting to PostgreSQL", error)
    finally:
        #closing database connection.
            if(connection):
                cursor.close()
                
                connection.close()
            
    return (resultado)

#print (traiga( 'SUNALTA'))
# select array_to_json(array_agg(row_to_json(t)))
#     from (
#       select comm_code, name, sector, class, res_cnt,dwell_cnt, comm_structure, gcoord,gcenter from census2018 where class = 'Residential' order by name limit 5
#     ) t



def traiga(nombre):
    #consulta = ("select array_to_json(array_agg(row_to_json(t)))from (select comm_code, name, sector, class, res_cnt,dwell_cnt, comm_structure, gcoord,gcenter from census2018 where name = %s) t",(nombre,))
    consulta = u"select array_to_json(array_agg(row_to_json(t)))from (select comm_code, name, sector, class, res_cnt,dwell_cnt, comm_structure, gcoord,gcenter from census2018 where name = %s) t"
    cond = [nombre]
    return retreive(consulta,cond)[0]

def miarreglo():
    consulta = "SELECT json_agg( name::TEXT order by name ) from census2018 where class = 'Residential'  "
    cond = ""
    return retreive(consulta,cond)[0]


#"select array_to_json(array_agg(row_to_json(t)))from (select comm_code, name, sector, class, res_cnt,dwell_cnt, comm_structure, gcoord,gcenter from census2018 where name = %s) t"

#print(traiga("SUNALTA"))