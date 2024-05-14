import { expect } from "chai";
import { describe, it } from "mocha";
interface ToDoItem {
  text: string;
  completed: boolean;
}

let todoList: ToDoItem[] = [];

function addToDoList(text: string): void {
  todoList.push({ text, completed: false });
}

function getTodoListItems(): ToDoItem[] {
  return todoList;
}

describe("To-Do List App - Acceptance Tests", () => {
  beforeEach(() => {
    todoList = [];
  });

  it("should add a new to-do item", () => {
    const newItemText = "Buy groceries";
    addToDoList(newItemText);

    const todoItems = getTodoListItems();
    expect(todoItems.length).to.equal(1);
    expect(todoItems[0].text).to.equal(newItemText);
    expect(todoItems[0].completed).to.equal(false);
  });

  it("should display the added item in the to-do list", () => {
    const newItemText = "Buy milk";
    addToDoList(newItemText);
    const displayedItems = getDisplayedTodoListItems();

    expect(displayedItems.length).to.equal(1);
    expect(displayedItems[0].text).to.equal(newItemText);
  });
});
function getDisplayedTodoListItems(): ToDoItem[] {
  return todoList;
}
