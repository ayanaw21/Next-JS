import Image from "next/image";
import React from "react";
import { IoMdPlay } from "react-icons/io";

const AllSongs = () => {
	return (
		<div className="min-h-[90vh] bg-background my-15 p-4 text-white lg:ml-80 rounded-lg mx-4">
			<h2 className="text-2xl text-white mb-3 font-semibold ">
				New Songs
			</h2>
			<div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
				<div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover group relative">
					<button className="bg-primary w-12 h-12 rounded-full grid  place-items-center absolute bottom-8 right-5 opacity-0 group-hover:opacity-100 group-hover:bottom-18 transition-all duration-300 ease-in-out:cursor-pointer">
						<IoMdPlay />
					</button>
					<Image
						src={"/images/cover-12.jpeg"}
						alt="cover-image"
						width={500}
						height={500}
						className="w-full h-70 object-cover rounded-md"
					/>
					<div className="mt-2">
						<p className="text-primary-text font-semibold">
							Rain on Marble Streets
						</p>
						<p className="text-secondary-text text-sm">
							{" "}
							By The Lanterns
						</p>
					</div>
				</div>
				<div className="bg-background b-3 cursor-pointer rounded-md hover:bg-hover relative group">
					<button className="bg-primary w-12 h-12 rounded-full grid  place-items-center absolute bottom-8 right-5 opacity-0 group-hover:opacity-100 group-hover:bottom-18 transition-all duration-300 ease-in-out:cursor-pointer">
						<IoMdPlay />
					</button>
					<Image
						src={"/images/cover-11.jpeg"}
						alt="cover-image"
						width={500}
						height={500}
						className="w-full h-70 object-cover rounded-md"
					/>{" "}
					<div className="mt-2">
						<p className="text-primary-text font-semibold">
							Rain on Marble Streets
						</p>
						<p className="text-secondary-text text-sm">
							{" "}
							By The Lanterns
						</p>
					</div>
				</div>
				<div className="relative group bg-background b-3 cursor-pointer rounded-md hover:bg-hover">
                     <button className="bg-primary w-12 h-12 rounded-full grid  place-items-center absolute bottom-8 right-5 opacity-0 group-hover:opacity-100 group-hover:bottom-18 transition-all duration-300 ease-in-out:cursor-pointer">
                        <IoMdPlay/>
                    </button>
					<Image
						src={"/images/cover-10.jpeg"}
						alt="cover-image"
						width={500}
						height={500}
						className="w-full h-70 object-cover rounded-md"
					/>
					<div className="mt-2">
						<p className="text-primary-text font-semibold">
							Rain on Marble Streets
						</p>
						<p className="text-secondary-text text-sm">
							{" "}
							By The Lanterns
						</p>
					</div>
				</div>
				<div className="relative group bg-background b-3 cursor-pointer rounded-md hover:bg-hover">
                     <button className="bg-primary w-12 h-12 rounded-full grid  place-items-center absolute bottom-8 right-5 opacity-0 group-hover:opacity-100 group-hover:bottom-18 transition-all duration-300 ease-in-out:cursor-pointer">
                        <IoMdPlay/>
                    </button>
					<Image
						src={"/images/cover-9.jpeg"}
						alt="cover-image"
						width={500}
						height={500}
						className="w-full h-70 object-cover rounded-md"
					/>
					<div className="mt-2">
						<p className="text-primary-text font-semibold">
							Rain on Marble Streets
						</p>
						<p className="text-secondary-text text-sm">
							{" "}
							By The Lanterns
						</p>
					</div>
				</div>
				<div className="relative group bg-background b-3 cursor-pointer rounded-md hover:bg-hover">
                     <button className="bg-primary w-12 h-12 rounded-full grid  place-items-center absolute bottom-8 right-5 opacity-0 group-hover:opacity-100 group-hover:bottom-18 transition-all duration-300 ease-in-out:cursor-pointer">
                        <IoMdPlay/>
                    </button>
					<Image
						src={"/images/cover-8.jpeg"}
						alt="cover-image"
						width={500}
						height={500}
						className="w-full h-70 object-cover rounded-md"
					/>
					<div className="mt-2">
						<p className="text-primary-text font-semibold">
							Rain on Marble Streets
						</p>
						<p className="text-secondary-text text-sm">
							{" "}
							By The Lanterns
						</p>
					</div>
				</div>
				<div className="relative group bg-background b-3 cursor-pointer rounded-md hover:bg-hover">
                     <button className="bg-primary w-12 h-12 rounded-full grid  place-items-center absolute bottom-8 right-5 opacity-0 group-hover:opacity-100 group-hover:bottom-18 transition-all duration-300 ease-in-out:cursor-pointer">
                        <IoMdPlay/>
                    </button>
					<Image
						src={"/images/cover-7.jpeg"}
						alt="cover-image"
						width={500}
						height={500}
						className="w-full h-70 object-cover rounded-md"
					/>
					<div className="mt-2">
						<p className="text-primary-text font-semibold">
							Rain on Marble Streets
						</p>
						<p className="text-secondary-text text-sm">
							{" "}
							By The Lanterns
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllSongs;
