import './App.css';
import Encabezado from './Components/Encabezado';
import Informacion from './Components/Informacion';
import Project from './Components/Project';
import Post from './Components/Post'
import Tablas from './Components/Tablas'
import Pie from './Components/Pie'
import Login from './Components/Login';
import Llamado from './Components/Llamado';

function App() {
  return (
    <div className="App">
      

      <div className='Master'>
        <div className='Encabezado'>
          <Encabezado/>
        </div>
        
        <div className='Login'>
          <Login/>   
        </div>

      </div>
        
      <div className='Informacion'>
        <Informacion/>
      </div>
      
      <div className='Servicios'>

        <div className='Project'>
          <Project
          nombre='Business Analyst'
          imagen='business'
          texto='Nuestra metodología de servicios se encuentra orientada en los estándares del Project Management Institute (PMI) ® e International Project Management Association (IPMA).'
          />
          <Project
          nombre='Desarrollo de Aplicaciones'
          imagen='desarrollo'
          texto='En un mundo moderno, con la cantidad de problemas y su complejidad cada vez es mayor, el desarrollo de aplicaciones, una herramienta para obtener soluciones precisas, dándole tareas repetitivas a la computadora y logrando así la "automatización" de procesos.' 
          />
          <Project
          nombre='Workshop (Blue Print)'
          imagen='workshop'
          texto='Su estrategia debe abarcar la gestión de personas, procesos y cambios, incluida la identificación de casos de uso comercial inmediatos, la definición de roles, responsabilidades, el establecimiento de medidas para evaluar el éxito y el impacto.'
          />  
        </div>
      
        <div className='Llamado'>
        <Llamado/>
        </div>

      </div>

      <div className='Post'>
        <Post/>
      </div>

      <div className='Tablas'>
        <Tablas/>
      </div>
      
      <div>
        <Pie/>
      </div>

    </div>
  );
}

export default App;
