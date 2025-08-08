import AllSongs from "@/components/AllSongs";
import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main>
				<Sidebar />
				<AllSongs />
				<MusicPlayer/>
			</main>
		</div>
	);
}
