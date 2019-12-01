import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {
  contacts = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getContacts().subscribe((res) => this.contacts = res);
  }

}
