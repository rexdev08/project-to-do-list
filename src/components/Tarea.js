import React from "react";
import "../styles/Tarea.css"
import { AiOutlineCloseCircle } from "react-icons/ai";


const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
  return (
    <div className={completada ? "tareas completada" : "tareas"}>
      <div
        onClick={() => completarTarea(id)}
        className="tareas__texto">
        {texto}
      </div>
      <div
        onClick={() => eliminarTarea(id)}
        className="tareas__iconos-container">
        <AiOutlineCloseCircle className="tareas__icono" />
      </div>
    </div>
  )
}

export default Tarea 