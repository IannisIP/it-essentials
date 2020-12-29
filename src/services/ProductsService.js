//import mockProducts from "../mocks/products.json";

const getProducts = async () => {
	const response = await fetch("http://localhost:3001/products");
	// const response = new Promise((resolve) => {
	// 	const data = mockProducts;

	// 	setTimeout(function() {
	// 		resolve(data.products);
	// 	}, 1500);
	// });
	const myJson = await response.json();

	return myJson;
};

export default {
	getProducts,
};
