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
import Tile from "./components/Tile";
import imageFive from './assets/brand.png';
import imageSix from './assets/our_story.png';


function App() {
  return <>

      <h1>Handbags & Purses</h1>

      {/*Buttons*/}
        <nav>
            <Buttons text="to the collection"/>
            <Buttons text="shop all bags"/>
            <Buttons text="pre-orders"/>
        </nav>

      {/*Product gallery*/}
      {/*Note that images need to be imported, see line 7 to 10*/}
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

      {/*Footer with four tiles*/}
      {/*Had to comment out props that are not in use cause Tile function is not working yet*/}
          <footer>
              <section>
                  <Tile
                      title="The brand"
                      textOne="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam dicta dolor ducimus eveniet hic iure magni necessitatibus numquam quae!"
                      textTwo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam dicta dolor ducimus eveniet hic iure magni necessitatibus numquam quae!"
                      // image={}
                      // imgtext="picture of brand or designer"
                      />
              </section>
              <section>
                  <Tile
                      // title=""
                      // textOne=""
                      // textTwo=""
                      image={imageFive}
                      imgtext="picture of brand or designer"
                  />
              </section>
              <section>
                  <Tile
                      // title=""
                      // textOne=""
                      // textTwo=""
                      image={imageSix}
                      imgtext="picture of brand or designer"
                  />
              </section>
              <section>
                  <Tile
                      title="Our story"
                      textOne="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam dicta dolor ducimus eveniet hic iure magni necessitatibus numquam quae!"
                      textTwo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam dicta dolor ducimus eveniet hic iure magni necessitatibus numquam quae!"
                      // image={}
                      // imgtext="picture of brand or designer"
                  />
              </section>

          </footer>


</>
}

export default App;



