import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) {
    this.createContactForm();
  }

  ngOnInit() {
  }
  contactForm: FormGroup;

  createContactForm() {
    this.contactForm = this.formBuilder.group({
      fullname: [''],
      email: [''],
      phone: ['']
    });
  }

  onSubmit() {
    this.apiService.createContact(this.contactForm.value).subscribe((res) => {
      this.router.navigate(['/list-contact']);
    });
  }

}