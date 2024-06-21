import { Component, INJECTOR } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  
  info: Array<Info> =
  [
    new Info('Car','Some info about the biggest Car'),
    new Info('Ship', 'About the biggest Ship'),
    new Info('Plane', 'Its about the biggest Plane'),
    new Info('Hide', '')
  ];
  text: string = '';

  onSelect(item: Info)
  {
    this.text = item.desc;
  }
}
class Info
{
  name: string;
  desc: string;

  constructor(name: string, desc: string)
  {
    this.name = name;
    this.desc = desc;
  }
}