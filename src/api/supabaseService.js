import { supabase } from "../utils/supabase";

// Fetch all pets
export async function fetchPets() {
	const { data, error } = await supabase.from("pets").select("*");
	if (error) {
		console.error("Error fetching data:", error);
		return;
	}
	return data;
}

// Fetch one pet by id (uuid)
export async function fetchPet(id) {
	const { data, error } = await supabase
		.from("pets")
		.select("*")
		.eq("id", id);
	if (error) {
		console.error("Error fetching data:", error);
		return;
	}
	return data;
}
