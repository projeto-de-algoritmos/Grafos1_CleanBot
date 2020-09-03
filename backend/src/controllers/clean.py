from utils.flood_algorithm import flood_fill


def get_path(i, j):

    visited = flood_fill(i, j, 0, 1)

    response = dict()
    response['order'] = visited

    return response, 200
