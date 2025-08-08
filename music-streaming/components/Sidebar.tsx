"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import Image from "next/image";
import { MdOutlineLibraryMusic } from "react-icons/md";
const Sidebar = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	return (
		<div>
			<aside
				className={`fixed left-2 top-15 bg-background w-75 round-lg  h-[90vh] p-2 overflow-y-auto  ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full "
				} transition-transform duration-500 lg:translate-x-0`}
			>
				<div className="flex justify-between text-primary-text items-center p-2 mb-4">
					<h2 className="font-bold">Yo  ur Library</h2>
					<Link href={"/upload-song"}>
						<LuPlus size={20} />
					</Link>
				</div>
				<div>
					<div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
						<Image
							src="/images/cover-1.jpeg"
							width={300}
							height={300}
							className="w-10 h-10 object-cover rounded-md"
							alt="cover-image"
						/>
						<div>
							<p className="text-primary-text font-semibold">
								Midnight Echoes
							</p>
							<p className="text-secondary-text text-sm">
								By Neon Skyline
							</p>
						</div>
					</div>{" "}
					<div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
						<Image
							src="/images/cover-1.jpeg"
							width={300}
							height={300}
							className="w-10 h-10 object-cover rounded-md"
							alt="cover-image"
						/>
						<div>
							<p className="text-primary-text font-semibold">
								Midnight Echoes
							</p>
							<p className="text-secondary-text text-sm">
								By Neon Skyline
							</p>
						</div>
					</div>{" "}
					<div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
						<Image
							src="/images/cover-1.jpeg"
							width={300}
							height={300}
							className="w-10 h-10 object-cover rounded-md"
							alt="cover-image"
						/>
						<div>
							<p className="text-primary-text font-semibold">
								Midnight Echoes
							</p>
							<p className="text-secondary-text text-sm">
								By Neon Skyline
							</p>
						</div>
					</div>
				</div>
			</aside>
			<button
				className="fixed bottom-5 left-5 bg-background h-12 grid lg:hidden place-items-center text-white rounded-full z-50 cursor-pointer"
				onClick={() => setSidebarOpen(!isSidebarOpen)}
			>
				<MdOutlineLibraryMusic />
			</button>
		</div>
	);
};

export default Sidebar;
