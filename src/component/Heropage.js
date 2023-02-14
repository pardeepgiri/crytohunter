import React from 'react'

const Heropage = ({coindata}) => {
    console.log(coindata);
  return (
    <div>
        {
            coindata.map((items)=>{
                return(
                    <div className='coin-container'>
                    <div className='coin-row'>
                      <div className='coin'>
                        <img src={items.image} alt='crypto' />
                        <h1>{items.id}</h1>
                        <p className='coin-symbol'>{items.symbol}</p>
                      </div>
                      <div className='coin-data'>
                        <p className='coin-price'>${items.current_price}</p>
                        <p className='coin-volume'>${items.market_cap}</p>
              
                        {items.price_change_percentage_24h< 0 ? (
                          <p className='red-text'>{items.price_change_percentage_24h.toFixed(2)}%</p>
                        ) : (
                          <p className=' green-text'>{items.price_change_percentage_24h.toFixed(2)}%</p>
                        )}
              
                        <p className='coin-marketcap'>
                          Mkt Cap: ${items.total_volume}
                        </p>
                      </div>
                    </div>
                  </div>
                )
            })
        }
    </div>
  )
}

export default Heropage