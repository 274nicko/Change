import React, {useState} from 'react'
import { Img } from '../UI/Img'
import Perro from './Images/Perro.jfif'
import Perro1 from './Images/Perro1.jfif'

export const Body = () => {
    const [onOff, setOnOff] = useState(false)

    const cambiar = () =>{
        let img = document.getElementById('img')
        let img1 = document.getElementById('img1')
        let boton = document.getElementById('boton')

        if(onOff === false){
            img.style.filter = 'grayscale(50%)'
            img1.style.filter = 'grayscale(50%)'
            boton.style.background = 'Gray'
            setOnOff(true)
        }else{
            img.style.filter = 'grayscale(0%)'
            img1.style.filter = 'grayscale(0%)'
            boton.style.background = 'Blue'
            setOnOff(false)
        }
        console.log(onOff)
    } 

  return (
    <div>
        <h1> Change </h1>
        <br />
        <br />
        <div className='card'>
            <h1> Card1 </h1>
            <Img ruta = { Perro } info = 'Perro' id = 'img'/>
        </div>
        <br />
        <br />
        <br />
        <div className='card'>
            <h1> Card2 </h1>
            <Img ruta = { Perro1 } info = 'Perro1' id = 'img1'/>
        </div>
        <br />
        <br />
        <div className='boton'>
            <button onClick={ cambiar } className='boton' id = 'boton'> Enabled </button>
        </div>
    </div>
  )
}
