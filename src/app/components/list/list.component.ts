import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public episodes = [
    {
        "id": 365,
        "name": "Cuidando das finan\u00e7as pessoais com Sarah Gon\u00e7alves",
        "duration": 1258,
        "episodeNumber": 1,
        "cover": "https:\/\/api-frontend-test.brlogic.com\/podcast\/episodes\/365\/cover.jpeg",
        "details": "https:\/\/api-frontend-test.brlogic.com\/podcast\/episodes\/365\/details.json"
    },
    {
        "id": 429,
        "name": "Produtividade no home office",
        "duration": 1125,
        "episodeNumber": 2,
        "cover": "https:\/\/api-frontend-test.brlogic.com\/podcast\/episodes\/429\/cover.jpeg",
        "details": "https:\/\/api-frontend-test.brlogic.com\/podcast\/episodes\/429\/details.json"
    },
    {
        "id": 687,
        "name": "Intelig\u00eancia artificial nas nossas casas",
        "duration": 1359,
        "episodeNumber": 3,
        "cover": "https:\/\/api-frontend-test.brlogic.com\/podcast\/episodes\/687\/cover.jpeg",
        "details": "https:\/\/api-frontend-test.brlogic.com\/podcast\/episodes\/687\/details.json"
    },
    {
        "id": 982,
        "name": "Mobilidade urbana e tecnologia",
        "duration": 1456,
        "episodeNumber": 4,
        "cover": "https:\/\/api-frontend-test.brlogic.com\/podcast\/episodes\/982\/cover.jpeg",
        "details": "https:\/\/api-frontend-test.brlogic.com\/podcast\/episodes\/982\/details.json"
    },
    {
        "id": 1059,
        "name": "Privacidade na Internet",
        "duration": 982,
        "episodeNumber": 5,
        "cover": "https:\/\/api-frontend-test.brlogic.com\/podcast\/episodes\/1059\/cover.jpeg",
        "details": "https:\/\/api-frontend-test.brlogic.com\/podcast\/episodes\/1059\/details.json"
    },
    {
        "id": 2361,
        "name": "Fim do caminho",
        "duration": 595,
        "episodeNumber": 6,
        "cover": "https:\/\/api-frontend-test.brlogic.com\/podcast\/episodes\/2361\/cover.jpeg",
        "details": "https:\/\/api-frontend-test.brlogic.com\/podcast\/episodes\/2361\/details.json"
    }
]
  
  constructor() { }

  ngOnInit(): void {
  }

}