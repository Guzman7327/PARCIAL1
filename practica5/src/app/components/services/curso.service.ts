import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://localhost:5984/cursos'; // URL de tu base de datos CouchDB

  constructor(private http: HttpClient) {}

  getCursos(): Observable<any> {
    return this.http.get(this.apiUrl + '/_all_docs?include_docs=true');
  }

  addCurso(curso: Curso): Observable<any> {
    return this.http.post(this.apiUrl, curso);
  }

  updateCurso(id: string, curso: Curso): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, curso);
  }

  deleteCurso(id: string, rev: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}?rev=${rev}`);
  }
}
