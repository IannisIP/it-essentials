import mockOrders from "../mocks/orders.json";

const getOrder = async () => {
	//const response = await fetch("http://example.com/movies.json");
	const response = new Promise((resolve) => {
		const data = mockOrders;

		setTimeout(function() {
			resolve(data.orders);
		}, 5500);
	});
	// const myJson = await response.json();
	// console.log(myJson);
	// return myJson;
	return response;
};

export default {
	getOrder,
};
