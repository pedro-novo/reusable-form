import React from "react";
import "./formField.css";

const FormField = (props) => {
	const { label, id, change, error, name, ...inputProps } = props;

	return (
		<fieldset className={error[name] ? "fieldError" : `field`}>
			<label className='label'>{label}</label>
			<input className='input' name={name} {...inputProps} onChange={change} />
			{error[name] && <span>{error[name]}</span>}
		</fieldset>
	);
};

export default FormField;
