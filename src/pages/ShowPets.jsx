import { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
import { fetchPets } from "../api/supabaseService";

function ShowPets() {
	const [pets, setPets] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await fetchPets();
			if (data) {
				setPets(data);
			}
		};

		getData();
	}, []);

	return (
		<div className="container mx-auto p-4">
			<div className="flex flex-wrap justify-center gap-4">
				{pets.map((pet) => (
					<PetCard pet={pet} key={pet.id} />
				))}
			</div>
		</div>
	);
}
export default ShowPets;
