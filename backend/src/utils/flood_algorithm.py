from utils.constants import room
from utils.constants import dimension
from utils.constants import visited


def get_neighbours(r, c):

    neighbours = [
            [r + 1, c], [r + 1, c], [r - 1, c], [r, c - 1],
            [r + 1, c + 1], [r + 1, c - 1], [r - 1, c - 1], [r - 1, c + 1]
    ]

    return neighbours


def flood_fill(r, c, dirty, cleaned):

    if r < 0 or r >= dimension['row']:
        return

    if c < 0 or c >= dimension['column']:
        return

    if room[r][c] != dirty:
        return

    room[r][c] = cleaned

    visited.append([r, c])

    moves = get_neighbours(r, c)

    for move in moves:
        if move not in visited:
            flood_fill(move[0], move[1], dirty, cleaned)

    return visited


def reset_visited():
    global room
    room = [
        [0, 3, 3, 3, 0],
        [0, 3, 2, 3, 0],
        [0, 2, 2, 3, 0],
        [0, 0, 0, 0, 2],
        [2, 2, 0, 0, 2],
    ]
    visited.clear()
