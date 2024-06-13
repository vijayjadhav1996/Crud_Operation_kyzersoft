import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [];
  private nextId = 1;

  constructor() {}

  getStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find(student => student.id === id);
  }

  addStudent(student: Student): void {
    student.id = this.nextId++;
    this.students.push(student);
  }

  updateStudent(updatedStudent: Student): void {
    const index = this.students.findIndex(student => student.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
  }
}
