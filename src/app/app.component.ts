import { Component } from '@angular/core';
import { Equipe } from './Models/Equipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'equipe';

  equipes : Equipe[]=[]
  nomEquipe : string =""

  onAddEquipe(){
    let equipeToAdd = new Equipe(this.nomEquipe)
    this.equipes.push(equipeToAdd)
    this.nomEquipe = ''
  }
}
