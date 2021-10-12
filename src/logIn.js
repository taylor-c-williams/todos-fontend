import React, { Component } from "react";
import { newLogIn } from './fetchUtils.js';

export default class logIn extends Component {

    state = {
        password: '',
        email: '',
    }

	handleSubmit = async (e) => {
		e.preventDefault();
		const { token } = await newLogIn(this.state.email, this.state.password);
		this.props.history.push("/todos");
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Email Address:
						<input
							value={this.state.email}
							onChange={(e) => this.setState({ email: e.target.value })}
							type="email"
						/>
					</label>
					<label>
						Password:
						<input
							value={this.state.password}
							onChange={(e) => this.setState({ password: e.target.value })}
							type="password"
						/>
					</label>
					<button>Log In!</button>
				</form>
			</div>
		);
	}
}
