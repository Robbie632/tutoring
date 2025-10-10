import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [viewCart, setViewCart] = useState(false);
  const [data, setData] = useState([
    { name: "bonsai" },
    { name: "pelargonia" },
    { name: "cheese plant" },
    { name: "Snake Plant" },
    { name: "ZZ Plant" },
    { name: "Fiddle Leaf Fig" },
    { name: "Pilea" },
    { name: "Peace Lily" },
    { name: "Pothos" },
    { name: "Rubber Plant" },
    { name: "Calathea Orbifolia" },
    { name: "Bird of Paradise" },
    { name: "String of Pearls" },
    { name: "Cactus Trio" },
    { name: "Areca Palm" },
  ]);

  const handleAddToCart = (plant) => {
    setCart((prev) => {
      prev.push(plant.name);
      alert(`${plant.name} added to cart`);
      return prev;
    });
  };

  const handleViewCart = () => {

    setViewCart(() => true);
  };

  const handleModalEscape = (event) => {
      setViewCart(false);
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
        {data.map((plant) => {
          return (
            <li>
              <h3>{plant.name}</h3>
              <button onClick={() => handleAddToCart(plant)}>
                <img src="/add_to_cart.svg" alt="" />
              </button>
            </li>
          );
        })}
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
