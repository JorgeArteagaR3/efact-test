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
        title: 'task 1',
      },
      {
        id: 2,
        completed: true,
        title: 'task 2',
      },
      {
        id: 3,
        completed: false,
        title: 'task 3',
      },
      {
        id: 4,
        completed: false,
        title: 'task 4',
      },
    ];
  }
}
