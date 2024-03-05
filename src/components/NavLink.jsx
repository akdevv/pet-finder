import { Link } from "react-router-dom";

function NavLink({ to, label }) {
	return (
		<Link
			to={to}
			className="font-montserrat leading-normal text-lg text-slate-gray hover:text-orange-500 transition-colors duration-300 ease-in-out"
		>
			{label}
		</Link>
	);
}

export default NavLink;
