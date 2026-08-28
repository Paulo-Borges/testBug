import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos-service';
import { provideHttpClient } from '@angular/common/http';

describe('TodosService', () => {
  let todosService: TodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosService, provideHttpClient()],
    });
    todosService = TestBed.inject(TodosService);
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
  });

  //___________X____teste no EndPoint que retorna todos os todos
  it('Deve retornar o TODO por Id', () => {
    todosService.getById(12).subscribe((todo) => {
      expect(todo).toBeTruthy();
      expect(todo.id).toEqual(12);
    });
  });
});
