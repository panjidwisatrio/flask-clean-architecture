from flask import Flask
from app.routes.route import route_bp

app = Flask(__name__, template_folder='app/templates')

# register the blueprint
app.register_blueprint(route_bp)

if __name__ == "__main__":
    app.run(debug=True)