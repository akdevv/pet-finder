import { useState } from "react";

function ReportPet() {
	const [formData, setFormData] = useState({
		name: "",
		age: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
	};

	return (
		<div>
			<h1>Report a Lost Pet</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
				<label htmlFor="age">Age:</label>
				<input
					type="number"
					name="age"
					value={formData.age}
					onChange={handleChange}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default ReportPet;
