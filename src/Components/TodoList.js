import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Todo key={i} text={todo.text} status={todo.status} dueDate={todo.dueDate} responsible={todo.responsible}/>
            );
        });

        return (
            todoList
        );


    }

}