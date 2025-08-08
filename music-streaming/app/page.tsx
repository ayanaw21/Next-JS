import AllSongs from "@/components/AllSongs";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main>
				<Sidebar />
				<AllSongs />
			</main>
		</div>
	);
}
