import React, { Component } from 'react'
import '../Style/Login.css'
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:3002/usuarios";
const cookies= new Cookies();

export default class 
Login extends Component {

    state= {
        form: {
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
        form:{
            ...this.state.form,
            [e.target.name]: e.target.value
            }
        });
    console.log(this.state.form);
    }

  iniciarSesion=async()=>{
    await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
    .then(response=>{
      console.log(response.data);
      return response.data;
    })

    .then(response=>{
      if(response.length>0){
          var respuesta=response[0];
          cookies.set('id', respuesta.id, {path:"/"});
          cookies.set('apellido_paterno', respuesta.apellido_paterno, {path:"/"});
          cookies.set('apellido_materno', respuesta.materno, {path:"/"});
          cookies.set('nombre', respuesta.nombre, {path:"/"});
          cookies.set('username', respuesta.username, {path:"/"});
          alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);

      }else {alert('El usuario o la contraseña son incorrectas')
        } 
  })

    .catch(error=>{
      console.log(error);
    })
  }

  render() {
    return (
      <div className='Contenedor_login'>

            <div className='SubContenedor_login'>
                <label className='datos'>Login: </label>
                <input type="text" className='formcontrol' name="username" placeholder="usuario" onChange={this.handleChange} ></input>
                <input type="password" className='formcontrol' name="password" placeholder='password' onChange={this.handleChange} ></input>
                <button className='button' onClick={()=> this.iniciarSesion()} >Iniciar</button>
            </div>

      </div>
    )
  }
}
