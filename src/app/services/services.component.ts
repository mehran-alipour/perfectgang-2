import { Component, OnInit, Output } from '@angular/core';


export interface Details{
  title: string;
  description: string;
  tasks: string[];
  img: string;
}

export interface Services {
  services:{
    residential: Details;
    commercial: Details;
  }
}


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  @Output() servicesObj: Services = {
    services:{
      residential:{
        title: "Residential",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, adipisci excepturi in dicta provident, doloremque totam consectetur enim temporibus optio maxime veniam, eos reiciendis rem. Soluta quas qui vitae repellat fugiat, laborum dicta dolor tempore, tempora eius placeat delectus modi.",
        tasks: ["painting","something", "other thing"],
        img: '../assets/img/residential.jpg',
      },
      commercial:{
        title: "Commercial",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, adipisci excepturi in dicta provident, doloremque totam consectetur enim temporibus optio maxime veniam, eos reiciendis rem. Soluta quas qui vitae repellat fugiat, laborum dicta dolor tempore, tempora eius placeat delectus modi.",
        tasks: ["door instalation", "security camera"],
        img: '../assets/img/commercial.jpg',
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
