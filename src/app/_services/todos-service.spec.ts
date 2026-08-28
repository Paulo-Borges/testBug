import { TestBed } from '@angular/core/testing';
import { TODOS_STRING, TODO_STRING } from '../../../server/db-data';
import { TodosService } from './todos-service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('TodosService', () => {
  let todosService: TodosService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosService, provideHttpClient(), provideHttpClientTesting()],
    });
    todosService = TestBed.inject(TodosService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(todosService).toBeTruthy();
  });
  //___________X____teste no EndPoint que retorna todos os todos
  it('Deve retornar todos os TODOS', () => {
    todosService.getAll().subscribe((todos) => {
      expect(todos).toBeTruthy();
      expect(todos.length).toEqual(200);

      const todo = todos.find((todo) => todo.id === 15);
      expect(todo?.title).toEqual('ab voluptatum amet voluptas');
    });

    const req = httpTestingController.expectOne(environment.apiUrl + 'todos');
    expect(req.request.method).toEqual('GET');
    req.flush(JSON.parse(TODOS_STRING));
  });

  //___________X____teste no EndPoint que retorna todos os todos
  it('Deve retornar o TODO por Id', () => {
    todosService.getById(12).subscribe((todo) => {
      expect(todo).toBeTruthy();
      expect(todo.id).toEqual(12);
    });

    const req = httpTestingController.expectOne(environment.apiUrl + 'todos/12');
    expect(req.request.method).toEqual('GET');
    req.flush(JSON.parse(TODO_STRING));
  });
});
