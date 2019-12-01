import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { NewContactComponent } from './new-contact/new-contact.component';

import { MaterialDesignModule } from '../../vendors/material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ListContactComponent,
    NewContactComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
