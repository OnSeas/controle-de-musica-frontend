import { Component, OnInit } from '@angular/core';
import {Musica} from "../shared/musica";
import {MusicaService} from "../shared/musica.service";

@Component({
  selector: 'app-musica-list',
  templateUrl: './musica-list.component.html',
  styleUrls: ['./musica-list.component.scss']
})
export class MusicaListComponent implements OnInit {
  musicas : Musica[] = [];

  constructor(private musicaService: MusicaService) { }

  ngOnInit(): void {
    this.musicaService.getMusicas().subscribe((musicas:Musica[]) =>{
      console.log("musica", musicas)
      this.musicas = musicas;
    })
  }

  confirmarRemocao(musica:Musica){
    let deleteConfirmMsg = "Tem certeza que deseja excluir a música " + musica.titulo + " do artista " + musica.artista + "?";
    if(confirm(deleteConfirmMsg)){
      this.musicaService.remover(musica.idMusica).subscribe((musica) => {
        let musicaIndex = this.musicas.findIndex( (value) => value.idMusica == musica.idMusica);
        this.musicas.splice(musicaIndex, 1);
        alert("A música foi excluída com sucesso!");
      }, erro => {
        alert("Erro ao excluir o música. Mensagem: "+erro?.error?.message);
      });
    }
  }

}
