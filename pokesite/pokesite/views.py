from django.http import HttpResponse
from django.shortcuts import render
import requests

def index(request):
    context={}
    return render(request, 'index.html', context=context)

def query(request):
    name = request.GET.get('name', '').lower()
    if(name == ''):
        return HttpResponse("Insira um nome para consultar!")
    else:
        req = requests.get("https://pokeapi.co/api/v2/pokemon/" + name)
        if(req.status_code != 200):
            return render(request, 'index.html', context={"alert": "Pokémon não encontrado!"})
        fulljson = req.json()
        req2 = requests.get("https://pokeapi.co/api/v2/pokemon-species/" + name)
        req3 = requests.get("https://pokeapi.co/api/v2/evolution-chain/" + str(fulljson["order"])) 

        try:
            evolution_chain = req3.json()
            evol_chain = [evolution_chain["chain"]["species"]["name"], evolution_chain["chain"]["evolves_to"][0]["species"]["name"], evolution_chain["chain"]["evolves_to"][0]["evolves_to"][0]["species"]["name"]]
        except:
            evol_chain = [req3.json()["chain"]["species"]["name"], req3.json()["chain"]["evolves_to"][0]["species"]["name"]]

        pokedata = {"picture": fulljson["sprites"]["front_default"], 
                    "genders": "", 
                    "types": ", ".join([n["type"]["name"] for n in fulljson["types"]]), 
                    "name": fulljson["name"], 
                    "description": req2.json()["flavor_text_entries"][0]["flavor_text"], 
                    "attributes": [s["base_stat"] for s in fulljson["stats"]], 
                    "evolutions": evol_chain,
                    "genders": "Sim" if req2.json()["has_gender_differences"] else "Não"}
        req4 = [requests.get("https://pokeapi.co/api/v2/pokemon/" + n) for n in evol_chain]
        try:
            evolution_chain_pics = [req4[i].json()["sprites"]["front_default"] for i in range(len(evol_chain))]
        except:
            evolution_chain_pics = [pokedata["picture"], pokedata["picture"], pokedata["picture"]]
        pokedata["ev_chain"] = evolution_chain_pics

        if(len(evol_chain) == 2):
            return render(request, 'view2.html', context=pokedata)
        return render(request, 'view.html', context=pokedata)
        