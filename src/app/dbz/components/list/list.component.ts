import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {


  @Output()
  public onDeleteId:EventEmitter<string>= new EventEmitter();
  @Input()
  public charactersList: Character[] = [
    {
      name: 'Trunk',
      power: 10
    }
  ]
  onDeleteCharacter(id?:string): void {

    if(!id) return;
    console.log(id);
    this.onDeleteId.emit(id);
  }
}
