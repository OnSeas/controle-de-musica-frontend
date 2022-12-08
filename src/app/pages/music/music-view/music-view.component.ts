import { Component, OnInit } from '@angular/core';
import {Musica} from "../shared/Musica";
import {MusicaService} from "../shared/musica.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-music-view',
  templateUrl: './music-view.component.html',
  styleUrls: ['./music-view.component.scss']
})
export class MusicViewComponent implements OnInit {
  musica:Musica = new Musica();

  constructor(private musicaService: MusicaService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //pegar na rota atual o parametro especificado na rota
    if(id){
      this.musicaService.getByID(parseInt(id)).subscribe( (musica) => {
        if(musica){
          this.musica = musica;
        }
      }, erro => {
        alert("Erro ao buscar a musica "+this.musica.titulo);
      });
    }
  }

}
