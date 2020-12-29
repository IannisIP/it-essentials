//import mockOrders from "../mocks/orders.json";

const getOrder = async () => {
	const response = await fetch(`http://localhost:3001/carts/${9912}`);
	// const response = new Promise((resolve) => {
	// 	const data = mockOrders;

	// 	setTimeout(function() {
	// 		resolve(data.orders);
	// 	}, 1500);
	// });
	const myJson = await response.json();
	return myJson;
	//return response;
};

const sendOrder = async (order) => {
	await fetch("https://httpbin.org/post", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(order),
	});
	// const content = await rawResponse.json();

	// console.log(content);
};

const createOrUpdateCart = async (newCart) => {
	await fetch(`http://localhost:3001/carts`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newCart),
	});
};

const updateProductQuantity = async (updatedProduct) => {
	await fetch(`http://localhost:3001/carts`, {
		method: "PUT",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			userId: 9912,
			...updatedProduct,
		}),
	});
};

const removeCartProduct = async (data) => {
	await fetch(`http://localhost:3001/carts`, {
		method: "DELETE",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
};

export default {
	getOrder,
	sendOrder,
	createOrUpdateCart,
	updateProductQuantity,
	removeCartProduct,
};
