import React, { useState } from 'react';

import { Matriz, Row, Column, Text, Container, Logo } from './styles';
import logoImg from '../../assets/marvin.svg';

const MarvinTable: React.FC = () => {
  const board = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [2, 2, 3, 4, 5],
  ];
  const [celulas, setCelulas] = useState(board);
  const [position, setPosition] = useState();

  function task(arr: any, newArray: any, newBoard: any): void {
    setTimeout(function (): void {
      const positionNewArray = newArray[arr];
      // console.log(positionNewArray);
      for (let row = 0; row < newBoard.length; row += 1) {
        for (let col = 0; col < newBoard.length; col += 1) {
          setPosition([row, col]);
          if (positionNewArray[0] === row && positionNewArray[1] === col) {
            newBoard[row][col] = 9;
            setPosition([row, col]);
          }
        }
      }
    }, 2000 * arr);
  }

  function handleFloodFill(i: number, j: number): void {
    console.log(`row: ${i}, column:${j}`);
    const newArray = [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [3, 3],
      [4, 4],
    ];
    const newBoard = board;

    for (let arr = 0; arr < newArray.length; arr += 1) {
      task(arr, newArray, newBoard);
    }

    setCelulas(newBoard);
  }

  return (
    <>
      <Container>
        <Logo>
          <Text>Marvin</Text>
          <img src={logoImg} alt="Marvin" />
        </Logo>

        <Matriz>
          {celulas.map((row, i) => (
            <Row key={i}>
              {row.map((col, j) => (
                <Column key={j} onClick={() => handleFloodFill(i, j)}>
                  {col}
                </Column>
              ))}
            </Row>
          ))}
        </Matriz>
      </Container>
    </>
  );
};

export default MarvinTable;
