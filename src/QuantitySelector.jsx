import { useEffect, useState } from "react";

function QuantitySelector({ item }) {
  const [counter, setCounter] = useState((item.qty) ? item.qty : 0);

  useEffect(() => {
    (!item.qty) ? item.qty = 1 : item.qty = counter;
  }, [counter, item]);

  function increaseCount() {
    setCounter(counter + 1);
  }

  function decreaseCount() {
    (counter > 0) ? setCounter(counter - 1) : setCounter(0);
  }

  function changeCount(e) {
    const value = parseInt(e.target.value, 10);
    setCounter(isNaN(value) ? 0 : value);
  }

  return (
    <div className="qty-editor-container">
      <button className="decrease-qty-button" onClick={decreaseCount}>-</button>
      <input type="number" min={0} onChange={changeCount} value={counter}/>
      <button className="increase-qty-button" onClick={increaseCount}>+</button>
    </div>
  )
}

export default QuantitySelector;
