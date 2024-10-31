import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aspirante } from '../models/aspirante';

@Injectable({
  providedIn: 'root'
})
export class AspiranteService {
  private apiUrl = 'http://localhost:5984/aspirantes'; // URL de tu base de datos CouchDB

  constructor(private http: HttpClient) {}

  getAspirantes(): Observable<any> {
    return this.http.get(this.apiUrl + '/_all_docs?include_docs=true');
  }

  addAspirante(aspirante: Aspirante): Observable<any> {
    return this.http.post(this.apiUrl, aspirante);
  }

  updateAspirante(id: string, aspirante: Aspirante): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, aspirante);
  }

  deleteAspirante(id: string, rev: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}?rev=${rev}`);
  }
}
