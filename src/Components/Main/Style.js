import styled from 'styled-components';

export const ContainerMain = styled.main`
  width: 100vw;
  height: 85vh;
  background-color: #bdb3d0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Counter = styled.div`
  width: 18rem;
  height: 18rem;
  border: none;
  border-radius: 3rem;
  background-color: #170f1c;
  box-shadow: inset 5px 5px 10px #b799bb, 10px 10px 10px #000;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
export const Controls = styled.div`
  width: 15rem;
  height: 3rem;
  border-radius: 1rem;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const Result = styled.p`
  width: 15rem;
  height: 3rem;
  font-size: 3rem;
  border-radius: 1rem;
  text-align: center;
  background-color: #457251;
  box-shadow: inset 3px 3px 6px #000;
  font-family: Rationale;
`;
export const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #c8b1d6;
  background-color: #59396c;
  border-radius: 1.5rem;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: inset 3px 3px 6px #b799bb, 5px 5px 5px #000;

  &:hover {
    box-shadow: inset 0px 0px 6px #b799bb, 0px 0px 5px #000;
  }
`;
