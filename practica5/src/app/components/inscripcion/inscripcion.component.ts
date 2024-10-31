import { Component, OnInit } from '@angular/core';
import { InscripcionService } from '../../services/inscripcion.service';
import { Inscripcion } from '../../models/inscripcion';
import { CouchdbService } from '../services/couchdb.service';
@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {
  inscripciones: Inscripcion[] = [];
  nuevaInscripcion: Inscripcion = { id: '', idCurso: '', idAspirante: '', fecha: new Date(), hora: '', valorCancelado: 0 };
  editandoInscripcion: Inscripcion | null = null;

  constructor(private inscripcionService: InscripcionService) {}

  ngOnInit(): void {
    this.obtenerInscripciones();
  }

  obtenerInscripciones(): void {
    this.inscripcionService.getInscripciones().subscribe(
      (data: any) => {
        this.inscripciones = data.rows.map((row: any) => row.doc);
      },
      (error) => console.error('Error al obtener inscripciones:', error)
    );
  }

  agregarInscripcion(): void {
    this.inscripcionService.addInscripcion(this.nuevaInscripcion).subscribe(
      () => {
        this.obtenerInscripciones();
        this.nuevaInscripcion = { id: '', idCurso: '', idAspirante: '', fecha: new Date(), hora: '', valorCancelado: 0 };
      },
      (error) => console.error('Error al agregar inscripción:', error)
    );
  }

  editarInscripcion(inscripcion: Inscripcion): void {
    this.editandoInscripcion = { ...inscripcion };
  }

  actualizarInscripcion(): void {
    if (this.editandoInscripcion) {
      this.inscripcionService.updateInscripcion(this.editandoInscripcion.id, this.editandoInscripcion).subscribe(
        () => {
          this.obtenerInscripciones();
          this.editandoInscripcion = null;
        },
        (error) => console.error('Error al actualizar inscripción:', error)
      );
    }
  }

  cancelarEdicion(): void {
    this.editandoInscripcion = null;
  }

  eliminarInscripcion(id: string, rev: string): void {
    this.inscripcionService.deleteInscripcion(id, rev).subscribe(
      () => this.obtenerInscripciones(),
      (error) => console.error('Error al eliminar inscripción:', error)
    );
  }
}
