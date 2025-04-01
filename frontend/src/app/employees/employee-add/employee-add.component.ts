import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GraphqlService } from '../../services/graphql.service';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent],
})
export class EmployeeAddComponent {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gql: GraphqlService,
    protected router: Router
  ) {
    this.employeeForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      designation: ['', Validators.required],
      salary: [0, [Validators.required, Validators.min(1000)]],
      department: ['', Validators.required],
      date_of_joining: ['', Validators.required],
      employee_photo: [''] // Optional for now
    });
  }

  photoPreview: string | null = null;



  updatePreview() {
    const url = this.employeeForm.get('employee_photo')?.value;
    this.photoPreview = url && url.trim() !== '' ? url : null;
  }




  submitted = false;

  onSubmit() {
    this.submitted = true;
    if (this.employeeForm.invalid) return;

    const input = this.employeeForm.value;
    this.gql.addEmployee(input).subscribe({
      next: () => {
        alert('Employee added successfully!');
        this.router.navigate(['/employees']);
      },
      error: (err) => {
        console.error(err);
        alert('Failed to add employee.');
      }
    });
  }
}
