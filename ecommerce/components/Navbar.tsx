import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 bg-white shadow">
			<div className="container mx-auto  max-w-5xl  flex items-center justify-between px-4 py-4">
				<Link href={"/"} className="hover:text-blue-600">
					My ECommerce
				</Link>
				<div className="hidden md:flex space-x-6">
					<Link href={"/"}>Home</Link>
					<Link href={"/products"} className="hover:text-blue-600">
						Products
					</Link>
					<Link href={"/checkout"} className="hover:text-blue-600">
						Checkout
					</Link>
				</div>
				<div>Hello</div>
			</div>
		</nav>
	);
};

export default Navbar;
