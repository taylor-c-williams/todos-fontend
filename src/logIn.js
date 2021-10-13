import React, { Component } from "react";
import { newLogIn } from './fetchUtils.js';

export default class logIn extends Component {

    state = {
        password: '',
        email: '',
    }

	handleSubmit = async (e) => {
		e.preventDefault();
        await newLogIn(this.state.email, this.state.password);
		this.props.history.push("/todo");
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
					<p>	Email Address:</p>
						<input
							value={this.state.email}
							onChange={(e) => this.setState({ email: e.target.value })}
							type="email"
                            required
						/>
					</label>
					<label>
						<p>Password:</p>
						<input
							value={this.state.password}
							onChange={(e) => this.setState({ password: e.target.value })}
							type="password"
                            required
						/>
					</label>
					<button>Log In!</button>
				</form>
			</div>
		);
	}
}
