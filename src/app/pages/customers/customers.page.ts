import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor() { }
  items: any[] = [];
  ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.items.push({
        id: i,
        name: faker.name.fullName(),
        email: faker.internet.email(),
        work: faker.name.jobTitle(),
      });
    }
  }
}
