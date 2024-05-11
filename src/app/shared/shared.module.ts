import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule

  ],
  declarations: [
    SidebarComponent,
    NavbarComponent
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
