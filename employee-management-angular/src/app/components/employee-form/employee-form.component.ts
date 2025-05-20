import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { MATERIAL_MODULES } from '../../shared/material';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MATERIAL_MODULES, RouterLink],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private employeeService = inject(EmployeeService);

  form = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    position: ['', Validators.required],
    salary: [0, [Validators.required, Validators.min(1)]]
  });

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.employeeService.getEmployee(id).subscribe(emp => this.form.patchValue(emp));
    }
  }

  submit() {
    if (this.form.invalid) return;

    const value = this.form.value as Employee;
    if (value.id) {
      this.employeeService.updateEmployee(value.id, value).subscribe(() => this.router.navigate(['/']));
    } else {
      this.employeeService.addEmployee(value).subscribe(() => this.router.navigate(['/']));
    }
  }
}
