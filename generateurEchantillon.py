import pandas as pd
from faker import Factory
fake = Factory.create()
from random import randint
from operator import methodcaller
import matplotlib.pyplot as plt
import numpy as np
import math
import json
import matplotlib.mlab as mlab

from scipy.stats import truncnorm

def get_truncated_normal(mean=0, sd=1, low=0, upp=10):
    return truncnorm(
        (low - mean) / sd, (upp - mean) / sd, loc=mean, scale=sd)

#Temps depuis clickez pour commencer
#Moyenne de temps des clicks
#nb retour sur la page d'acceuil
#nb retour page precedente
#nb validation avec formulaire non conforme
#temps sans regarder l'ecran
#nbFois confusion detecté
rowSize=300
owners = pd.DataFrame(index=range(1,rowSize))
owners.index.name='id'
owners['label'] = owners.index.map(lambda x : randint(0, 1))
owners.head()

tmpCompetent = get_truncated_normal(mean=3, sd=2, low=0, upp=10)
tmpIncompetent = get_truncated_normal(mean=8, sd=2, low=0, upp=30)

nbRetourCompetent = get_truncated_normal(mean=0, sd=1, low=0, upp=3)
nbRetourIncompetent = get_truncated_normal(mean=10, sd=5, low=0, upp=20)

nbRetourPagePrecedenteCompetent = get_truncated_normal(mean=0, sd=2, low=0, upp=6)
nbRetourPagePrecedenteIncompetent = get_truncated_normal(mean=10, sd=5, low=0, upp=20)

for index, row in owners.iterrows():

    if row.label==0:
        chrono = randint(0, 60) + int(tmpCompetent.rvs())*60 #+ temps sans regarder ecran
        nbRetour = int(nbRetourCompetent.rvs())
        nbRetourPagePrecedente = int(nbRetourPagePrecedenteCompetent.rvs())
    else:
        chrono = randint(0, 60) + int(tmpIncompetent.rvs())*60
        nbRetour= int(nbRetourIncompetent.rvs())
        nbRetourPagePrecedente = int(nbRetourPagePrecedenteIncompetent.rvs())
        
        
    owners.set_value(index,'chrono',chrono)
    owners.set_value(index,'nbRetour',nbRetour)
    owners.set_value(index,'nbRetourPagePrecedente',nbRetourPagePrecedente)
owners.head()

data = owners.reset_index().to_json(orient='records')
print (data)
with open('echantillon.json', 'w') as outfile:
    json.dump(data, outfile)