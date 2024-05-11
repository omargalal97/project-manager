import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SidebarComponent,
    NavbarComponent
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
