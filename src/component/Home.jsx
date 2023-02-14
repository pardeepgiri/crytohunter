import React, { useEffect, useState } from 'react';
import Coinpage from './Coinpage';
import axiox from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  const [url, setUrl] = useState("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=10&page=1&sparkline=false");
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axiox
      .get(url)
      .then(res => {
        // console.log(res.data);
        setItem(res.data);
      })
  }, [url]);
  // const filtereditem=item.filter((coin)=>
  // coin.name.toLowerCase())
  return (
    <>
      <div className='mainfirst'>
        <div className='leftfirst'>
          <p>You can Buy & Sell Crypto 24/7 using your account</p>
          <h1>Invest in Cryptocurrency with Your IRA</h1>
          <p>Buy, Sell and Watch hundreds of Cryptocurrencies</p>
        </div>
        <div className="rightfirst">
          <img src="https://papaya-medovik-453b5d.netlify.app/static/media/hero-img.66b9eb77caa3ac6d4fe8.png" alt="" />
        </div>


      </div>
      <div className="smain">
        <h1>Watch top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h1>
        <h3>You can earn more money with crypto</h3>
        <div className="container">
          <Coinpage item={item} />
        </div>
        <div className="link">
          <button onClick={() => navigate('/List')} ><span  className="buttonn">See More Coin</span> </button>
        </div>

      </div>
      <div className="description">
        <div>
          <img src="https://www.financemagnates.com/wp-content/uploads/2019/11/platform-mockup-3-devices-min.jpg" alt="" />
        </div>
      </div>
      <div className='flexcontainer'>
        <Footer/>
      </div>

    </>


  )
}

export default Home;
