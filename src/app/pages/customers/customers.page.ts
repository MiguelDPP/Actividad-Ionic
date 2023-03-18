import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(private navController: NavController) { }
  items: any[] = [];

  goToDetailsPage() {
    this.navController.navigateForward('/about');
  }

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
