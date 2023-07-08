from django.shortcuts import render
from django.http import HttpResponse
from . import models

_index = '''
<html>
<head>
    <title>Contact</title>
</head>
<body style="background-color: #2d2d2f; ">
    <div style=" text-align: center; width: 100%;">
        <div name="column" style="width: 900px; display: inline-block; ">
            <figure>
                <img src="../static/logo.png"> 
            </figure> 
            <div style="margin-left: auto; margin-right: auto;">
                <div style="display: inline-block">
                    <div style="display: flex;  height: 100px; margin: 20px;">
                        <div style="height: 25px; float: left;">
                            <a href="/home"><h3 style=""><img style="width: 300px;"src="../static/intro-button.png"></h3></a>
                        </div>
                        <div style="height: 50px; float: right;">
                            <a href="/contact"><h3 style=""><img style="width: 300px;"src="../static/cont-button.png"></h3></a>
                        </div>
                    </div>
                </div>
                <br/>
                <h2 style="margin: 20px; color: white;"> Introdução </h2>
                <figure>
                    <img src="../static/item.png"> 
                </figure>
                <div style="width=50%; border-radius: 10px; content-align: center; background-color: #e57e61; padding: 30px; margin: 50px;">
                    <p style="color: white;">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis placerat justo, condimentum hendrerit quam. Aenean interdum mi nec ante auctor congue. Maecenas vulputate congue nisi, non lobortis tellus euismod quis. Donec ut mattis nisl. Vivamus molestie lacus sed pellentesque suscipit. In et augue nec elit lacinia auctor id id nibh. Aenean et ligula at nulla iaculis laoreet. Quisque tincidunt feugiat erat vel porta. Donec varius consectetur volutpat. Phasellus vehicula laoreet justo, et fermentum libero vulputate rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In et mollis sem, quis mollis nibh. Praesent sodales mi neque, eget vehicula sem convallis et. Morbi tempus tellus et urna porttitor aliquam. Phasellus ultricies sem elit. Nulla condimentum dolor a nisi congue, quis pulvinar sem porttitor.

                        Donec dui erat, scelerisque vel ultrices quis, tempor eu sapien. Praesent at lorem rutrum nibh euismod commodo lacinia a sapien. Suspendisse in magna non ipsum bibendum tempus. Cras consequat convallis nibh. Morbi pellentesque congue vehicula. Vivamus non nulla sit amet massa ornare euismod. Donec accumsan lectus quis porta scelerisque. Etiam nec risus quis metus cursus vehicula vel quis nunc. Nam eleifend laoreet ligula, eget vestibulum libero molestie nec. Sed eu cursus felis, vel euismod diam. Aliquam aliquam, turpis non facilisis vulputate, purus quam tristique nisi, lacinia imperdiet nisl lectus at erat. In suscipit ipsum in nisi finibus ultricies. Sed tincidunt viverra augue, quis hendrerit diam sagittis at. In hac habitasse platea dictumst.

                        Vestibulum odio erat, efficitur et condimentum eu, euismod vitae diam. Pellentesque tincidunt diam in diam tincidunt, vel eleifend metus iaculis. Quisque non posuere dui, eget elementum elit. Cras orci ante, luctus quis ultrices ac, ultrices placerat dui. Nulla porta congue fringilla. Sed varius massa sit amet massa sodales vestibulum. Praesent at nibh magna. Nam id metus vel urna eleifend sollicitudin vel a eros. Proin hendrerit rutrum vulputate. Vivamus purus mauris, pulvinar ut sem eu, tristique gravida nulla. Nulla a nulla faucibus magna consequat posuere. Cras ac ante vel magna commodo eleifend. Vestibulum non vehicula dui. Mauris congue at turpis et tincidunt. Praesent in ornare urna. Phasellus vitae est dapibus, euismod leo in, blandit leo.

                    </p>
                </div>
                
            </div>
        </div>
    <div>

</body>
</html>
'''
_contact = '''
<html>
<head>
    <title>Contact</title>
</head>
<body style="background-color: #2d2d2f; ">
    <div style=" text-align: center; width: 100%;">
        <div name="column" style="width: 900px; display: inline-block; ">
            <figure>
                <img src="../static/logo.png"> 
            </figure> 
            <div style="margin-left: auto; margin-right: auto;">
            <div style="display: inline-block">
                 <div style="padding: 20px; display: flex;  height: 100px; margin-top: 20px;">
                    <div style="height: 25px; float: left;">
                        <a href="/home"><h3 style=""><img style="width: 300px;"src="../static/intro-button.png"></h3></a>
                    </div>
                    <div style="height: 50px; float: right;">
                        <a href="/contact"><h3 style=""><img style="width: 300px;"src="../static/cont-button.png"></h3></a>
                    </div>
                </div>
            </div>
               
                <br/>
                <h2 style="margin: 20px; color: white;"> Contato </h2>
                <figure>
                    <img src="../static/item.png"> 
                </figure>
                <div style="width=50%; border-radius: 10px; content-align: center; background-color: #e57e61; padding: 30px; margin: 50px;">
                    <div display: flex;  height: 100px; margin: 20px;>
                        <div style="display: flex; height: 100px;">
                            <div style=" margin-left: 0 auto; margin-right: 0; width: 50%; display: inline-block;">
                               <input id="in_name" onclick="document.getElementById('in_name').value=''" style="height: 70px; width: 350px; padding: 10px; border-radius: 10px;" value="Nome*" type="text"/>
                            </div>
                            <div style="margin-left: 0; margin-right: 0 auto;; width: 50%; display: inline-block;">
                                <input id="in_mail" onclick="document.getElementById('in_mail').value=''" style="height: 70px; width: 350px; padding: 10px; border-radius: 10px;" name="email" value="E-mail*" type="text">
                            </div>
                        </div>
                        <div>
                            <input id="in_msg" onclick="document.getElementById('in_msg').value=''" style="width: 100%; height: 35%; padding: 10px; border-radius: 10px;" name="message" value="Mensagem*" type="text">
                        </div>
                    </div>
                    <br/>
                    <div>
                        <button style="border: 0; padding: 15px; margin=20px; border-radius: 10px; background-color: #2d2d2f; color: white;" onclick="alert('enviando...'); const data=document.getElementsByTagName('input'); fetch('http://127.0.0.1:8000/send_message?name='+data[0].value+'&email='+data[1].value+'&message='+data[2].value); alert('Sua mensagem está sendo enviada!');"> ENVIAR </button>
                    </div>
                </div>
                
            </div>
        </div>
    <div>

</body>

<style>
 input {
    border: 0;
    color: grey;
    font: arial;
 }


 
</style>
</html>
'''

def index(request):
    return HttpResponse(_index)

def contact(request):
    return HttpResponse(_contact)

def send_contact(request):
    if(request.GET):
        print(request.GET)
        name = request.GET["name"]
        email = request.GET["email"]
        message = request.GET["message"]
        new_contact = models.contact(name=name, email=email, message=message)
        new_contact.save()
        new_id = new_contact.id
        print(new_id)
    return HttpResponse("new_id")   


 