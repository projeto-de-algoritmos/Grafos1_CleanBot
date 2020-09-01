from flask import Blueprint, request
from controllers import clean
from flask_cors import CORS

clean_blueprint = Blueprint('clean', __name__)
CORS(clean_blueprint)

@clean_blueprint.route('/api/cleanStart')
def get_way():
    response, status = clean.get_way()

    return response, status
