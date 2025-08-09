import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Queue from "@/components/Queue";
import MusicPlayer from "@/components/MusicPlayer";
import AllSongs from "@/components/AllSongs";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Music Streaming website",
	description: "Music Streaming Website By Ayanaw",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
			>
				{/* <div className="min-h-screen">
					<Navbar />
					<main>
						<Sidebar />
						<Queue />
						<MusicPlayer />

						{children}
					</main>
				</div> */}
        {children}
			</body>
		</html>
	);
}
