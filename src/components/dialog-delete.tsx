import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { deleteProduct } from "@/lib/database";
import { queryClient } from "@/main";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export function DeleteProduct({ id }: { id: number }) {
	const [open, setOpen] = useState(false);
	const mutation = useMutation({
		mutationFn: deleteProduct,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["products"] });
		},
	});
	const handleDelete = () => {
		mutation.mutate(id);
		setOpen(false);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="destructive">Delete</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Delete Product</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this product? This action cannot be
						undone.
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<Button variant={"secondary"} onClick={() => setOpen(false)}>
						Cancel
					</Button>
					<Button
						variant={"destructive"}
						onClick={handleDelete}
						disabled={mutation.isPending}
						className={`${mutation.isPending ? "opacity-50" : ""}`}
					>
						{mutation.isPending ? "Deleting..." : "Delete"}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
