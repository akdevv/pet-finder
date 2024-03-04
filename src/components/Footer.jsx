import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-center py-8">
			<div className="flex justify-center space-x-4 mb-4">
				<a href="https://www.facebook.com" target="_blank">
					<FaFacebook className="text-orange-500 h-6 w-6" />
				</a>
				<a href="https://www.twitter.com" target="_blank">
					<FaTwitter className="text-orange-500 h-6 w-6" />
				</a>
				<a href="https://www.youtube.com" target="_blank">
					<FaYoutube className="text-orange-500 h-6 w-6" />
				</a>
			</div>
			<p className="text-gray-200">
				&copy; {currentYear} Pet Finder. All rights reserved.
			</p>
		</footer>
	);
}
export default Footer;
