import * as React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/lib/schemas";
import { DeleteProduct } from "./dialog-delete";
import { UpdateProduct } from "./dialog-update";

export function CardProduct({ product }: { product: Product }) {
	const { brand_name, price, currency, description } = product;
	return (
		<Card className="min-w-[350px]">
			<CardHeader>
				<CardTitle className="text-2xl">{brand_name}</CardTitle>
				<CardDescription className="text-xl">{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						<p className="relative font-bold text-foreground text-xl">
							${price}
							<span className="text-[10px] font-normal absolute top-0">
								{currency}
							</span>
						</p>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<DeleteProduct id={product.id} />
				<UpdateProduct product={product} />
			</CardFooter>
		</Card>
	);
}
