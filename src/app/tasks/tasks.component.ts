import { Component } from '@angular/core';
import { ITask } from './task.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksService } from './task.service';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TaskItemComponent,
    TaskFormComponent,
  ],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  tasks: ITask[] = [];

  constructor(private taskSvc: TasksService) {}

  ngOnInit() {
    this.tasks = this.taskSvc.getTasks();
  }

  addTask(task: ITask) {
    this.tasks.push(task);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
