import React, { useState, useCallback, useEffect } from 'react';

import { Matriz, Row, Column, Text, Container, Logo, Line } from './styles';
import logoImg from '../../assets/marvin.svg'
import stainImg from '../../assets/stain.svg';
import armchairImg from '../../assets/armchair.svg';
import sparckleImg from '../../assets/sparkle.svg';
import api from '../../services/api';

interface Image {
  [key: number]: string;
}

const board = [
  [0, 3, 0, 3, 2, 0, 0],
  [0, 0, 2, 2, 2, 0, 2],
  [0, 0, 2, 3, 0, 0, 0],
  [0, 2, 0, 0, 0, 2, 2],
  [2, 0, 0, 3, 0, 2, 3],
];

const images: Image = {
  0: stainImg,
  1: logoImg,
  2: sparckleImg,
  3: armchairImg
}


const MarvinTable: React.FC = () => {
  const [celulas, setCelulas] = useState(board);
  const [isClean, setIsClean] = useState();
  const [position, setPosition] = useState();

  const task = useCallback((arr: any, newArray: any, newBoard: any): void => {
    setTimeout(function (): void {
      const positionNewArray = newArray[arr];
      const row = positionNewArray[0];
      const column = positionNewArray[1];
      
      newBoard[row][column] = 1;
      setPosition([row, column]);


      
    }, 1000 * arr);
  }, [])

  const handleFloodFill = useCallback((i: number, j: number): void | Error  => {
    console.log(`row: ${i}, column:${j}`);

    let newArray = board;
    api.get(`api/path/${i}/${j}`).then(response => {
      console.log(response.data['order'])
      newArray = response.data['order'];

      if(newArray === null){
        alert('Ei, você não pode limpar aí')
        return
      }

      const newBoard = board;

      for (let arr = 0; arr < newArray.length; arr += 1) {
        task(arr, newArray, newBoard);

        setTimeout(function (): void {
          const positionNewArray = newArray[arr];
          const row = positionNewArray[0];
          const column = positionNewArray[1];
          
          newBoard[row][column] = 2;
          setPosition([row, column]);
        }, 1250 * arr);
      }
    },);

  }, [])

  return (
    <>
      <Container>
        <Line>
        <Logo>
          <Text>Marvin</Text>
          <img src={logoImg} alt="Marvin" />
        </Logo>

        <Matriz>
          {celulas.map((row, i) => (
            <Row key={i}>
              {row.map((col, j) => (
                <Column
                  key={j}
                  onClick={() => handleFloodFill(i, j)}
                >
                  <img src={images[col]} alt="images" />
                </Column>
              ))}
            </Row>
          ))}
        </Matriz>
        </Line>
      </Container>
    </>
  );
};

export default MarvinTable;
