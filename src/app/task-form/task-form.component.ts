import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ITask } from '../tasks/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<ITask>();

  taskForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9 ]*$'),
      Validators.minLength(4),
    ]),
  });

  get title() {
    return this.taskForm.get('title');
  }

  onSubmit() {
    if (!this.taskForm.valid) return;

    this.addTask.emit({
      completed: false,
      id: Date.now(),
      title: this.taskForm.value.title || '',
    });
    this.taskForm.reset();
  }
}
