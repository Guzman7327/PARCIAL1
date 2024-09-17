export interface Curso {
  id: number;
  descripcion: string;
  fechaInicio: string;
}

export interface Aspirante {
  id: number;
  nombre: string;
  identificacion: string;
}

export interface Inscripcion {
  id: number;
  idCurso: number;
  idAspirante: number;
  fecha: string;
  hora: string;
  valorCancelado: number;
}

function validarInscripcion(inscripcion: Inscripcion, cursos: Curso[], aspirantes: Aspirante[]): boolean {
  const cursoValido = cursos.some(curso => curso.id === inscripcion.idCurso);
  const aspiranteValido = aspirantes.some(aspirante => aspirante.id === inscripcion.idAspirante);
  return cursoValido && aspiranteValido;
}

function cursosDeAspirante(idAspirante: number, inscripciones: Inscripcion[], cursos: Curso[]): Curso[] {
  const idsCursos = inscripciones.filter(inscripcion => inscripcion.idAspirante === idAspirante).map(inscripcion => inscripcion.idCurso);
  return cursos.filter(curso => idsCursos.includes(curso.id));
}
