import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../tasks/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task!: ITask;
  @Output() delete = new EventEmitter();

  deleteButtonClicked() {
    this.delete.emit();
  }
}
