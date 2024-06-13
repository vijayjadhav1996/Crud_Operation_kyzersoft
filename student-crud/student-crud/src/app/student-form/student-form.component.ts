import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  student: Student = { id: 0, name: '', age: 0, course: '' };
  isEditMode = false;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      const student = this.studentService.getStudentById(+id);
      if (student) {
        this.student = student;
      }
    }
  }

  saveStudent(): void {
    if (this.isEditMode) {
      this.studentService.updateStudent(this.student);
    } else {
      this.studentService.addStudent(this.student);
    }
    this.router.navigate(['/students']);
  }
}
