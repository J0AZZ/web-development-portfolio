from flask import Flask
from markupsafe import escape

app = Flask(__name__) # our WSGI application

# the function is triggered by the URL specified in the route
@app.route("/") 
def index():
    return "<p> Hello, World! </p>"
    
@app.route("/im/<name>")
def hello(name):
    return f"Hello, {escape(name)}!" 
    # without escape, name could be a <script> tag,
    # that would be executed by the browser
    
@app.route("/script")
def run_js():
    return """
    <script>alert("this is javascript inside python!")</script>
    """

# we can get query parameters and easily use it
@app.route("/query_param/<int:param>")
def get_query_param(param):
    return f'Your input: {param}'
    
    
# by default, Flask routes only accepts GET methods
# to get another one we need to explicitly allow it
@app.route("/notget", methods=['GET', 'POST')
def post()
    if(request.method == 'POST'):
        return "<p> POST received! </p>"
        
