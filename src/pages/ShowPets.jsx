import { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
import { supabase } from "../utils/supabase";

// const demoPets = [
// 	{
// 		name: "Fluffy",
// 		age: 2,
// 		breed: "Poodle",
// 		imageUrl: "https://via.placeholder.com/300",
// 	},
// 	{
// 		name: "Coco",
// 		age: 3,
// 		breed: "Bulldog",
// 		imageUrl: "https://via.placeholder.com/300",
// 	},
// 	{
// 		name: "Max",
// 		age: 1,
// 		breed: "Beagle",
// 		imageUrl: "https://via.placeholder.com/300",
// 	},
// 	{
// 		name: "Buddy",
// 		age: 4,
// 		breed: "Pug",
// 		imageUrl: "https://via.placeholder.com/300",
// 	},
// 	{
// 		name: "Charlie",
// 		age: 2,
// 		breed: "Labrador",
// 		imageUrl: "https://via.placeholder.com/300",
// 	},
// 	{
// 		name: "Rocky",
// 		age: 3,
// 		breed: "Golden Retriever",
// 		imageUrl: "https://via.placeholder.com/300",
// 	},
// 	{
// 		name: "Duke",
// 		age: 1,
// 		breed: "Husky",
// 		imageUrl: "https://via.placeholder.com/300",
// 	},
// 	{
// 		name: "Toby",
// 		age: 4,
// 		breed: "Boxer",
// 		imageUrl: "https://via.placeholder.com/300",
// 	},
// 	{
// 		name: "Jack",
// 		age: 2,
// 		breed: "Dalmatian",
// 		imageUrl: "https://via.placeholder.com/300",
// 	},
// 	{
// 		name: "Bear",
// 		age: 3,
// 		breed: "Doberman",
// 		imageUrl: "https://via.placeholder.com/300",
// 	},
// 	{
// 		name: "Zeus",
// 		age: 1,
// 		breed: "Rottweiler",
// 		imageUrl: "https://via.placeholder.com/300",
// 	},
// 	{
// 		name: "Sam",
// 		age: 4,
// 		breed: "Siberian Husky",
// 		imageUrl: "https://via.placeholder.com/300",
// 	},
// ];

async function fetchPets() {
	const { data, error } = await supabase.from("pets").select("*");
	if (error) {
		console.error("Error fetching data:", error);
		return;
	}
	return data;
}

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
