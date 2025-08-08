import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { MdHome, MdHomeFilled } from "react-icons/md";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Navbar/>
		</div>
	);
}
