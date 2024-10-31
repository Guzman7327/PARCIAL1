import { Component, OnInit } from '@angular/core';
import { AspiranteService } from '../../services/aspirante.service';
import { Aspirante } from '../../models/aspirante';
import { CouchdbService } from '../services/couchdb.service';
@Component({
  selector: 'app-aspirante',
  templateUrl: './aspirante.component.html',
  styleUrls: ['./aspirante.component.css']
})
export class AspiranteComponent implements OnInit {
  aspirantes: Aspirante[] = [];
  nuevoAspirante: Aspirante = { id: '', nombre: '', identificacion: '' };
  editandoAspirante: Aspirante | null = null;

  constructor(private aspiranteService: AspiranteService) {}

  ngOnInit(): void {
    this.obtenerAspirantes();
  }

  obtenerAspirantes(): void {
    this.aspiranteService.getAspirantes().subscribe(
      (data: any) => {
        this.aspirantes = data.rows.map((row: any) => row.doc);
      },
      (error) => console.error('Error al obtener aspirantes:', error)
    );
  }

  agregarAspirante(): void {
    this.aspiranteService.addAspirante(this.nuevoAspirante).subscribe(
      () => {
        this.obtenerAspirantes();
        this.nuevoAspirante = { id: '', nombre: '', identificacion: '' };
      },
      (error) => console.error('Error al agregar aspirante:', error)
    );
  }

  editarAspirante(aspirante: Aspirante): void {
    this.editandoAspirante = { ...aspirante };
  }

  actualizarAspirante(): void {
    if (this.editandoAspirante) {
      this.aspiranteService.updateAspirante(this.editandoAspirante.id, this.editandoAspirante).subscribe(
        () => {
          this.obtenerAspirantes();
          this.editandoAspirante = null;
        },
        (error) => console.error('Error al actualizar aspirante:', error)
      );
    }
  }

  cancelarEdicion(): void {
    this.editandoAspirante = null;
  }

  eliminarAspirante(id: string, rev: string): void {
    this.aspiranteService.deleteAspirante(id, rev).subscribe(
      () => this.obtenerAspirantes(),
      (error) => console.error('Error al eliminar aspirante:', error)
    );
  }
}
