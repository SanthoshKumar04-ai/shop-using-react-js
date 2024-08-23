import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import productImage from './assert/1195978.jpg';

function Cart() {
  const [count, setCount] = useState(0);
  const pricePerItem = 500;

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', backgroundColor:'aqua'}}>
      <img
        src={productImage}
        alt="Product"
        style={{ width: '250px', height: '200px', marginBottom: '10px' }}
      />
      <p>Kakashi hatake</p>
      <p>Price: Rs{pricePerItem}</p>
      <div>
        <button onClick={incrementCount} style={{backgroundColor:'green'}}>Add more</button>
        <button onClick={decrementCount} style={{ marginLeft: '10px', backgroundColor:'orangered' }}>Remove</button>
      </div>
      <p>overall: {count}</p>
      <p>Total Amount: Rs{count * pricePerItem}</p>
    </div>
  );
}

ReactDOM.render(<Cart />,document.getElementById('root'));
