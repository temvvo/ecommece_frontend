import "./App.css";
import { CardProduct } from "./components/card-product";
import { CreateProduct } from "./components/dialog-create";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./lib/database";

function App() {
	const { data, isError, isPending, error } = useQuery({
		queryKey: ["products"],
		queryFn: getProducts,
	});

	return (
		<main className="container mx-auto flex min-h-screen flex-col items-center justify-between p-4">
			<h1 className="my-10 text-4xl">Ecommerce</h1>
			<div className="mb-4 ">
				<CreateProduct />
			</div>
			<section className="flex flex-wrap gap-4 justify-center">
				{isPending && (
					<div className="flex items-center justify-center">
						<span className="text-gray-700">Loading...</span>
					</div>
				)}
				{isError && (
					<div className="flex items-center justify-center">
						<span className="text-red-500">Error: {error.message}</span>
					</div>
				)}
				{data?.map((product) => (
					<CardProduct key={product.id} product={product} />
				))}
			</section>
		</main>
	);
}

export default App;
