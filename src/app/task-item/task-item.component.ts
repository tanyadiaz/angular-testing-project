import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-task-item',
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  taskitem!: boolean;

  
editar(arg0: string) {
throw new Error('Method not implemented.');
}

  title = 'eliminar';
  isVisible: boolean = true;

  toggle(): void {
    this.isVisible = !this.isVisible;
  }

  indice:string="";
  users:TaskListComponent[]=[

  ]
  actualizar(num:number):void{
    this.taskitem= !this.taskitem;

  }
  

agregar:string[]=['']
nuevo:string='';


addItem():void{
  this.agregar.push(this.nuevo);
  this.nuevo='';


  
{
  
  


  }

}







}
  
