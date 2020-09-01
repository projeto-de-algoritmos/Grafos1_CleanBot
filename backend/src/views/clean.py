from flask import Blueprint, request
from flask_cors import CORS

clean_blueprint = Blueprint('clean', __name__)
CORS(clean_blueprint)

@clean_blueprint.route('/')
def getWay():
    return (
        {'start': 1}
    )