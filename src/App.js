import React from 'react';
import './App.css';
import Product from './components/Product';
import Buttons from './components/Buttons';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import Tile from './components/Tile';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';
import Text from './assets/Text.js';



function App() {
  return <>

      <h1>Handbags & Purses</h1>

      {/*Buttons*/}
      {/*Could not disable the pre-order button, where did I go wrong?*/}
        <nav>
            <Buttons text="to the collection"/>
            <Buttons text="shop all bags"/>
            <Buttons disabled="true" text="pre-orders"/>
        </nav>

      {/*Product gallery*/}
      {/*Note that images are imported, see line 7 to 10*/}
        <main>
            <Product
                sticker="Best seller"
                image={bag_1}
                imgtext="picture of bag"
                title="The handy bag"
                price="400"
            />
            <Product
                sticker="Best seller"
                image={bag_2}
                imgtext="picture of bag"
                title="The stylish bag"
                price="250"
            />
            <Product
                sticker="Best seller"
                image={bag_3}
                imgtext="picture of bag"
                title="The simple bag"
                price="300"
            />
            <Product
                sticker="Best seller"
                image={bag_4}
                imgtext="picture of bag"
                title="The trendy bag"
                price="150"
            />
        </main>

      {/*Footer with four tiles*/}
      {/*The text property is actually not doing anything here, please help*/}
          <footer>
                  <Tile
                      title="The brand"
                      text={Text}
                  />
                  <Tile
                      image={brand}
                      imgtext="picture of brand or designer"
                  />
                  <Tile
                      image={ourStory}
                      imgtext="picture of brand or designer"
                  />
                  <Tile
                      title="Our story"
                      text={Text}
                  />

          </footer>


</>
}

export default App;



