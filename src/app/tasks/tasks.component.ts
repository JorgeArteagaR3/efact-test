import { Component } from '@angular/core';
import { ITask } from './task.model';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: ITask[] = [];
  newTask = new FormControl('');

  constructor(private taskSvc: TasksService) {}

  ngOnInit() {
    this.tasks = this.taskSvc.getTasks();
  }

  addTask() {
    if (!this.newTask.value) return;
    this.tasks.push({
      completed: false,
      title: this.newTask.value || '',
      id: Date.now(),
    });
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
