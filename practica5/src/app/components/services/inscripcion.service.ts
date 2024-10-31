import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscripcion } from '../models/inscripcion';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  private apiUrl = 'http://localhost:5984/inscripciones'; // URL de tu base de datos CouchDB

  constructor(private http: HttpClient) {}

  getInscripciones(): Observable<any> {
    return this.http.get(this.apiUrl + '/_all_docs?include_docs=true');
  }

  addInscripcion(inscripcion: Inscripcion): Observable<any> {
    return this.http.post(this.apiUrl, inscripcion);
  }

  updateInscripcion(id: string, inscripcion: Inscripcion): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, inscripcion);
  }

  deleteInscripcion(id: string, rev: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}?rev=${rev}`);
  }
}
