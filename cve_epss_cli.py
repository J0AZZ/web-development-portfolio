import requests

# no sanitization or format validation in place as we are considering that secure data sources are calling this CLI

def cve(cve_id):
    url = "https://api.first.org/data/v1/epss?cve="+cve_id
    res = requests.get(url).json()["data"][0]
    print(res)
    return res

def cve_and_date(cve_id, date):
    url = "https://api.first.org/data/v1/epss?cve="+cve_id+"&date="+date
    res = requests.get(url).json()["data"][0]
    print(res)
    return res

def top_n(n):
    url = "https://api.first.org/data/v1/epss?order=!epss"
    res = requests.get(url).json()["data"][0:n]
    [print(r) for r in res] # using list comprehension for better readability
    return res

def highest_increase(month): # here we are going to calculate the difference between the value at day 01 and the value 30 days before
    last_month = int(month)-1 if int(month)==1 else 12
    if(last_month<10):
        last_month = "0"+str(last_month)
    else:
        last_month = str(last_month)
    url1 = "https://api.first.org/data/v1/epss?&limit=10000&date=2023-"+month+"-01"
    url2 = "https://api.first.org/data/v1/epss?&limit=10000&date=2023-"+last_month+"-01"
    res1 = requests.get(url1).json()["data"]
    res2 = requests.get(url2).json()["data"]
    max_increase = 0 # start with a minimum value
    increases = {}
    for i in range(len(res1)):
        increases[res1[i]["cve"]] = float(res1[i]["epss"])-float(res2[i]["epss"])
    ranked = sorted(increases.items(), key=lambda item: item[1])
    [print(r) for r in ranked[:10]]
    return ranked

while(True):
    url = "https://api.first.org/data/v1/epss?cve=CVE-2020-23151"
    month = requests.get(url).json()["data"][0]["date"].split("-")[1] # updating the current month
    cmd = input("[CVE CLI] >>  ").split(" ")
    if(cmd[0]=="help" or cmd=="h"):
        print("COMMANDS\n\n")
        print("get CVE-2020-23151\t\t return it's EPSS score and percentile")
        print("getat CVE-2020-23151 2024-01-01\t\t return it's EPSS score and percentile at date")
        print("gettop 15\t\t return the top 15 highest rated CVEs")
        print("getinc \t\t return top 10 CVEs with highest increase in EPSS score over last month")
        
    elif(cmd[0]=="get"):
        cve(cmd[1])

    elif(cmd[0]=="getat"):
        cve_and_date(cmd[1], cmd[2])

    elif(cmd[0].split(" ")[0]=="gettop"):
        top_n(int(cmd[1]))

    elif(cmd[0].split(" ")[0]=="getinc"):
        highest_increase(month)
    
    elif(cmd[0]=="q" or cmd[0]=="quit"):
        quit()
    else:
        print("No command named \t", cmd)
