import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';  
import { Task } from './taks.model';  

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get() // Rota GET para listar todas as tarefas
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post() // Rota POST para criar uma nova tarefa
  createTask(@Body('title') title: string, @Body('description') description: string): Task {
    return this.tasksService.createTask(title, description);
  }
}

