import React from 'react';
import './App.css';
import './components/Buttons.js'
import './components/Product.js'
import Product from "./components/Product";
import Buttons from "./components/Buttons";

function App() {
  return (
<>
      <h1>Handbags & Purses</h1>
        <nav>
            <Buttons>to the collection</Buttons>
            <Buttons>to the shop</Buttons>
            <Buttons>pre-orders</Buttons>
        </nav>

    <main>
        <Product>
            {"Best seller"}
            {"./assets/screenshots/bag_1.png"}
            {"Title"}
            {"400"}
            )
        </Product>
        <Product>{"Best seller"} {"./assets/screenshots/bag_2.png"} {"Title"} {"250"} </Product>
        <Product>{"Best seller"} {"./assets/screenshots/bag_3.png"} {"Title"} {"300"} </Product>
        <Product>{"Best seller"} {"./assets/screenshots/bag_4.png"} {"Title"} {"150"} </Product>

    </main>
</>
  );
}

export default App;



