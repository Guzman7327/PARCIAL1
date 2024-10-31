import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './components/curso/curso.component';
import { AspiranteComponent } from './components/aspirante/aspirante.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';

const routes: Routes = [
  { path: 'cursos', component: CursoComponent },
  { path: 'aspirantes', component: AspiranteComponent },
  { path: 'inscripciones', component: InscripcionComponent },
  { path: '', redirectTo: '/cursos', pathMatch: 'full' } // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
