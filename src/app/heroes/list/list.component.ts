import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public herosNames:string[]=['Spiderman','Ironman','Thor','Hulk','She-Hulk','Black Widow','Captain America'];
  public deleteHero?:string;
  removeLastHero():void{
    this.deleteHero =this.herosNames.pop();
  }
}
