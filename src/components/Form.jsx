import React, { useState, useEffect, cloneElement, Children } from "react";
import "./form.css";
import { validate } from "../utils/validate";

const Form = ({ initialState, children }) => {
	const [state, setState] = useState(initialState);
	const [error, setError] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (e) => {
		setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setError(validate(state));
		setIsSubmitted(true);
	};

	useEffect(() => {
		console.log(error);
		if (!Object.keys(error).length && isSubmitted) {
			console.log(state);
		}
	}, [error]);

	const newChildren = Children.map(children, (child) => cloneElement(child, { change: handleChange, value: state[child.name], error: error }));

	return (
		<div>
			{!Object.keys(error).length && isSubmitted ? (
				<div className='successful'>
					<h1 className='titleSuccessful'>Login succesfully</h1>
					<a href='/' className='backButton'>
						Go Back
					</a>
				</div>
			) : (
				<form onSubmit={handleSubmit} className='form'>
					<h1 className='title'>Form</h1>
					{newChildren}
					<button className='btn'>Submit</button>
				</form>
			)}
		</div>
	);
};

export default Form;
