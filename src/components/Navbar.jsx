// import { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { AiOutlineClose } from "react-icons/ai";

// function Navbar() {
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);
// 	const navLinks = [
// 		{ href: "#home", label: "Home" },
// 		{ href: "#find", label: "Find" },
// 		{ href: "#report", label: "Report" },
// 		{ href: "#about-us", label: "About Us" },
// 	];
// 	return (
// 		<>
// 			<header className="sm:px-8 px-4 py-4 z-10 w-full">
// 				<nav className="flex justify-between items-center max-container">
// 					<a href="/" className="text-3xl font-bold">
// 						Logo
// 					</a>
// 					<ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
// 						{navLinks.map((item) => (
// 							<li key={item.label}>
// 								<a
// 									href={item.href}
// 									className="font-montserrat leading-normal text-lg text-slate-gray"
// 								>
// 									{item.label}
// 								</a>
// 							</li>
// 						))}
// 					</ul>
// 					<div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
// 						<a href="/">Sign in</a>
// 						<span>/</span>
// 						<a href="/">Explore now</a>
// 					</div>
// 					<div
// 						className="hidden max-lg:block cursor-pointer"
// 						onClick={() => {
// 							setIsMenuOpen(!isMenuOpen);
// 						}}
// 					>
// 						<RxHamburgerMenu className="text-4xl" />
// 					</div>
// 				</nav>
// 			</header>
// 			{isMenuOpen && (
// 				<div>
// 					<nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
// 						<div
// 							className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
// 							onClick={() => {
// 								setIsMenuOpen(!isMenuOpen);
// 							}}
// 						>
// 							<AiOutlineClose className="text-4xl" />
// 						</div>
// 						<ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
// 							{navLinks.map((item) => (
// 								<li key={item.label}>
// 									<a
// 										href={item.href}
// 										className="font-montserrat leading-normal text-lg text-slate-gray"
// 									>
// 										{item.label}
// 									</a>
// 								</li>
// 							))}
// 						</ul>
// 					</nav>
// 				</div>
// 			)}
// 		</>
// 	);
// }
// export default Navbar;

import { Link, Outlet } from "react-router-dom";

function Navbar() {
	return (
		<>
			<ul>
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				<li>
					<Link to={"/about"}>About</Link>
				</li>
				<li>
					<Link to={"/pets"}>Find</Link>
				</li>
				<li>
					<Link to={"/pets/new"}>Report</Link>
				</li>
			</ul>
			<Outlet />
		</>
	);
}

export default Navbar;
