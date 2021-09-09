import React from 'react';
import './App.css';
import './components/Buttons.js';
import './components/Product.js';
import Product from './components/Product';
import Buttons from './components/Buttons';
import imageOne from './assets/bag_1.png';
import imageTwo from './assets/bag_2.png';
import imageThree from './assets/bag_3.png';
import imageFour from './assets/bag_4.png';

function App() {
  return (
<>
      <h1>Handbags & Purses</h1>
        <nav>
            <Buttons text="to the collection"/>
            <Buttons text="to the shop"/>
            <Buttons text="pre-orders"/>
        </nav>

    <main>
        <Product
            sticker="Best seller"
            image={imageOne}
            imgtext="picture of bag"
            title="The handy bag"
            price="400"
            />
        <Product
            sticker="Best seller"
            image={imageTwo}
            imgtext="picture of bag"
            title="The stylish bag"
            price="250"
        />
        <Product
            sticker="Best seller"
            image={imageThree}
            imgtext="picture of bag"
            title="The simple bag"
            price="300"
        />
        <Product
            sticker="Best seller"
            image={imageFour}
            imgtext="picture of bag"
            title="The trendy bag"
            price="150"
        />
    </main>
</>
  );
}

export default App;



