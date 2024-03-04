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

// import { useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// const Home = () => {
// 	const [name, setName] = useState("");
// 	const [message, setMessage] = useState("");

// 	const handleSubmit = async (event) => {
// 		event.preventDefault();
// 		console.log("name: ", name);
// 		try {
// 			const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
// 			const { data, error } = await supabaseClient
// 				.from("demo1")
// 				.insert([{ name: name, age: 20 }]);

// 			console.log(data);

// 			if (error) {
// 				setMessage(`Error: ${error.message}`);
// 			} else {
// 				setName("");
// 				setMessage("Data inserted successfully!");
// 			}
// 		} catch (err) {
// 			setMessage(`Error: ${err.message}`);
// 		}
// 	};

// 	return (
// 		<div>
// 			<h1>Insert Name</h1>
// 			<form onSubmit={handleSubmit}>
// 				<label htmlFor="name">Name:</label>
// 				<input
// 					type="text"
// 					id="name"
// 					value={name}
// 					onChange={(e) => setName(e.target.value)}
// 				/>
// 				<button type="submit">Insert</button>
// 			</form>
// 			<p>{message}</p>
// 		</div>
// 	);
// };

// export default Home;
