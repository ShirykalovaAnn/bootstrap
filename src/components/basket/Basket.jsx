import React from 'react'
import ItemBasket from './ItemBasket'

const Basket = (props) => {
  return (
    <div>
      <div>
        {
          props.overlayProps? props.overlayProps.length : 0?
          <div>
            {
            props.overlayProps.map(Object=>{
              return(
                <ItemBasket
                key={Object.id}
                id={Object.id}
                title={Object.title}
                price={Object.price}
                img={Object.img} 
                deleteItems={props.deleteItems}
               />
              )
                
            })
          }
          </div>
          :
          <h1 className='col-md-8 offset-md-2'>Корзина пуста</h1>
        }
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <p>Итог</p>
            <p>{props.totalPrice}</p>
            <button type='button' className='w-10 btn btn-lg btn-primary'>Забронировать</button>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket