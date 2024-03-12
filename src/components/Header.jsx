import { useNavigate } from "react-router-dom";

function Header() {
	const navigator = useNavigate();
	const handleRedirect = () => {
		navigator("/about");
	};

	return (
		<div className="flex bg-orange-500">
			<div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center items-start">
				<h1 className="font-bold text-4xl md:text-9xl text-white">
					Welcome to Pet Finder
				</h1>
				<button
					className="mt-4 bg-white text-orange-500 font-bold py-1 px-3 text-md rounded-full hover:bg-gray-100 transition duration-300"
					onClick={handleRedirect}
				>
					About Us
				</button>
			</div>
			<div className="hidden md:block w-1/2 px-6">
				<img
					src="/dog-cover-header.png"
					className="w-full h-full object-cover"
					alt="dog"
				/>
			</div>
		</div>
	);
}

export default Header;
