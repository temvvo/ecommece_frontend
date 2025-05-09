import { API_URL_PRODUCT } from "./constants";
import type { NoIdProduct, Product } from "./schemas";

export async function getProducts(): Promise<Product[]> {
	return fetch(API_URL_PRODUCT)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((data) => data)
		.catch((error) => {
			console.error("There was a problem with the fetch operation:", error);
		});
}

export async function createProduct(newProduct: NoIdProduct) {
	try {
		const response = await fetch(API_URL_PRODUCT, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProduct),
		});
		if (!response.ok) {
			throw new Error("Failed to update product");
		}
		//TODO: Call the function to refresh the product list after successful
		// create and close the create Dialog

		//onCreateSuccess();
	} catch (error) {
		console.error("Error updating product:", error);
		//TODO: handle error state and show a message to the user
	}
}

export async function updateProduct(updatedProduct: Product) {
	try {
		const response = await fetch(`${API_URL_PRODUCT}/${updatedProduct.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedProduct),
		});
		if (!response.ok) {
			throw new Error("Failed to update product");
		}
		//TODO: Call the function to refresh the product list after successful
		// create and close the create Dialog

		//onCreateSuccess();
	} catch (error) {
		console.error("Error updating product:", error);
		//TODO: handle error state and show a message to the user
	}
}

export async function deleteProduct(idProduct: number) {
	try {
		const response = await fetch(`${API_URL_PRODUCT}/${idProduct}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			throw new Error("Failed to update product");
		}
		//TODO: Call the function to refresh the product list after successful
		// create and close the create Dialog

		//onCreateSuccess();
	} catch (error) {
		console.error("Error updating product:", error);
		//TODO: handle error state and show a message to the user
	}
}
