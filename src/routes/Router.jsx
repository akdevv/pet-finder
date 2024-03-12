import Home from "../pages/Home";
import About from "../pages/About";
import ShowPet from "../pages/ShowPet";
import ShowPets from "../pages/ShowPets";
import ShopPets from "../pages/ShopPets";
import Navbar from "../components/Navbar";
import ReportPet from "../pages/ReportPet";
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
				path: "/shop",
				element: <ShopPets />,
			},
			{
				path: "/shop/:petId",
				element: <ShowPet />,
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
