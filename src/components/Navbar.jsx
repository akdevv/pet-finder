import NavLink from "./NavLink";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from "@clerk/clerk-react";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navLinks = [
		{ to: "/", label: "Home" },
		{ to: "/pets", label: "Find" },
		{ to: "/shop", label: "Buy" },
		{ to: "/pets/new", label: "Report" },
	];
	return (
		<>
			<header className="sm:px-8 px-4 py-4 z-10 w-full bg-gray-200">
				<nav className="flex justify-between items-center max-container">
					<Link to="/" className="text-3xl font-bold text-orange-500">
						Pet Finder
					</Link>
					<ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
						{navLinks.map((item) => (
							<li key={item.label}>
								<NavLink to={item.to} label={item.label} />
							</li>
						))}
					</ul>
					<div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 hover:text-orange-500 transition-colors duration-300 ease-in-out">
						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<div className="border-2 border-gray-900 rounded-full">
								<UserButton />
							</div>
						</SignedIn>
					</div>
					<div
						className="hidden max-lg:block cursor-pointer"
						onClick={() => {
							setIsMenuOpen(!isMenuOpen);
						}}
					>
						<RxHamburgerMenu className="text-4xl" />
					</div>
				</nav>
			</header>
			{isMenuOpen && (
				<div>
					<nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
						<div
							className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
							onClick={() => {
								setIsMenuOpen(!isMenuOpen);
							}}
						>
							<AiOutlineClose className="text-4xl" />
						</div>
						<ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
							{navLinks.map((item) => (
								<li key={item.label}>
									<NavLink to={item.to} label={item.label} />
								</li>
							))}
						</ul>
					</nav>
				</div>
			)}
			<Outlet />
		</>
	);
}
export default Navbar;
