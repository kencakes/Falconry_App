import {Component, OnInit} from '@angular/core';
import accipitridae from '../../assets/data/accipitridae.json';
import falconidae from '../../assets/data/falconidae.json';
import strigiformes from '../../assets/data/strigiformes.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  // Props
  searchTerm: string;

  data = [
    {
      title: 'Falconidae',
      birds: falconidae
    },
    {
      title: 'Accipitridae',
      birds: accipitridae
    },
    {
      title: 'Strigiformes',
      birds: strigiformes
    }
  ];

  constructor() {}

  // Filtert op naam
}
