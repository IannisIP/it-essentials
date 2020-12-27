import mockProducts from "../mocks/products.json";

const getProducts = async () => {
	//const response = await fetch("http://example.com/movies.json");
	const response = new Promise((resolve) => {
		const data = mockProducts;

		setTimeout(function() {
			resolve(data.products);
		}, 5500);
	});
	// const myJson = await response.json();
	// console.log(myJson);
	// return myJson;
	return response;
};

export default {
	getProducts,
};
