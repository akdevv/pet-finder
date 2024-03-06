import { useEffect, useState } from "react";
import { fetchPet } from "../api/supabaseService";
import { useParams } from "react-router-dom";

function ShowPet() {
	const [pet, setPet] = useState(null);
	const { petId } = useParams();

	useEffect(() => {
		fetchPet(petId).then((data) => {
			if (data && data.length > 0) {
				setPet(data[0]);
			} else {
				console.log("No pet found with id:", petId);
			}
		});
	}, [petId]);

	if (!pet) return <div>Loading pet details...</div>;

	return (
		<div className="container mx-auto p-6">
			<div className="flex flex-col md:flex-row">
				<div className="flex-none md:w-1/2">
					<img
						src={pet.petPhoto[0]}
						alt={pet.petName}
						className="w-full h-auto rounded-lg"
					/>
				</div>

				<div className="md:w-1/2 md:ml-6">
					<h2 className="text-2xl font-semibold mt-4 md:mt-0">
						{pet.petName}
					</h2>
					<p>
						<strong>Age:</strong> {pet.petAge}
					</p>
					<p>
						<strong>Gender:</strong> {pet.petGender}
					</p>
					<p>
						<strong>Breed:</strong> {pet.petBreed}
					</p>
					<p>
						<strong>Last Seen:</strong> {pet.lastSeenLocation}
					</p>
					<p>
						<strong>Description:</strong> {pet.description}
					</p>

					<hr className="my-4" />

					<h3 className="text-xl font-semibold">Owner's Details</h3>
					<p>
						<strong>Name:</strong> {pet.contactName}
					</p>
					<p>
						<strong>Email:</strong> {pet.contactEmail}
					</p>
					<p>
						<strong>Phone:</strong> {pet.contactPhone}
					</p>

					<button className="bg-orange-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-orange-600">
						Contact Owner
					</button>
				</div>
			</div>
		</div>
	);
}
export default ShowPet;

// cc9f2843-6e37-4803-86d3-df7384b8fbfb
