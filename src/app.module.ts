import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports: [TasksModule],
  controllers: [TasksController, AppController],
  providers: [AppService, TasksService]  // Importando o módulo de tarefas
})
export class AppModule {}

