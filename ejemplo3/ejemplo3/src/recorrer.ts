// recorrer.ts
import { Curso, Aspirante, Inscripcion } from './interfaces';
import { cursos, aspirantes, inscripciones } from './datos';

// for..of
for (const curso of cursos) {
  console.log(`Curso: ${curso.descripcion}`);
}

for (const aspirante of aspirantes) {
  console.log(`Aspirante: ${aspirante.nombre}`);
}

for (const inscripcion of inscripciones) {
  console.log(`Inscripción: Curso ID ${inscripcion.idCurso}, Aspirante ID ${inscripcion.idAspirante}`);
}

// for..in
for (const index in cursos) {
  console.log(`Curso: ${cursos[index].descripcion}`);
}

for (const index in aspirantes) {
  console.log(`Aspirante: ${aspirantes[index].nombre}`);
}

for (const index in inscripciones) {
  console.log(`Inscripción: Curso ID ${inscripciones[index].idCurso}, Aspirante ID ${inscripciones[index].idAspirante}`);
}

// forEach
cursos.forEach(curso => {
  console.log(`Curso: ${curso.descripcion}`);
});

aspirantes.forEach(aspirante => {
  console.log(`Aspirante: ${aspirante.nombre}`);
});

inscripciones.forEach(inscripcion => {
  console.log(`Inscripción: Curso ID ${inscripcion.idCurso}, Aspirante ID ${inscripcion.idAspirante}`);
});
