import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  getTasks() {
    return [
      {
        id: 1,
        completed: false,
        title: 'task',
      },
      {
        id: 2,
        completed: true,
        title: 'task',
      },
      {
        id: 3,
        completed: false,
        title: 'task',
      },
      {
        id: 4,
        completed: false,
        title: 'task',
      },
    ];
  }
}
