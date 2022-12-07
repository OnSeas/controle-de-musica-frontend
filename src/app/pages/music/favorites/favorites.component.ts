import { Component, OnInit } from '@angular/core';
import {Musica} from "../shared/Musica";
import {MatTableDataSource} from "@angular/material/table";
import {MusicaService} from "../shared/musica.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  dataSource = new MatTableDataSource<Musica>;

  displayedColumns: string[] = ['posicao', 'titulo', 'artista', 'acao'];

  constructor(private musicaService: MusicaService) { }

  ngOnInit(): void {
    this.musicaService.getMusicasFav().subscribe((musicas:Musica[]) =>{
      console.log("musica", musicas);
      this.dataSource.data = musicas; // Colocando as musicas no dataSouce
    })
  }

  desFavoritar(musica:Musica){
    let UnfavConfirmMsg = "Deseja tirar a música das favoritas?";
    if(confirm(UnfavConfirmMsg)) {
      this.musicaService.desFavoritar(musica.idMusica).subscribe(() => {
        alert("Música removida dos favoritos!");
      }, erro => {
        alert("Erro ao remover música dos favoritos. Mensagem: " + erro?.error?.message);
      })
    }
  }

}
