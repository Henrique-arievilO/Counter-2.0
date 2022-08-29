import React from 'react';
import { useState } from 'react';
import { ContainerMain, Counter, Result, Controls, Button } from './Style';

export default function Main() {
  const [number, setNumber] = useState(0);

  const add = () => {
    // setNumber((prevNumber) => prevNumber + 1);
    if (number < 10) {
      setNumber((prevNumber) => prevNumber + 1);
    }
  };

  const rdc = () => {
    // setNumber((prevNumber) => prevNumber + 1);
    if (number > -10) {
      setNumber((prevNumber) => prevNumber - 1);
    }
  };

  const reset = () => {
    setNumber(0);
  };

  return (
    <ContainerMain>
      <Counter>
        <Result>{number}</Result>
        <Controls>
          <Button onClick={rdc}>&minus;</Button>
          <Button onClick={reset}>Reset</Button>
          <Button onClick={add}>&#43;</Button>
        </Controls>
      </Counter>
    </ContainerMain>
  );
}
