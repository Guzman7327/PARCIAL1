// filtrar.ts
import { Curso, Aspirante, Inscripcion } from './interfaces';
import { cursos, aspirantes, inscripciones } from './datos';
import { generarTablaInscripciones } from './tablas';

// Filtrar inscripciones por nombre de aspirante
export function filtrarInscripciones() {
  const filtro = (document.getElementById("filtro") as HTMLInputElement).value.toLowerCase();
  const aspirantesFiltrados = aspirantes.filter(aspirante => aspirante.nombre.toLowerCase().includes(filtro));
  
  const inscripcionesFiltradas = inscripciones.filter(inscripcion => 
    aspirantesFiltrados.some(aspirante => aspirante.id === inscripcion.idAspirante)
  );
  
  generarTablaInscripciones(inscripcionesFiltradas);
}
