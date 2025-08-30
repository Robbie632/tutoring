import { useState } from "react";

//----------------example rendering jsx------------------------

// function App() {

//     return <h1>hello example</h1>
// }

// exercise ---------------
// Can you return a title, and unorderlist with genres of music?

// exercise ---------------
// Can you return a form?

//----------------example using state------------------------

// function App() {

//     const [done, setDone] = useState(true);

//     function handleClick(e) {
//         setDone((prev) => !prev);
//     }

//     return(
//         <div>
//             <button onClick={handleClick}> toggle state</button>
//             <p>{done == true ? 'tis true' : 'tis not true'}</p>

//         </div>
//     )

// }

// exercise ---------------
// Can you create a state for a lightbulb being on or off and render text that states if the bulb is on or off
// Can you make on and off buttons?
// Can you change the state of the bulb when each button is clicked

//----------------example array of items--------------------

function App() {
  // A simple array of data, typically fetched from an API or defined elsewhere.
  const items = ["item1", "item2", "item3"];

  // An array to hold the rendered JSK components.
  const renderedComponents = [];

  // Loop through the items array and render JSK for each item.
  // We're using a standard for loop here as requested.
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    renderedComponents.push(
      <li key={i}>
        <h2>{item}</h2>
      </li>
    );
  }

  // The component returns the array of rendered JSK elements.
  return (
    <div>
      <h1>My Item List</h1>
      <ul>{renderedComponents}</ul>
    </div>
  );
}

//----------------example array of items as objects------------------------

export default App;
