import React, {useState, useEffect} from 'react';
import '../Style/Llamado.css'

export default function Llamado() {

    const [llamado, setLlamado] = useState([])

    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:3002/servicios')
        const servicios = await data.json()
        setLlamado(servicios)
        console.log(servicios)
    }

    useEffect(() => {
        obtenerDatos()
    }, [])

  return (
    <div >
        {
            llamado.map(item =>( 
                 <div key={item.id} className='Contenedor_secundario'> 
                    <img className='Imagen2'
                        src={require(`../Imagenes/${item.imagenes}.jpg`)}
                        alt='Foto2' />
                    <div className='SubContenedor_secundario'>
                        <p className='Nombre2'> <strong> {item.servicio} </strong> </p>
                        <p className='Texto2'> {item.descripcion} </p>
                    </div>
                     
                </div>
            ))
        }
    </div>
  )
}
