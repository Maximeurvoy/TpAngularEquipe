import { Component, Input, OnInit } from '@angular/core';
import { Equipe } from '../Models/Equipe';
import { Equipeservice } from '../services/Equipeservice';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
  @Input() equipe:Equipe = new Equipe; // decorate the property with @Input()
  @Input() index:number = 0; // decorate the property with @Input()

  constructor(private service:Equipeservice){}

  ngOnInit(): void {
  }

  onDelete(index: number){
    this.service.delete(this.index);
  }
  onDeleteMembre(index :number){
    this.service.deleteMembre(index, this.index);
  }
}
