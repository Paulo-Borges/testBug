import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Todo } from '../_models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  baseUrl: string = environment.apiUrl;

  private readonly http = inject(HttpClient);

  getAll() {
    return this.http.get<Todo[]>(this.baseUrl + 'todos').pipe(
      map((response) => {
        return response;
      }),
    );
  }

  getById(id: number) {
    return this.http.get<Todo>(this.baseUrl + 'todos/' + id).pipe(
      map((response) => {
        return response;
      }),
    );
  }
}
