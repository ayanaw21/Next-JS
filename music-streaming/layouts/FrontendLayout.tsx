'use client'
import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/Navbar";
import Queue from "@/components/Queue";
import Sidebar from "@/components/Sidebar";
import { createContext, useState } from "react";

type PlayerContextType = {
    isQueueModalOpen:boolean;
    setQueueModalOpen:React.Dispatch<React.SetStateAction<boolean>>
}
export const PlayerContext = createContext<PlayerContextType | undefined>(undefined);


export default function FrontendLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
    const [isQueueModalOpen,setQueueModalOpen] = useState(false)
	return (
		<PlayerContext.Provider value={{
            isQueueModalOpen,setQueueModalOpen
        }} >
			<div className="min-h-screen">
				<Navbar />
				<main>
					<Sidebar />
					<Queue />
					<MusicPlayer />
					{children}
				</main>
			</div>
		</PlayerContext.Provider>
	);
}
