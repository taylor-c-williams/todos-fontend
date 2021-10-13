import React, { Component } from "react";
import { createTodo, getTodos, updateTodo } from "./fetchUtils.js";

export default class toDo extends Component {
	state = {
		todos: [],
		todoName: "",
        isLoading: true
	};

	componentDidMount = async () => {
		const todos = await getTodos(this.props.token);
		this.setState({ todos,
                        isLoading: false });
	};

	handleSubmit = async (e) => {
		const { todoName } = this.state;
		const { token } = this.props;
		e.preventDefault();
		await createTodo(todoName, token);
		const todos = await getTodos(token);
		this.setState({ todos, todoName: "" });
	};


    // handleDelete = async (e) => {
    //     e.preventDefault();
    //     await deleteTodo(todos.id, this.props.token)
    // }

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						value={this.state.todoName}
						onChange={(e) => this.setState({ todoName: e.target.value })}
					/>
					<button>Add Task</button>
				</form>
				<div>
					{this.state.todos
						.sort((a, b) => a.completed - b.completed)
						.map((todo) => (
							<div
								key={`${todo.id}`}
								onClick={async () => {
									await updateTodo(todo.id, !todo.completed, this.props.token);
									const todos = await getTodos(this.props.token);
									this.setState({ todos });
								}}
								className={
									todo.completed ? "todo completed" : "todo incomplete"
								}
							>
								{todo.todo}
                                {/* <button type = "button" onClick = {this.handleDelete}>Delete Task</button> */}
							</div>
						))}
				</div>

				{/* Loading ...  */}
				{this.state.isLoading ? (
					<section className="loading">
						<h2> Loading ... </h2>
					</section>
				) : null}
			</div>
		);
	}
}
