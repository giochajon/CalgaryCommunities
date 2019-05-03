import psycopg2
import json
from psycopg2.extensions import AsIs


def retreive(consulta,condicion):
    resultado =""

    try:
        connection = psycopg2.connect(user = "postgres",password = "postgres",host = "192.168.1.69",port = "5432",database = "cgyinfo")
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
    return retreive(consulta,cond)

def miarreglo():
    consulta = "SELECT json_agg( name::TEXT ) from census2018 where class = 'Residential'"
    cond = ""
    return retreive(consulta,cond)[0]


#"select array_to_json(array_agg(row_to_json(t)))from (select comm_code, name, sector, class, res_cnt,dwell_cnt, comm_structure, gcoord,gcenter from census2018 where name = %s) t"

#print(traiga("SUNALTA"))