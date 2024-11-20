import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],  // Controlador
  providers: [TasksService],       // Serviço
})
export class TasksModule {}

