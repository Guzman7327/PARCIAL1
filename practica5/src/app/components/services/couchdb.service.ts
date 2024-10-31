import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouchdbService {
  private baseUrl: string = 'http://localhost:5984'; // URL de CouchDB

  constructor(private http: HttpClient) {}

  // Método para obtener todos los documentos de una base de datos
  getAllDocs(database: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${database}/_all_docs?include_docs=true`);
  }

  // Método para agregar un nuevo documento
  addDoc(database: string, doc: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${database}`, doc, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Método para actualizar un documento
  updateDoc(database: string, docId: string, doc: any, rev: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${database}/${docId}?rev=${rev}`, doc, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Método para eliminar un documento
  deleteDoc(database: string, docId: string, rev: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${database}/${docId}?rev=${rev}`);
  }
}
