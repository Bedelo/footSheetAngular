import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../services/equipe.service';


@Component({
  selector: 'app-list-equipes',
  templateUrl: './list-equipes.component.html',
  styleUrls: ['./list-equipes.component.css']
})

export class ListEquipesComponent implements OnInit {

  titre : string = "global knowledge" //attribut

  nb : number = 0

  visible : boolean = false

  equipes : string[] = ['paris', 'lyon', 'marseille', 'nice']
  equipeFull : any = []
  joueurs : any = []
  teams : any 

  constructor(private service: EquipeService){}

  ngOnInit(): void {
    this.equipeFull = this.service.getEquipe()
    this.joueurs = this.service.getJoueur()

    //appel de la methode getListEquipe
    this.service.getListEquipes().subscribe(res => { //subscribe permet d'attendre jusqua recyuperation du resultat
      //console.log(res)
      this.teams = res
    })


  }

  increment(){
    this.nb++
  }

  display(){
    this.visible = !this.visible
  }

  refreshEquipe(){
    this.service.getListEquipes().subscribe(res => { //subscribe permet d'attendre jusqua recyuperation du resultat
      //console.log(res)
      this.teams = res
    })
  }

  deleteEquipe(team){
    this.service.deleteEquipe(team).subscribe(
      res => {
        this.refreshEquipe()
      }
    )
  }

}
