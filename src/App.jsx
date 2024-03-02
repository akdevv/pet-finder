import Navbar from "./components/Navbar";
// import Header from "./components/Header";

import router from "./routes/Router";
import { RouterProvider } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<RouterProvider router={router} />
			{/* <Header /> */}
		</>
	);
}

export default App;
