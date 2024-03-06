function PetCard({ pet }) {
	return (
		<div className="w-96 md:w-64 h-50 rounded-lg overflow-hidden shadow-md bg-white">
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
