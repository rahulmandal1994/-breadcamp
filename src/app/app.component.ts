import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  ShowedIndex:number;
  array:any=[
    {text:'Home'},
    {text:'Home'},
    {text:'Pictures'},
    {text:'Summer'},
    {text:'Summer 15'},
    {text:"Italy"},
  ]
  ngOnInit(){
    //console.log("--LENTH--",ShowedIndex-3)
    this.ShowedIndex=this.array.length-3;
  }
  showAll(){
    this.ShowedIndex=0;
  }
}
