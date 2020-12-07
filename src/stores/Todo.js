import { makeObservable, observable, computed, action } from "mobx";

//  export class Todo {
//     id = Math.random();
//     title = "";
//     finished = false;
//
//     constructor(title, todos) {
//         makeObservable(this, {
//             todos: observable,
//             unfinishedTodoCount: computed,
//             title: observable,
//             finished: observable,
//             toggle: action
//         });
//         this.title = title;
//         this.todos = todos;
//     }
//     todos = [];
//
//     toggle() {
//         this.finished = !this.finished;
//     }
//
//     get unfinishedTodoCount() {
//         return this.todos.filter(todo => !todo.finished).length;
//     }
// }
export class Todo {
    id = Math.random();
    title = "";
    finished = false;

    constructor(title) {
        makeObservable(this, {
            title: observable,
            finished: observable,
            toggle: action
        });
        this.title = title;
    }

    toggle() {
        this.finished = !this.finished;
    }
}

export class TodoList {
    todos = [];
    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
    constructor(todos) {
        makeObservable(this, {
            todos: observable,
            unfinishedTodoCount: computed
        });
        this.todos = todos;
    }
}


