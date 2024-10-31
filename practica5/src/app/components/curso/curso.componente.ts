import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../models/curso';
import { CouchdbService } from '../services/couchdb.service';
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cursos: Curso[] = [];
  nuevoCurso: Curso = { id: '', descripcion: '', fechaInicio: new Date() };
  editandoCurso: Curso | null = null;

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.obtenerCursos();
  }

  obtenerCursos(): void {
    this.cursoService.getCursos().subscribe(
      (data: any) => {
        this.cursos = data.rows.map((row: any) => row.doc);
      },
      (error) => console.error('Error al obtener cursos:', error)
    );
  }

  agregarCurso(): void {
    this.cursoService.addCurso(this.nuevoCurso).subscribe(
      () => {
        this.obtenerCursos();
        this.nuevoCurso = { id: '', descripcion: '', fechaInicio: new Date() };
      },
      (error) => console.error('Error al agregar curso:', error)
    );
  }

  editarCurso(curso: Curso): void {
    this.editandoCurso = { ...curso };
  }

  actualizarCurso(): void {
    if (this.editandoCurso) {
      this.cursoService.updateCurso(this.editandoCurso.id, this.editandoCurso).subscribe(
        () => {
          this.obtenerCursos();
          this.editandoCurso = null;
        },
        (error) => console.error('Error al actualizar curso:', error)
      );
    }
  }

  cancelarEdicion(): void {
    this.editandoCurso = null;
  }

  eliminarCurso(id: string, rev: string): void {
    this.cursoService.deleteCurso(id, rev).subscribe(
      () => this.obtenerCursos(),
      (error) => console.error('Error al eliminar curso:', error)
    );
  }
}
