import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdHomeFilled } from "react-icons/md";
import { GoSearch } from "react-icons/go";
const Navbar = () => {
	return (
		<nav className="h-15 flex justify-between items-center px-6 fixed top-0 left-0 w-full bg-black z-100">
			<div className="flex gap-6 items-center">
				<Image
					src="/images/logo.png"
					alt="logo-image"
					width={48}
					height={48}
					className="w-9 h-9"
				/>
				<Link href={"/"}>
					<MdHomeFilled className="text-white bg-background w-9 h-9 grid place-items-center text-2xl rounded-full" />
				</Link>
				<div className="bg-background hidden lg:flex items-center h-11 w-90 px-3 gap-3 text-primary-text rounded-full">
					<GoSearch className="text-primary-text shrink-0" />
					<input
						type="text"
						placeholder="What do you want to play"
						className="h-full w-full outline-none placeholder:text-primary-text"
					/>
				</div>
			</div>
			<div className="flex items-center gap-8 ">
				<div className="hidden md:flex gap-2 text-secondary-text font-bold border-r-2 border-primary-text pr-6">
					<a href="#" className="hover:text-primary-text">
						Premium
					</a>
					<a href="#" className="hover:text-primary-text">
						Support
					</a>
					<a href="#" className="hover:text-primary-text">
						Download
					</a>
				</div>
				<div>
					<Link
						className="bg-white h-11 text-gray-950 rounded-full font-bold hover:bg-secondary-text grid px-8 place-items-center"
						href={"/login"}
					>
						Login
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
