import requests
import datetime

date = str(datetime.date.today())
initial_time = "%s:00"%(datetime.datetime.now().hour)
end_time = "%s:59"%(datetime.datetime.now().hour)


url = 'https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=%sT%s&end_date=%sT%s&time_trunc=hour'% (date, initial_time, date, end_time)

def generate_request(url, params={}):
        response = requests.get(url, params=params)

        if response.status_code == 200:
            return response.json()


# obtener precio de la API y ponerlo en €/kWh
def get_price(params={}):
    try:
        response = generate_request(url, params)
    
        euros_per_kWh = (response["included"][0]["attributes"]["values"][0]["value"])/1000
        return euros_per_kWh
    
    except:
        euros_per_kWh = 0.138212
        return euros_per_kWh