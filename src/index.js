import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';



ReactDOM.render(<App />, 
document.getElementById('root'));






























// para hijos del componente se usa el children
// function Componente ({titulo , contenido }) {
  // const titulo = props.titulo;
  // const contenido = props.contenido;
//destructuring en js, lo de arriba es igual a lo de abajo..
 // const {titulo , contenido } = props; dentro de parentesis en componente se destructura

//   return (
//     <div className='contenedor'>
//       <h1>{titulo}</h1>
//       <p>{contenido}</p>
//     </div>
//   );
// }
