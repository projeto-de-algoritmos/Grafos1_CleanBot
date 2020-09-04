from utils.flood_algorithm import flood_fill
from utils.flood_algorithm import reset_visited


def get_path(i, j):

    reset_visited()

    visited = flood_fill(i, j, 0, 1)

    response = dict()
    response['order'] = visited

    return response, 200
