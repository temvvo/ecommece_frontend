import { z } from "zod";

export const ProductSchema = z.object({
	id: z.number().int().positive(),
	brand_name: z
		.string()
		.min(4, { message: "Brand name must be at least 2 characters long." }),
	price: z.coerce.number().gte(0, { message: "Price must be greater than 0." }),
	currency: z.enum(["USD", "EUR"], {
		message: "Currency must be either USD or EUR.",
	}),
	description: z
		.string()
		.min(10, { message: "Description must be at least 10 characters long." }),
});

export const NoIdProductSchema = ProductSchema.omit({ id: true });

export type Product = z.infer<typeof ProductSchema>;
export type NoIdProduct = z.infer<typeof NoIdProductSchema>;
