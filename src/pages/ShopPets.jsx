import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { fetchPets } from "../api/supabaseService";
import PetShopCard from "../components/PetShopCard";

function ShopPet() {
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

	if (pets.length === 0) {
		return (
			<div className="flex flex-col text-center min-h-dvh justify-center">
				<Spinner size="lg" />
			</div>
		);
	}

	return (
		<div className="container mt-3 p-4">
			<div className="flex flex-wrap justify-center gap-4">
				{pets.map((pet) => (
					<PetShopCard pet={pet} key={pet.id} />
				))}
			</div>
		</div>
	);
}

export default ShopPet;
