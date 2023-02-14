import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Heropage from './Heropage';

const List = () => {
  const[url,setUrl]=useState("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  const[coindata,setCoindata]=useState([]);
  useEffect(()=>{
    axios
    .get(url)
    .then(res=>{
      // console.log(res.data);
      setCoindata(res.data);
    })
  },[url]);

  return (
    <div>
      <Heropage coindata={coindata}/>
    </div>
  )
}

export default List;