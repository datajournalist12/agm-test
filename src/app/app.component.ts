import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My AGM project';
  lat = 37.678418;
  lng = -89.809007;
  boolean: boolean = true;

  waypoints = [
    {"id":"1", "lat":37.0, "lng":-89.0},
    {"id":"2", "lat":37.1, "lng":-89.1},
    {"id":"3", "lat":37.8, "lng":-89.4}
  ]


}
