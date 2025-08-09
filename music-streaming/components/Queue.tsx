import { PlayerContext } from "@/layouts/FrontendLayout";
import Image from "next/image";
import React, { useContext } from "react";

const Queue = () => {
    const context = useContext(PlayerContext)
    if(!context) {
        throw new Error("player context must be with in a provider")
    }
    const {isQueueModalOpen} = context;
    if(!isQueueModalOpen) return null;

	return (
		<div className="fixed top-18 right-15 z-50 max-w-[300px] w-full h-[75vh] bg-black border-1 p-4 overflow-auto rounded-md">
			<h2>Queue</h2>
			<div className="mt-8">
				<h2 className="text-white font-bold mb-3">Now Playing</h2>
				<div className="relative flex items-center gap-2 cursor-pointer mb-2 p-2 rounded-lg hover:bg-hover ">
					<Image
						src={"/images/cover-6.jpeg"}
						width={300}
						height={300}
						alt="queue-image"
						className="w-10 h-10 object-cover rounded-md "
					/>
					<div className="">
						<p className="text-primary font-semibold">Diamond</p>
						<p className="text-sm text-secondary-text ">Solid</p>
					</div>
				</div>
			</div>
			<div className="mt-8">
				<h2 className="text-white font-bold mb-3">Queue List</h2>
				<div className="relative flex items-center gap-2 cursor-pointer mb-2 p-2 rounded-lg hover:bg-hover ">
					<Image
						src={"/images/cover-6.jpeg"}
						width={300}
						height={300}
						alt="queue-image"
						className="w-10 h-10 object-cover rounded-md "
					/>
					<div className="">
						<p className="text-primary font-semibold">Diamond</p>
						<p className="text-sm text-secondary-text ">Solid</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Queue;
