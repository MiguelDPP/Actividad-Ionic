import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.page.html',
  styleUrls: ['./directory.page.scss'],
})
export class DirectoryPage implements OnInit {

  constructor() { }

  items: any[] = [];
  // Colores de forndo
  colors: string[] = [
    'f44336',
    'e91e63',
    '9c27b0',
    '673ab7',
    '3f51b5',
    '2196f3',
    '03a9f4',
  ];

  nameTemp: string = '';

  private generateItems() {

    for (let i = 1; i < 51; i++) {
      this.nameTemp = faker.name.firstName();
      this.items.push({
        id: i,
        name: this.nameTemp,
        number: faker.phone.phoneNumber(),
        image: "https://ui-avatars.com/api/?name="+this.nameTemp+"&background="+this.colors[Math.floor(Math.random() * this.colors.length)]+"&color=fff&size=128",
      });
    }
  }

  loadData(event: any) {
    setTimeout(() => {
      this.generateItems();

      (event as InfiniteScrollCustomEvent).target.complete();
    }, 1000);
  }

  ngOnInit() {
    this.generateItems();
  }

}
