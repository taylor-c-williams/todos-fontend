import React, { Component } from "react";
import { Link } from "react-router-dom";
import { newSignUp } from "./fetchUtils";

export default class signUp extends Component {
	state = {
		password: "",
		email: "",
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { token } = await newSignUp(this.state.email, this.state.password);
		this.props.handleTokenChange(token);
		this.props.history.push("/todo");
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
					<button>Sign Up!</button>
				</form>

				<Link to="/login"> Log in to existing account </Link>
			</div>
		);
	}
}
