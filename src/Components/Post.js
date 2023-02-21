import React from 'react'
import '../Style/Post.css'

export default function Post() {
  return (
    <div className='Contenedor_post'>
        <div>
        <h1 className='Titulo2'> <strong>NUESTRAS METODOLOGÍAS</strong> </h1>
        <p className='Texto3'>Nuestros expertos están comprometidos en desarrollar proyectos respaldados por metodologías ágiles e innovadoras, que aseguran el éxito de nuestras soluciones de analítica. </p> 
        </div>
        <img className='Imagen3'
                src={require('../Imagenes/Metodologias.jpg')}
                alt='Foto3' />

    </div>
  )
}
