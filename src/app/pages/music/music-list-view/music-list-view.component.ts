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

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private musicaService: MusicaService) { }

  ngOnInit(): void {
    this.musicaService.getMusicas().subscribe((musicas:Musica[]) =>{
      console.log("musica", musicas);
      this.dataSource.data = musicas; // Colocando as musicas no dataSouce
      this.dataSource.paginator = this.paginator;
    })
  }

  favoritar(musica:Musica){
    this.musicaService.favoritar(musica.idMusica).subscribe(() =>{
      console.log("favorita: "+musica.favorito);
      alert("Música favoritada!");
    }, erro=>{
      alert("Erro ao favoritar música. Mensagem: "+erro?.error?.message);
    })
  }

}
