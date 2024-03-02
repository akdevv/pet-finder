import { useParams } from "react-router-dom";

function ShowPet() {
	const { petId } = useParams();
	return (
		<div>
			<h1> This is detailed view of one pet named: {petId} </h1>
		</div>
	);
}
export default ShowPet;
