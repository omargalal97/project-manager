import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { managerGuard } from '../core/guards/manager/manager.guard';
import { employeeGuard } from '../core/guards/employee/employee.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'manager',canActivate:[managerGuard], loadChildren: () => import('../manager/manager.module').then(m => m.ManagerModule) },
    { path: 'employee',canActivate:[employeeGuard], loadChildren: () => import('../employee/employee.module').then(m => m.EmployeeModule) }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
