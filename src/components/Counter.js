import { useState } from "react";

export default function Counter() {

  const [counter, setCounter] = useState(0);

  const handleClickAdd = () => {
    setCounter(counter + 1);
  };

  const handleClickSub = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  const ButtonAdd = () => {
    return (
      <button onClick={handleClickAdd}>+</button>
    );
  };

  const ButtonSub = () => {
    return (
      <button onClick={handleClickSub}>-</button>
    );
  };

  const ButtonReset = () => {
    return(
      <button onClick={handleReset}>Reset</button>
    );
  };

  return (
    <>
      <ButtonAdd />
      <ButtonSub />
      <br />
      <ButtonReset />
      <br />
      {counter}
    </>
  );
}
