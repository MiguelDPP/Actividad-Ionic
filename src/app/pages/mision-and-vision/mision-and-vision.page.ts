import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mision-and-vision',
  templateUrl: './mision-and-vision.page.html',
  styleUrls: ['./mision-and-vision.page.scss'],
})
export class MisionAndVisionPage implements OnInit {

  constructor(private navController: NavController) { }

  goToDetailsPage() {
    this.navController.navigateForward('/about');
  }

  ngOnInit() {
  }

}
