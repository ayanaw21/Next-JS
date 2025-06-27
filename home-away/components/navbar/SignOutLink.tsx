"use client";

import { toast } from "sonner";

import { SignOutButton } from "@clerk/nextjs";

export function SignOutLink() {
	const handleLogout = () => {
		toast("you have been signed out. ");
	};
	return (
		<SignOutButton redirectUrl="/">
			<button className="w-full text-left " onClick={handleLogout}>
				Logout
			</button>
		</SignOutButton>
	);
}
