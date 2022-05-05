import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as  Mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-mi-gestion',
  templateUrl: './mi-gestion.component.html',
  styleUrls: ['./mi-gestion.component.scss']
})
export class MiGestionComponent implements OnInit {

  private mapa!: Mapboxgl.Map;
  constructor() { }

  ngOnInit(): void {
    (Mapboxgl as any).accessToken = environment.mapboxApKey;
    this.mapa  = new Mapboxgl.Map({
      container: 'mapabox', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', 
      center: [ -58.527722422037925,-34.52147370936076],
      zoom: 16.6 // starting zoom
      });
  }

}
