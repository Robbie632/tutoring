import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [viewCart, setViewCart] = useState(false);
  const [data, setData] = useState([]
    //plants go here, list of objects with name keys
  );

  const handleAddToCart = (plant) => {
    // code here
  };

  const handleViewCart = () => {
    // code here
  };

  const handleModalEscape = (event) => {
      // code here
  }

  return (
    <div  >
      <div class="header">
        <div>
          <h1>Plants</h1>
          <h2>Browse our selection of beautiful plants</h2>
        </div>
        <div class="cart" onClick={() => handleViewCart()}>
          <img src="/cart.svg" alt="" />
        </div>
      </div>
      <ul>
        {/* plants here using data.map */}
      </ul>
      <div className= {

        viewCart ? 'cart-modal' : 'hidden'
        }>
        <div className="modal-backdrop">
          <div class="modal">
          {cart.map(plant => plant)}
          <button onClick = {() => handleModalEscape()}>x</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
