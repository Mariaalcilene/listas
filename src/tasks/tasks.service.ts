import { Injectable } from '@nestjs/common';
import { Task } from './taks.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = []; 

 
  getAllTasks(): Task[] {
    return this.tasks;
  }

 
  createTask(title: string, description: string): Task {
    const newTask: Task = {
      id: uuid(), 
      title,
      description,
    };
    this.tasks.push(newTask);
    return newTask;
  }
}

