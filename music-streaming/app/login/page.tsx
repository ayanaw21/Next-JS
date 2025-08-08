import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
	return (
		<div className="text-white h-screen flex justify-center items-center w-full bg-hover">
			<div className="bg-background flex flex-col items-center px-6 lg:px-12 py-6 rounded-md max-w-[400px] w-[90%]">
				<Image
					src={"/images/logo.png"}
					alt="logo"
					width={50}
					height={50}
					className="w-11 h-11"
				/>
				<h2 className="text-2xl font-bold text-white my-2 mb-8 text-center">
					Log in to Spotify
				</h2>
				<form action="">
					<input
						type="text"
						placeholder="Your email"
						className="outline-none border-1 border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text"
					/>
					<input
						type="password"
						placeholder="Your Password"
						className="outline-none border-1 border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600  mb-6 focus:text-secondary-text"
					/>
					<button className="bg-primary py-3 rounded-full w-full font-bold cursor-pointer">
						Continue
					</button>
					<div className="text-secondary-text text-center my-6 ">
						<span>Don&apos;t have an account</span>
						<Link
							className="underline font-semibold ml-2 text-white hover:text-primary"
							href={"/signup"}
						>
							Sign up now
						</Link>{" "}
					</div>
					
				</form>
			</div>
		</div>
	);
};

export default Page;
