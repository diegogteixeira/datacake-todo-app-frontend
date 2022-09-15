import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class ApiService {

  constructor(private http: HttpClient) { }

  public getAllTasks() {

  }

  public createTask() {

  }

  public getTaskById(taskId: number) {

  }

  public updateTask(task: Item) {

  }

  public deleteTaskById(taskId: number) {

  }
}
