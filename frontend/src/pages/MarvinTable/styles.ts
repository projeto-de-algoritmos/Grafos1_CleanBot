import styled, { css } from 'styled-components';

// interface ContainerProps {
//   isClean: boolean;
// }

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  img {
    width: 100px;
    height: 100px;
    margin-left: 30px;
  }
`;

export const Text = styled.div`
  display: flex;
  font-size: 100px;
  color: #84deea;
`;

export const Matriz = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
`;


export const Row = styled.div`
  display: flex;
`;

export const Column = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  background: #84deea;

  img {
    width: 50px;
    height: 50px;
  }
`;
