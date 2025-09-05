import pandas as pd
dados = {'nome':['alice','bop','carlos',],'idade':[25,30,35]}
df=dp.DataFrame(dados)
print(df)

df=pd.read_csv("https://raw.githubusercontent.com/plolty/datasets/master/2016-weather-data-seattle.csv")
print(df.head())

#Sem o print fica com a formatação de planilha
