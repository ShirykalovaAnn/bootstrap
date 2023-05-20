import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css';
import { MapContainer, Polygon, Popup } from'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import { Tooltip } from 'react-leaflet';
import { CircleMarker } from 'react-leaflet';
import axios from 'axios';

const colorOptions = {color: 'purple'}
const centerPolygon =[
  [
    [55.743087, 37.611023],
    [55.750237, 37.588704],
    [55.777507, 37.629002],
    [55.732972, 37.656929]
  ]
];
const center =[55.752342, 37.622022]
const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    axios.post('https://637f91ca2f8f56e28e904e7d.mokapi.io/form', data)
    alert('Заявка отправлена')
    console.log(data)
  }

  console.log(watch("example")); // watch input value by passing the name of it
  return ( 
    <div>
      <form id='form' onSubmit={handleSubmit(onSubmit)}>
          <h2>Заполните форму для обратной связи</h2>
          <div className='input-group mb-3'> 
            <input
            {...register("lastname", {
              maxLength: 50,
              required: true,
              pattern: /^[а-яА-Я]+$/i
            })}
              type='text'
              className='form-control'
              placeholder='Фамилия'/>
              </div>
            {errors?.lastname?.type === "required" && (
              <p>Поле обязательно для заполнения</p>
            )}
            {errors?.lastname?.type === "maxLength" && (
                <p>Поле не может содержать более 50 символов</p>
            )}
              {errors?.lastname?.type === "pattern" && (
                <p>Поле заполнено не корректно</p>
            )}
          
          <div className='input-group mb-3'> 
            <input
            {...register("fistname", {
              maxLength: 50,
              required: true,
              pattern: /^[а-яА-Я]+$/i
            })}
              type='text'
              className='form-control'
              placeholder='Имя'/>
            </div>
              {errors?.fistname?.type === "required" && (
              <p>Поле обязательно для заполнения</p>
            )}
            {errors?.fistname?.type === "maxLength" && (
                <p>Поле не может содержать более 50 символов</p>
            )}
              {errors?.fistname?.type === "pattern" && (
                <p>Поле заполнено не корректно</p>
            )}
          
          <div className='input-group mb-3'> 
            <input
            {...register("patronymic", {
              maxLength: 50,
              pattern: /^[а-яА-Я]+$/i
            })}
              type='text'
              className='form-control'
              placeholder='Отчество'/>
          </div>
          {errors?.patronymic?.type === "required" && (
              <p>Поле обязательно для заполнения</p>
          )}
          {errors?.patronymic?.type === "maxLength" && (
              <p>Поле не может содержать более 50 символов</p>
          )}
            {errors?.patronymic?.type === "pattern" && (
              <p>Поле заполнено не корректно</p>
          )}
          <div className='input-group mb-3'> 
            <input
            {...register("email", {
              maxLength: 30,
              required: true,
              pattern: /^[a-zA-Z"-_.]+$/i
            })}
              type='text'
              className='form-control'
              placeholder='Email'/>
          </div>
          {errors?.email?.type === "required" && (
              <p>Поле обязательно для заполнения</p>
          )}
          {errors?.email?.type === "maxLength" && (
              <p>Поле не может содержать более 30 символов</p>
          )}
            {errors?.email?.type === "pattern" && (
              <p>Поле заполнено не корректно</p>
          )}
          <div>
            <input className='btn btn-outline-primary' type="submit"/>
          </div> 
      </form>
<br></br>
      <MapContainer
      center={center}
      zoom={10}
      style={{ 
        height: '500px', 
        width: '100vw' 
      }}
      >
        <TileLayer url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=yWQz6z85OJss8V70mQqt'
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />

        <CircleMarker 
          center={center}
          pathOptions={{color:'black'}}
          radius={10}
        />

        <Marker position={center}>
          <Popup>
            Мы находимся тут - при нажатии кнопки
          </Popup>
          <Tooltip>
            Наше тур-агенство находится тут - при наведении мышки
          </Tooltip>
        </Marker>
        <Polygon positions={centerPolygon} pathOptions={colorOptions}/>
      </MapContainer>
    </div>
  )
}

export default Form