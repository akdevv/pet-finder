import Home from "../pages/Home";
import About from "../pages/About";
import ShowPet from "../pages/ShowPet";
import ShowPets from "../pages/ShowPets";
import ReportPet from "../pages/ReportPet";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
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
	{
		path: "/about",
		element: <About />,
	},
]);

export default router;
