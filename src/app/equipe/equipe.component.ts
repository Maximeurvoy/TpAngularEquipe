import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
  @Input() name:string = ''; // decorate the property with @Input()
  @Input() index:number = 0; // decorate the property with @Input()

  constructor() { }

  ngOnInit(): void {
  }

}
