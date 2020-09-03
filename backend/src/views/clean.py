from flask import Blueprint, request
from controllers import clean
from flask_cors import CORS

clean_blueprint = Blueprint('clean', __name__)
CORS(clean_blueprint)


@clean_blueprint.route('/api/path/<int:i>/<int:j>')
def get_path(i, j):

    response, status = clean.get_path(i, j)

    return response, status
