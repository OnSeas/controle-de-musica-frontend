import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Musica} from "../shared/Musica";
import {MatPaginator} from "@angular/material/paginator";
import {MusicaService} from "../shared/musica.service";

@Component({
  selector: 'app-music-list-view',
  templateUrl: './music-list-view.component.html',
  styleUrls: ['./music-list-view.component.scss']
})
export class MusicListViewComponent implements OnInit {
  dataSource = new MatTableDataSource<Musica>;

  displayedColumns: string[] = ['posicao', 'titulo', 'artista', 'acao'];

  constructor(private musicaService: MusicaService) { }

  ngOnInit(): void {
    this.musicaService.getMusicas().subscribe((musicas:Musica[]) =>{
      console.log("musica", musicas);
      this.dataSource.data = musicas; // Colocando as musicas no dataSouce
    })
  }

  refresh(){
    this.musicaService.getMusicas().subscribe((musicas:Musica[]) =>{
      console.log("musica", musicas);
      this.dataSource.data = musicas; // Colocando as musicas no dataSouce
    })
  }

  favoritar(musica:Musica){
    let favConfirmMsg = "Deseja adcionar a música as favoritas?";
    if(confirm(favConfirmMsg)) {
      this.musicaService.favoritar(musica.idMusica).subscribe(() =>{
        this.refresh();
        alert("Música favoritada!");
      }, erro=>{
        alert("Erro ao favoritar música. Mensagem: "+erro?.error?.message);
      })
    }
  }

  desFavoritar(musica:Musica){
    let UnfavConfirmMsg = "Deseja tirar a música das favoritas?";
    if(confirm(UnfavConfirmMsg)) {
      this.musicaService.desFavoritar(musica.idMusica).subscribe(() => {
        this.refresh();
        alert("Música removida dos favoritos!");
      }, erro => {
        alert("Erro ao remover música dos favoritos. Mensagem: " + erro?.error?.message);
      })
    }
  }

}
