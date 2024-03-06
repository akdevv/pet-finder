import axios from "axios";

const CloudinaryUpload = async (images) => {
	const uploadedUrls = [];

	for (const img of images) {
		const formData = new FormData();
		formData.append("file", img);
		formData.append(
			"upload_preset",
			import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
		);

		try {
			const res = await axios.post(
				import.meta.env.VITE_CLOUDINARY_URL,
				formData
			);
			uploadedUrls.push(res.data.url);
		} catch (err) {
			console.error("Error uploading image:", err);
		}
	}
	return uploadedUrls;
};

export default CloudinaryUpload;
