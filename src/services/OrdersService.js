import mockOrders from "../mocks/orders.json";

const getOrder = async () => {
	//const response = await fetch("http://example.com/movies.json");
	const response = new Promise((resolve) => {
		const data = mockOrders;

		setTimeout(function() {
			resolve(data.orders);
		}, 1500);
	});
	// const myJson = await response.json();
	// console.log(myJson);
	// return myJson;
	return response;
};

const sendOrder = async (order) => {
	const rawResponse = await fetch("https://httpbin.org/post", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(order),
	});
	const content = await rawResponse.json();

	console.log(content);
};

export default {
	getOrder,
	sendOrder,
};
