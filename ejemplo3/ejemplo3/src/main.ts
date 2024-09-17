import './style.css';
import { Curso, Aspirante, Inscripcion } from './interfaces'; 
import { cursos, aspirantes, inscripciones } from './datos';   

// Función para generar tabla de cursos
export function generarTablaCursos() {
  let html = "<tr><th>ID</th><th>Descripción</th><th>Fecha de Inicio</th></tr>";
  cursos.forEach(curso => {
    html += `<tr><td>${curso.id}</td><td>${curso.descripcion}</td><td>${curso.fechaInicio}</td></tr>`;
  });
  document.getElementById("cursosTable")!.innerHTML = html;
}

// Función para generar tabla de aspirantes
export function generarTablaAspirantes() {
  let html = "<tr><th>ID</th><th>Nombre</th><th>Identificación</th></tr>";
  aspirantes.forEach(aspirante => {
    html += `<tr><td>${aspirante.id}</td><td>${aspirante.nombre}</td><td>${aspirante.identificacion}</td></tr>`;
  });
  document.getElementById("aspirantesTable")!.innerHTML = html;
}

// Función para generar tabla de inscripciones
export function generarTablaInscripciones(inscripcionesFiltradas = inscripciones) {
  let html = "<tr><th>ID</th><th>ID Curso</th><th>ID Aspirante</th><th>Fecha</th><th>Hora</th><th>Valor Cancelado</th></tr>";
  inscripcionesFiltradas.forEach(inscripcion => {
    html += `<tr><td>${inscripcion.id}</td><td>${inscripcion.idCurso}</td><td>${inscripcion.idAspirante}</td><td>${inscripcion.fecha}</td><td>${inscripcion.hora}</td><td>${inscripcion.valorCancelado}</td></tr>`;
  });
  document.getElementById("inscripcionesTable")!.innerHTML = html;
}

// Filtrar inscripciones por nombre de aspirante
export function filtrarInscripciones() {
  const filtro = (document.getElementById("filtro") as HTMLInputElement).value.toLowerCase();
  const aspirantesFiltrados = aspirantes.filter(aspirante => aspirante.nombre.toLowerCase().includes(filtro));
  
  const inscripcionesFiltradas = inscripciones.filter(inscripcion => 
    aspirantesFiltrados.some(aspirante => aspirante.id === inscripcion.idAspirante)
  );
  
  generarTablaInscripciones(inscripcionesFiltradas);
}

window.onload = () => {
  generarTablaCursos();
  generarTablaAspirantes();
  generarTablaInscripciones();
};
