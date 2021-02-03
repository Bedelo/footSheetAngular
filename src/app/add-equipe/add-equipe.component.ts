import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../services/equipe.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {

  ///Attribut de l'equipe

  public submit: boolean = false
  public iden: number
  public name: string
  public country: string

  constructor(private service: EquipeService){}

  ngOnInit(): void {
  }

createEquipe(data){
  alert(data.value.iden+" "+data.value.name+" "+data.value.country)

  //console.log(data.value.iden+" "+data.value.name+" "+data.value.country)

  //next step appel service , envoie donne formulaire
  this.service.addEquipe({
    id: data.value.iden,
    name: data.value.name,
    country: data.value.country
  }).subscribe(
    res => console.log(res, + " Insertion reussi!")
  )
  this.submit = !this.submit

}

}
