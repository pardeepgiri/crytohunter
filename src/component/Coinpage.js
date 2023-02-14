import React from 'react'

const Coinpage = ({item}) => {
  console.log(item);
  return (
    <>
      {
        item.map((items)=>{
          return(
            <div key={items.id } className="coinpage">
              <img src={items.image} alt=""></img>
              <p >{items.id}</p>
                <h3 >${items.current_price}</h3>
                
                 {items.market_cap_change_percentage_24h < 0 ? (
            <h2 className='red-text'>{items.market_cap_change_percentage_24h.toFixed(2)}%</h2>
          ) : (
            <h2 className='green-text'>{items.market_cap_change_percentage_24h.toFixed(2)}%</h2>
          )}
            </div>
          )
        })
      }
    </>
  )
}

export default Coinpage;