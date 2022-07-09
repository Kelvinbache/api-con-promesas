/**
 * @param {api} llamando esta llamadon la infarmacion
 * @param {Promise} esta mostrando los datos de la promesa
 * @param {evaluarLosDatos}valuar hacer una evaluacion de los datos
 * @param {Array}aregloDeObjectos serar los datos mediante un arrglo de objectos
 * */

import { crearT } from "./index.js";

 export const muestra = async () => {
  const api = await fetch("https://jsonplaceholder.typicode.com/users/");
  const jason = api.json();

  new Promise((resolve, reject) => {
    /*esta validando el estatus de conexion */
    if (api.status === 200) resolve(jason);
    if (api.status === 400) reject(`hay problemas de conexion ${api.status}`);
  })
.then((mostra) => mostra.forEach( elemeto => {
      objectos(elemeto);
}))
    .catch((erro) => console.log(erro));
};

/*almacen de datos*/
const objectos = (datos)=> {
    const array = {
      datosTodos:datos,  
      nombre: datos.name,
      telefono: datos.phone,
      correo: datos.email,
      cuida:  datos.address.city 
   };
   return crearT(array.nombre,array.correo,array.telefono,array.cuida);   
}

