export const validateCheckbox = ({ hobbies }, optionSelected) => {
	if (hobbies.length) {
		if (hobbies.includes(optionSelected)) {
			return hobbies.filter((item) => item !== optionSelected);
		}
	}

	return [...hobbies, optionSelected];
};
