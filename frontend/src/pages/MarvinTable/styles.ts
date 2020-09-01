import styled from 'styled-components';

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

export const Box = styled.button`
  display: flex;
`;

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background: #84deea;
`;
