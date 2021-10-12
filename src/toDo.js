import React, { Component } from 'react';
import { createTodo, getTodos } from 'fetchUtils.js';

export default class toDo extends Component {

handleSubmit = async e => {
    const { todoName } = this.state;
    const { token } = this.props;
    e.preventDefault();
    await createTodo (todoName, token);
    const todos = await getTodos(token)
    this.setState({ todos, todoName: '' })
}

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                <input value = {this.state.todoName} onChange = { e => this.setState ({ todoName : e.target.value})}/>
                <button>Add Task</button>
                </form>
                <div>
                    {this.state.todos.map(todo => <div className = {todo.completed ? 'todo completed' : 'todo incomplete' }> {todo.todo}</div>)}
                </div>
            </div>
        )
    }
}
