import React from 'react'
import '../Style/Pie.css'

export default function Pie() {
  return (
    <div className='Contenedor_pie'>
        <footer>
            <img className='Icono'
                src={require(`../Imagenes/Icon_fb.png`)}
                alt='Foto' />
            <img className='Icono'
                src={require(`../Imagenes/Icon_ig.png`)}
                alt='Foto' />
            <img className='Icono'
                src={require(`../Imagenes/Icon_tr.png`)}
                alt='Foto' />
        </footer>
    </div>
  )
}
