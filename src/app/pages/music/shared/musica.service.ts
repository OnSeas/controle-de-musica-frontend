import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Musica} from "./Musica";

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  urlBackend: String = "http://localhost:8081"

  constructor(private http: HttpClient) { }

  public getMusicas(): Observable<Musica[]>{
    return this.http.get<Musica[]>(this.urlBackend+"/musica");
  }

  public salvar(musica: Musica): Observable<Musica>{
    if(!musica.idMusica){
      return this.http.post<Musica>(this.urlBackend+"/musica", musica);
    }else{
      return this.http.patch<Musica>(this.urlBackend+"/musica/"+ musica.idMusica, musica);
    }
  }

  public getByID(id: number): Observable<Musica>{
    return this.http.get<Musica>(this.urlBackend+"/musica/" + id);
  }

  public remover(id: number): Observable<Musica>{
    return this.http.delete<Musica>(this.urlBackend+"/musica/"+id);
  }
}
