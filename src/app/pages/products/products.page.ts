import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { InfiniteScrollCustomEvent, NavController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(private navController: NavController) { }

  goToDetailsPage() {
    this.navController.navigateForward('/about');
  }

  // api = "https://api.escuelajs.co/api/v1/products"

  productos:any[] = []

  // async ngOnInit() {
  //   const response = await fetch(this.api)
  //   const data = await response.json()
  //   this.productos = data
  // }
  private generateItems() {

    for (let i = 1; i < 10; i++) {
      this.productos.push({
        id: i,
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        description: faker.commerce.productDescription()
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
