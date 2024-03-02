import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <h1>home</h1>,
	},
	{
		path: "/pets",
		element: <h1>find your lost pets</h1>,
	},
	{
		path: "/pets/new",
		element: <h1>report your lost pets</h1>,
	},
	{
		path: "/about",
		element: <h1>about us page</h1>,
	},
]);

export default router;
