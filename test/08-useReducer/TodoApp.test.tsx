import { render, screen } from "@testing-library/react";
import { TodoApp } from './../../src/08-useReducer/TodoApp';

jest.mock('../../src/hooks/useTodos', () => ({
    handlerNewTodo: jest.fn(),
    handlerToogleTodo: jest.fn(),
    handlerDeleteTodo: jest.fn(),
    todos: [
        { id:1, descripcion: "todo 1", done: false },
        { id:2, descripcion: "todo 2", done: false },
        { id:3, descripcion: "todo 3", done: false },
    ],
    totalPending: 2,
    todosCount: 3,
}));

xdescribe('test in component <TodoApp/>', () => {
    // const { useTodos: useTodosMock } = require('../../src/hooks/useTodos');

    test('should show component correctly', () => {
        render(<TodoApp/>);
        expect(screen.getByAltText('todo 1')).toBeTruthy();
        
    });
    
});