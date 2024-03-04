import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

function Home() {
	const [demo1, setDemo1] = useState([]);
	async function getNames() {
		const { data: demo1 } = await supabase.from("demo1").select("name");
		setDemo1(demo1.map((item) => item.name));
	}

	useEffect(() => {
		getNames();
	}, []);

	return (
		<div>
			<h1> This is the home page </h1>
			{demo1.map((name, index) => (
				<p key={index}>{name}</p>
			))}
		</div>
	);
}
export default Home;
