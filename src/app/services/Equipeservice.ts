import { Equipe } from "../Models/Equipe";
import { Membre } from "../Models/Membre";


export class Equipeservice{
equipes:Equipe[]= [];

  delete(i:number):void{
    this.equipes.splice(i,1)
  }

  onAddEquipe(nom:string){
    let equipeToAdd = new Equipe(nom)
    this.equipes.push(equipeToAdd)
  }

  onAddMembre(i:number, membre:Membre){
    this.equipes[i].membres.push(membre)
  }

  deleteMembre(i:number, iEquipe:number){
    this.equipes[iEquipe].membres.splice(i,1)
  }
}
