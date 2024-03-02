import router from "./routes/Router";
import Footer from "./components/Footer";
import { RouterProvider } from "react-router-dom";

function App() {
	return (
		<>
			<RouterProvider router={router} />
			<Footer />
		</>
	);
}

export default App;
