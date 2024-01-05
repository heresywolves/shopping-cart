import { useState } from "react";

function QuantitySelector() {
  const [counter, setCounter] = useState(0);

  function increaseCount() {
    setCounter(counter + 1);
  }

  function decreaseCount() {
    (counter > 0) ? setCounter(counter - 1) : setCounter(0);
  }

  return (
    <div className="qty-editor-container">
      <button className="decrease-qty-button" onClick={decreaseCount}>-</button>
      <input type="number" min={0} value={counter}/>
      <button className="increase-qty-button" onClick={increaseCount}>+</button>
    </div>
  )
}

export default QuantitySelector;
