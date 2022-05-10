import React from "react";
import "./App.css";

import Form from "./components/Form";
import FormField from "./components/FormField";

function App() {
	const initialState = {
		username: "",
		email: "",
		password: "",
		OS: "",
		hobbies: [],
	};

	return (
		<div className='app'>
			<Form initialState={initialState}>
				<FormField type='text' name='username' placeholder='Username' label='Username' />
				<FormField type='text' name='email' placeholder='Email' label='Email' />
				<FormField type='password' name='password' placeholder='Password' label='Password' />
				<FormField type='select' name='OS' placeholder='Operating System' label='Operating System' options={["MacOS", "Windows", "Linux"]} />
				<FormField type='checkbox' name='hobbies' placeholder='Hobbies' label='Hobbies' options={["reading", "gaming", "sports", "problem solving"]} />
			</Form>
		</div>
	);
}

export default App;
