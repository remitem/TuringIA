import React from 'react'
import '../Style/Project.css'


export default function Project(props) {
  return (
    <div className='Contenedor_principal'>
        <img className='Imagen'
             src={require(`../Imagenes/Project_${props.imagen}.jpg`)}
             alt='Foto' />
        <div>
            <p className='Nombre'> <strong> {props.nombre} </strong> </p>
            <p className='Texto'> {props.texto} </p>
        </div>

    </div>
  )
}
