/**
 * @param {informacion} datos nesita pasar los datos de la api
 * @param {FormaDeMostrar} acomodarLosDatos necesitas una forma de order los datos
 * @param {ValidarFormulario} vlidarEnvio necesits validar los datos y que la pagina no se reinicie
 */

/*llamando a la tabla */
const tabla = document.getElementById("tablas");

/*mostra los datos */
export const crearT = (nombre, correo, telefono, cuidad) => {
  const crearTr = document.createElement("tr");
  /*class al elemento*/

  /*este tiene nombre*/
  for (let i = 0; i < 1; i++) {
    const crearTd = document.createElement("td");
    crearTd.setAttribute("class", "separacion");
    crearTr.appendChild(crearTd);
    crearTd.textContent = nombre;
  }

  /*este tiene telefono*/
  for (let i = 0; i < 1; i++) {
    const crearTd2 = document.createElement("td");
    crearTd2.setAttribute("class", "separacion");
    crearTd2.textContent = telefono;
    crearTr.appendChild(crearTd2);
  }

  /*este tiene correo*/
  for (let i = 0; i < 1; i++) {
    const crearTd3 = document.createElement("td");
    crearTd3.setAttribute("class", "separacion");
    crearTd3.textContent = correo;
    crearTr.appendChild(crearTd3);
  }

  /*este tiene cuidad*/
  for (let i = 0; i < 1; i++) {
    const crearTd4 = document.createElement("td");
    crearTd4.setAttribute("class", "separacion");
    crearTd4.textContent = cuidad;
    crearTr.appendChild(crearTd4);
  }

  tabla.appendChild(crearTr);
};

import { muestra } from "./main.js";

/*boton para hacionar*/
const btn = document.getElementById("btn");
btn.addEventListener("click",muestra);

