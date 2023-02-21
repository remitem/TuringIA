import React from 'react'
import '../Style/Tablas.css'

export default function Tablas() {
  return (
    <div className='Contenedor_tablas'>
        
        <div className='Contenedor_tabla1'>
          <h1 className='Titulo_tabla1'> <strong> Training </strong> </h1>
          <ul className='Elemento1'>
            <li>Tableu</li>
            <li>Altery</li>
            <li>R Studio</li>
            <li>Data Mining Weka</li>
            <li>Insight</li>
            <li>BI</li>      
          </ul>
        </div>
        
        <div className='Contenedor_tabla2'>
          <h1 className='Titulo_tabla2'> <strong> Software </strong> </h1>
          <ul className='Elemento2'>
            <li>Tableu</li>
            <li>Altery</li>
            <li>Autho</li>
            <li>Otros</li>
            <li>Redhat</li>
            <li>Vmware</li>
            <li>Arspersky</li>      
          </ul>
        </div>

        <div className='Contenedor_tabla3'>
          <h1 className='Titulo_tabla3'> <strong> Hardware </strong> </h1>
          <ul className='Elemento3'>
            <li>HP</li>
            <li>Dell</li>
            <li>IBM</li>
            <li>Otros</li>      
          </ul>
        </div>
    
    </div>
  )
}
