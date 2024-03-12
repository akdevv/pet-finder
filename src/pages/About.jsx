function About() {
	return (
		<div className="md:w-3/5 w-full p-5 my-10 mx-auto text-gray-700">
			<h1
				id="about-pet-finder"
				className="text-4xl font-bold text-orange-500 mb-4"
			>
				About Us
			</h1>
			<p className="mb-4">
				<strong>Pet Finder</strong> is a progressive web application
				(PWA) developed with the goal of helping lost animals meet their
				owners . At the same time, Our mission is to connect potential
				pet buyers with adorable animals ready to get a home.
			</p>
			<h2
				id="our-vision"
				className="text-2xl font-semibold text-orange-400 mt-6 mb-2"
			>
				Our Vision
			</h2>
			<p className="mb-4">
				We envision a world where every pet has a safe and caring home.
				By leveraging modern web technologies, we aim to make the
				retrieving and getting a pet process easier, more efficient, and
				accessible to everyone.
			</p>
			<h2
				id="key-features"
				className="text-2xl font-semibold text-orange-400 mt-6 mb-2"
			>
				Key Features
			</h2>
			<ul className="list-disc list-inside mb-4">
				<li>
					<strong>Pet Search</strong>: Easily search for available
					pets based on location, species, age, and other criteria.
				</li>
				<li>
					<strong>Pet Profiles</strong>: Detailed profiles for each
					pet, including photos, descriptions, and physical
					attributes.
				</li>
				<li>
					<strong>Report Lost Pet</strong>: You can report about your
					lost pet on our website.
				</li>
				<li>
					<strong>Community Engagement</strong>: Connect with people
					who have found your pets, share stories, and participate in
					local events.
				</li>
				<li>
					<strong>Surf through Pet Bazaar</strong>: You can surf and
					select various pets according to your satisfaction.
				</li>
			</ul>
			<h2
				id="people-who-made-it-possible"
				className="text-2xl font-semibold text-orange-400 mt-6 mb-2"
			>
				People who made it possible
			</h2>
			<p className="mb-4">
				Our passionate team of developers, designers, and animal
				enthusiasts came together to create Pet Finder. We believe that
				technology can play a crucial role in improving the lives of
				animals and their human companions.
			</p>
			<h2
				id="contact-us"
				className="text-2xl font-semibold text-orange-400 mt-6 mb-2"
			>
				Contact Us
			</h2>
			<p>
				Have questions, feedback, or want to get involved? Reach out to
				us at{" "}
				<a
					className="text-orange-500 underline"
					href="mailto:petfinder.pets@proton.me"
				>
					petfinder.pets@proton.me
				</a>{" "}
				Join us in making a difference—one paw at a time!
			</p>
		</div>
	);
}
export default About;
