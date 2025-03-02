from flask import Blueprint, render_template

# Create a Blueprint
route_bp = Blueprint('route_bp', __name__)

@route_bp.route("/")
def home():
    return render_template("overview.html")

# You can add more routes here