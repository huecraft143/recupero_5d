import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  stringa = ""
  constructor(private dataService: DataService) {
    this.stringa = this.dataService.sharedData
   }
}
