import React from 'react'
import axios from 'axios'
import { AppContext } from '../../App'
import Item from './Item'


const Favorites = (props) => {
  const context = React.useContext(AppContext)

  const onAddOverlay = (obj) => {
    axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart', obj)
    context.setOverlayItems([...context.overlayItems, obj]);
  }

  const onDeleteFav = (id) => {
    axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites/${id}`)
    context.setFavorites((fav)=>fav.filter(item => item.id !== id));
  }


  return (
    <div>
      <div>
        <h1 className='col-md-8 offset-md-2'>Избранные туры</h1>
      </div>
      <div>
        {
          props.favorites.map(Object=>{
            return (
              <Item
              key={Object.id}
              id={Object.id}
              myId={Object.myId}
              title={Object.title}
              price={Object.price}
              img={Object.img} 
              description={Object.description}

                onDeleteFav={
                  (id)=>{
                    onDeleteFav(id)
                  }
                }  
                
                onPlus={(cartObj)=>{
                  onAddOverlay(cartObj)
                  }
                }
              />
            )
          })
        }
      </div>
    </div>
    
  )
}

export default Favorites