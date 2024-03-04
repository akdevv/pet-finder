function Header() {
	return (
		<div className="flex bg-orange-500">
			<div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center items-center">
				<h1 className="font-bold text-4xl md:text-9xl text-white">
					Welcome to Pet Finder
				</h1>
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
