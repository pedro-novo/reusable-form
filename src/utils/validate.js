export const validate = (obj) => {
	let errors = {};
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

	Object.entries(obj).forEach(([key, value]) => {
		if (!value) {
			errors = { ...errors, [key]: `You need to fill in the ${key}` };
		} else {
			if (key === "email" && !regex.test(value)) {
				errors[key] = "Please Insert a valid email";
			}
		}
	});
	return errors;
};
