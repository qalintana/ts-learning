import { TodoItem } from "./todoItem";

export class TodoCollection {
  private nextId: number = 1;

  constructor(public userName: string, public todoItems: TodoItem[] = []) {}

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.todoItems.push(new TodoItem(this.nextId, task));
    return this.nextId;
  }

  getTodoById(id: number): TodoItem | undefined {
    return this.todoItems.find((item) => item.id === id);
  }
}
