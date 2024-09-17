// datos.ts
import { Curso, Aspirante, Inscripcion } from './interfaces';

export const cursos: Curso[] = [
  { id: 1, descripcion: "Curso de Matemáticas", fechaInicio: "2024-01-10" },
  { id: 2, descripcion: "Curso de Física", fechaInicio: "2024-02-15" },
  { id: 3, descripcion: "Curso de Programación", fechaInicio: "2024-03-01" },
  { id: 4, descripcion: "Curso de Historia", fechaInicio: "2024-04-20" },
  { id: 5, descripcion: "Curso de Química", fechaInicio: "2024-05-05" }
];

export const aspirantes: Aspirante[] = [
  { id: 1, nombre: "Juan Pérez", identificacion: "12345678" },
  { id: 2, nombre: "Ana Gómez", identificacion: "23456789" },
  { id: 3, nombre: "Luis Torres", identificacion: "34567890" },
  { id: 4, nombre: "María López", identificacion: "45678901" },
  { id: 5, nombre: "Carlos Díaz", identificacion: "56789012" }
];

export const inscripciones: Inscripcion[] = [
  { id: 1, idCurso: 1, idAspirante: 1, fecha: "2024-01-05", hora: "10:00", valorCancelado: 100 },
  { id: 2, idCurso: 2, idAspirante: 2, fecha: "2024-02-01", hora: "11:00", valorCancelado: 150 },
  { id: 3, idCurso: 3, idAspirante: 3, fecha: "2024-02-28", hora: "12:00", valorCancelado: 200 },
  { id: 4, idCurso: 4, idAspirante: 4, fecha: "2024-04-15", hora: "13:00", valorCancelado: 250 },
  { id: 5, idCurso: 5, idAspirante: 5, fecha: "2024-04-30", hora: "14:00", valorCancelado: 300 }
];

