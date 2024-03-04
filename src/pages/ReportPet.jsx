import { useState } from "react";

function ReportPet() {
	const [formData, setFormData] = useState({
		petName: "",
		petAge: "",
		petGender: "f",
		petBreed: "",
		petPhoto: "",
		lastSeenLocation: "",
		description: "",
		contactName: "",
		contactEmail: "",
		contactPhone: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form Data:", formData);
	};

	const handleCancel = () => {
		setFormData({
			petName: "",
			petAge: "",
			petGender: "f",
			petBreed: "",
			petPhoto: "",
			lastSeenLocation: "",
			description: "",
			contactName: "",
			contactEmail: "",
			contactPhone: "",
		});
	};

	return (
		<div className="container mx-auto w-full sm:w-3/4 p-5 bg-white mb-20">
			<form onSubmit={handleSubmit} className="space-y-6">
				<h1 className="text-3xl font-bold text-gray-700 text-center">
					Report a Lost Pet
				</h1>

				{/* Lost Pet Details */}
				<div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{/* Pet Name */}
						<input
							className="w-full p-2 border border-gray-300 rounded"
							type="text"
							name="petName"
							value={formData.petName}
							onChange={handleChange}
							placeholder="Name"
						/>
						{/* Pet Age */}
						<input
							className="w-full p-2 border border-gray-300 rounded"
							type="number"
							name="petAge"
							value={formData.petAge}
							onChange={handleChange}
							placeholder="Age"
						/>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-2">
						{/* Pet Gender */}
						<select
							className="w-full p-2 border border-gray-300 rounded"
							name="petGender"
							value={formData.petGender}
							onChange={handleChange}
						>
							<option value="f">Female</option>
							<option value="m">Male</option>
						</select>
						{/* Pet Breed */}
						<input
							className="w-full p-2 border border-gray-300 rounded"
							type="text"
							name="petBreed"
							value={formData.petBreed}
							onChange={handleChange}
							placeholder="Breed"
						/>
					</div>

					{/* Pet Images */}
					<input
						className="w-full border border-gray-300 rounded mt-2 cursor-pointer"
						type="file"
						name="petPhoto"
						value={formData.petPhoto}
						onChange={handleChange}
						multiple
					/>

					{/* Last Seen Location */}
					<input
						className="w-full p-2 border border-gray-300 rounded mt-2"
						type="text"
						name="lastSeenLocation"
						value={formData.lastSeenLocation}
						onChange={handleChange}
						placeholder="Last Seen Location"
					/>

					{/* Pet Description */}
					<textarea
						className="w-full p-2 border border-gray-300 rounded mt-2"
						rows={5}
						name="description"
						value={formData.description}
						onChange={handleChange}
						placeholder="Description"
					></textarea>
				</div>

				{/* Separator */}
				<hr />

				{/* Contact Details */}
				<div className="mt-4">
					<h2 className="text-xl font-semibold">
						Your Contact Details
					</h2>

					{/* Owner's Name */}
					<input
						className="w-full p-2 border border-gray-300 rounded mt-2"
						type="text"
						name="contactName"
						value={formData.contactName}
						placeholder="Name"
						onChange={handleChange}
					/>

					{/* Owner's Email */}
					<input
						className="w-full p-2 border border-gray-300 rounded mt-2"
						type="email"
						name="contactEmail"
						value={formData.contactEmail}
						placeholder="Email"
						onChange={handleChange}
					/>

					{/* Owner's Phone */}
					<input
						className="w-full p-2 border border-gray-300 rounded mt-2"
						type="tel"
						name="contactPhone"
						value={formData.contactPhone}
						placeholder="Phone Number"
						onChange={handleChange}
					/>
				</div>

				<div className="flex justify-end mt-4">
					{/* Cancel Button */}
					<button
						type="button"
						onClick={handleCancel}
						className="bg-gray-300 text-gray-700 hover:bg-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 mr-2"
					>
						Cancel
					</button>

					{/* Submit Button */}
					<button
						type="submit"
						className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default ReportPet;
