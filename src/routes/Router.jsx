import Home from "../pages/Home";
import About from "../pages/About";
import ShowPet from "../pages/ShowPet";
import ShowPets from "../pages/ShowPets";
import ReportPet from "../pages/ReportPet";
import Navbar from "../components/Navbar";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navbar />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/pets",
				element: <ShowPets />,
			},
			{
				path: "/pets/new",
				element: <ReportPet />,
			},
			{
				path: "/pets/:petId",
				element: <ShowPet />,
			},
		],
	},
]);

export default router;
