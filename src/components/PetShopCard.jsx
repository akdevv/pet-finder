import { useNavigate } from "react-router-dom";

function PetShopCard({ pet }) {
	const navigate = useNavigate();
	const handleRedirect = (petId) => {
		navigate(`/shop/${petId}`);
	};

	return (
		<div className="w-96 md:w-64 h-50 rounded-lg overflow-hidden shadow-md bg-white">
			<img
				src={
					pet.petPhoto
						? pet.petPhoto[0]
						: "https://via.placeholder.com/300"
				}
				alt={`${pet.petName || "Unknown"} Pet Image`}
				className="w-full h-48 object-cover"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-1">{pet.petName}</div>
				<p className="text-gray-700 text-base">
					Age: {pet.petAge} years <br /> Breed: {pet.petBreed}
				</p>
				<button
					className="bg-orange-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-orange-600"
					onClick={() => handleRedirect(pet.id)}
				>
					Buy Now
				</button>
			</div>
		</div>
	);
}

export default PetShopCard;
