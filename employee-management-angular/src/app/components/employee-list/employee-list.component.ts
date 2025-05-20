import { AfterViewInit, Component, ViewChild, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { RouterModule } from '@angular/router';
import { MATERIAL_MODULES } from '../../shared/material';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MATERIAL_MODULES],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  private employeeService = inject(EmployeeService);
  displayedColumns: string[] = ['id', 'name', 'position', 'salary', 'actions'];
  dataSource = new MatTableDataSource<Employee>();

  constructor() {
    this.employeeService.employees$.subscribe(employees => {
      this.dataSource.data = employees;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = (data: Employee, filter: string) => {
      const lowerFilter = filter.trim().toLowerCase();
      return data.name.toLowerCase().includes(lowerFilter) || data.position.toLowerCase().includes(lowerFilter);
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe();
    }
  }
}