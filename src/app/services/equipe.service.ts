import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private baseUrl= "http://localhost:5000/equipes"

  private equipeFull : any = [
    {
      id: 1,
      nom: "psg",
      pays: "fr"
    },
    {
      id: 2,
      nom: "barça",
      pays: "es"
    },
    {
      id: 3,
      nom: "real",
      pays: "es"
    },
    {
      id: 4,
      nom: "juv",
      pays: "it"
    },
  ]

  private joueurs : any = [
    {
      id: 1,
      nom: "ney",
      numero: 10,
      poste: "attaquant"
    },
    {
      id: 2,
      nom: "messi",
      numero: 10,
      poste: "attaquant"
    },
    {
      id: 3,
      nom: "mbappe",
      numero: 7,
      poste: "attaquant"
    },
    {
      id: 4,
      nom: "toto",
      numero: 13,
      poste: "gardien"
    }
  ]

  constructor(private Http: HttpClient) { }

  getEquipe() { return this.equipeFull} 
  getJoueur() { return this.joueurs}

  //recuperation des equipes depuis le backend node js express
  getListEquipes(){return this.Http.get(this.baseUrl)}

  //ajouter une nouvelle equipe
  addEquipe(obj:any){
    return this.Http.post(this.baseUrl, obj)
  }

  //methode de suppr dunu equipe
  deleteEquipe(obj:any){
    return this.Http.delete(this.baseUrl+'/'+ obj['id'])
  }
}
