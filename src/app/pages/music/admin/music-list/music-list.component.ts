import {Component, OnInit, ViewChild} from '@angular/core';
import {MusicaService} from "../../shared/musica.service";
import {Musica} from "../../shared/Musica";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {

  dataSource = new MatTableDataSource<Musica>;

  displayedColumns: string[] = ['posicao', 'titulo', 'artista', 'acao'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator; //

  constructor(private musicaService: MusicaService) { }

  ngOnInit(): void {
    this.musicaService.getMusicas().subscribe((musicas:Musica[]) =>{
      console.log("musica", musicas);
      this.dataSource.data = musicas; // Colocando as musicas no dataSouce
      this.dataSource.paginator = this.paginator;
    })
  }

  confirmarRemocao(musica:Musica){
    let deleteConfirmMsg = "Tem certeza que deseja excluir a música " + musica.titulo + " do artista " + musica.artista + "?";
    if(confirm(deleteConfirmMsg)){
      this.musicaService.remover(musica.idMusica).subscribe(() => {
        // Remove do array dataSource
        this.dataSource.data = this.dataSource.data.filter((element) => element.idMusica !== musica.idMusica);
        alert("A música foi excluída com sucesso!");
      }, erro => {
        alert("Erro ao excluir o música. Mensagem: "+erro?.error?.message);
      });
    }
  }

}
