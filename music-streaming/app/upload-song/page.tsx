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
                     Upload to Spotify
                </h2>
                <form action="">
                     <input
                        type="text"
                        placeholder="Title"
                        className="outline-none border-1 border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text"
                    />
                    <input
                        type="text"
                        placeholder="Artist"
                        className="outline-none border-1 border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text"
                    />
                    <label htmlFor="audio" className="block py-2 text-secondary-text">Audio </label>
                    <input
                        type="file"
                        id="audio"
                        placeholder="Your Password"
                        className="outline-n one border-1 border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600  mb-6 focus:text-secondary-text"
                    />
                    <label htmlFor="cover" className="block py-2 text-secondary-text">Cover Image</label>
                     <input
                        type="file"
                        id="cover"
                         placeholder="confirm password"
                        className="outline-none border-1 border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600  mb-6 focus:text-secondary-text"
                    />
                    <button className="bg-primary py-3 rounded-full w-full font-bold cursor-pointer">
                        Add Song
                    </button>
                   
                </form>
            </div>
        </div>
    );
};

export default Page;
