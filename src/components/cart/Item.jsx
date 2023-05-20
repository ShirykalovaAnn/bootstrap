import React from 'react'
import {AppContext} from '../../App';
import {useState} from 'react'

const Item = (props) => {

const context = React.useContext(AppContext);

const [added, setAdded] = useState(context.isAdded); 
const [fav, setFav] = useState(false);

const onClickFav = () => {
  setFav(!fav);
  let id = props.id;
  let myId = props.myId;
  let title = props.title;
  let description = props.description;
  let price = props.price;
  let img = props.img;
  props.favBtn({id, myId, title, description, price, img})
}

const onClickAdd = () => {
  setAdded(!added);
  let id = props.id;
  let myId = props.myId;
  let title = props.title;
  let description = props.description;
  let price = props.price;
  let img = props.img;
  props.onPlus({id, myId, title, description, price, img})
}
  return (
    
    <div className='container py-3'>
    <main>
      <div className='row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 text-center'>
          <div className='col px-3 py-3'>
            <div className='card md-6 rounded'>
              <div className='card-header py-2 px-3'>

                {
                  context.isFav(props.myId) == true ?
                <button type='button' className='w-100 btn btn-lg btn-primary' 
                onClick={onClickFav}>
                  Добавлен в избранное
                </button>
                  : 
                    <button type='button' className='w-100 btn btn-lg btn-primary' 
                    onClick={onClickFav}>
                      Добавить в избранное
                    </button>
                }

                <p>{props.title}</p>
                <img className='rounded' src={props.img} alt='город' width={'85%'}></img>
                <p>{props.description}</p>
                <p>{props.price}</p>

                <button type='button' className='w-100 btn btn-lg btn-primary' 
                onClick={onClickAdd}>
                {context.isAdded(props.myId) ? 
                <img width={15}
                  src={context.isAdded(props.myId)? '/img/icon.png': ''}
                    alt=""/>
                    :
                      'Добавить в корзину'
                }
              </button>
                
                            
              </div>
            </div>
          </div>
        </div>
    </main>
  </div>
  )
}

export default Item