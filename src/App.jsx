import React from "react";
import "./App.css";

import Form from "./components/Form";
import FormField from "./components/FormField";

function App() {
	const initialState = {
		username: "",
		email: "",
		password: "",
	};

	return (
		<div className='app'>
			<Form initialState={initialState}>
				<FormField type='text' name='username' placeholder='Username' label='Username' />
				<FormField type='text' name='email' placeholder='Email' label='Email' />
				<FormField type='password' name='password' placeholder='Password' label='Password' />
			</Form>
		</div>
	);
}

export default App;
