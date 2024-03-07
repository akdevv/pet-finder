import { useNavigate } from "react-router-dom";

function PetCard({ pet }) {
	const navigator = useNavigate();
	const handleRedirect = (petId) => {
		navigator(`/pets/${petId}`);
	};

	return (
		<div
			className="w-96 md:w-64 h-50 rounded-lg overflow-hidden shadow-md bg-white cursor-pointer"
			onClick={() => handleRedirect(pet.id)}
		>
			<img
				src={
					pet.petPhoto
						? pet.petPhoto[0]
						: "https://via.placeholder.com/300"
				}
				alt="Pet Image"
				className="w-full h-48 object-cover"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-1">{pet.petName}</div>
				<p className="text-gray-700 text-base">
					Age: {pet.petAge} years <br /> Breed: {pet.petBreed}
				</p>
			</div>
		</div>
	);
}

export default PetCard;
