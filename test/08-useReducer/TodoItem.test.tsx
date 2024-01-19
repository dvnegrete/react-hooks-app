import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from './../../src/08-useReducer/TodoItem';

describe('test in component <TodoItem/>', () => {

    const todo = {
        id: 1, 
        description: 'Rehaciendo la App',
        done: false,
    }

    const onDeleteTodoMock = jest.fn(); 
    const onToogleTodoMock = jest.fn(); 
    
    beforeEach(()=> jest.clearAllMocks() );
    
    test('should show todo pending', () => {
        render(
            <TodoItem 
                todo={ todo } 
                onToogleTodo={onToogleTodoMock} 
                onDeleteTodo={ onDeleteTodoMock} 
            />
        );
        
        const liElement = screen.getByRole('listitem');
        //console.log(liElement.innerHTML);        
        expect(liElement.className).toContain('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className).toContain('align-self-center todoLi');
        expect( spanElement.className).not.toContain(' text-decoration-line-through');
        
    });

    test('should show todo completed', () => {
        todo.done = true;

        render(
            <TodoItem 
                todo={ todo } 
                onToogleTodo={onToogleTodoMock} 
                onDeleteTodo={ onDeleteTodoMock} 
            />
        );

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className).toContain('text-decoration-line-through');        
    });

    test('should call toogleTodo when selecting the span', () => {
        render(
            <TodoItem 
                todo={ todo } 
                onToogleTodo={onToogleTodoMock} 
                onDeleteTodo={ onDeleteTodoMock} 
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect( onToogleTodoMock).toHaveBeenCalledWith(todo.id)
    });

    test('should call deleteTodo when selecting the button', () => {
        render(
            <TodoItem 
                todo={ todo } 
                onToogleTodo={onToogleTodoMock} 
                onDeleteTodo={ onDeleteTodoMock} 
            />
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect( onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
});