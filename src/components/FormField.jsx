import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import "./formField.css";

const FormField = (props) => {
	const { label, id, change, error, name, options, ...inputProps } = props;
	const { type } = inputProps;

	switch (type) {
		case "text":
		case "password":
			return (
				<fieldset className={error[name] ? "fieldError" : `field`}>
					<label className='label'>{label}</label>
					<input className='input' name={name} {...inputProps} onChange={change} />
					{error[name] && <span>{error[name]}</span>}
				</fieldset>
			);

		case "select":
			return (
				<fieldset className={error[name] ? "fieldError" : `field`}>
					<label className='label'>{label}</label>
					<select className='select' name={name} onChange={change}>
						<option value=''>--Select an option--</option>
						{options.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</select>
					{error[name] && <span>{error[name]}</span>}
				</fieldset>
			);

		case "checkbox":
			return (
				<fieldset className={error[name] ? "selectFieldError" : `selectField`}>
					<label className='selectLabel'>{label}</label>
					{options.map((item) => (
						<div key={item} className='checkbox'>
							<input name={name} {...inputProps} onChange={change} value={item} />
							<p>{item}</p>
						</div>
					))}
					{error[name] && <span>{error[name]}</span>}
				</fieldset>
			);

		default:
			break;
	}
};

export default FormField;
