import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public description:string = "Somos um grupo de amigos que gosta de se reunir e trocar ideias sobre como o mundo está transitando entre o antigo e o novo e tudo o que está mudando. Falamos sobre tecnologia, trabalho, lazer e nerdices."

  constructor() { }

  ngOnInit(): void {
  }

}
