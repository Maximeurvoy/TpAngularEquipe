import { Component } from '@angular/core';
import { Equipe } from './Models/Equipe';
import { Membre } from './Models/Membre';
import { Equipeservice } from './services/Equipeservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'equipe';

  equipes : Equipe[]=[]
  nomEquipe : string =""
  equipeMembreIndex : string =""
  nomMembre : string =""
  prenomMembre : string =""

  constructor(private service:Equipeservice){
    this.equipes = service.equipes
  }

  onAddEquipe(){
    this.service.onAddEquipe(this.nomEquipe)
    this.nomEquipe = ''
  }

  onAddMembre(){
    let newMembre = new Membre(this.nomMembre, this.prenomMembre)
    this.service.onAddMembre(parseInt(this.equipeMembreIndex) ,newMembre)

    this.equipeMembreIndex = ''
    this.nomMembre = ''
    this.prenomMembre = ''
  }
}
