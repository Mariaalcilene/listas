import { Injectable } from '@nestjs/common';
import { Task } from './taks.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private id: number = 1; 

 
  getAllTasks(): Task[] {
    return this.tasks;
  }

 
  createTask(task: Task): Task {
    task.id = this.id++;
    this.tasks.push(task);
    return task;
  }
}

