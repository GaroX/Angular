
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../schemes/contact';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = environment.api;

  constructor(private httpClient: HttpClient) { }

  public getContacts() {
    return this.httpClient.get<Contact[]>(`${this.apiURL}/contacts`);
  }

  public createContact(contact: any) {
    return this.httpClient.post(`${this.apiURL}/contacts`, contact);
  }
}