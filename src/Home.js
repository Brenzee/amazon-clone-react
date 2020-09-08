import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1231"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="1231231"
            title="Samsung TV"
            price={300.99}
            image="https://cdn.shopify.com/s/files/1/2660/5202/products/am1b6aqoaovlr9feumj5_1400x.jpg?v=1571710395"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1242342531"
            title="Samsung Watch"
            price={159.99}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6360/6360444_sd.jpg"
            rating={5}
          />
          <Product
            id="123111111"
            title="Apple Watch"
            price={399.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="123122222"
            title="iPhone X"
            price={699.99}
            image="https://www.fonez.ie/wp-content/uploads/2020/04/iPhoneXSilver.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="123123123123132"
            title="Toaster"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81Mr8di8BmL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
