import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Musica} from "./musica";

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  urlBackend: String = "http://localhost:8081"

  constructor(private http: HttpClient) { }

  public getMusicas(): Observable<Musica[]>{
    return this.http.get<Musica[]>(this.urlBackend+"/musica")
  }


  public remover(id: number): Observable<Musica>{
    return this.http.delete<Musica>(this.urlBackend+"/musica/"+id);
  }
}
