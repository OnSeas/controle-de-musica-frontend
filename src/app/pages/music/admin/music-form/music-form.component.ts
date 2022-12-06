import {Component, OnInit, ViewChild} from '@angular/core';
import {MusicaService} from "../../shared/musica.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Musica} from "../../shared/Musica";

@Component({
  selector: 'app-music-form',
  templateUrl: './music-form.component.html',
  styleUrls: ['./music-form.component.scss']
})
export class MusicFormComponent implements OnInit {
  musica:Musica = new Musica();
  constructor(private musicaService: MusicaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //pegar na rota atual o prametro especificado na rota
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

  public salvar(musica:Musica){
    let acao="criada";

    if(musica.idMusica){
      acao = "alterada";
    }

    this.musicaService.salvar(musica).subscribe((musica)=>{
      console.log(musica);
      alert("Musica "+acao+" com sucesso!");
      this.router.navigate(['', 'admin', 'musica']) // <- Olhar isso sobre o caminho
    }, erro => {
      alert(erro?.error?.message);
      console.log(erro);
    })
  }
}
